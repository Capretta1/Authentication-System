"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, isLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      isLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      toast.success("Signup successful");
      // Simulate successful signup, then redirect
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      isLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing 3D spheres */}
        <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse-slow" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse-slow delay-700" />
        {/* Parallax floating cubes */}
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl shadow-2xl top-1/4 left-10 animate-float-cube"
          style={{ transform: "rotate3d(1,1,0,30deg)" }}
        />
        <div
          className="absolute w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-600 rounded-xl shadow-xl bottom-1/3 right-20 animate-float-cube2"
          style={{ transform: "rotate3d(1,0.5,0,40deg)" }}
        />
      </div>
      {/* Main content with illustration and form */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-12 px-4 py-12">
        {/* SVG Illustration */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-4 max-w-xs">
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="shieldGradient"
                cx="50%"
                cy="50%"
                r="80%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6366f1" />
              </radialGradient>
            </defs>
            <path
              d="M90 20C90 20 30 40 30 80C30 140 90 160 90 160C90 160 150 140 150 80C150 40 90 20 90 20Z"
              fill="url(#shieldGradient)"
              stroke="#7c3aed"
              strokeWidth="4"
            />
            <rect
              x="65"
              y="80"
              width="50"
              height="40"
              rx="10"
              fill="#fff"
              stroke="#6366f1"
              strokeWidth="3"
            />
            <circle cx="90" cy="100" r="8" fill="#6366f1" />
            <rect x="85" y="100" width="10" height="15" rx="5" fill="#6366f1" />
            <circle cx="90" cy="100" r="3" fill="#fff" />
            <path
              d="M90 120v5"
              stroke="#6366f1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-4 text-center text-base text-gray-200 max-w-xs">
            <span className="font-semibold text-purple-300">
              Your data is protected with industry-leading security.
            </span>
          </div>
        </div>
        {/* Glassmorphism signup form card */}
        <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 [text-shadow:_0_4px_32px_rgba(124,58,237,0.5)]">
            Create Account
          </h1>
          <p className="text-gray-700 mb-6 text-sm">
            {loading ? "Processing" : "Signup to join"}
          </p>
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSignUp();
            }}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-black mb-1 font-medium"
              >
                Username
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black placeholder-gray-700 bg-white/80"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-black mb-1 font-medium"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black placeholder-gray-700 bg-white/80"
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
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black placeholder-gray-700 bg-white/80"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
                autoComplete="new-password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-purple-400 border-2 border-purple-400/40 transform hover:scale-105 hover:shadow-2xl"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <div className="mt-6 text-sm text-black">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-600 hover:underline font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
