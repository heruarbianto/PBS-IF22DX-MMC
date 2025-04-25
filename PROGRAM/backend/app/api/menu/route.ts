import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma } from "../general";
import { ketersediaan } from "@/app/generated/prisma";
// Buat fungsi get
export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const kategori = searchParams.get("kategori");

  // Validasi kategori
  const validCategories = ["MAKANAN", "MINUMAN"] as const;
  if (kategori && !validCategories.includes(kategori as any)) {
    return NextResponse.json(
      { error: "Kategori tidak valid. Gunakan: makanan atau minuman" },
      { status: 400 }
    );
  }
// Jika Kategori di parameter ada
  if (kategori) {
    // ambil data dari database
    const view = await prisma.tb_menu.findMany({
      orderBy: {
        ketersediaan: "asc",
      },
      where: {
        kategori: (kategori as "MAKANAN") || "MINUMAN",
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
        dataUser: view,
      },
      {
        status: 200,
      }
    );
  }
  // ambil data dari database
  const view = await prisma.tb_menu.findMany({
    orderBy: {
      ketersediaan: "asc",
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
      dataUser: view,
    },
    {
      status: 200,
    }
  );
};
