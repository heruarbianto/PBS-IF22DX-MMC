import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma, setBcrypt } from "../../general";
import path from "path";
import { existsSync } from "fs";
import { unlink, writeFile } from "fs/promises";
import { verifyJWT } from "@/utils/verifyJWT";

export const GET = async (request: NextRequest) => {
  // Verifikasi token
  const decoded: any = await verifyJWT(request);

  // Jika gagal, decoded akan jadi Response (dari middleware)
  if (decoded instanceof Response) {
    return decoded;
  }

  try {
    // Ambil idUser dari decoded token
    const idUser = decoded.id; // Gantilah dengan decoded.id sesuai dengan field yang ada di token

    // Cek apakah idUser ada
    if (!idUser) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "User ID tidak ditemukan di token.",
          },
        },
        {
          status: 400,
        }
      );
    }

      // Membuat Variabel menu
      const keranjang = await prisma.tb_keranjang.findMany({
        where: {
          idUser: Number(idUser),
          status: 'FALSE'
        },
        include: {
            tb_menu: {
              select: {
                id: true,
                nama: true,
                harga: true,
                gambar_menu: true,
              },
            },
            tb_user: {
              select: {
                id: true,
                namaLengkap: true,
              },
            },
          },
      });
    //   return keranjang;
      if(keranjang.length <1){
        // Jika data ditemukan, kembalikan respons dengan data user
    return NextResponse.json(
        {
          metadata: {
            error: 0,
            message: "Keranjang Masih Kosong, Silahkan Masukkan Menu Ke Keranjang!!!",
          },
          dataUser: [],
        },
        {
          status: 200,
        }
      );
      }
    // Jika data ditemukan, kembalikan respons dengan data user
    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Data Ditampilkan!!!",
        },
        dataUser: keranjang,
      },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Terjadi kesalahan pada server.",
        },
      },
      {
        status: 500,
      }
    );
  }
};
