"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", form, {
        withCredentials: true,
      });
      toast.success("Login Success!");
      router.push("/theforge");
    } catch (error) {
      console.log("Login Failed", error);
      toast.error("Login Failed!");
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center bg-black">
      <div className="bg-white/5 p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-white/70 mb-1">Username</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleOnchange}
              className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:border-white/50"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white/70 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleOnchange}
              className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:border-white/50"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:bg-white/60 cursor-pointer text-black font-semibold mt-4 flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? "Login..." : "Login"}
          </Button>

          <p className="text-white/60 text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-white hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
