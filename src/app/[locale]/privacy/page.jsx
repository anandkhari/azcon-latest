import PrivacyClient from "./PrivacyClient";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const title = "Privacy Policy | Azcon Infra Technical Services";
  const description =
    "Learn how Azcon Infra Technical Services LLC collects, uses, and protects your personal information in accordance with UAE PDPL.";
  const url = `https://azconinfra.com/${locale}/privacy`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://azconinfra.com/en/privacy",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Azcon Infra",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyClient />;
}
