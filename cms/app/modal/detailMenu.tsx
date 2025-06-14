"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface MenuDetail {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: string;
  gambar_menu: string;
  ketersediaan: string;
}

interface MenuDetailProps {
  idMenu: number;
  idUser: number;
}

export default function DetailMenu({ idMenu, idUser }: MenuDetailProps) {
  const [getDetail, setDetail] = useState<Partial<MenuDetail>>({});
  const [value, setValue] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    setValue(!isNaN(inputValue) && inputValue > 0 ? inputValue : 1);
  };

  const fetchDetail = async () => {
    try {
      const res = await fetch(`https://api.mmcproject.web.id/api/menu/${idMenu}`);
      const data = await res.json();

      if (!res.ok || data.metadata?.error !== 0) {
        throw new Error(data.metadata?.message || "Gagal mengambil detail menu");
      }

      setDetail(data.dataMenu);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setDetail({});
    }
  };

  const tambahKeKeranjang = async () => {
    try {
      const formData = new FormData();
      formData.append("id_user", String(idUser));
      formData.append("id_menu", String(idMenu));
      formData.append("jumlah", String(value));
      formData.append("harga", String(getDetail.harga || 0));

      const res = await fetch("https://api.mmcproject.web.id/api/keranjang", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || data.metadata?.error !== 0) {
        throw new Error(data.metadata?.message || "Gagal menambahkan ke keranjang");
      }

      // Arahkan ke dashboard jika berhasil
      window.location.assign("../dashboardadmin");
    } catch (err) {
      alert("Gagal menambahkan ke keranjang: " + err);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [idMenu]);

  return (
    <div className="tracking-wide mx-auto font-sans">
      {error ? (
        <div className="text-red-600 p-4 text-center">{error}</div>
      ) : (
        <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-full">
            <div className="p-4 relative h-full flex items-center justify-center">
              <img
                src={`https://api.mmcproject.web.id${getDetail.gambar_menu}`}
                alt={getDetail.nama || "Menu Image"}
                className="lg:w-4/5 w-full h-full rounded-xl object-contain"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 py-6 px-8 h-full">
            <div>
              <h2 className="text-3xl font-semibold text-white">{getDetail.nama}</h2>
              <p className="text-sm text-gray-200 mt-2">{getDetail.kategori}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-between mt-8">
              <h3 className="text-white text-4xl">
                Rp. {getDetail.harga?.toLocaleString("id-ID")}
              </h3>
            </div>

            <div>
              <ul className="grid grid-cols-3 mt-8">
                <li className="text-white text-base w-full py-3.5 px-2 text-center border-b-2 border-white cursor-pointer">
                  Description
                </li>
              </ul>
              <p className="text-gray-300 mt-4 text-base">{getDetail.deskripsi}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Quantity</h3>
              <div className="flex mt-4 rounded-full overflow-hidden bg-gray-800 py-2.5 px-4 w-32">
                <button
                  type="button"
                  onClick={decrement}
                  className="bg-transparent w-full text-white font-semibold flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  className="bg-transparent w-full font-semibold text-white text-base text-center"
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
                onClick={tambahKeKeranjang}
                className="min-w-[200px] px-4 py-3.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded"
              >
                Tambahkan ke Keranjang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
