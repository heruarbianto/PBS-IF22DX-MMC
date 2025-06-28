"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";
import axios from "axios";

interface MenuDetail {
  id: number;
  nama: string;
  kategori: string;
  harga: number;
  deskripsi: string;
  ketersediaan: string;
  gambar_menu: string;
}

interface MenuDetailProps {
  idMenu: number;
  idUser: number;
}

export default function DetailMenu({ idMenu, idUser }: MenuDetailProps) {
  // State hooks
  const [getDetail, setDetail] = useState<Partial<MenuDetail>>({});
  const [value, setValue] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // API base URL
  const API_URL = "https://api.mmcproject.web.id/api/menu";

  // Get JWT token from cookies
  const getToken = () => {
    if (typeof window === "undefined") return null;
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1] || null;
  };

  // Increment/decrement quantity
  const increment = () => setValue((prevValue) => prevValue + 1);
  const decrement = () => setValue((prevValue) => Math.max(prevValue - 1, 1));

  // Handle manual input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1) {
      setValue(inputValue);
    } else {
      setValue(1); // Reset to 1 if invalid
    }
  };

  // Fetch menu details
  const fetchDetail = async () => {
    try {
      const response = await axios.get(`${API_URL}/${idMenu}`);
      if (response.data.metadata.error === 0) {
        setDetail(response.data.dataMenu);
      } else {
        setError(response.data.metadata.message);
      }
    } catch (err: any) {
      setError(
        err.response?.data?.metadata?.message ||
          "Gagal mengambil data menu."
      );
      console.error(err);
    }
  };

  // Add to cart
  const fetchTambahKeKeranjang = async () => {
    const token = getToken();
    if (!token) {
      setError("Harap login terlebih dahulu.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.mmcproject.web.id/api/cart",
        {
          idUser,
          idMenu,
          quantity: value,
          harga: getDetail.harga,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.metadata?.error === 0) {
        window.location.assign("/cart");
      } else {
        setError(response.data.metadata?.message || "Gagal menambah ke keranjang.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.metadata?.message ||
          "Gagal menambah ke keranjang."
      );
      console.error(err);
    }
  };

  // Fetch details on mount
  useEffect(() => {
    if (idMenu) {
      fetchDetail();
    }
  }, [idMenu]);

  return (
    <div className="tracking-wide mx-auto font-sans">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-full">
          <div className="p-4 relative h-full flex items-center justify-center">
            <img
              src={getDetail.gambar_menu || "/placeholder-image.jpg"}
              alt={getDetail.nama || "Product"}
              className="lg:w-4/5 w-full h-full rounded-xl object-contain"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 py-6 px-8 h-full">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {getDetail.nama || "Loading..."}
            </h2>
            <p className="text-sm text-gray-200 mt-2">
              {getDetail.kategori || ""}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-between mt-8">
            <h3 className="text-white text-4xl">
              Rp. {getDetail.harga?.toLocaleString() || "0"}
            </h3>
          </div>

          <div>
            <ul className="grid grid-cols-3 mt-8">
              <li className="text-white text-base w-full py-3.5 px-2 text-center border-b-2 border-white cursor-pointer">
                Deskripsi
              </li>
            </ul>
            <p className="text-gray-300 mt-4 text-base">
              {getDetail.deskripsi || "Tidak ada deskripsi."}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Jumlah</h3>
            <div className="flex mt-4 rounded-full overflow-hidden bg-gray-800 py-2.5 px-4 w-32">
              <button
                type="button"
                onClick={decrement}
                className="bg-transparent w-full text-white font-semibold flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="number"
                value={value}
                onChange={handleChange}
                className="bg-transparent w-full font-semibold flex items-center justify-center text-white text-base text-center"
                min="1"
              />
              <button
                type="button"
                onClick={increment}
                className="bg-transparent w-full text-white font-semibold flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              onClick={fetchTambahKeKeranjang}
              className="min-w-[200px] px-4 py-3.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded"
              disabled={!getDetail.harga || getDetail.ketersediaan !== "READY"}
            >
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}