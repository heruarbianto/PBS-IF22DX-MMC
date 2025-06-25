import { verifyAdminJWT } from "@/utils/verifyJWT";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../general";

export async function GET(req: NextRequest) {
  // Verifikasi token
  const decoded: any = await verifyAdminJWT(req);

  if (decoded instanceof Response) {
    return decoded;
  }
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  // Validasi status
  const validStatus = ["MENUNGGUPEMBAYARAN", "DIPROSES", "SELESAI", "DIBATALKAN"] as const;
  if (status && !validStatus.includes(status as any)) {
    return NextResponse.json(
      { error: "Status tidak valid. Gunakan: MENUNGGUPEMBAYARAN, DIPROSES, SELESAI, DIBATALKAN" },
      { status: 400 }
    );
  }
  try {
    // Jika status di parameter ada
    if (status) {
    // Ambil semua pemesanan
    const pemesanan = await prisma.tb_pemesanan.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      where: {
        status: status as "MENUNGGUPEMBAYARAN" | "DIPROSES" | "SELESAI" | "DIBATALKAN",
      },
      include: {
        user: {
          select: {
            namaLengkap: true,
            username: true,
            email: true,
            noHp: true,
            alamat: true,
        },
    },
    detail_pemesanan: {
        include: {
            tb_keranjang: {
              include: {
                tb_menu: {
                  select: {
                    id: true,
                    nama: true,
                    harga: true,
                    gambar_menu: true,
                  },
                },
              },
            },
        },
    },
        tb_meja: true,
      },
    });
    
    if (pemesanan.length < 1) {
        return NextResponse.json(
        {
          metadata: {
              error: 0,
              message: "Daftar Pesanan Masih Kosong",
            },
            dataChart: [],
        },
        {
            status: 200,
        }
      );
    }
    
    return NextResponse.json(
        {
            metadata: {
                error: 0,
                message: "Pesanan Berhasil Ditampilkan!",
            },
        dataPemesanan: pemesanan,
      },
      {
          status: 200,
        }
    );
}
    // Jika status tidak ada, ambil semua pemesanan
    const pemesanan = await prisma.tb_pemesanan.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        user: {
          select: {
            namaLengkap: true,
            username: true,
            email: true,
            noHp: true,
            alamat: true,
          },
        },
        detail_pemesanan: {
          include: {
            tb_keranjang: {
              include: {
                tb_menu: {
                  select: {
                    id: true,
                    nama: true,
                    harga: true,
                    gambar_menu: true,
                  },
                },
              },
            },
          },
        },
        tb_meja: true,
      },
    });

    if (pemesanan.length < 1) {
      return NextResponse.json(
        {
          metadata: {
            error: 0,
            message: "Daftar Pesanan Masih Kosong",
          },
          dataPemesanan: [],
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Pesanan Berhasil Ditampilkan!",
        },
        dataPemesanan: pemesanan,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error saat mengambil data pemesanan:", error);
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
