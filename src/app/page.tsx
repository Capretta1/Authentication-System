"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Particle = { top: number; left: number; delay: number };

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Only runs on the client
    setParticles(
      Array.from({ length: 20 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing 3D spheres */}
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse-slow delay-700" />
        {/* Parallax floating cubes */}
        <div
          className="absolute w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl shadow-2xl top-1/4 left-10 animate-float-cube"
          style={{ transform: "rotate3d(1,1,0,30deg)" }}
        />
        <div
          className="absolute w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-xl shadow-xl bottom-1/3 right-20 animate-float-cube2"
          style={{ transform: "rotate3d(1,0.5,0,40deg)" }}
        />
        {/* Floating particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full w-1.5 h-1.5 animate-particle-float"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center items-center text-center">
          {/* 3D Floating Logo/Icon with pulse and rotate */}
          <div className="mb-12 transform hover:scale-110 transition-transform duration-500 perspective-1000">
            <div
              className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl shadow-2xl
                          transform rotate-12 hover:rotate-0 transition-transform duration-500 flex items-center justify-center
                          animate-hero-rotate-pulse border-4 border-purple-400/40 border-double"
            >
              <div className="text-6xl font-bold transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                🔐
              </div>
            </div>
          </div>

          {/* Main Heading with 3D effect and glow */}
          <h1
            className="text-6xl md:text-7xl font-bold mb-6
                         bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500
                         transform hover:scale-105 transition-transform duration-300
                         [text-shadow:_0_4px_32px_rgba(124,58,237,0.5),_2px_2px_2px_rgb(0_0_0_/_20%)]"
          >
            Secure Authentication
          </h1>

          {/* Animated subheading */}
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl animate-fade-in-up">
            Experience the next generation of secure, seamless authentication.
            <br />
            Your gateway to a protected digital presence.
          </p>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl
                           font-semibold text-lg shadow-lg
                           transform hover:scale-105 hover:shadow-2xl
                           transition-all duration-300 ease-in-out border-2 border-purple-400/40"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl
                           font-semibold text-lg border border-white/20
                           transform hover:scale-105 hover:bg-white/20
                           transition-all duration-300 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl
                           font-semibold text-lg shadow-lg
                           transform hover:scale-105 hover:shadow-2xl
                           transition-all duration-300 ease-in-out border-2 border-blue-400/40"
            >
              About
            </Link>
          </div>

          {/* Feature Cards with floating animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8
                          transform hover:-translate-y-2 transition-transform duration-300
                          border border-white/10 animate-feature-float"
            >
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Secure by Design</h3>
              <p className="text-gray-400">
                State-of-the-art encryption and security protocols to protect
                your data
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8
                          transform hover:-translate-y-2 transition-transform duration-300
                          border border-white/10 animate-feature-float2"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                Optimized performance for quick and seamless authentication
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8
                          transform hover:-translate-y-2 transition-transform duration-300
                          border border-white/10 animate-feature-float3"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">User Friendly</h3>
              <p className="text-gray-400">
                Intuitive interface designed for the best user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
