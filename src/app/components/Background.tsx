"use client";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <motion.div
        className="absolute bg-blue-300/40 rounded-full w-96 h-96 top-[-120px] left-[-100px] blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-pink-300/40 rounded-full w-[500px] h-[500px] bottom-[-220px] right-[-180px] blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-purple-300/30 rounded-full w-80 h-80 top-1/3 left-1/2 -translate-x-1/2 blur-3xl"
        animate={{ scale: [1, 1.25, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Background; 