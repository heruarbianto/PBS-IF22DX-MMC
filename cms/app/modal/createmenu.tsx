"use client";
import React, { useState } from "react";

export default function CreateMenu() {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("MINUMAN");
  const [ketersediaan, setKetersediaan] = useState("READY");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  return (
    <div className="tracking-wide mx-auto font-sans max-w-5xl">
      <form className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bagian kiri dan kanan form diisi di tahap selanjutnya */}
      </form>
    </div>
  );
}
