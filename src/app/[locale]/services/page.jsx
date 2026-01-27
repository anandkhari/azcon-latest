import ServicesClient from "./ServicesClient";
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const isEn = locale === 'en';
  return {
    title: isEn ? "Our Technical Services - Azcon UAE" : "خدماتنا الفنية - أزكون الإمارات",
    description: isEn 
      ? "Explore our wide range of technical services including building maintenance, fit-out works, HVAC, electrical, and infrastructure solutions in the UAE."
      : "استكشف مجموعتنا الواسعة من الخدمات الفنية بما في ذلك صيانة المباني وأعمال التجهيزات والتكييف والكهرباء وحلول البنية التحتية في الإمارات.",
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: '/en/services',
        ar: '/ar/services',
      },
    },
  };
}

const ServicesPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesClient />;
};

export default ServicesPage;