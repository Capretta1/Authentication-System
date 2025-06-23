"use client";

import Link from "next/link";
import React from "react";

function SignUp() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Authentication-themed background image for signup (different from login and main) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80"
          alt="Signup join background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Glassmorphism signup form card */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-gray-500 mb-6 text-sm">Sign up to get started</p>
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
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black placeholder-gray-700"
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
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black placeholder-gray-700"
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
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black placeholder-gray-700"
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
            className="w-full py-2 mt-2 bg-purple-600 text-black font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Sign Up
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
  );
}

export default SignUp;
