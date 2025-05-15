import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || "secret_jangan_di_produksi";

export async function verifyJWT(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Silakan Login!!, Token tidak ditemukan atau format salah' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];

    // Verifikasi token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Berhasil diverifikasi → lanjutkan
    return decoded; // kamu bisa pakai decoded.id, decoded.username, dll

  } catch (error: any) {
    return NextResponse.json(
      { error: 'Silakan Login!!, Token tidak valid atau sudah expired' },
      { status: 401 }
    );
  }
}
