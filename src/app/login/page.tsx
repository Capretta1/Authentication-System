"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, isLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      isLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("signup success", response.data);
      toast.success("Signup successful");
      // Simulate successful signup, then redirect
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      isLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Vibrant background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1500&q=80"
          alt="Authentication security background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Glassmorphism login form card */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-6 text-sm">Login to your account</p>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-black mb-1 font-medium"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black placeholder-gray-700"
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-black mb-1 font-medium"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black placeholder-gray-700"
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-sm text-black">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
