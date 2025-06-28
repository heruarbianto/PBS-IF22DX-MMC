"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditUser() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  // State untuk data form
  const [formData, setFormData] = useState({
    namaLengkap: "",
    username: "",
    email: "",
    noHp: "",
    alamat: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Ambil token dari cookie
  const getToken = () => {
    if (typeof document !== "undefined") {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];
    }
    return null;
  };

  // Ambil detail user
  const getDetailData = async (id: string) => {
    const token = getToken();
    if (!token) {
      setError("Token tidak ditemukan. Harap login.");
      return;
    }
    try {
      const res = await axios.get(
        `https://api.mmcproject.web.id/api/user/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data.metadata?.error === 1) {
        setError(res.data.metadata.message);
      } else {
        setFormData({
          namaLengkap: res.data.dataUser.namaLengkap || "",
          username: res.data.dataUser.username || "",
          email: res.data.dataUser.email || "",
          noHp: res.data.dataUser.noHp || "",
          alamat: res.data.dataUser.alamat || "",
          password: "",
        });
      }
    } catch (err: any) {
      setError("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      getDetailData(params.id as string);
    }
  }, [params.id]);

  // Handler input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async () => {
    const token = getToken();
    if (!token) {
      alert("Token tidak ditemukan. Harap login.");
      return;
    }

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          form.append(key, value);
        }
      });

      const res = await axios.patch(
        `https://api.mmcproject.web.id/api/user/${params.id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.metadata.message || "Berhasil diupdate.");
      router.push("/dashboard/user");
    } catch (err: any) {
      alert(
        err.response?.data?.metadata?.message || "Gagal update data."
      );
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-error">{error}</div>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Ubah Data User</h1>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend">Nama Lengkap</legend>
        <input
          type="text"
          name="namaLengkap"
          value={formData.namaLengkap}
          onChange={handleChange}
          className="input"
          placeholder="Isi Nama Lengkap"
        />
      </fieldset>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend">Username</legend>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="input"
          placeholder="Isi Username"
        />
      </fieldset>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          placeholder="Isi Email"
        />
      </fieldset>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend">No HP</legend>
        <input
          type="text"
          name="noHp"
          value={formData.noHp}
          onChange={handleChange}
          className="input"
          placeholder="Isi No HP"
        />
      </fieldset>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend">Alamat</legend>
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          className="input"
          placeholder="Isi Alamat"
        />
      </fieldset>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend">Password (Opsional)</legend>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input"
          placeholder="Kosongkan jika tidak diubah"
        />
      </fieldset>

      <section className="mt-4">
        <button
          className="btn btn-success mr-2"
          onClick={handleSubmit}
        >
          Ubah
        </button>
        <button
          className="btn btn-soft"
          onClick={() => router.push("/dashboard/user")}
        >
          Batal
        </button>
      </section>
    </div>
  );
}
