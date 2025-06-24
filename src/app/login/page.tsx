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

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("signup success", response.data);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-black to-blue-900 text-white overflow-hidden relative flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing blue spheres */}
        <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse-slow" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse-slow delay-700" />
        {/* Parallax floating cubes */}
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl shadow-2xl top-1/4 left-10 animate-float-cube"
          style={{ transform: "rotate3d(1,1,0,30deg)" }}
        />
        <div
          className="absolute w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-xl bottom-1/3 right-20 animate-float-cube2"
          style={{ transform: "rotate3d(1,0.5,0,40deg)" }}
        />
      </div>
      {/* Main content with illustration above the form */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center justify-center gap-8 px-4 py-12">
        {/* SVG Illustration - digital key with glowing ring */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-40 h-40 rounded-full border-4 border-blue-400/40 animate-pulse-slow2" />
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  id="keyGradient"
                  cx="50%"
                  cy="50%"
                  r="80%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </radialGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="url(#keyGradient)"
                opacity="0.15"
              />
              <rect
                x="50"
                y="70"
                width="20"
                height="10"
                rx="3"
                fill="#fff"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              <rect
                x="55"
                y="40"
                width="10"
                height="30"
                rx="5"
                fill="#fff"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              <circle
                cx="60"
                cy="35"
                r="12"
                fill="#60a5fa"
                stroke="#0ea5e9"
                strokeWidth="3"
              />
              <circle cx="60" cy="35" r="5" fill="#fff" />
            </svg>
          </div>
          <div className="mt-4 text-center text-base text-blue-200 max-w-xs">
            <span className="font-semibold">
              Access your account securely with your credentials.
            </span>
          </div>
        </div>
        {/* Glassmorphism login form card with enhanced readability */}
        <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col items-center animate-fade-in-up border-2 border-blue-400/40 animate-glow-border">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 [text-shadow:_0_4px_32px_rgba(59,130,246,0.5)] tracking-tight">
            Sign In to Your Account
          </h1>
          <p className="text-blue-800 mb-8 text-lg font-medium">
            Enter your credentials to log in and unlock your dashboard.
          </p>
          <form
            className="w-full flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-900 mb-2 font-semibold"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black placeholder-blue-400 bg-white/90 text-base"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
              <span className="text-xs text-blue-400 mt-1 block">
                We'll never share your email.
              </span>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg text-gray-900 mb-2 font-semibold"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black placeholder-blue-400 bg-white/90 text-base"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <span className="text-xs text-blue-400 mt-1 block">
                Make sure your password is strong.
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-blue-400/40 transform hover:scale-105 hover:shadow-2xl text-lg"
            >
              Login
            </button>
          </form>
          <div className="mt-8 text-base text-black">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
