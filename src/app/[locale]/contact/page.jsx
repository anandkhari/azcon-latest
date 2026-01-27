import ContactClient from "./ContactClient";
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const isEn = locale === 'en';
  return {
    title: isEn ? "Contact Azcon - Technical Services in UAE" : "اتصل بأزكون - الخدمات الفنية في الإمارات",
    description: isEn 
      ? "Get in touch with Azcon for expert building maintenance, fit-out works, and infrastructure solutions in Dubai and across the UAE."
      : "تواصل مع أزكون للحصول على خدمات صيانة المباني وأعمال التجهيزات وحلول البنية التحتية في دبي وجميع أنحاء الإمارات.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        ar: '/ar/contact',
      },
    },
  };
}

const ContactPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactClient />;
};

export default ContactPage;