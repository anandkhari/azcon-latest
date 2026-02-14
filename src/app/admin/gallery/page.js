"use client";

import { useState, useEffect, useRef } from "react";
import { storage, db } from "@/lib/firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUploadCloud,
  FiTrash2,
  FiX,
  FiPlus,
  FiExternalLink,
} from "react-icons/fi";
import SectionWrapper from "@/components/SectionWrapper";

export default function AdminDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [category, setCategory] = useState("carpentry");
  const [activeCategory, setActiveCategory] = useState("all");
  const fileInputRef = useRef(null);

  /* ================= FIRESTORE LISTENER ================= */
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "gallery"), (snapshot) => {
      setGalleryItems(
        snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        })),
      );
    });
    return () => unsub();
  }, []);

  /* ================= FILTER LOGIC ================= */
  const categories = [
    "all",
    ...Array.from(new Set(galleryItems.map((i) => i.category).filter(Boolean))),
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  /* ================= FILE HANDLING ================= */
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
    }));

    setSelectedFiles((prev) => [...prev, ...mapped]);
  };

  const removeSelectedFile = (id) => {
    setSelectedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  /* ================= UPLOAD ================= */
  const handleUpload = async () => {
    if (!selectedFiles.length || isUploading) return;

    setIsUploading(true);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const { file, name } = selectedFiles[i];

        const ext = file.name.split(".").pop();
        const safeName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.${ext}`;

        const storageRef = ref(storage, `gallery/${safeName}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        await new Promise((resolve, reject) => {
          uploadTask.on("state_changed", null, reject, resolve);
        });

        const url = await getDownloadURL(storageRef);

        await addDoc(collection(db, "gallery"), {
          name: name || file.name,
          url,
          path: storageRef.fullPath,
          category,
          createdAt: new Date(),
        });
      }

      setSelectedFiles([]);
      setIsModalOpen(false);
    } finally {
      setIsUploading(false);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (item) => {
    if (!confirm("Delete this image?")) return;

    const fileRef = ref(storage, item.path || item.url);

    try {
      await deleteObject(fileRef);
    } catch {}

    await deleteDoc(doc(db, "gallery", item.id));
  };

  return (
    <SectionWrapper className="bg-[#f8fafc] min-h-screen ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h1 className="text-4xl md:text-5xl font-black text-[#0A192F] uppercase">
            Gallery <span className="text-[#26C6DA]">Management</span>
          </h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-[#0A192F] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-black hover:bg-[#26C6DA] hover:text-[#0A192F]"
          >
            <FiPlus /> Upload New Media
          </button>
        </header>

        {/* FILTER BAR */}
        <div className="flex flex-wrap gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase font-black ${
                activeCategory === cat
                  ? "text-red-500"
                  : "text-gray-400 hover:text-[#26C6DA]"
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img src={item.url} className="w-full h-full object-cover" />

              {/* Small floating delete button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-red-500 text-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= UPLOAD MODAL RESTORED ================= */}
      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isUploading && setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0A192F]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-8 pb-0">
                <div>
                  <h2 className="text-2xl font-black text-[#0A192F] uppercase tracking-tight">
                    Upload Media
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    Add new assets to your library
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="p-8 space-y-6">
                {/* CATEGORY SELECTOR */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black  uppercase tracking-[0.2em] text-black">
                    Target Category
                  </label>
               <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full bg-gray-50 border-2 border-gray-100 text-black focus:border-[#26C6DA] rounded-2xl p-4 text-sm font-bold outline-none transition-all appearance-none cursor-pointer"
>
  <option value="building-maintenance">Building Maintenance</option>
  <option value="infrastructure-maintenance">Infrastructure Maintenance</option>
  <option value="fit-out-works">Fit-Out Works</option>
  <option value="hvac-works">HVAC Works</option>
  <option value="electrical-works">Electrical Works</option>
  <option value="plumbing-contracting">Plumbing Contracting</option>
  <option value="metal-fabrication">Metal Fabrication</option>
</select>

                </div>

                {/* DRAG & DROP ZONE */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`
              relative group border-2 border-dashed rounded-3xl p-10 
              flex flex-col items-center justify-center gap-4 transition-all cursor-pointer
              ${selectedFiles.length > 0 ? "border-[#26C6DA] bg-[#26C6DA]/5" : "border-gray-200 hover:border-[#26C6DA] hover:bg-gray-50"}
            `}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <FiUploadCloud className="text-3xl text-[#26C6DA]" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#0A192F]">
                      Click or drag images here
                    </p>
                    <p className="text-xs text-gray-400 mt-1 font-medium">
                      Supports JPG, PNG, WEBP
                    </p>
                  </div>
                </div>

                {/* PREVIEW LIST */}
                <AnimatePresence>
                  {selectedFiles.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                          Selected Files ({selectedFiles.length})
                        </span>
                      </div>
                      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        {selectedFiles.map((file) => (
                          <div
                            key={file.id}
                            className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden group"
                          >
                            <img
                              src={file.preview}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeSelectedFile(file.id);
                              }}
                              className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                            >
                              <FiTrash2 className="text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ACTION BUTTON */}
                <button
                  onClick={handleUpload}
                  disabled={isUploading || selectedFiles.length === 0}
                  className={`
              w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-lg
              ${
                isUploading || selectedFiles.length === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                  : "bg-[#0A192F] text-white hover:bg-[#26C6DA] hover:text-[#0A192F] active:scale-[0.98]"
              }
            `}
                >
                  {isUploading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Uploading to Cloud...
                    </span>
                  ) : (
                    "Confirm & Publish"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
