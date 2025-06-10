import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma } from "../general";
import { verifyAdminJWT } from "@/utils/verifyJWT";

export const GET = async (request: NextRequest) => {
    try{

    
  // ambil data dari database
  const view = await prisma.tb_meja.findMany({
    orderBy: {
      namaMeja: "asc",
    },
  });

  // jika data tidak ada
  if (view.length == 0) {
    // tampilkan respon api
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
      dataMeja: view,
    },
    {
      status: 200,
    }
  );
} catch (error) {
    console.error("Error fetching meja data:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Internal Server Error",
        },
      },
      {
        status: 500,
      }
    );
  }

};

// POST request untuk menambahkan meja baru
export const POST = async (request: NextRequest) => {
  try {
      // Verifikasi token
  const decoded: any = await verifyAdminJWT(request);

  // Jika gagal, decoded akan jadi Response (dari middleware)
  if (decoded instanceof Response) return decoded;
    const body = await request.json();
    const { namaMeja } = body;

    // Validasi sederhana
    if (!namaMeja || typeof namaMeja !== "string") {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "namaMeja wajib diisi dan harus berupa string",
          },
        },
        { status: 400 }
      );
    }

    // Simpan ke database
    const newMeja = await prisma.tb_meja.create({
      data: {
        namaMeja,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Meja berhasil ditambahkan",
        },
        dataMeja: newMeja,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating meja:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Internal Server Error",
        },
      },
      { status: 500 }
    );
  }
};
