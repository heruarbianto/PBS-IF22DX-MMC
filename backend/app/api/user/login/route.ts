import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general";
import {compareSync} from 'bcrypt-ts';
import jwt from 'jsonwebtoken';

// SECRET KEY buat tanda tangan JWT
const JWT_SECRET = process.env.JWT_SECRET || "secret_jangan_di_produksi";

export const POST = async (request: NextRequest) => {
  try {
    // Ambil data dari request body
    const { loginValue, passwordValue } = await request.json();

    // Validasi data kosong
    if (!loginValue || !passwordValue) {
      return NextResponse.json({
        metadata: { error: 1, message: "Username/email dan password wajib diisi." }
      }, { status: 400 });
    }

    // Cari user berdasarkan username atau email
    const user = await prisma.tb_user.findFirst({
      where: {
        OR: [
          { username: loginValue },
          { email: loginValue }
        ]
      }
    });

    if (!user) {
      return NextResponse.json({
        metadata: { error: 1, message: "Username atau Email tidak ditemukan." }
      }, { status: 404 });
    }

    // Verifikasi password
    const passwordMatch = await compareSync(passwordValue, user.password);

    if (!passwordMatch) {
      return NextResponse.json({
        metadata: { error: 1, message: "Password salah." }
      }, { status: 401 });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email
      },
      JWT_SECRET,
      { expiresIn: '7d' } // token valid selama 7 hari
    );

    // Kirim response sukses
    return NextResponse.json({
      metadata: {
        error: 0,
        message: "Login berhasil"
      },
      token: token,
      user: {
        id: user.id,
        namaLengkap: user.namaLengkap,
        username: user.username,
        email: user.email,
        noHp: user.noHp,
        alamat: user.alamat
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error("Login Error:", error);
    return NextResponse.json({
      metadata: { error: 1, message: "Terjadi kesalahan server" },
      detail: error.message || error.toString()
    }, { status: 500 });
  }
};
