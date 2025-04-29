import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma } from "../general";
import { writeFile } from 'fs/promises';
import path from 'path';
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
        dataMenu: view,
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
      dataMenu: view,
    },
    {
      status: 200,
    }
  );
};




export async function POST(req: NextRequest) {
  try {
    // Ambil semua data dari form
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const nama = formData.get('nama') as string | null;
    const deskripsi = formData.get('deskripsi') as string | null;
    const hargaStr = formData.get('harga') as string | null; // Harga masuk sebagai string
    const kategori = (formData.get('kategori') as string | null)?.toUpperCase() || null;;
    const ketersediaan = (formData.get('ketersediaan') as string | null)?.toUpperCase() || null;;

    // Validasi bahwa semua field wajib ada
    if (!file || !nama || !deskripsi || !hargaStr || !kategori || !ketersediaan) {
      return NextResponse.json({ error: 'Semua field wajib diisi.' }, { status: 400 });
    }

    // Validasi tipe file
    if (typeof file !== 'object') {
      return NextResponse.json({ error: 'File tidak valid.' }, { status: 400 });
    }

    // Validasi nama harus string
    if (typeof nama !== 'string' || typeof deskripsi !== 'string' || typeof kategori !== 'string' || typeof ketersediaan !== 'string') {
      return NextResponse.json({ error: 'Tipe data tidak valid.' }, { status: 400 });
    }

    // Konversi harga ke number
    const harga = Number(hargaStr);
    if (isNaN(harga) || harga <= 0) {
      return NextResponse.json({ error: 'Harga harus berupa angka dan lebih dari 0.' }, { status: 400 });
    }

    // Validasi file harus gambar
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Hanya file gambar yang diperbolehkan.' }, { status: 400 });
    }

    // Validasi kategori hanya "MAKANAN" atau "MINUMAN"
    if (kategori !== 'MAKANAN' && kategori !== 'MINUMAN') {
      return NextResponse.json({ error: 'Kategori hanya boleh "MAKANAN" atau "MINUMAN".' }, { status: 400 });
    }

    // Validasi ketersediaan hanya "READY" atau "SOLDOUT"
    if (ketersediaan !== 'READY' && ketersediaan !== 'SOLDOUT') {
      return NextResponse.json({ error: 'Ketersediaan hanya boleh "READY" atau "SOLDOUT".' }, { status: 400 });
    }

    // Membuat nama file: nama tanpa spasi + timestamp + ekstensi
    const timestamp = Date.now();
    const ext = file.name.split('.').pop(); // Ambil ekstensi file
    const safeNama = nama.trim().replace(/\s+/g, '-'); // Ganti spasi dengan tanda strip
    const filename = `${safeNama}-${timestamp}.${ext}`;
    const imagePath = `/imageMenu/${filename}`; // Path untuk database

    // Membuat buffer dari file yang diupload
    const buffer = Buffer.from(await file.arrayBuffer());

    // Tentukan direktori upload
    const uploadDir = path.join(process.cwd(), 'public', 'imageMenu');

    // Simpan file ke server
    await writeFile(path.join(uploadDir, filename), buffer);

    // Simpan data ke database
    const createdMenu = await prisma.tb_menu.create({
      data: {
        nama: nama,
        deskripsi: deskripsi,
        harga: harga,
        kategori: kategori as 'MAKANAN' | 'MINUMAN',
        ketersediaan: ketersediaan as 'READY' | 'SOLDOUT',
        gambar_menu: imagePath,
      },
    });

    // Berikan response sukses
    return NextResponse.json(
      {
          metadata: {
            error: 0,
            message: "Data Berhasil Disimpan!!!",
          },
        dataMenu:createdMenu,
      },{
          status:201
      })

  } catch (error: any) {
    // console.error('Error saat upload:', error);

    // Tangani error tak terduga
    return NextResponse.json({
      error: 'Terjadi kesalahan pada server.',
      detail: error.message || error.toString(),
    }, { status: 500 });
  }
}