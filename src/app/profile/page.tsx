"use client";

import React from "react";
import Link from "next/link";

export default function Profile() {
  // Placeholder user data
  const user = {
    name: "John Doe",
    email: "johndoe@email.com",
    username: "johndoe",
    joined: "Jan 1, 2024",
    isAdmin: false, // For future admin features
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse-slow" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse-slow delay-700" />
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl shadow-2xl top-1/4 left-10 animate-float-cube"
          style={{ transform: "rotate3d(1,1,0,30deg)" }}
        />
        <div
          className="absolute w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-600 rounded-xl shadow-xl bottom-1/3 right-20 animate-float-cube2"
          style={{ transform: "rotate3d(1,0.5,0,40deg)" }}
        />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-8 px-4 py-16">
        {/* Profile Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full animate-fade-in-up">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg mb-4">
            {/* User Initials or Avatar */}
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform text-black mb-2"
            onClick={async () => {
              await fetch("/api/users/logout", { method: "POST" });
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
          {/* Future: Show admin badge if user.isAdmin */}
          {user.isAdmin && (
            <span className="mt-2 px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-xs font-semibold">
              Admin
            </span>
          )}
          {user.isAdmin && (
            <Link
              href="/admin"
              className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform text-black"
            >
              Go to Admin Dashboard
            </Link>
          )}
        </div>
        {/* User Details */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full flex flex-col gap-4 border border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xl">👤</span>
            <span className="text-gray-300">
              Username:{" "}
              <span className="font-semibold text-white">{user.username}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">📧</span>
            <span className="text-gray-300">
              Email:{" "}
              <span className="font-semibold text-white">{user.email}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">📅</span>
            <span className="text-gray-300">
              Joined:{" "}
              <span className="font-semibold text-white">{user.joined}</span>
            </span>
          </div>
        </div>
        {/* Security/Settings (future admin features can go here) */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full flex flex-col gap-4 border border-white/10">
          <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform text-black">
            Change Password
          </button>
          {/* Future: Admin panel link */}
          {user.isAdmin && (
            <Link
              href="/admin"
              className="w-full block py-2 bg-yellow-400/20 rounded-xl font-semibold shadow hover:bg-yellow-400/30 transition text-yellow-300 text-center"
            >
              Go to Admin Panel
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
