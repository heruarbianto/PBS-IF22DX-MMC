// /api/pemesanan/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "../general";
import { verifyJWT, verifyAdminJWT} from "@/utils/verifyJWT";

export async function POST(req: NextRequest) {
  const decoded : any = await verifyJWT(req);
  if (decoded instanceof Response) return decoded;

  try {
    const idUser = Number(decoded.id);

    const {
      idMeja,
      metode,
      pajak = '11%',
      totalProduk,
      total,
      keranjangItems
    } = await req.json();

    // Validasi input dasar
    if (!idMeja || !Array.isArray(keranjangItems) || keranjangItems.length === 0) {
      return NextResponse.json({
        metadata: { error: 1, message: 'Data tidak lengkap atau format salah.' }
      }, { status: 400 });
    }

    if (typeof total !== 'number' || total <= 0 || typeof totalProduk !== 'number') {
      return NextResponse.json({
        metadata: { error: 1, message: 'Nilai total atau totalProduk tidak valid.' }
      }, { status: 400 });
    }

    // Validasi metode pembayaran
    const metodeValid = ['TUNAI', 'ePayment'] as const;
    const metodeNormalized = (metode || '').trim();

    if (!metodeValid.includes(metodeNormalized as any)) {
      return NextResponse.json({
        metadata: { error: 1, message: 'Metode pembayaran tidak valid.' }
      }, { status: 400 });
    }

    // Ambil ID keranjang
    const idKeranjangArray = keranjangItems.map((item: any) => item.idKeranjang);

    // Validasi kepemilikan keranjang oleh user
    const keranjangUser = await prisma.tb_keranjang.findMany({
      where: {
        id: { in: idKeranjangArray },
        idUser
      }
    });

    if (keranjangUser.length !== idKeranjangArray.length) {
      return NextResponse.json({
        metadata: { error: 1, message: 'Keranjang tidak valid atau bukan milik user.' }
      }, { status: 403 });
    }

    // Hitung total setelah pajak
    const pajakNumber = parseFloat(pajak.replace('%', '')) || 0;
    const totalSetelahPajak = Math.round(total + (total * pajakNumber / 100));

    // Buat pesanan beserta detail_pemesanan
    const pemesanan = await prisma.tb_pemesanan.create({
      data: {
        idUser,
        idMeja,
        metode: metodeNormalized as 'TUNAI' | 'ePayment',
        pajak,
        total: totalSetelahPajak,
        totalProduk,
        updatedAt: new Date(),
        detail_pemesanan: {
          create: keranjangItems.map((item: any) => ({
            idKeranjang: item.idKeranjang,
            note: item.note || '-'
          }))
        }
      },
      include: {
        detail_pemesanan: true
      }
    });

    // Update status keranjang menjadi TRUE
    await prisma.tb_keranjang.updateMany({
      where: { id: { in: idKeranjangArray } },
      data: { status: 'TRUE' }
    });

    return NextResponse.json({
      metadata: { error: 0, message: 'Pemesanan berhasil dibuat.' },
      data: pemesanan
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error saat membuat pesanan:', error.message);
    return NextResponse.json({
      metadata: { error: 1, message: 'Terjadi kesalahan server.' }
    }, { status: 500 });
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
