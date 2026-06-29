import TermsClient from "./TermsClient";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const title = "Terms & Conditions | Azcon Infra Technical Services";
  const description =
    "Read the Terms and Conditions governing the use of Azcon Infra Technical Services LLC website and services in the UAE.";
  const url = `https://azconinfra.com/${locale}/terms`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://azconinfra.com/en/terms",
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
  return <TermsClient />;
}
