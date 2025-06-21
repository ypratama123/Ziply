"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Latar belakang dinamis: bubble animasi */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bg-blue-300 opacity-30 rounded-full w-72 h-72 top-[-60px] left-[-60px] blur-2xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bg-pink-300 opacity-30 rounded-full w-96 h-96 bottom-[-80px] right-[-80px] blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bg-purple-300 opacity-20 rounded-full w-60 h-60 top-1/2 left-1/2 blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>

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
