import SectionWrapper from "@/components/SectionWrapper";
import BlogClient from "./BlogClient";
import { adminDb } from "@/lib/firebase-admin";
import { setRequestLocale } from "next-intl/server";

export const dynamic = "force-dynamic"; // ensures fresh blogs

// 🔥 Helper: convert Firestore objects into plain JSON
function serializeDoc(doc) {
  const data = doc.data();

  return Object.fromEntries(
    Object.entries({
      id: doc.id,
      ...data,
    }).map(([key, value]) => {
      // Convert Firestore Timestamp -> ISO string
      if (value?.toDate) {
        return [key, value.toDate().toISOString()];
      }

      return [key, value];
    })
  );
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "Engineering Insights & Technical Guides | Azcon Blog UAE"
    : "مدونة أزكون | مقالات هندسية ودلائل فنية";

  const description = isEn
    ? "Read Azcon’s engineering insights, maintenance strategies, infrastructure updates, and technical guides for UAE industries and commercial projects."
    : "اقرأ مقالات أزكون حول الهندسة والصيانة والدلائل الفنية للمشاريع في الإمارات.";

  // ⭐ Replace with your real domain
  const url = `https://azconinfra.com/${locale}/blog`;

  return {
    title,
    description,

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
      languages: {
        en: "https://azconinfra.com/en/blog",
        ar: "https://azconinfra.com/ar/blog",
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Azcon UAE",
      locale: isEn ? "en_US" : "ar_AE",
      type: "website",
      images: [
        {
          url: "https://azconinfra.com/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: "Azcon Engineering Blog UAE",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://azconinfra.com/og-blog.jpg"],
    },
  };
}

/* ================= PAGE ================= */
export default async function Page({ params }) {
  const { locale } = await params;

  // ⭐ VERY IMPORTANT for multilingual SEO + metadata sync
  setRequestLocale(locale);

  // 🔥 SERVER SIDE FIRESTORE FETCH
  const snapshot = await adminDb.collection("blogPosts").get();

  // ✅ Serialize + filter posts
  const posts = snapshot.docs
    .map(serializeDoc)
    .filter((post) => post.published !== false);

  return <BlogClient initialPosts={posts} />;
}

