"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FiturPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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