// BUat FUngsi Post
import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma, setBcrypt } from "../general";
import { verifyAdminJWT, verifyJWT } from "@/utils/verifyJWT";

// Buat API POST REQUEST UNTUK CREATE DATA
export const POST = async (request: NextRequest) => {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  // Cek jumlah pendaftaran dari IP hari ini
  const registerCount = await prisma.ipRegisterLog.count({
    where: {
      ip: ip,
      createdAt: {
        gte: todayStart,
        lte: todayEnd,
      },
    },
  });

  if (registerCount >= 5) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Anda telah mencapai batas pendaftaran harian. Silakan coba lagi besok.",
        },
      },
      { status: 429 }
    );
  }
  const {
    namaValue,
    usernameValue,
    noHpValue,
    emailValue,
    alamatValue,
    passwordValue,
  } = await request.json();
  //  const salt = genSaltSync(10);
  // Cek data username tersedia/tidak
  const cek = await prisma.tb_user.findMany({
    where: {
      OR: [
        { username: usernameValue },
        { email: emailValue },
        { noHp: noHpValue },
      ],
    },
  });

  // Buat array untuk error per field
  let fieldErrors: { field: string; message: string }[] = [];

  if (cek.length > 0) {
    cek.forEach((user) => {
      if (
        user.username === usernameValue &&
        !fieldErrors.find((e) => e.field === "username")
      ) {
        fieldErrors.push({
          field: "username",
          message: "Username sudah digunakan. Silakan pilih username lain.",
        });
      }
      if (
        user.email === emailValue &&
        !fieldErrors.find((e) => e.field === "email")
      ) {
        fieldErrors.push({
          field: "email",
          message: "Email sudah digunakan. Silakan gunakan email lain.",
        });
      }
      if (
        user.noHp === noHpValue &&
        !fieldErrors.find((e) => e.field === "noHp")
      ) {
        fieldErrors.push({
          field: "noHp",
          message: "Nomor HP sudah digunakan. Silakan gunakan nomor lain.",
        });
      }
    });

    if (fieldErrors.length > 0) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Beberapa field sudah digunakan.",
          },
          errors: fieldErrors,
        },
        { status: 409 }
      );
    }
  }

  await prisma.tb_user.create({
    data: {
      namaLengkap: namaValue,
      username: usernameValue,
      password: setBcrypt(passwordValue),
      email: emailValue,
      noHp: noHpValue,
      alamat: alamatValue,
    },
  });
  await prisma.ipRegisterLog.create({
    data: {
      ip: ip,
    },
  });
  //proses atau respon api

  return NextResponse.json(
    {
      metadata: {
        error: 0,
        message: "Data User Berhasil Disimpan",
        status: 201,
      },
    },
    { status: 201 }
  );
};

//    Buat Get API tampilkan semua data user
export const GET = async (request: NextRequest) => {
      // Verifikasi token
  const decoded: any = await verifyAdminJWT(request);

  // Jika gagal, decoded akan jadi Response (dari middleware)
  if (decoded instanceof Response) return decoded;
  // ambil data dari database
  const view = await prisma.tb_user.findMany({
    // where:{
    //   username: "..."
    // }
  });

  // jika data tidak ada
  if (view.length == 0) {
    // tampilkan respon api
    return getResponseNotFound();
  }
  // tampilkan respon api
  return NextResponse.json(
    {
      metadata: {
        error: 0,
        message: null,
      },
      dataUser: view,
    },
    {
      status: 200,
    }
  );
};
