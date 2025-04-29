import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma, setBcrypt } from "../../general";
import path from "path";
import { existsSync } from "fs";
import { unlink, writeFile } from "fs/promises";
import { verifyJWT } from "@/utils/verifyJWT";

// Buat service get buat detail data
export const GET = async(request:NextRequest, props:{params: Promise<{idUser:string}>}) => {
  
          // Verifikasi token
          const decoded: any = await verifyJWT(request);

          // Jika gagal, decoded akan jadi Response (dari middleware)
          if (decoded instanceof Response) return decoded;
    try{
      const params = await props.params;
      
    // Cek data username tersedia/tidak
    const cek = await prisma.tb_user.findUnique({
      where:{
        id: Number(params.idUser)
      },
    });
  
    // BUat kondisi jika data ditemukan
    if(!cek){
      // tampilkan respon api
      return getResponseNotFound();
  }
  
  return NextResponse.json(
    {
        metadata: {
          error: 0,
          message: "Data Ditampilkan!!!",
        },
      dataUser:cek,
    },{
        status:200
    })
  } catch(e:any){
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "ID Parameter Harus Angka",
        },
      },{
          status:400
      })
  }
  }
  
export async function PATCH(
  req: NextRequest,
  props: { params: Promise<{ idUser: string }> }
) {

          // Verifikasi token
  const decoded: any = await verifyJWT(req);

  // Jika gagal, decoded akan jadi Response (dari middleware)
  if (decoded instanceof Response) return decoded;
  try {
    // Ambil semua data dari form
    const formData = await req.formData();
    const params = await props.params;
    const id = params.idUser;
    const namaLengkap = formData.get("namaLengkap") as string | null;
    const username = formData.get("username") as string | null;
    const noHp = formData.get("noHp") as string | null;
    const email = formData.get("email") as string | null;
    const alamat = formData.get("alamat") as string | null;
    const password = formData.get("password") as string | null;
    const file = formData.get("imageProfile") as File | null;
    const role = formData.get("role") as string | null;

    // Validasi bahwa field wajib ada
    if (!id) {
      return NextResponse.json(
        { error: "ID pengguna wajib diisi." },
        { status: 400 }
      );
    }

    // Validasi tipe data
    if (
      (namaLengkap && typeof namaLengkap !== "string") ||
      (username && typeof username !== "string") ||
      (noHp && typeof noHp !== "string") ||
      (email && typeof email !== "string") ||
      (alamat && typeof alamat !== "string") ||
      (password && typeof password !== "string") ||
      (role && typeof role !== "string")
    ) {
      return NextResponse.json(
        { error: "Tipe data tidak valid." },
        { status: 400 }
      );
    }

    // Validasi format email jika ada
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    // Validasi panjang username (max 22 karakter)
    if (username && username.length > 22) {
      return NextResponse.json(
        { error: "Username maksimal 22 karakter." },
        { status: 400 }
      );
    }

    // Validasi panjang namaLengkap (max 100 karakter)
    if (namaLengkap && namaLengkap.length > 100) {
      return NextResponse.json(
        { error: "Nama lengkap maksimal 100 karakter." },
        { status: 400 }
      );
    }

    // Validasi noHp (max 20 karakter dan hanya angka)
    if (noHp && (!/^\d+$/.test(noHp) || noHp.length > 20)) {
      return NextResponse.json(
        { error: "Nomor HP tidak valid atau maksimal 20 digit." },
        { status: 400 }
      );
    }

    // Buat array untuk kondisi OR dinamis
    const orConditions = [];

    if (username) {
      orConditions.push({ username: username });
    }
    if (email) {
      orConditions.push({ email: email });
    }
    if (noHp) {
      orConditions.push({ noHp: noHp });
    }

    // Kalau tidak ada field yang diisi, skip validasi ini
    if (orConditions.length > 0) {
      const cek = await prisma.tb_user.findMany({
        where: {
          OR: orConditions,
          NOT: {
            id: Number(params.idUser),
          },
        },
      });

      // Cek error field
      let fieldErrors: { field: string; message: string }[] = [];

      if (cek.length > 0) {
        cek.forEach((user) => {
          if (
            user.username === username &&
            !fieldErrors.find((e) => e.field === "username")
          ) {
            fieldErrors.push({
              field: "username",
              message:
                "Username sudah digunakan oleh user lain. Silakan pilih username lain.",
            });
          }
          if (
            user.email === email &&
            !fieldErrors.find((e) => e.field === "email")
          ) {
            fieldErrors.push({
              field: "email",
              message:
                "Email sudah digunakan oleh user lain. Silakan gunakan email lain.",
            });
          }
          if (
            user.noHp === noHp &&
            !fieldErrors.find((e) => e.field === "noHp")
          ) {
            fieldErrors.push({
              field: "noHp",
              message:
                "Nomor HP sudah digunakan oleh user lain. Silakan gunakan nomor lain.",
            });
          }
        });

        if (fieldErrors.length > 0) {
          return NextResponse.json(
            {
              metadata: {
                error: 1,
                message: "Beberapa field sudah digunakan oleh user lain.",
              },
              errors: fieldErrors,
            },
            { status: 409 }
          );
        }
      }
    }

    // Prepare update data, hanya masukkan field yang diisi
    const updateData: any = {};
    if (namaLengkap) updateData.namaLengkap = namaLengkap;
    if (username) updateData.username = username;
    if (noHp) updateData.noHp = noHp;
    if (email) updateData.email = email;
    if (alamat) updateData.alamat = alamat;
    if (password) updateData.password = setBcrypt(password); // Consider hashing in production
    if (role) updateData.role = role;

    // Handle profile image
    let imagePath: string | undefined;
    const uploadDir = path.join(process.cwd(), "public", "imageProfile");

    // Check current user data for existing image
    const user = await prisma.tb_user.findUnique({
      where: { id: parseInt(id) },
      select: { imageProfile: true },
    });

    if (file) {
      // Validasi file
      if (typeof file !== "object") {
        return NextResponse.json(
          { error: "File tidak valid." },
          { status: 400 }
        );
      }

      if (!file.type.startsWith("image/")) {
        return NextResponse.json(
          { error: "Hanya file gambar yang diperbolehkan." },
          { status: 400 }
        );
      }

      // Membuat nama file baru: username atau id + timestamp + ekstensi
      const timestamp = Date.now();
      const ext = file.name.split(".").pop();
      const safeName = username
        ? username.trim().replace(/\s+/g, "-")
        : `user-${id}`;
      const filename = `${safeName}-${timestamp}.${ext}`;
      imagePath = `/imageProfile/${filename}`;

      // Jika ada gambar lama di database, coba hapus dari local
      if (user?.imageProfile) {
        const oldImagePath = path.join(
          process.cwd(),
          "public",
          user.imageProfile
        );
        if (existsSync(oldImagePath)) {
          await unlink(oldImagePath).catch((err) =>
            console.error("Gagal menghapus gambar lama:", err)
          );
        }
      }

      // Simpan file baru ke server
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(path.join(uploadDir, filename), buffer);

      // Update image path di database
      updateData.imageProfile = imagePath;
    } else {
      // Jika tidak ada file baru
      if (user?.imageProfile) {
        // Jika ada URL di database, cek apakah file ada di local
        const existingImagePath = path.join(
          process.cwd(),
          "public",
          user.imageProfile
        );
        if (!existsSync(existingImagePath)) {
          // Jika file tidak ada di local, biarkan database tetap (atau bisa set ke default jika diinginkan)
          // Dalam kasus ini, kita biarkan sesuai permintaan
          updateData.imageProfile = user.imageProfile; // Pertahankan URL yang ada
        } else {
          // Jika file ada di local, pertahankan URL yang ada
          updateData.imageProfile = user.imageProfile;
        }
      }
      // Jika tidak ada imageProfile di database, tidak perlu lakukan apa-apa
    }

    // Update user di database hanya untuk field yang diisi
    const updatedUser = await prisma.tb_user.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    // Berikan response sukses
    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Data Pengguna Berhasil Diperbarui!!!",
        },
        dataUser: updatedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error saat update pengguna:", error);
    return NextResponse.json(
      {
        error: "Terjadi kesalahan pada server.",
        detail: error.message || error.toString(),
      },
      { status: 500 }
    );
  }
}
