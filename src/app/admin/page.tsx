"use client";

import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-lg p-6 flex flex-col gap-6 border-r border-white/10 min-h-screen">
        <h2 className="text-2xl font-bold mb-8 text-purple-300">Admin</h2>
        <nav className="flex flex-col gap-4">
          <Link
            href="/admin"
            className="font-semibold hover:text-purple-400 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="font-semibold hover:text-purple-400 transition"
          >
            Users
          </Link>
          <Link
            href="/admin/roles"
            className="font-semibold hover:text-purple-400 transition"
          >
            Roles
          </Link>
          <Link
            href="/admin/logs"
            className="font-semibold hover:text-purple-400 transition"
          >
            Logs
          </Link>
          <Link
            href="/admin/settings"
            className="font-semibold hover:text-purple-400 transition"
          >
            Settings
          </Link>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 [text-shadow:_0_4px_32px_rgba(124,58,237,0.5)]">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">User Management</h2>
            <p className="text-gray-300">
              View, edit, activate, delete, and reset users.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
              Role & Permission Management
            </h2>
            <p className="text-gray-300">
              Assign roles, set access, and manage groups.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Activity & Audit Logs</h2>
            <p className="text-gray-300">
              See who logged in, when, and from where. Track admin actions.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Security Controls</h2>
            <p className="text-gray-300">
              2FA, password resets, session revocation, and security alerts.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-purple-300">
            More coming soon...
          </h2>
          <p className="text-gray-400">
            Feature flags, impersonation, analytics, and more will be added as
            you build!
          </p>
        </div>
      </main>
    </div>
  );
}
