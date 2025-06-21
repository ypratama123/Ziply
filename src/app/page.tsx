"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Nama aplikasi dengan animasi */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg mb-8 text-center"
      >
        Ziply
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-700 mb-12 text-center max-w-xl"
      >
        Kompres & konversi file dengan mudah, cepat, dan tampilan modern.
      </motion.p>

      {/* Tombol utama */}
      <motion.a
        href="/fitur"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xl font-semibold shadow-lg transition-all duration-300 hover:from-pink-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-pink-200"
      >
        Mulai Sekarang
      </motion.a>
    </div>
  );
}
