"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface MenuDetail {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: string;
  ketersediaan: string;
  gambar_menu: string;
}

interface MenuDetailProps {
  id: number;
  closeModal?: () => void; // Optional callback from parent
}

export default function EditMenu({ id, closeModal }: MenuDetailProps) {
  // State hooks
  const [getDetail, setDetail] = useState<Partial<MenuDetail>>({});
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [ketersediaan, setKetersediaan] = useState("");
  const [harga, setHarga] = useState("");
  const [Getgambar_menu, setgambar_menu] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalVerifyDelete, setIsModalVerifyDelete] = useState(false);

  // API base URL
  const API_URL = "https://api.mmcproject.web.id/api/menu";

  // Get JWT token from cookies
  const getToken = () => {
    if (typeof window === "undefined") return null;
    return (
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1] || null
    );
  };

  // Open/close delete confirmation modal
  const openModal = () => setIsModalVerifyDelete(true);
  const closeDeleteModal = () => setIsModalVerifyDelete(false);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType === "image") {
        setGambar(file);
      } else {
        setError("Hanya file gambar yang diperbolehkan.");
        e.target.value = "";
        setGambar(null);
      }
    }
  };

  // Fetch menu details
  const fetchDetail = async () => {
    const token = getToken();
    if (!token) {
      setError("No authentication token found.");
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const datamenu: MenuDetail = response.data.dataMenu;
      setDetail(datamenu);
      setNama(datamenu.nama);
      setKategori(datamenu.kategori);
      setKetersediaan(datamenu.ketersediaan);
      setgambar_menu(datamenu.gambar_menu);
      setHarga(datamenu.harga.toString());
      setDeskripsi(datamenu.deskripsi);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to fetch menu details.");
      console.error(err);
    }
  };

  const fetchDeleteMenu = async () => {
    const token = getToken();
    if (!token) {
      setError("No authentication token found.");
      return;
    }

    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // 🔥 Tambahan: periksa apakah memang berhasil
      if (response.data.metadata?.error === 0) {
        if (closeModal) closeModal();
        window.location.assign("../dashboard/menu");
      } else {
        // 🔥 Tambahan: tampilkan pesan error dari metadata
        setError(response.data.metadata?.message || "Gagal menghapus menu.");
      }
    } catch (err: any) {
      // 🔥 Tambahan: ambil error dari metadata.message kalau ada
      const apiError =
        err.response?.data?.metadata?.message ||
        err.response?.data?.error ||
        "Failed to delete menu.";
      setError(apiError);
      console.error(err);
    }
  };

  // Update menu
  const fetchPutMenu = async () => {
    const token = getToken();
    if (!token) {
      setError("No authentication token found.");
      return;
    }

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
      const response = await axios.patch(`${API_URL}/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.metadata.error === 0) {
        if (closeModal) closeModal();
        window.location.assign("../dashboard/menu");
      } else {
        setError(response.data.metadata.message);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to update menu.");
      console.error(err);
    }
  };

  // Handle delete confirmation
  const deleteHandler = async () => {
    await fetchDeleteMenu();
    closeDeleteModal();
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!nama || !deskripsi || !harga || !kategori || !ketersediaan) {
      setError("Semua field wajib diisi!");
      return;
    }
    if (!["MAKANAN", "MINUMAN"].includes(kategori)) {
      setError("Kategori hanya boleh 'MAKANAN' atau 'MINUMAN'");
      return;
    }
    if (!["READY", "SOLDOUT"].includes(ketersediaan)) {
      setError("Ketersediaan hanya boleh 'READY' atau 'SOLDOUT'");
      return;
    }
    if (isNaN(Number(harga)) || Number(harga) <= 0) {
      setError("Harga harus berupa angka valid!");
      return;
    }

    await fetchPutMenu();
  };

  // Fetch details on mount
  useEffect(() => {
    fetchDetail();
  }, [id]);

  return (
    <div className="tracking-wide mx-auto font-sans">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-full">
            <div className="p-4 relative h-full flex flex-col items-center justify-center gap-4">
              {/* Display image or preview */}
              {gambar ? (
                <img
                  src={URL.createObjectURL(gambar)}
                  alt="Preview"
                  className="lg:w-4/5 w-full h-auto rounded-xl object-contain"
                />
              ) : (
                <img
                  src={`https://api.mmcproject.web.id/${Getgambar_menu}`}
                  alt="Product"
                  className="lg:w-4/5 w-full h-auto rounded-xl object-contain"
                />
              )}

              {/* File input */}
              <input
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 py-6 px-8 h-full">
            <div>
              <label className="text-white block mb-2">Nama</label>
              <input
                type="text"
                name="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-md mb-4"
                required
              />

              <label className="text-white block mb-2">Kategori</label>
              <select
                name="kategori"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-md mb-4"
              >
                <option value="MAKANAN">Makanan</option>
                <option value="MINUMAN">Minuman</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-between mt-2.5">
              <label className="text-white block mb-2">Harga</label>
              <input
                type="number"
                name="harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="text-white block mt-4 mb-2">Deskripsi</label>
              <textarea
                name="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-md"
                required
              />
              <label className="text-white block mb-2">Ketersediaan</label>
              <select
                name="ketersediaan"
                value={ketersediaan}
                onChange={(e) => setKetersediaan(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-md mb-4"
              >
                <option value="READY">Ready</option>
                <option value="SOLDOUT">Sold Out</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="submit"
                className="min-w-[100px] px-4 py-3.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded"
              >
                Simpan Perubahan
              </button>
              <button
                type="button"
                onClick={openModal}
                className="min-w-[100px] px-4 py-3.5 bg-red-800 hover:bg-red-900 text-white text-base rounded"
              >
                Delete Menu
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Delete confirmation modal */}
      {isModalVerifyDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  onClick={deleteHandler}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={closeDeleteModal}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
