"use client";

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden relative">
      {/* Background elements for style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse-slow" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse-slow delay-700" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Hero Section */}
        <div className="max-w-2xl text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">🔒</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 [text-shadow:_0_4px_32px_rgba(124,58,237,0.5)]">
            About This Authentication System
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            This project is a modern, secure, and user-friendly authentication
            system built with Next.js and Tailwind CSS. It demonstrates best
            practices in authentication UI/UX, security, and responsive design.
          </p>
        </div>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col items-center animate-feature-float">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
            <p className="text-gray-400 text-center">
              State-of-the-art encryption and security protocols to protect user
              data.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col items-center animate-feature-float2">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Responsive</h3>
            <p className="text-gray-400 text-center">
              Optimized for speed and seamless experience on all devices.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col items-center animate-feature-float3">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Modern UI/UX</h3>
            <p className="text-gray-400 text-center">
              Sleek, accessible, and intuitive design for all users.
            </p>
          </div>
        </div>
        {/* Roadmap / Updates Section */}
        <div className="max-w-2xl w-full mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-purple-300">
            What&apos;s Next?
          </h2>
          <p className="text-gray-300 mb-4">
            This project will continue to evolve! As new features are added
            (such as social login, 2FA, user profiles, and more), this page will
            be updated to reflect the latest capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Link
              href="/"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Back to Home
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:scale-105 transition-transform"
            >
              Try Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
