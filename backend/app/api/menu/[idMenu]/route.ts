// Buat service get buat detail data

import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma } from "../../general";
import path from "path";
import { existsSync } from "fs";
import { unlink, writeFile } from "fs/promises";
import { verifyAdminJWT } from "@/utils/verifyJWT";

export const GET = async(request:NextRequest, props:{params: Promise<{idMenu:string}>}) => {
            
    try{
      const params = await props.params;
      
    // Cek data username tersedia/tidak
    const cek = await prisma.tb_menu.findUnique({
      where:{
        id: Number(params.idMenu)
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
      dataMenu:cek,
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
   

  // Update data menu + upload image
export async function PATCH(
  request: NextRequest,
  props: { params: Promise<{ idMenu: string }> }
) {

  // Verifikasi token
  const decoded: any = await verifyAdminJWT(request);

  // Jika gagal, decoded akan jadi Response (dari middleware)
  if (decoded instanceof Response) return decoded;
  try {
    const params = await props.params;
    const id = params.idMenu;

    const formData = await request.formData();
    const nama = formData.get("nama") as string | null;
    const deskripsi = formData.get("deskripsi") as string | null;
    const harga = formData.get("harga") as string | null;
    const kategori = formData.get("kategori") as string | null;
    const ketersediaan = formData.get("ketersediaan") as string | null;
    const file = formData.get("gambar_menu") as File | null;


      // Validasi wajib isi (kecuali gambar_menu)
  if (!nama || !deskripsi || !harga || !kategori || !ketersediaan || !file) {
    return NextResponse.json(
      { error: "Semua field wajib diisi" },
      { status: 400 }
    );
  }

    // Validasi kategori
    let kategoriUpper: string | null = null;
    if (kategori) {
      kategoriUpper = kategori.toUpperCase();
      const allowedKategori = ["MAKANAN", "MINUMAN"];
      if (!allowedKategori.includes(kategoriUpper)) {
        return NextResponse.json(
          { error: "Kategori hanya boleh 'MAKANAN' atau 'MINUMAN'" },
          { status: 400 }
        );
      }
    }
    // Validasi Ketersediaan
    let ketersediaanUpper: string | null = null;
    if (ketersediaan) {
      ketersediaanUpper = ketersediaan.toUpperCase();
      const allowedKetersediaan = ["READY", "SOLDOUT"];
      if (!allowedKetersediaan.includes(ketersediaanUpper)) {
        return NextResponse.json(
          { error: "Ketersediaan hanya boleh 'READY' atau 'SOLDOUT'" },
          { status: 400 }
        );
      }
    }


    const updateData: any = {};
    if (nama) updateData.nama = nama;
    if (deskripsi) updateData.deskripsi = deskripsi;
    if (harga) updateData.harga = parseInt(harga);
    if (kategori) updateData.kategori = kategoriUpper;
    if (ketersediaan) updateData.ketersediaan = ketersediaanUpper;

    const menu = await prisma.tb_menu.findUnique({
      where: { id: parseInt(id) },
      select: { gambar_menu: true },
    });

    if (!menu) {
      return NextResponse.json(
        { error: "Menu dengan ID tersebut tidak ditemukan." },
        { status: 404 }
      );
    }
    const uploadDir = path.join(process.cwd(), "public", "imageMenu");
    let imagePath: string | undefined;

    if (file) {
      if (!file.type.startsWith("image/")) {
        return NextResponse.json(
          { error: "Hanya file gambar yang diperbolehkan." },
          { status: 400 }
        );
      }

      const ext = file.name.split(".").pop();
      const timestamp = Date.now();
      const safeName = nama ? nama.replace(/\s+/g, "-").toLowerCase() : `menu-${id}`;
      const filename = `${safeName}-${timestamp}.${ext}`;
      imagePath = `/imageMenu/${filename}`;

      // Hapus gambar lama jika ada
      if (menu?.gambar_menu) {
        const oldImagePath = path.join(process.cwd(), "public", menu.gambar_menu);
        if (existsSync(oldImagePath)) {
          await unlink(oldImagePath).catch(() => {});
        }
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(path.join(uploadDir, filename), buffer);
      updateData.gambar_menu = imagePath;
    } else if (menu?.gambar_menu) {
      // Pertahankan gambar yang ada
      updateData.gambar_menu = menu.gambar_menu;
    }

    const updated = await prisma.tb_menu.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return NextResponse.json(
      {
        metadata: { error: 0, message: "Menu berhasil diperbarui" },
        dataMenu: updated,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Update Menu Error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server", detail: err.message },
      { status: 500 }
    );
  }
}