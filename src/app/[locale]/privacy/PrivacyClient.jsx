"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    id: "introduction",
    label: "01 — Introduction",
    title: "Our Commitment to Privacy",
    content: [
      'Azcon Infra Technical Services LLC (“Azcon Infra”, “Company”, “we”, “our”, or “us”) is committed to protecting the privacy and security of our clients, suppliers, business partners, employees, and website visitors.',
      "This Privacy Policy outlines how we collect, use, disclose, store, and safeguard personal information obtained through our business operations, services, and website.",
      "By accessing our website, requesting our services, submitting inquiries, or otherwise interacting with Azcon Infra Technical Services LLC, you acknowledge and agree to the practices described in this Privacy Policy.",
      "This Privacy Policy has been effective since 22 October 2014 and may be updated periodically to reflect changes in legal requirements, business practices, or operational needs. Any updates will be published on our website together with the revised effective date.",
    ],
  },
  {
    id: "information-collected",
    label: "02 — Data Collection",
    title: "Information We Collect",
    content: [
      "We collect personal information only when it is necessary for legitimate business or legal purposes. This may include:",
    ],
    list: [
      "Identity Information: Full name, job title, employer or company name.",
      "Contact Information: Email address, telephone number, mailing address.",
      "Business Information: Nature of inquiry, project details, service requirements, and related correspondence.",
      "Technical Information: IP address, browser type and version, time zone setting, device identifiers, and pages visited on our website.",
      "Communication Records: Records of your communications with us, including emails, contact form submissions, and call logs.",
      "Contractual Information: Information provided in the course of entering into or performing a contract with us.",
    ],
    footer:
      "We do not knowingly collect sensitive personal data (such as biometric data, health information, or financial account details) through our website unless explicitly required for a specific service and with your prior consent.",
  },
  {
    id: "how-we-use",
    label: "03 — Data Use",
    title: "How We Use Your Information",
    content: [
      "We process your personal information on one or more of the following legal bases: performance of a contract, compliance with a legal obligation, legitimate business interest, or your consent. The purposes for which we use your information include:",
    ],
    list: [
      "To respond to your inquiries and provide the services or information you have requested.",
      "To prepare and manage quotations, proposals, contracts, and project documentation.",
      "To communicate with you about ongoing projects, schedules, or service updates.",
      "To comply with applicable UAE laws, regulations, and judicial or governmental orders.",
      "To maintain accurate business and accounting records.",
      "To send you relevant industry updates or service information (where you have consented or where permitted by applicable law).",
      "To improve the functionality, content, and security of our website.",
      "To detect, prevent, and respond to fraud, security threats, or policy violations.",
    ],
  },
  {
    id: "disclosure",
    label: "04 — Disclosure",
    title: "Disclosure of Your Information",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. We may disclose your information in the following limited circumstances:",
    ],
    list: [
      "Service Providers: Trusted third-party vendors who assist us in operating our business (e.g., IT systems, hosting, communication tools), subject to strict confidentiality obligations.",
      "Professional Advisors: Lawyers, accountants, insurers, or auditors as necessary for our operations.",
      "Group Companies: Affiliated entities within the Azcon group, where required for service delivery or internal administration.",
      "Regulatory Authorities: Government bodies, courts, or law enforcement agencies when required by applicable UAE law or a valid legal order.",
      "Business Transfers: In connection with a merger, acquisition, or sale of company assets, with appropriate confidentiality safeguards.",
    ],
    footer:
      "In all cases, disclosure is limited to what is strictly necessary for the stated purpose.",
  },
  {
    id: "retention",
    label: "05 — Retention",
    title: "Data Retention",
    content: [
      "We retain personal information for as long as necessary to fulfil the purposes for which it was collected, to satisfy applicable contractual obligations, or to comply with legal, accounting, or reporting requirements under UAE law.",
      "When personal information is no longer required, we securely delete or anonymise it in accordance with our internal data management procedures.",
    ],
  },
  {
    id: "security",
    label: "06 — Security",
    title: "Security of Your Information",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, accidental loss, alteration, or disclosure. These measures include access controls, encryption where appropriate, and regular security assessments.",
      "While we take reasonable steps to protect your information, no transmission over the internet or electronic storage system is completely secure. We cannot guarantee the absolute security of information transmitted to or from our website.",
    ],
  },
  {
    id: "rights",
    label: "07 — Your Rights",
    title: "Your Rights Under UAE PDPL",
    content: [
      "Under UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and its implementing regulations, you have the following rights regarding your personal data:",
    ],
    list: [
      "Right of Access: To request a copy of the personal data we hold about you.",
      "Right to Rectification: To request correction of inaccurate or incomplete personal data.",
      "Right to Erasure: To request deletion of your personal data where it is no longer required for the purposes for which it was collected, subject to legal retention obligations.",
      "Right to Restriction: To request that we limit the processing of your personal data in certain circumstances.",
      "Right to Data Portability: To receive your personal data in a structured, commonly used format where technically feasible.",
      "Right to Object: To object to the processing of your personal data for direct marketing purposes.",
      "Right to Withdraw Consent: Where processing is based on consent, to withdraw that consent at any time without affecting the lawfulness of prior processing.",
    ],
    footer:
      "To exercise any of these rights, please contact us using the details in Section 10. We will respond to verified requests within the timeframes prescribed by applicable UAE law.",
  },
  {
    id: "cookies",
    label: "08 — Cookies",
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website may use cookies and similar technologies to enhance functionality, analyse usage, and improve your experience. Cookies are small data files stored on your browser or device.",
      "You may configure your browser to refuse cookies or to notify you when cookies are being set. Please note that disabling certain cookies may affect the functionality of parts of our website.",
      "We do not use tracking technologies for targeted advertising purposes.",
    ],
  },
  {
    id: "third-party",
    label: "09 — Third Parties",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites or resources. This Privacy Policy applies solely to information collected by Azcon Infra Technical Services LLC. We have no control over, and are not responsible for, the privacy practices or content of third-party sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    id: "changes",
    label: "10 — Policy Updates",
    title: "Changes to This Privacy Policy",
    content: [
      "We reserve the right to update or amend this Privacy Policy at any time to reflect changes in applicable law, regulatory guidance, or our business practices. The revised policy will be published on our website with an updated effective date.",
      "Your continued use of our website or services following the publication of an updated Privacy Policy constitutes your acknowledgement of the revised terms.",
    ],
  },
  {
    id: "contact",
    label: "11 — Contact",
    title: "How to Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact us:",
    ],
    contact: {
      company: "Azcon Infra Technical Services LLC",
      address: "Dubai Investment Park - 1, Dubai, United Arab Emirates",
      email: "info@azconinfra.com",
      phone: "+971 4 294 5885",
      website: "azconinfra.com",
    },
  },
];

const DocumentInfo = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 overflow-hidden">
    {[
      { label: "Company", value: "Azcon Infra Technical Services LLC" },
      { label: "Effective Date", value: "22 October 2014" },
      { label: "Jurisdiction", value: "United Arab Emirates" },
      { label: "Website", value: "Azconinfra.com" },
      {
        label: "Applicable Law",
        value: "UAE Federal Decree-Law No. 45 of 2021 (PDPL)",
      },
      { label: "Language", value: "English" },
    ].map((item) => (
      <div key={item.label} className="bg-white/5 p-6">
        <p className="text-[#26C6DA] text-[9px] font-black tracking-[0.3em] uppercase mb-2">
          {item.label}
        </p>
        <p className="text-white text-sm font-medium leading-snug">{item.value}</p>
      </div>
    ))}
  </div>
);

export default function PrivacyClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        {/* Background image */}
        <Image
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
          alt="Privacy Policy"
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        {/* Dot-grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#26C6DA_1px,transparent_1px)] opacity-[0.04] bg-[length:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-transparent to-[#0A192F]" />

        {/* Architectural corner accents */}
        <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-[#26C6DA]/20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-[#26C6DA]/20 hidden md:block" />

        <div className="relative z-10 container mx-auto px-6 text-center pt-32 pb-24">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="h-[2px] bg-[#26C6DA] mx-auto mb-10 shadow-[0_0_20px_rgba(38,198,218,0.6)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#26C6DA] text-[10px] font-black tracking-[0.4em] uppercase mb-6"
          >
            Legal &amp; Compliance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1] mb-8"
          >
            Privacy{" "}
            <span className="text-[#26C6DA] italic">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            How Azcon Infra Technical Services LLC collects, processes, and
            protects your personal information.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-6"
          >
            Effective Date: 22 October 2014
          </motion.p>
        </div>
      </section>

      {/* ── DOCUMENT INFO BANNER ── */}
      <section className="bg-[#071324] py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6"
        >
          <DocumentInfo />
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mb-16 pb-16 border-b border-gray-100 last:border-none last:mb-0 last:pb-0"
              >
                {/* Section label */}
                <span className="text-[#26C6DA] text-[9px] font-black tracking-[0.35em] uppercase block mb-4">
                  {section.label}
                </span>

                {/* Section heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0A192F] tracking-tight mb-8">
                  {section.title}
                </h2>

                {/* Body paragraphs */}
                {section.content.map((para, j) => (
                  <p
                    key={j}
                    className="text-[#486581] leading-relaxed mb-4 text-[15px]"
                  >
                    {para}
                  </p>
                ))}

                {/* Bullet list */}
                {section.list && (
                  <ul className="mt-6 space-y-3">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-4 text-[#486581] text-[15px] leading-relaxed"
                      >
                        <span className="mt-[6px] w-5 h-5 rounded-sm bg-[#0A192F]/5 border border-[#26C6DA]/30 flex-shrink-0 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#26C6DA]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer note */}
                {section.footer && (
                  <p className="mt-6 text-[#486581] text-[14px] leading-relaxed italic border-l-2 border-[#26C6DA]/40 pl-5">
                    {section.footer}
                  </p>
                )}

                {/* Contact block */}
                {section.contact && (
                  <div className="mt-6 bg-[#0A192F] p-8 space-y-4">
                    {[
                      { label: "Company", value: section.contact.company },
                      { label: "Address", value: section.contact.address },
                      {
                        label: "Email",
                        value: section.contact.email,
                        href: `mailto:${section.contact.email}`,
                      },
                      {
                        label: "Phone",
                        value: section.contact.phone,
                        href: `tel:${section.contact.phone}`,
                      },
                      { label: "Website", value: section.contact.website },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-white/5 pb-4 last:border-none last:pb-0"
                      >
                        <span className="text-[#26C6DA] text-[9px] font-black tracking-[0.3em] uppercase w-24 flex-shrink-0">
                          {row.label}
                        </span>
                        {row.href ? (
                          <a
                            href={row.href}
                            className="text-gray-300 text-sm hover:text-[#26C6DA] transition-colors"
                          >
                            {row.value}
                          </a>
                        ) : (
                          <span className="text-gray-300 text-sm">
                            {row.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ── */}
      <section className="bg-[#0A192F] py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[#26C6DA] text-[10px] font-black tracking-[0.4em] uppercase">
              Questions About This Policy?
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              We&apos;re here to{" "}
              <span className="text-[#26C6DA] italic">help</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              If you have any concerns about how we handle your personal data,
              please reach out to our team directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 text-[#0A192F] bg-[#26C6DA] font-black text-[11px] uppercase tracking-[0.3em] px-8 py-4 hover:bg-white transition-colors duration-300 mt-4"
            >
              Contact Us
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
