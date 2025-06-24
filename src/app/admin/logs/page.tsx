"use client";

import React from "react";

export default function AdminLogs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-10">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Activity & Audit Logs
        </h1>
        <p className="text-gray-300 mb-4">
          Here you will be able to see who logged in, when, and from where.
          Track admin actions.
        </p>
        <div className="h-32 flex items-center justify-center text-gray-400">
          Logs coming soon...
        </div>
      </div>
    </div>
  );
}
