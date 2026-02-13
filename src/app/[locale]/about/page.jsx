import AboutClient from "./AboutClient";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "About Azcon | Engineering & Technical Services Company in UAE"
    : "عن أزكون | شركة هندسية وخدمات فنية في الإمارات";

  const description = isEn
    ? "Discover Azcon’s 18+ years of engineering excellence in the UAE. Experts in precision engineering, building maintenance, MEP solutions, and technical services."
    : "اكتشف أكثر من 18 عاماً من التميز الهندسي مع أزكون في الإمارات. خبراء في الهندسة الدقيقة وصيانة المباني وحلول MEP والخدمات الفنية.";

  const url = `https://azconinfra.com/${locale}/about`; // ⭐ replace with real domain

  return {
    title,
    description,

    // ⭐ SEO Indexing Signals
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // ⭐ Canonical + Hreflang (VERY IMPORTANT for multilingual SEO)
    alternates: {
      canonical: url,
      languages: {
        en: "https://azconinfra.com/en/about",
        ar: "https://azconinfra.com/ar/about",
      },
    },

    // ⭐ Open Graph (LinkedIn / WhatsApp / Facebook Preview)
    openGraph: {
      title,
      description,
      url,
      siteName: "Azcon UAE",
      locale: isEn ? "en_US" : "ar_AE",
      type: "website",
      images: [
        {
          url: "https://azconinfra.com/og-about.jpg", // ⭐ add real OG image
          width: 1200,
          height: 630,
          alt: "Azcon Engineering UAE",
        },
      ],
    },

    // ⭐ Twitter Card SEO
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://azconinfra.com/og-about.jpg"],
    },

    // ⭐ Extra Brand Signals (Advanced SEO)
    keywords: isEn
      ? [
          "Azcon UAE",
          "Engineering company UAE",
          "MEP services UAE",
          "Building maintenance UAE",
          "Technical services UAE",
          "Precision engineering UAE",
        ]
      : [
          "أزكون الإمارات",
          "شركة هندسية الإمارات",
          "خدمات MEP الإمارات",
          "صيانة المباني الإمارات",
          "الخدمات الفنية الإمارات",
        ],

    // ⭐ Geo targeting (helps local SEO)
    metadataBase: new URL("https://azconinfra.com"),
  };
}

const AboutPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutClient />;
};

export default AboutPage;

