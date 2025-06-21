"use client";
import { useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import { motion } from "framer-motion";
import Link from "next/link";
import Background from "../components/Background";

export default function KompresiPage() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [compressedUrl, setCompressedUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOriginalFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setLoading(true);
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressed = await imageCompression(file, options);
      setCompressedFile(compressed);
      setCompressedUrl(URL.createObjectURL(compressed));
    } catch {
      alert("Gagal mengompresi gambar!");
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!compressedFile) return;
    const link = document.createElement("a");
    link.href = compressedUrl;
    link.download = `ziply-kompresi-${originalFile?.name || "image"}`;
    link.click();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      <Background />
      <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 text-center">
        Kompresi Gambar
      </motion.h2>
      <div className="w-full max-w-xl bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          className="mb-6 hidden"
        />
        <button
          onClick={() => inputRef.current?.click()}
          className="mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg shadow-md hover:from-pink-500 hover:to-blue-500 transition-all"
        >
          Pilih Gambar
        </button>
        {previewUrl && (
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center mb-6">
            <div className="flex flex-col items-center">
              <span className="font-medium mb-2 text-gray-900">Sebelum</span>
              <img src={previewUrl} alt="Preview" className="w-40 h-40 object-contain rounded-lg border" />
              <span className="text-xs mt-2 text-blue-700 font-semibold">{originalFile && `${(originalFile.size / 1024).toFixed(2)} KB`}</span>
            </div>
            <span className="text-2xl font-bold">→</span>
            <div className="flex flex-col items-center">
              <span className="font-medium mb-2 text-gray-900">Sesudah</span>
              {loading ? (
                <span className="italic text-gray-500">Mengompresi...</span>
              ) : compressedUrl ? (
                <img src={compressedUrl} alt="Compressed" className="w-40 h-40 object-contain rounded-lg border" />
              ) : (
                <span className="italic text-gray-400">Belum ada hasil</span>
              )}
              <span className="text-xs mt-2 text-blue-700 font-semibold">{compressedFile && `${(compressedFile.size / 1024).toFixed(2)} KB`}</span>
            </div>
          </div>
        )}
        {compressedFile && !loading && (
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-blue-500 transition-all"
            >
              Download Hasil
            </button>
            <Link href="/terimakasih" passHref>
              <button className="px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold shadow-md hover:bg-gray-300 transition-all">
                Selesai
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 