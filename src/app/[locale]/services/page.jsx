import ServicesClient from "./ServicesClient";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "Engineering & Technical Services in UAE | Azcon"
    : "الخدمات الهندسية والفنية في الإمارات | أزكون";

  const description = isEn
    ? "Explore Azcon’s engineering, MEP solutions, precision engineering, and building maintenance services trusted across UAE industries."
    : "اكتشف خدمات أزكون الهندسية وحلول MEP والهندسة الدقيقة وصيانة المباني في الإمارات.";

  const url = `https://azconinfra.com/${locale}/services`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://azconinfra.com/en/services",
        ar: "https://azconinfra.com/ar/services",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Azcon UAE",
      locale: isEn ? "en_US" : "ar_AE",
      type: "website",
      images: [{ url: "https://azconinfra.com/og-services.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://azconinfra.com/og-services.jpg"],
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesClient />;
}

