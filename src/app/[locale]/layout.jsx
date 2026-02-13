import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FlotingActionButtons";

export async function generateMetadata({ params }) {
  const { locale } = params; // ✅ remove await

  setRequestLocale(locale);

  const isEn = locale === "en";

  return {
    metadataBase: new URL("https://azconinfra.com"),

    title: {
      default: isEn ? "Azcon Infra" : "أزكون إنفرا",
      template: "%s | Azcon Infra",
    },

    description: isEn
      ? "Specialized technical domains and infrastructure maintenance across the UAE."
      : "حلول البنية التحتية والصيانة التقنية المتخصصة في جميع أنحاء الإمارات.",
  };
}


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </NextIntlClientProvider>
  );
}
