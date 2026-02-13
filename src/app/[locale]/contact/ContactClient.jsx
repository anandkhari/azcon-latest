"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

const ContactClient = () => {
  const t = useTranslations("ContactPage");

  /* ================= FORM STATE ================= */
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mzdaejgz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        e.target.reset();
        alert("Message sent successfully ✅");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  /* ================= CONTACT DATA ================= */
  const contactItems = [
    {
      key: "Hotline",
      label: "TECHNICAL HOTLINE",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      numbers: ["+971 554753102", "+971 4 294 5885"],
    },
    {
      key: "Email",
      label: "OFFICIAL INQUIRY",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      email: "info@azconinfra.com",
    },
    {
      key: "Office",
      label: "OFFICE HEADQUARTERS",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      address:
        "Azcon Infra Technical Service L.L.C, Dubai Investment Park - 1, Dubai, United Arab Emirates",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <Image
          src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
          alt="Azcon Infrastructure Services"
          fill
          className="object-cover opacity-50"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#0A192F]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-[2px] bg-[#26C6DA] mx-auto mb-10"
          />

          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-6">
            {t.rich("Hero.Title", {
              italic: (chunks) => (
                <span className="text-[#26C6DA]">{chunks}</span>
              ),
            })}
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl">
            {t("Hero.Subtitle")}
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto bg-white shadow-2xl relative z-10">
          <div className="grid lg:grid-cols-12">
            {/* ================= LEFT FORM ================= */}
            <div className="lg:col-span-7 p-8 md:p-16 border-r border-gray-100">
              <h3 className="text-4xl md:text-5xl font-black text-[#0A192F] mb-12">
                Let's <span className="text-[#26C6DA]">Talk.</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="border-b border-gray-200 focus:border-[#26C6DA] py-3 outline-none"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+971"
                    required
                    className="border-b border-gray-200 focus:border-[#26C6DA] py-3 outline-none"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="engineer@company.com"
                  className="w-full border-b border-gray-200 focus:border-[#26C6DA] py-3 outline-none"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your project..."
                  className="w-full border-b border-gray-200 focus:border-[#26C6DA] py-3 outline-none"
                />

                <button
                  disabled={loading}
                  className="bg-[#0A192F] text-white px-12 py-5 uppercase text-xs tracking-[0.3em] hover:bg-[#26C6DA] transition-all"
                >
                  {loading ? "Sending..." : t("Form.Submit")}
                </button>
              </form>
            </div>

            {/* ================= RIGHT INFO ================= */}
            <div className="lg:col-span-5 bg-gray-50/60 p-8 md:p-16 flex flex-col justify-between">
              <div className="space-y-10">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Got a project on your mind? Let’s discuss the technical
                  details and engineering scope.
                </p>

                <div className="space-y-8">
                  {contactItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-6">
                      <div className="w-10 h-10 border border-gray-200 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-[#26C6DA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>

                      <div>
                        <p className="text-[#0A192F] text-sm font-black tracking-widest mb-2">
                          {item.label}
                        </p>

                        {item.numbers &&
                          item.numbers.map((num, idx) => (
                            <a
                              key={idx}
                              href={`tel:${num.replace(/\s/g, "")}`}
                              className="block text-gray-600 hover:text-[#26C6DA] text-sm"
                            >
                              {num}
                            </a>
                          ))}

                        {item.email && (
                          <a
                            href={`mailto:${item.email}`}
                            className="text-gray-600 hover:text-[#26C6DA] text-sm"
                          >
                            {item.email}
                          </a>
                        )}

                        {item.address && (
                          <p className="text-gray-600 text-sm">
                            {item.address}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
                  Precision Infrastructure // UAE Verified
                </p>
              </div>
            </div>
          </div>

          {/* ================= MAP ================= */}
            {/* 3. BOTTOM: INTERACTIVE MAP */}
     <div className="h-[400px] w-full border-t transition-all duration-700">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.668472839297!2d55.1649983!3d24.985963599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f731cc92d8785%3A0x19410dded885d47!2sAzcon%20infra%20Technical%20Service%20L.L.C!5e1!3m2!1sen!2sin!4v1770987334667!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
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
