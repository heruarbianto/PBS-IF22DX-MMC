"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUser() {
  const params = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    namaLengkap: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const getDetailData = async (id: string) => {
    try {
      const res = await axios.get(`https://api.mmcproject.web.id/api/user/${id}`);
      if (res.data.metadata?.error) {
        alert(res.data.metadata.message);
        router.push("/dashboard/user");
      } else {
        setFormData({
          namaLengkap: res.data.dataUser.namaLengkap || "",
          username: res.data.dataUser.username || "",
          password: "",
        });
      }
    } catch (err) {
      alert("Gagal mengambil data user");
      router.push("/dashboard/user");
    }
  };

  useEffect(() => {
    if (params?.id) getDetailData(params.id as string);
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];

      const form = new FormData();
      form.append("namaLengkap", formData.namaLengkap);
      form.append("username", formData.username);
      if (formData.password) {
        form.append("password", formData.password);
      }

      await axios.patch(
        `https://api.mmcproject.web.id/api/user/${params.id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Data berhasil diperbarui!");
      router.push("/dashboard/user");
    } catch (err: any) {
      alert(
        err.response?.data?.metadata?.message ||
          "Gagal memperbarui data user."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Ubah Data User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nama Lengkap</label>
          <input
            type="text"
            name="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Nama lengkap"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Password Baru (Opsional)</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Isi password jika ingin mengganti"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => router.push("/dashboard/user")}
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
