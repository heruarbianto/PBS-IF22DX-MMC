// /api/pemesanan/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "../general";
import { verifyJWT, verifyAdminJWT} from "@/utils/verifyJWT";

export async function POST(req: NextRequest) {
  const decoded: any = await verifyJWT(req);
  if (decoded instanceof Response) return decoded;

  try {
    const idUser = decoded.id;
    const {
      idMeja,
      metode,
      pajak = '11%', // default pajak
      totalProduk,
      total,
      keranjangItems,
    } = await req.json();

    // Validasi awal
    if (!idMeja || !keranjangItems || keranjangItems.length === 0) {
      return NextResponse.json(
        { metadata: { error: 1, message: "Data tidak lengkap!" } },
        { status: 400 }
      );
    }

    // Validasi format keranjang
// Validasi format keranjang
const idKeranjangArray = keranjangItems.map((item: { idKeranjang: number }) => item.idKeranjang);
const invalidIdFormat = idKeranjangArray.some((id: number) => typeof id !== 'number' || isNaN(id));

if (invalidIdFormat) {
  return NextResponse.json(
    {
      metadata: {
        error: 1,
        message: "Format ID keranjang tidak valid!"
      }
    },
    { status: 400 }
  );
}


    // Ambil data keranjang yang sesuai ID dan milik user ini
    const keranjangDitemukan = await prisma.tb_keranjang.findMany({
      where: {
        id: { in: idKeranjangArray },
        idUser: idUser,
      },
    });

    // Validasi jika jumlah data ditemukan lebih sedikit dari yang dikirimkan
    if (keranjangDitemukan.length !== keranjangItems.length) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Permintaan ditolak, ada aktivitas mencurigakan!",
          },
        },
        { status: 403 }
      );
    }

    // Hitung nilai pajak numerik dari string (misal '11%')
    const pajakPersen = parseFloat(pajak.replace('%', '')) / 100;
    const totalSetelahPajak = Math.round(total - (total * pajakPersen));

    // Simpan pemesanan
    const pemesanan = await prisma.tb_pemesanan.create({
      data: {
        idUser,
        idMeja,
        metode,
        pajak, // tetap simpan '11%' sebagai string
        totalProduk,
        total: totalSetelahPajak,
        updatedAt: new Date(),
        detail_pemesanan: {
          create: keranjangItems.map((item: { idKeranjang: number; note: string }) => ({
            idKeranjang: item.idKeranjang,
            note: item.note || '-',
          })),
        },
      },
      include: {
        detail_pemesanan: true,
      },
    });

    // Update status keranjang menjadi TRUE
    await prisma.tb_keranjang.updateMany({
      where: { id: { in: idKeranjangArray } },
      data: { status: 'TRUE' },
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


export async function GET(req: NextRequest) {
    // Verifikasi token
    const decoded: any = await verifyJWT(req);

    if (decoded instanceof Response) {
        return decoded;
    }

    try {
        const idUser = decoded.id;

        // Ambil semua pemesanan untuk user ini
        const pemesanan = await prisma.tb_pemesanan.findMany({
            orderBy:{
                createdAt: 'desc'
            },
            where: {
                idUser
            },
            include: {
                user: {
                    select: {
                        namaLengkap: true,
                        username: true,
                        email: true,
                        noHp: true,
                        alamat: true
                    }
                },
                detail_pemesanan: {
                    include: {
                        tb_keranjang: {
                            include: {
                                tb_menu: true
                            }
                        }
                    }
                },
                tb_meja: true,
            },
        });

        if (pemesanan.length < 1) {
             return NextResponse.json(
        {
          metadata: {
            error: 0,
            message:
              "Pesanan Masih Kosong, Silahkan Lakukan Pemesanan!!!",
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
                    message: "Pesanan Berhasil Ditampilkan!"
                },
                dataPemesanan: pemesanan
            },
            {
                status: 200
            }
        );
    } catch (error) {
        console.error("Server error saat mengambil data pemesanan:", error);
        return NextResponse.json(
            {
                metadata: {
                    error: 1,
                    message: "Terjadi kesalahan server!"
                }
            },
            { status: 500 }
        );
    }
}
