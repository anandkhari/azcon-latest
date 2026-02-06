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
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiUploadCloud, 
  FiTrash2, 
  FiX, 
  FiImage, 
  FiCheckCircle, 
  FiAlertCircle,
  FiPlus,
  FiExternalLink
} from "react-icons/fi";
import SectionWrapper from "@/components/SectionWrapper";

export default function AdminDashboard() {
  // UI State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [toasts, setToasts] = useState([]);
  const fileInputRef = useRef(null);

  console.log("Dashboard component rendered");

  useEffect(() => {
    console.log("GALLERY ITEMS STATE LENGTH:", galleryItems.length);
    if (galleryItems.length > 0) {
      console.log("GALLERY FIRST ITEM:", galleryItems[0]);
    }
  }, [galleryItems]);

  /* ---------------- NOTIFICATIONS ---------------- */
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  /* ---------------- FIRESTORE SYNC ---------------- */
  useEffect(() => {
    console.log("Starting gallery listener...");
    // Resilient query; we can re-add orderBy once all docs have createdAt
    const q = collection(db, "gallery");
    const unsub = onSnapshot(
      q, 
      (snapshot) => {
        console.log("GALLERY SNAPSHOT RECEIVED");
        console.log("GALLERY SNAPSHOT SIZE:", snapshot.size);
        console.log(
          "GALLERY DOC IDs:",
          snapshot.docs.map((d) => d.id)
        );
        console.log(
          "GALLERY DOC DATA:",
          snapshot.docs.map((d) => d.data())
        );
        setGalleryItems(
          snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          }))
        );
      },
      (error) => {
        console.error("GALLERY LISTENER ERROR:", error);
        addToast("Failed to sync gallery: " + error.message, "error");
      }
    );
    return () => unsub();
  }, []);

  /* ---------------- FILE HANDLING ---------------- */
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate types
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    if (validFiles.length !== files.length) {
      addToast("Some files were skipped. Only images are allowed.", "error");
    }

    const mapped = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
      name: file.name
    }));

    setSelectedFiles((prev) => [...prev, ...mapped]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeSelectedFile = (id) => {
    setSelectedFiles((prev) => {
      const filtered = prev.filter((f) => f.id !== id);
      const removed = prev.find((f) => f.id === id);
      if (removed) URL.revokeObjectURL(removed.preview);
      return filtered;
    });
  };

  /* ---------------- UPLOAD LOGIC (PRODUCTION-READY) ---------------- */
  /* ---------------- UPLOAD LOGIC (FIXED) ---------------- */
  const handleUpload = async () => {
    if (!selectedFiles.length || isUploading) return;

    setIsUploading(true);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const { file, name } = selectedFiles[i];

        const ext = file.name.split(".").pop();
        const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const storageRef = ref(storage, `gallery/${safeName}`);

        // 1️⃣ Upload
        const uploadTask = uploadBytesResumable(storageRef, file);
        await new Promise((resolve, reject) => {
          uploadTask.on("state_changed", null, reject, resolve);
        });

        // 2️⃣ Get URL
        const url = await getDownloadURL(storageRef);

        // 3️⃣ Write Firestore
        // CRITICAL FIX: Use new Date() instead of serverTimestamp() to prevent
        // hangs if the client is offline or can't sync clock immediately.
        const docRef = await addDoc(collection(db, "gallery"), {
          name: name || file.name,
          url,
          path: storageRef.fullPath,
          createdAt: new Date(),
        });
        console.log("FIRESTORE DOC CREATED:", docRef.id);
      }

      addToast("Upload completed successfully!");
      
      // Reset logic
      selectedFiles.forEach(f => URL.revokeObjectURL(f.preview));
      setSelectedFiles([]);
      setIsModalOpen(false);

    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      addToast("Upload failed: " + err.message, "error");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };


  /* ---------------- DELETE LOGIC ---------------- */
  const handleDelete = async (item) => {
    if (!confirm("Are you sure you want to delete this image? This action cannot be undone.")) return;

    try {
      // First delete from storage
      const storagePath = item.path || item.url;
      const fileRef = ref(storage, storagePath);
      
      try {
        await deleteObject(fileRef);
      } catch (storageErr) {
        console.warn("Storage deletion failed or file not found:", storageErr);
        // Continue to delete firestore record anyway to avoid ghost entries
      }

      // Then delete from Firestore
      await deleteDoc(doc(db, "gallery", item.id));
      addToast("Image deleted successfully.");
    } catch (err) {
      console.error("DELETE ERROR:", err);
      addToast("Delete failed: " + err.message, "error");
    }
  };

  return (
    <SectionWrapper className="bg-[#f8fafc] min-h-screen ">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* DASHBOARD HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A192F] uppercase">
              Gallery <span className="text-[#26C6DA]">Management</span>
            </h1>
            <p className="text-gray-500 mt-2 font-medium tracking-wide">
              Maintain and update the official Azcon media library.
            </p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-[#0A192F] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-black hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all duration-300 shadow-xl self-start md:self-auto"
          >
            <FiPlus className="text-lg group-hover:rotate-90 transition-transform duration-300" />
            Upload New Media
          </button>
        </header>

        {/* GALLERY GRID */}
        {galleryItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* OVERLAY ACTIONS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex-1 min-w-0 mr-4">
                        <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Media Title</p>
                        <p className="text-white text-sm font-bold truncate">{item.name}</p>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                          title="View Original"
                        >
                          <FiExternalLink />
                        </a>
                        <button
                          onClick={() => handleDelete(item)}
                          className="p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-colors"
                          title="Delete Media"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <FiImage className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F]">No media found</h3>
            <p className="text-gray-500 mt-2">Your gallery is currently empty. Start by uploading images.</p>
            <button
               onClick={() => setIsModalOpen(true)}
               className="mt-8 text-sm font-black uppercase tracking-widest text-[#26C6DA] hover:text-[#0A192F] transition-colors"
            >
              + Click to Upload
            </button>
          </div>
        )}

      </div>

      {/* UPLOAD MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isUploading && setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0A192F]/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* MODAL HEADER */}
              <div className="flex justify-between items-center p-8 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-black text-[#0A192F] uppercase tracking-tight">Upload Center</h2>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Azcon CMS v1.0</p>
                </div>
                {!isUploading && (
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FiX className="text-2xl text-gray-400" />
                  </button>
                )}
              </div>

              <div className="p-8">
                {/* DROPZONE / FILE SELECT */}
                {!selectedFiles.length ? (
                  <div className="group relative border-2 border-dashed border-gray-200 hover:border-[#26C6DA] rounded-2xl h-80 flex flex-col items-center justify-center transition-all duration-300 bg-gray-50/50">
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FiUploadCloud className="text-3xl text-[#26C6DA]" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0A192F]">Click or Drag Images</p>
                    <p className="text-xs text-gray-400 mt-2 font-medium">PNG, JPG or WebP (Max 5MB per file)</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* PREVIEW GRID */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {selectedFiles.map((f) => (
                        <div key={f.id} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                          <img src={f.preview} className="w-full h-full object-cover" alt="Preview" />
                          <button
                            disabled={isUploading}
                            onClick={() => removeSelectedFile(f.id)}
                            className="absolute top-2 right-2 p-1.5 bg-white/90 hover:bg-red-500 hover:text-white text-gray-600 rounded-lg transition-all shadow-sm"
                          >
                            <FiX />
                          </button>
                        </div>
                      ))}
                      {!isUploading && (
                        <div className="relative aspect-square rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center hover:border-[#26C6DA] transition-colors">
                           <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <FiPlus className="text-2xl text-gray-300" />
                        </div>
                      )}
                    </div>


                    {/* ACTIONS */}
                    <div className="flex gap-4">
                      <button
                        disabled={isUploading}
                        onClick={() => setSelectedFiles([])}
                        className="flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-red-500 transition-colors"
                      >
                        Reset Selection
                      </button>
                      <button
                        disabled={isUploading}
                        onClick={handleUpload}
                        className="flex-[2] bg-[#0A192F] text-white py-4 px-8 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-3"
                      >
                        {isUploading ? "Working..." : "Confirm Upload"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOAST SYSTEM */}
      <div className="fixed bottom-8 right-8 z-[110] flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border ${
                toast.type === "success" 
                ? "bg-white/90 border-green-100 text-[#0A192F]" 
                : "bg-red-50 border-red-100 text-red-600"
              }`}
            >
              {toast.type === "success" ? (
                <FiCheckCircle className="text-green-500 text-xl" />
              ) : (
                <FiAlertCircle className="text-red-500 text-xl" />
              )}
              <span className="text-sm font-bold tracking-tight">{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

    </SectionWrapper>
  );
}
