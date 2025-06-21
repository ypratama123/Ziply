"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TerimaKasihPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      {/* Latar belakang reuse */}
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute bg-blue-300 opacity-30 rounded-full w-72 h-72 top-[-60px] left-[-60px] blur-2xl" animate={{ y: [0, 40, 0], x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} />
        <motion.div className="absolute bg-pink-300 opacity-30 rounded-full w-96 h-96 bottom-[-80px] right-[-80px] blur-2xl" animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} />
        <motion.div className="absolute bg-purple-300 opacity-20 rounded-full w-60 h-60 top-1/2 left-1/2 blur-2xl" animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} />
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex flex-col items-center bg-white/80 rounded-2xl shadow-xl px-10 py-12"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-6xl md:text-7xl mb-4"
        >
          🎉
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 text-center"
        >
          Terima Kasih!
        </motion.h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
          Kami sangat menghargai waktu dan kepercayaan Anda telah menggunakan Ziply. Semoga fitur kompresi & konversi kami bermanfaat untuk Anda!
        </p>
        <Link href="/">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xl font-semibold shadow-lg transition-all duration-300 hover:from-pink-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-pink-200">
            Kembali ke Beranda
          </button>
        </Link>
      </motion.div>
    </div>
  );
} 