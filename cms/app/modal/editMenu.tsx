"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function EditMenu() {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [ketersediaan, setKetersediaan] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  const fetchPutMenu = async () => {
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("deskripsi", deskripsi);
    formData.append("harga", harga);
    formData.append("kategori", kategori);
    formData.append("ketersediaan", ketersediaan);

    if (gambar) {
      formData.append("gambar_menu", gambar);
    }

    try {
      const res = await fetch(`https://api.mmcproject.web.id/api/menu/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_ADMIN}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal memperbarui menu.");
      }

      alert("Menu berhasil diperbarui!");
    } catch (error: any) {
      console.error("Error updating menu:", error);
      alert(error.message || "Terjadi kesalahan saat update.");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Nama Menu</Label>
        <Input value={nama} onChange={(e) => setNama(e.target.value)} />
      </div>
      <div>
        <Label>Deskripsi</Label>
        <Textarea value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
      </div>
      <div>
        <Label>Harga</Label>
        <Input value={harga} onChange={(e) => setHarga(e.target.value)} />
      </div>
      <div>
        <Label>Kategori</Label>
        <Input value={kategori} onChange={(e) => setKategori(e.target.value)} placeholder="MAKANAN / MINUMAN" />
      </div>
      <div>
        <Label>Ketersediaan</Label>
        <Input value={ketersediaan} onChange={(e) => setKetersediaan(e.target.value)} placeholder="READY / SOLDOUT" />
      </div>
      <div>
        <Label>Gambar Menu</Label>
        <Input type="file" onChange={(e) => setGambar(e.target.files?.[0] || null)} />
      </div>
      <Button onClick={fetchPutMenu}>Update Menu</Button>
    </div>
  );
}
