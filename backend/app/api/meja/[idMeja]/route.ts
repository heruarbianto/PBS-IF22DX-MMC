import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general"; // sesuaikan path general.ts
import { verifyAdminJWT } from "@/utils/verifyJWT";

export const PUT = async (request: NextRequest, context: { params: { idMeja: string } }) => {
  try {
         // Verifikasi token
      const decoded: any = await verifyAdminJWT(request);
    
      // Jika gagal, decoded akan jadi Response (dari middleware)
      if (decoded instanceof Response) return decoded;
    const { idMeja } = context.params;

    // Validasi ID dari URL
    const mejaId = Number(idMeja);
    if (isNaN(mejaId)) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "ID tidak valid. Harus berupa angka.",
          },
        },
        { status: 400 }
      );
    }

    // Ambil body
    const body = await request.json();
    const { namaMeja } = body;

    // Validasi input namaMeja
    if (!namaMeja || typeof namaMeja !== "string") {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "namaMeja wajib diisi dan harus berupa string.",
          },
        },
        { status: 400 }
      );
    }

    // Cek apakah meja dengan ID tersebut ada
    const existingMeja = await prisma.tb_meja.findUnique({
      where: { id: mejaId },
    });

    if (!existingMeja) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: `Meja dengan ID ${mejaId} tidak ditemukan.`,
          },
        },
        { status: 404 }
      );
    }

    // Update data
    const updatedMeja = await prisma.tb_meja.update({
      where: { id: mejaId },
      data: { namaMeja },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Data meja berhasil diperbarui.",
        },
        dataMeja: updatedMeja,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating meja:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Terjadi kesalahan pada server.",
        },
      },
      { status: 500 }
    );
  }
};
