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
          dataChart:[],
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
        dataChart: keranjang,
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


// Post API Tambahkan Menu Ke Keranjang
export const POST = async (request: NextRequest) => {
   // Verifikasi token
   const decoded: any = await verifyJWT(request);

   // Jika gagal, decoded akan jadi Response (dari middleware)
   if (decoded instanceof Response) {
     return decoded;
   }
  try {
    const idUser = Number(decoded.id);
    const body = await request.json();
    const {idMenu, quantity } = body;

    if (!idMenu || !quantity) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Semua field (idMenu, quantity) wajib diisi.",
          },
        },
        { status: 400 }
      );
    }

    const menu = await prisma.tb_menu.findUnique({
      where: { id: idMenu },
    });

    if (!menu) {
      return NextResponse.json(
        { error: "Menu dengan ID tersebut tidak ditemukan." },
        { status: 404 }
      );
    }

    const existingCartItems = await prisma.tb_keranjang.findMany({
      include: {
        tb_user: true,
        tb_menu: true,
      },
    });

    const cartItemFound = existingCartItems.find(
      (cart: any) =>
        cart.idUser === idUser &&
        cart.idMenu === idMenu &&
        cart.status === "FALSE"
    );

    if (cartItemFound) {
      const oldQuantity = cartItemFound.quantity;
      const menuPrice = cartItemFound.tb_menu.harga;
      const newQuantity = quantity + oldQuantity;

      await prisma.tb_keranjang.updateMany({
        where: {
          idUser,
          idMenu,
          status: "FALSE",
        },
        data: {
          quantity: newQuantity,
          total: newQuantity * menuPrice,
        },
      });

      return NextResponse.json(
        {
          metadata: {
            error: 0,
            message: "Item keranjang berhasil diperbarui.",
          },
        },
        { status: 200 }
      );
    } else {
      await prisma.tb_keranjang.create({
        data: {
          idUser,
          idMenu,
          quantity,
          total: quantity * menu.harga,
        },
      });

      return NextResponse.json(
        {
          metadata: {
            error: 0,
            message: "Item berhasil ditambahkan ke keranjang.",
          },
        },
        { status: 201 }
      );
    }
  } catch (e: any) {
    console.error("Error:", e);
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
