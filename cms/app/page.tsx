"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";



export default function LoginUser({ toggleForm }: { toggleForm: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [userRole, setUserRole] = useState<string | null>(null);
  // const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await fetch(
        "https://api.margataqwa.my.id/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            loginValue: username,
            passwordValue: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Jika gagal login, tampilkan pesan error dari API
        setErrorMsg(data.metadata?.message || "Login gagal");
        setLoading(false);
        return;
      }

      // Login berhasil, simpan token ke cookie (atau localStorage jika mau)
      document.cookie = `authToken=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; SameSite=Lax`;

      setSuccessMsg("Login berhasil!");

      // Ambil role user jika ada, atau default
      const role = data.user?.role || "PELANGGAN";
      setUserRole(role);
    } catch (error) {
      setErrorMsg("Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  };

  // Redirect setelah login berdasarkan role
  useEffect(() => {
    if (userRole === "ADMIN") {
      // router.push("/dashboardadmin");
    } else if (userRole === "KASIR") {
      // router.push("/dashboardkasir");
    } else if (userRole === "PELANGGAN") {
      location.href = "/dashboard/menu";
    }
  }, [userRole]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Sign in to your account
        </h1>

        {successMsg && (
          <div className="mb-4 flex items-center p-4 bg-green-100 text-green-700 rounded">
            <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="mb-4 flex items-center p-4 bg-red-100 text-red-700 rounded">
            <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
            >
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter username or email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <button
            onClick={toggleForm}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
