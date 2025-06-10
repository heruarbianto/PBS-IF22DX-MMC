import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma } from "../general";

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