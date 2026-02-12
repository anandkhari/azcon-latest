import SectionWrapper from "@/components/SectionWrapper";
import BlogClient from "./BlogClient";
import { adminDb } from "@/lib/firebase-admin";

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

export default async function Page() {
  // 🔥 SERVER SIDE FIRESTORE FETCH
  const snapshot = await adminDb.collection("blogPosts").get();

  // ✅ Serialize + filter posts
  const posts = snapshot.docs
    .map(serializeDoc)
    .filter((post) => post.published !== false);

  return <BlogClient initialPosts={posts} />;
}
