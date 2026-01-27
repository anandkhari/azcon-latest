import AboutClient from "./AboutClient";
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const isEn = locale === 'en';
  return {
    title: isEn ? "About Azcon - Engineering Excellence in UAE" : "عن أزكون - التميز الهندسي في الإمارات",
    description: isEn 
      ? "Learn about Azcon’s 18+ years of legacy in precision engineering, building maintenance, and technical services in the UAE."
      : "تعرف على إرث أزكون الذي يمتد لأكثر من 18 عاماً من الدقة الهندسية وصيانة المباني والخدمات الفنية في الإمارات.",
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        ar: '/ar/about',
      },
    },
  };
}

const AboutPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutClient />;
};

export default AboutPage;
