"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plus, Trash2, ArrowUpRight, Clock } from "lucide-react";

const PAGE_SIZE = 12;

export default function BlogAdmin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState("all"); // all | published | draft
  const [sort, setSort] = useState("latest"); // latest | oldest
  const [page, setPage] = useState(1);

  useEffect(() => {
    const q = collection(db, "blogPosts");

    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const deletePost = async (id) => {
    if (!confirm("Delete this post permanently?")) return;
    await deleteDoc(doc(db, "blogPosts", id));
  };

  /* ---------------- FILTER + SORT ---------------- */

  const filteredPosts = posts.filter((post) => {
    if (filter === "published") return post.published === true;
    if (filter === "draft") return post.published === false;
    return true;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const aDate = a.createdAt?.toDate?.() || new Date(0);
    const bDate = b.createdAt?.toDate?.() || new Date(0);

    return sort === "latest" ? bDate - aDate : aDate - bDate;
  });

  /* ---------------- PAGINATION ---------------- */

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = sortedPosts.slice(start, start + PAGE_SIZE);

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[#26C6DA] text-[10px] font-black uppercase tracking-[0.4em]">
            Azcon CMS
          </span>
          <h1 className="text-3xl font-black text-[#0A192F] uppercase tracking-tight mt-2">
            Blog Studio
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage content visually
          </p>
        </div>

        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#0A192F] text-white px-6 py-3 text-[10px] uppercase tracking-widest font-black hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all"
        >
          <Plus size={14} /> New Post
        </Link>
      </div>

      {/* FILTER BAR */}
      {/* FILTER BAR */}
<div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">

  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
    Status
    <select
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
        setPage(1);
      }}
      className="border px-4 py-2 rounded-lg text-sm font-bold text-[#0A192F] focus:outline-none focus:border-[#26C6DA]"
    >
      <option value="all">All</option>
      <option value="published">Published</option>
      <option value="draft">Draft</option>
    </select>
  </div>

  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
    Sort
    <select
      value={sort}
      onChange={(e) => {
        setSort(e.target.value);
        setPage(1);
      }}
      className="border px-4 py-2 rounded-lg text-sm font-bold text-[#0A192F] focus:outline-none focus:border-[#26C6DA]"
    >
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
    </select>
  </div>

</div>


      {/* CONTENT */}
      {loading ? (
        <p className="text-gray-400 text-sm">Loading posts...</p>
      ) : visiblePosts.length === 0 ? (
        <div className="border border-dashed rounded-xl p-14 text-center text-gray-400 text-sm">
          No matching posts.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">

          {visiblePosts.map((post) => (
  <Link
    key={post.id}
    href={`/admin/blog/${post.id}`}
    className="block group"
  >
    <article className="relative bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all">

      {/* DELETE */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          deletePost(post.id);
        }}
        className="absolute top-2 right-2 z-20 bg-red-500/90 hover:bg-red-600 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition"
      >
        <Trash2 size={12} />
      </button>

      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl bg-gray-200">
        <img
          src={post.coverImage || "https://via.placeholder.com/600x400"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />

        <div className="absolute top-0 left-0 bg-[#0A192F] text-white px-3 py-1 text-[7px] font-mono uppercase tracking-widest">
          {post.published ? "Published" : "Draft"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <div className="flex items-center gap-2 text-slate-400">
          <Clock size={10} />
          <span className="text-[8px] font-black uppercase tracking-widest">
            {post.createdAt?.toDate?.().toDateString?.() || "Recent"}
          </span>
        </div>

        <h3 className="text-sm font-black uppercase text-[#0A192F] leading-snug line-clamp-2 group-hover:text-[#26C6DA] transition-colors">
          {post.title}
        </h3>

        <div className="pt-1 flex items-center gap-1">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Edit
          </span>
          <ArrowUpRight
            size={12}
            className="text-[#26C6DA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </div>

      </div>
    </article>
  </Link>
))}


        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-8">

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 rounded-lg text-sm font-black transition ${
                page === i + 1
                  ? "bg-[#26C6DA] text-[#0A192F]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}
