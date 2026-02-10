export async function translateText(text, targetLang) {
  if (!text || targetLang !== "ar") return text;

  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, target: targetLang }),
    });

    if (!res.ok) return text;
    const data = await res.json();
    return data?.text || text;
  } catch (err) {
    console.error("Translation error:", err);
    return text;
  }
}
