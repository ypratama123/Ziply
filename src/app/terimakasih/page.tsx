"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Background from "../components/Background";

export default function TerimaKasihPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      <Background />
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