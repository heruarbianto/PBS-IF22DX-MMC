// /api/pemesanan/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "../general";
import { verifyJWT } from "@/utils/verifyJWT";

export async function POST(req: NextRequest) {
  // Verifikasi token
  const decoded: any = await verifyJWT(req);

  if (decoded instanceof Response) {
    return decoded;
  }

  try {
    const idUser = decoded.id;

    const {
      idMeja,
      metode,
      pajak,
      totalProduk,
      total,
      keranjangItems,
    } = await req.json();

    if (!idMeja || !keranjangItems || keranjangItems.length === 0) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Data tidak lengkap!",
          },
        },
        { status: 400 }
      );
    }

    // Buat pemesanan
    const pemesanan = await prisma.tb_pemesanan.create({
      data: {
        idUser,
        idMeja,
        metode,
        pajak,
        totalProduk,
        total,
        updatedAt: new Date(),
        detail_pemesanan: {
          create: keranjangItems.map((item: { idKeranjang: number; note: string }) => ({
            idKeranjang: item.idKeranjang,
            note: item.note || '-',
          })),
        },
      },
      include: {
        detail_pemesanan: true, // jika ingin lihat detail langsung
      },
    });

    // Update status keranjang
    const idKeranjangArray = keranjangItems.map((item: { idKeranjang: number }) => item.idKeranjang);

    await prisma.tb_keranjang.updateMany({
      where: {
        id: { in: idKeranjangArray }
      },
      data: {
        status: 'TRUE'
      }
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Pemesanan berhasil!",
        },
        dataPemesanan: pemesanan,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Server error saat proses pemesanan:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Terjadi kesalahan server!",
        },
      },
      { status: 500 }
    );
  }
}
