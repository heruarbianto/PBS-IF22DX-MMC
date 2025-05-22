"use client";
import React, { useState } from "react";

export default function CreateMenu() {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("MINUMAN");
  const [ketersediaan, setKetersediaan] = useState("READY");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setGambar(file);
    } else {
      alert("File harus berupa gambar (jpg/png/jpeg).");
      e.target.value = "";
      setGambar(null);
    }
  };

  const fetchsetMenu = async () => {
    // Validasi field kosong
    if (!nama || !kategori || !ketersediaan || !harga || !deskripsi || !gambar) {
      alert("Semua field harus diisi.");
      return false;
    }

    // Validasi harga
    if (Number(harga) <= 0) {
      alert("Harga harus lebih dari 0");
      return false;
    }

    // Validasi kategori
    const kategoriLower = kategori.toLowerCase();
    if (kategoriLower !== "makanan" && kategoriLower !== "minuman") {
      alert("Kategori harus Makanan atau Minuman");
      return false;
    }

    // Validasi ketersediaan
    const ketersediaanUpper = ketersediaan.toUpperCase();
    if (ketersediaanUpper !== "READY" && ketersediaanUpper !== "SOLDOUT") {
      alert("Ketersediaan harus READY atau SOLDOUT");
      return false;
    }

    // Validasi file image
    if (!gambar.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return false;
    }

    // Buat FormData untuk dikirim ke API
    const formData = new FormData();
    formData.append("file", gambar);
    formData.append("nama", nama);
    formData.append("deskripsi", deskripsi);
    formData.append("harga", harga);
    formData.append("kategori", kategoriLower);
    formData.append("ketersediaan", ketersediaanUpper);

    try {
      const response = await fetch("https://api.margataqwa.my.id/api/menu", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Menu berhasil ditambahkan!");
        return true;
      } else {
        const errorData = await response.json();
        alert("Gagal menambahkan menu: " + (errorData.message || "Unknown error"));
        return false;
      }
    } catch (error) {
      console.error("Error saat mengirim data:", error);
      alert("Terjadi kesalahan saat menghubungi server.");
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sukses = await fetchsetMenu();
    if (sukses) {
      setNama("");
      setKategori("MINUMAN");
      setKetersediaan("READY");
      setHarga("");
      setDeskripsi("");
      setGambar(null);
      window.location.assign("../dashboard");
    }
  };

  return (
    <div className="tracking-wide mx-auto font-sans max-w-5xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Gambar */}
        <div className="h-full">
          <div className="p-4 relative h-full flex flex-col items-center justify-center gap-4">
            {gambar ? (
              <img
                src={URL.createObjectURL(gambar)}
                alt="Preview"
                className="lg:w-4/5 w-full h-auto rounded-xl object-contain"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-xl">
                <span className="text-gray-400">No image selected</span>
              </div>
            )}
            <input
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 py-6 px-8 h-full">
          <label htmlFor="nmMenu" className="text-white">Nama Menu</label>
          <input
            type="text"
            id="nmMenu"
            placeholder="Ayam Bakar Sambal"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full bg-gray-100 px-4 py-2 rounded-md text-lg font-semibold mb-2.5"
            required
          />

          <label htmlFor="ktMenu" className="text-white">Kategori</label>
          <select
            id="ktMenu"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full bg-gray-100 px-4 py-2 rounded-md text-sm"
            required
          >
            <option value="MINUMAN">Minuman</option>
            <option value="MAKANAN">Makanan</option>
          </select>

          <label htmlFor="harga" className="text-white mt-4">Harga</label>
          <input
            type="number"
            id="harga"
            placeholder="0"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full bg-gray-100 px-4 py-2 rounded-md text-4xl text-gray-800"
            required
            min={1}
          />

          <label htmlFor="deskripsi" className="text-white mt-4">Deskripsi</label>
          <textarea
            id="deskripsi"
            placeholder="Deskripsi menu..."
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full bg-gray-100 px-4 py-2 rounded-md text-base mt-2 text-gray-800"
            required
          />

          <label htmlFor="ketersediaan" className="text-white mt-4">Ketersediaan</label>
          <select
            id="ketersediaan"
            value={ketersediaan}
            onChange={(e) => setKetersediaan(e.target.value)}
            className="w-full bg-gray-100 px-4 py-2 rounded-md text-sm"
            required
          >
            <option value="READY">Ready</option>
            <option value="SOLDOUT">Sold Out</option>
          </select>

          <button
            type="submit"
            className="mt-8 min-w-[200px] px-4 py-3.5 bg-blue-800 hover:bg-blue-900 text-white text-base rounded"
          >
            Tambah Menu
          </button>
        </div>
      </form>
    </div>
  );
}
