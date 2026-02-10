import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, excerpt, content, text, texts, target } = await req.json();

  const inputTexts = Array.isArray(texts)
    ? texts
    : text
    ? [text]
    : [title, excerpt, content].filter((value) => typeof value === "string");

  if (!inputTexts.length || !target) {
    return NextResponse.json({ error: "Missing text or target" }, { status: 400 });
  }

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: inputTexts,
        target,
      }),
    }
  );

  const data = await res.json();

  const translated = data?.data?.translations?.map((t) => t.translatedText) || [];

  if (text) {
    return NextResponse.json({ text: translated[0] || text });
  }

  if (Array.isArray(texts)) {
    return NextResponse.json({ texts: translated });
  }

  return NextResponse.json({
    title: translated[0] || title,
    excerpt: translated[1] || excerpt,
    content: translated[2] || content,
  });
}
