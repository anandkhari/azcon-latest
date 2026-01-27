import HomeClient from "./HomeClient";
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const isEn = locale === 'en';

  return {
    title: isEn
      ? "Azcon - Engineering Excellence & Technical Services UAE"
      : "أزكون - التميز الهندسي والخدمات الفنية في الإمارات",
    description: isEn
      ? "Professional technical services across UAE"
      : "خدمات فنية احترافية في جميع أنحاء الإمارات"
  };
}


export default async function HomePage({ params }) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return <HomeClient />;
}
