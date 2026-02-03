import { services } from "@/data/services"
import Image from "next/image"
import CTA from "@/components/CTA"
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function ServicePage({ params }) {
  const { slug, locale } = await params
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Services' });

  const service = services.find(s => s.slug === slug)

  if (!service) notFound();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] min-h-[520px] flex items-center justify-center text-center">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A192F]/60" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-transparent to-[#0A192F]" /> */}

        <div className="relative max-w-4xl px-6">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
            {t(`${slug}.title`)}
          </h1>
          <p className="text-gray-200 text-sm md:text-xl max-w-4xl mx-auto">
            {t(`${slug}.shortDescription`)}
          </p>
        </div>

      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs">
            {t("Overview")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mt-4 mb-4 tracking-tighter">
            {t("ProfessionalServices", { serviceName: t(`${slug}.title`) })}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t(`${slug}.description`)}
          </p>
        </div>

        <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-7xl px-6 px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs">
              {t("WhatWeOffer")}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mt-4 tracking-tighter">
              {t("IncludedServices")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => {
              const Icon = feature.icon

              return (
                <div
                  key={i}
                  className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-[#26C6DA]/10 flex items-center justify-center mb-6">
                    <Icon className="text-[#26C6DA] text-5xl" />
                  </div>

                  <p className="font-bold text-[#0A192F] leading-relaxed">
                    {t(`${slug}.features.${i}`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      {service.faqs?.length > 0 && (
        <section className="py-24 container mx-auto px-6  max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#0A192F] tracking-tighter">
              {t("FAQ")}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-blue-100 p-8 rounded-lg group hover:shadow-md transition-all"
              >
                <summary className="cursor-pointer text-lg font-bold text-[#0A192F] flex justify-between items-center">
                  {t(`${slug}.faqs.${i}.q`)}
                  <span className="text-[#26C6DA] text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {t(`${slug}.faqs.${i}.a`)}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <CTA />
    </>
  )
}
