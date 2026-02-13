import ContactClient from "./ContactClient";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "Contact Azcon | Engineering & Technical Services Company in UAE"
    : "اتصل بأزكون | شركة هندسية وخدمات فنية في الإمارات";

  const description = isEn
    ? "Get in touch with Azcon for engineering, MEP, and building maintenance services across UAE. Speak with our technical experts today."
    : "تواصل مع أزكون للحصول على خدمات الهندسة وحلول MEP وصيانة المباني في الإمارات.";

  const url = `https://azconinfra.com/${locale}/contact`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://azconinfra.com/en/contact",
        ar: "https://azconinfra.com/ar/contact",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Azcon UAE",
      locale: isEn ? "en_US" : "ar_AE",
      type: "website",
      images: [{ url: "https://azconinfra.com/og-contact.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://azconinfra.com/og-contact.jpg"],
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactClient />;
}

