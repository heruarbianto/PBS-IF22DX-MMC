import { verifyAdminJWT } from "@/utils/verifyJWT";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general";

export async function PATCH(
  req: NextRequest,
  props: { params: Promise<{ idPemesanan: string }> }
) {
          // Verifikasi token
  const decoded: any = await verifyAdminJWT(req);

  // Jika gagal, decoded akan jadi Response (dari middleware)
  if (decoded instanceof Response) return decoded;
  try {
    const params = await props.params;
    const idPemesanan = params.idPemesanan;

    // Ambil body request (JSON)
    const body = await req.json();
    const { status } = body;

    // Validasi status
    const allowedStatus = [
      "MENUNGGUPEMBAYARAN",
      "DIPROSES",
      "SELESAI",
      "DIBATALKAN",
    ];
    if (!allowedStatus.includes(status)) {
      return NextResponse.json(
        {
          error:1,
          message: "Status tidak valid.",
          allowedStatus,
        },
        { status: 400 }
      );
    }

    const result = await prisma.tb_pemesanan.update({
      where: { id: Number(idPemesanan) },
      data: { status },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Data pemesanan berhasil diperbarui.",
          status: status,
        },
        dataPemesanan: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Terjadi kesalahan saat memproses permintaan.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}