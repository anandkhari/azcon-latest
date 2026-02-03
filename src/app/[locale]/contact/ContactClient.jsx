"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ContactClient = () => {
  const t = useTranslations("ContactPage");

  const contactItems = [
    {
      key: "Hotline",
      label: "TECHNICAL HOTLINE",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
    {
      key: "Email",
      label: "OFFICIAL INQUIRY",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      key: "Office",
      label: "OFFICE HEADQUARTERS",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ];

  return (
    <>
      {/* HERO SECTION - UNALTERED */}
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Infrastructure Services"
            fill
            className="object-cover scale-105 opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#0A192F]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="h-[2px] bg-[#26C6DA] mx-auto mb-10 shadow-[0_0_20px_rgba(38,198,218,0.8)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
              {t.rich("Hero.Title", {
                italic: (chunks) => (
                  <span className="text-[#26C6DA] ">{chunks}</span>
                ),
              })}
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto font-light tracking-tight opacity-90">
              {t("Hero.Subtitle")}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#26C6DA]/20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#26C6DA]/20 hidden md:block" />
      </section>

      {/* ================= REDESIGNED CONTACT SECTION ================= */}
      <section className=" py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
        {/* Engineering Blueprint Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="max-w-[1400px] mx-auto bg-white shadow-2xl relative z-10">
          <div className="grid lg:grid-cols-12">
            {/* 1. LEFT SIDE: THE FORM (7 Columns) */}
            <div className="lg:col-span-7 p-8 md:p-16 border-r border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#26C6DA] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest italic">
                  Request Specs
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0A192F] tracking-tighter uppercase mb-12 italic">
                Let's <span className="text-[#26C6DA] not-italic">Talk.</span>
              </h3>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#26C6DA] transition-colors">
                      {t("Form.FullName")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-200 focus:border-[#26C6DA] bg-transparent py-3 outline-none transition-all font-semibold text-[#0A192F] placeholder:text-gray-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#26C6DA] transition-colors">
                      {t("Form.Phone")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full border-b border-gray-200 focus:border-[#26C6DA] bg-transparent py-3 outline-none transition-all font-semibold text-[#0A192F] placeholder:text-gray-200"
                      placeholder="+971 00 000 0000"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#26C6DA] transition-colors">
                    {t("Form.Email")}
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-200 focus:border-[#26C6DA] bg-transparent py-3 outline-none transition-all font-semibold text-[#0A192F] placeholder:text-gray-200"
                    placeholder="engineer@company.com"
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#26C6DA] transition-colors">
                    {t("Form.Requirements")}
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border-b border-gray-200 focus:border-[#26C6DA] bg-transparent py-3 outline-none transition-all font-semibold text-[#0A192F] resize-none placeholder:text-gray-200"
                    placeholder="Describe your project infrastructure..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#0A192F] text-white font-black uppercase tracking-[.4em] py-5 px-12 text-xs hover:bg-[#26C6DA] transition-all duration-500 shadow-xl group flex items-center gap-4"
                >
                  {t("Form.Submit")}
                  <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
                </button>
              </form>
            </div>

            {/* 2. RIGHT SIDE: THE INFO (5 Columns) */}
            <div className="lg:col-span-5 bg-gray-50/50 p-8 md:p-16 flex flex-col justify-between">
              <div className="space-y-12">
                <div>
               
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    Got a project on your mind? Let’s discuss the technical
                    details and engineering scope.
                  </p>
                </div>

                <div className="space-y-8">
                  {contactItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="w-10 h-10 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#26C6DA] group-hover:bg-white transition-all transition-colors">
                        <svg
                          className="w-4 h-4 text-[#26C6DA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A192F] text-xl font-black tracking-widest mb-1">
                          {item.label}
                        </p>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                          {t(`Cards.${item.key}.Detail`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stamp */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
                  Precision Infrastructure // UAE Verified
                </p>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM: INTERACTIVE MAP */}
          <div className="h-[400px] w-full border-t  transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269227!2d55.2718!3d25.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6831!2sBusiness%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactClient;
