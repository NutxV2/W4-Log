"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", form);
      toast.success('Register Success!')
    } catch (error) {
      console.log("Register Failed", error);
      toast.error('Register Failed!')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center bg-black">
      <div className="bg-white/5 p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Register
        </h2>

        <form onSubmit={register} className="space-y-4">
          <div>
            <label className="block text-white/70 mb-1">Username</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleOnchange}
              className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:border-white/50"
              placeholder="example Nutx"
              required
            />
          </div>

          <div>
            <label className="block text-white/70 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleOnchange}
              className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:border-white/50"
              placeholder="example loveW4Team"
              required
            />
          </div>

          <div>
            <label className="block text-white/70 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleOnchange}
              className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:border-white/50"
              placeholder="example loveW4Team"
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
            {loading ? "Registering..." : "Register"}
          </Button>

          <p className="text-white/60 text-sm text-center mt-4">
            Has already account? {""}
            <a href="/login" className="text-white hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
