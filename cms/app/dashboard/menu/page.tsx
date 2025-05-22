"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// import EditMenu from "../../modal/editMenu";
import TambahMenu from "../../modal/createmenu";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [isBukaModal, setBukaModal] = useState(false);
  const [isBukaModalCreate, setBukaModalCreate] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  const [AlertDataNull, setAlertDataNull] = useState(false);
  const router = useRouter();

  // Tentukan URL API berdasarkan filter activeTab
  const apiUrl =
    activeTab === "All"
      ? "https://api.margataqwa.my.id/api/menu"
      : `https://api.margataqwa.my.id/api/menu?kategori=${activeTab.toUpperCase()}`;

  // Gunakan SWR untuk fetch data
  const { data: menus, error, isLoading } = useSWR(apiUrl, fetcher);

  const openModal = (id: number) => {
    setBukaModal(true);
    setSelectedMenuId(id);
  };
  const openModalCreate = () => {
    setBukaModalCreate(true);
  };
  const closeModal = () => {
    setBukaModal(false);
    setBukaModalCreate(false);
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];

    if (!token) {
      router.push("/login");
      return;
    }

    const decoded: { role: string; exp: number } = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);

    if (decoded.exp < now || !["ADMIN"].includes(decoded.role)) {
      router.push("/forbidden");
    }

    if (localStorage.getItem("Datakosong") === "true") {
      setAlertDataNull(true);
      localStorage.removeItem("Datakosong");
      setTimeout(() => setAlertDataNull(false), 3000);
    }
  }, [router]);

  return (
    <div className="px-10">
      {AlertDataNull && (
        <div role="alert" className="alert alert-error mt-2.5">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span>Error: Data Tidak Disimpan, WAJIB DIISI SEMUA!!!</span>
        </div>
      )}
      <div className="max-w-screen-md mx-auto">
        <div className="py-2 px-3 flex flex-col sm:flex-row justify-between items-center">
          {/* Filter Tabs */}
          <div className="flex flex-nowrap gap-4 mb-4 sm:mb-0 sm:flex-row overflow-x-auto whitespace-nowrap w-full">
            {["All", "Makanan", "Minuman", "Soldout"].map((tab) => (
              <p
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`inline-flex whitespace-nowrap border-b-2 py-2 px-3 text-sm transition-all duration-200 ease-in-out ${
                  activeTab === tab
                    ? "border-b-blue-600 text-blue-600 font-semibold"
                    : "border-transparent text-gray-600 hover:border-b-blue-600 hover:text-blue-600"
                }`}
              >
                {tab === "Soldout" ? "Stok Habis" : tab}
              </p>
            ))}
          </div>

          {/* Tambah Data Button */}
          <button onClick={openModalCreate} className="btn btn-outline btn-primary">
            <FontAwesomeIcon icon={faPlus} className="mr-2.5" />
            Tambah Data
          </button>
        </div>
      </div>

      <section className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center">
            <div className="flex space-x-4">
              <span className="loading loading-ring loading-lg text-blue-600"></span>
            </div>
          </div>
        ) : error ? (
          <p>Error loading data.</p>
        ) : menus.dataMenu && menus.dataMenu.length > 0 ? (
          menus.dataMenu.map((datamenu: any) => (
            <div
              onClick={() => openModal(datamenu.id)}
              key={datamenu.id}
              className="w-40 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img
                src={`https://api.margataqwa.my.id/${datamenu.gambar_menu}`}
                alt={datamenu.nama}
                className="h-40 w-40 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-40">
                <span className="text-gray-400 mr-3 uppercase text-xs">{datamenu.kategori}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{datamenu.nama}</p>
                <div className="flex items-center">
                  <p className="text-xs">Rp. </p>
                  <p className="text-lg font-normal text-black cursor-auto my-3">{datamenu.harga.toString()}</p>
                  <p className="text-xs ml-auto">{datamenu.ketersediaan}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Data menu kosong.</p>
        )}
      </section>

      {/* Modal Edit */}
      {/* {isBukaModal && selectedMenuId !== null && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
        >
          <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 relative">
            <div className="flex justify-end">
              <FontAwesomeIcon icon={faXmark} className="ml-auto mb-2 cursor-pointer" onClick={closeModal} />
            </div>
            <EditMenu id={selectedMenuId} />
          </div>
        </div>
      )} */}

      {/* Modal Tambah */}
      {isBukaModalCreate && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
        >
          <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 relative">
            <div className="flex justify-end">
              <FontAwesomeIcon icon={faXmark} className="ml-auto mb-2 cursor-pointer" onClick={closeModal} />
            </div>
            <TambahMenu/>
          </div>
        </div>
      )}
    </div>
  );
}
