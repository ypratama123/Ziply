"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Ziply";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Nama aplikasi dengan animasi */}
      <motion.div
        className="mb-8 text-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg text-center relative animate-gradient"
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 30px rgba(59, 130, 246, 0.8)",
            transition: { duration: 0.3 }
          }}
        >
          {currentText}
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-700 mb-12 text-center max-w-xl"
      >
        Kompres & konversi file dengan mudah, cepat, dan praktis.
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
