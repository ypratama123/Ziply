"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FiturPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Latar belakang dinamis reuse dari landing page */}
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
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-10 text-center"
      >
        Pilih Fitur Ziply
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8">
        <Link href="/kompresi" passHref>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-semibold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Kompresi Gambar
          </motion.button>
        </Link>
        <Link href="/konversi" passHref>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(236,72,153,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-6 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl font-semibold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            Konversi ke PDF
          </motion.button>
        </Link>
      </div>
    </div>
  );
} 