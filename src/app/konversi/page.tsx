"use client";
import { useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KonversiPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles(newFiles);
    setPdfUrl("");
  };

  const handleConvert = async () => {
    setLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      for (const file of files) {
        if (file.type.startsWith("image/")) {
          const imgBytes = await file.arrayBuffer();
          let img;
          if (file.type === "image/png") {
            img = await pdfDoc.embedPng(imgBytes);
          } else {
            img = await pdfDoc.embedJpg(imgBytes);
          }
          const page = pdfDoc.addPage([img.width, img.height]);
          page.drawImage(img, {
            x: 0,
            y: 0,
            width: img.width,
            height: img.height,
          });
        } else if (file.type === "application/pdf") {
          const pdfBytes = await file.arrayBuffer();
          const donorPdf = await PDFDocument.load(pdfBytes);
          const copiedPages = await pdfDoc.copyPages(donorPdf, donorPdf.getPageIndices());
          copiedPages.forEach((p) => pdfDoc.addPage(p));
        } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.name.endsWith(".docx")) {
          // DOCX: convert to HTML, then render as text in PDF
          const arrayBuffer = await file.arrayBuffer();
          const { value: html } = await mammoth.convertToHtml({ arrayBuffer });
          // Strip HTML tags for simple text rendering
          const text = html.replace(/<[^>]+>/g, "");
          const page = pdfDoc.addPage([595, 842]); // A4 size
          page.drawText(text, { x: 50, y: 800, size: 12, maxWidth: 495 });
        } else {
          // Untuk file teks, convert ke PDF sebagai text page
          const text = await file.text();
          const page = pdfDoc.addPage([595, 842]); // A4 size
          page.drawText(text, { x: 50, y: 800, size: 12 });
        }
      }
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      setPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      alert("Gagal mengonversi file!");
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!pdfUrl) return;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `ziply-konversi.pdf`;
    link.click();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      {/* Latar belakang reuse */}
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute bg-blue-300 opacity-30 rounded-full w-72 h-72 top-[-60px] left-[-60px] blur-2xl" animate={{ y: [0, 40, 0], x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} />
        <motion.div className="absolute bg-pink-300 opacity-30 rounded-full w-96 h-96 bottom-[-80px] right-[-80px] blur-2xl" animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} />
        <motion.div className="absolute bg-purple-300 opacity-20 rounded-full w-60 h-60 top-1/2 left-1/2 blur-2xl" animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} />
      </div>
      <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 text-center">
        Konversi ke PDF
      </motion.h2>
      <div className="w-full max-w-xl bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center">
        <input
          type="file"
          accept="image/*,application/pdf,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          multiple
          ref={inputRef}
          onChange={handleFileChange}
          className="mb-6 hidden"
        />
        <button
          onClick={() => inputRef.current?.click()}
          className="mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg shadow-md hover:from-pink-500 hover:to-blue-500 transition-all"
        >
          Pilih File (Gambar, PDF, Teks, atau DOCX)
        </button>
        {files.length > 0 && (
          <div className="w-full mb-6">
            <span className="font-medium mb-2 block text-gray-900">Daftar File:</span>
            <ul className="list-disc pl-6 text-gray-700 text-sm">
              {files.map((file, idx) => (
                <li key={idx} className="mb-1 flex items-center gap-2">
                  {file.type.startsWith("image/") && (
                    <img src={URL.createObjectURL(file)} alt={file.name} className="w-8 h-8 object-cover rounded border" />
                  )}
                  <span>{file.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {files.length > 0 && !pdfUrl && (
          <button
            onClick={handleConvert}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-blue-500 transition-all mb-4"
            disabled={loading}
          >
            {loading ? "Mengonversi..." : "Konversi & Gabungkan ke PDF"}
          </button>
        )}
        {pdfUrl && (
          <div className="w-full flex flex-col items-center mt-4">
            <span className="font-bold mb-2 text-blue-700">File PDF berhasil dibuat!</span>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-2">
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-blue-500 transition-all"
              >
                Download PDF
              </button>
              <Link href="/terimakasih" passHref>
                <button className="px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold shadow-md hover:bg-gray-300 transition-all">
                  Selesai
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 