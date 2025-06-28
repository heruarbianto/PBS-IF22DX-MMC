"use client";
import axios from "axios";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useSWR from "swr";
import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

// Fetcher dengan Authorization header
const fetcher = async (url: string) => {
  // Ambil token dari cookie
  const token =
    typeof document !== "undefined"
      ? document.cookie
          .split("; ")
          .find((row) => row.startsWith("authToken="))
          ?.split("=")[1]
      : null;

  if (!token) throw new Error("Token tidak ditemukan. Harap login.");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errRes = await response.json();
    throw new Error(errRes.error || "Gagal mengambil data user.");
  }

  return response.json();
};

export default function ViewDataUser() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalContentRef = useRef<HTMLParagraphElement>(null);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  // SWR
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.mmcproject.web.id/api/user",
    fetcher
  );

  // Toast auto-hide
  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  // Modal open
  const openModal = (id: number, nama: string) => {
    setSelectedId(id);
    modalContentRef.current!.innerHTML = `Apakah Anda yakin ingin menghapus user <strong>${nama}</strong>?`;
    modalRef.current?.showModal();
  };

  // Delete handler
  const handleDelete = async () => {
    if (selectedId == null) return;

    const token =
      typeof document !== "undefined"
        ? document.cookie
            .split("; ")
            .find((row) => row.startsWith("authToken="))
            ?.split("=")[1]
        : null;

    if (!token) {
      setToastMessage("Token tidak ditemukan. Harap login.");
      setToastVisible(true);
      return;
    }

    try {
      const res = await axios.delete(
        `https://api.mmcproject.web.id/api/user/${selectedId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setToastMessage(res.data.metadata?.message || "Data berhasil dihapus.");
      setToastVisible(true);
      mutate(); // Refresh data
      modalRef.current?.close();
    } catch (err: any) {
      setToastMessage(
        err.response?.data?.metadata?.message || "Gagal menghapus data."
      );
      setToastVisible(true);
    }
  };

  return (
    <div className="p-4">
      <section className="text-right mb-4">
        <Link href={"/add"} className="btn btn-success">
          <FontAwesomeIcon icon={faPlus} /> Tambah User
        </Link>
      </section>

      {error && (
        <div className="alert alert-error">{error.message}</div>
      )}

      <section className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className={style["background-tr"]}>
              <th className="text-center">Aksi</th>
              <th className="text-center">Nama</th>
              <th className="text-center">Username</th>
              <th className="text-center">Email</th>
              <th className="text-center">No HP</th>
              <th className="text-center">Alamat</th>
            </tr>
          </thead>
          <tbody>
            {data?.metadata.error === 1 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  {data.metadata.message}
                </td>
              </tr>
            ) : (
              data?.dataUser?.map((user: any) => (
                <tr key={user.id} className="hover:bg-base-300">
                  <td className="text-center">
                    <Link
                      href={`/edit/${user.id}`}
                      title="Edit User"
                      className={style["frame-button-edit"]}
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </Link>
                    <button
                      onClick={() => openModal(user.id, user.namaLengkap)}
                      title="Hapus User"
                      className={style["frame-button-delete"]}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                  <td className="text-center">{user.namaLengkap}</td>
                  <td className="text-center">{user.username}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.noHp}</td>
                  <td className="text-center">{user.alamat}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {toastVisible && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-info">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Konfirmasi</h3>
          <p ref={modalContentRef} className="py-4"></p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={handleDelete}>
              Ya, Hapus
            </button>
            <button className="btn" onClick={() => modalRef.current?.close()}>
              Batal
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
// "use client";
// export default function Page() {
//   return <div>Hello User Page</div>;
// }
