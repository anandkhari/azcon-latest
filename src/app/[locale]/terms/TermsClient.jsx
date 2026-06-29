"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    id: "introduction",
    label: "01 — Introduction",
    title: "Introduction",
    content: [
      'Welcome to Azcon Infra Technical Services LLC ("Azcon Infra", "Company", "we", "our", or "us"). These Terms and Conditions govern your use of our website, services, quotations, proposals, contracts, and all business dealings with Azcon Infra Technical Services LLC.',
      "By accessing our website, requesting quotations, engaging our services, or entering into any agreement with us, you agree to be bound by these Terms and Conditions.",
    ],
  },
  {
    id: "company-information",
    label: "02 — Company Information",
    title: "Company Information",
    content: [
      "Azcon Infra Technical Services LLC is a UAE-based technical services company providing, but not limited to:",
    ],
    list: [
      "Building maintenance services",
      "MEP works (Mechanical, Electrical & Plumbing)",
      "HVAC installation and maintenance",
      "Civil and fit-out works",
      "Metal fabrication and welding works",
      "Infrastructure maintenance",
      "Painting and waterproofing works",
      "General technical services and related contracting activities",
    ],
  },
  {
    id: "quotations",
    label: "03 — Quotations & Proposals",
    title: "Quotations and Proposals",
    subsections: [
      {
        heading: "3.1 Validity",
        content:
          "Unless otherwise stated, all quotations are valid for thirty (30) days from the date of issuance.",
      },
      {
        heading: "3.2 Scope of Work",
        content:
          "Quotations are based solely on the scope described therein. Any additional works, variations, or unforeseen conditions may result in additional charges.",
      },
      {
        heading: "3.3 Acceptance",
        content: "A quotation shall be deemed accepted upon:",
        list: [
          "Issuance of a Purchase Order (PO);",
          "Signing of a contract or agreement;",
          "Written confirmation via email; or",
          "Authorization to commence work.",
        ],
      },
    ],
  },
  {
    id: "pricing-payment",
    label: "04 — Pricing & Payment",
    title: "Pricing and Payment",
    subsections: [
      {
        heading: "4.1 Pricing",
        content:
          "All prices are stated in UAE Dirhams (AED) unless otherwise specified.",
      },
      {
        heading: "4.2 VAT",
        content:
          "Applicable Value Added Tax (VAT) shall be charged in accordance with UAE law.",
      },
      {
        heading: "4.3 Payment Terms",
        content:
          "Payment terms shall be as stated in the quotation, invoice, or contract. Failure to make payment within the agreed period may result in suspension of services.",
      },
      {
        heading: "4.4 Late Payments",
        content: "The Company reserves the right to:",
        list: [
          "Suspend ongoing works;",
          "Delay project completion;",
          "Recover any reasonable costs incurred due to payment delays.",
        ],
      },
    ],
  },
  {
    id: "project-execution",
    label: "05 — Project Execution",
    title: "Project Execution",
    subsections: [
      {
        heading: "5.1 Site Access",
        content:
          "The Client shall provide safe and reasonable access to the worksite during agreed working hours.",
      },
      {
        heading: "5.2 Delays Beyond Our Control",
        content: "Azcon Infra shall not be liable for delays caused by:",
        list: [
          "Government restrictions;",
          "Utility interruptions;",
          "Weather conditions;",
          "Force majeure events;",
          "Client-related delays;",
          "Delayed approvals or permits.",
        ],
      },
      {
        heading: "5.3 Safety",
        content:
          "All works shall be performed in accordance with applicable UAE safety regulations and industry standards.",
      },
    ],
  },
  {
    id: "variations",
    label: "06 — Variations",
    title: "Variations and Additional Works",
    content: [
      "Any modification to the original scope shall constitute a variation.",
      "Variations may require revised pricing, extended completion periods, or additional materials or manpower. No variation shall be binding unless approved by both parties.",
    ],
  },
  {
    id: "warranties",
    label: "07 — Warranties",
    title: "Warranties",
    subsections: [
      {
        heading: "7.1 Workmanship Warranty",
        content:
          "Where applicable, workmanship warranties shall be provided as specified in the quotation, invoice, or contract.",
      },
      {
        heading: "7.2 Exclusions",
        content: "Warranty does not cover:",
        list: [
          "Normal wear and tear;",
          "Misuse or negligence;",
          "Third-party modifications;",
          "Acts of nature;",
          "Improper operation or maintenance by the client.",
        ],
      },
    ],
  },
  {
    id: "client-responsibilities",
    label: "08 — Client Responsibilities",
    title: "Client Responsibilities",
    content: ["The Client agrees to:"],
    list: [
      "Provide accurate project information;",
      "Grant access to work areas;",
      "Obtain necessary permissions where required;",
      "Ensure a safe working environment;",
      "Make payments according to agreed terms.",
    ],
  },
  {
    id: "intellectual-property",
    label: "09 — Intellectual Property",
    title: "Intellectual Property",
    content: [
      "All documents, drawings, proposals, reports, designs, calculations, photographs, and materials prepared by Azcon Infra remain the property of the Company unless otherwise agreed in writing.",
      "Clients may not reproduce, distribute, or share such materials without prior written consent.",
    ],
  },
  {
    id: "website-use",
    label: "10 — Website Use",
    title: "Website Use",
    content: ["Users of our website agree not to:"],
    list: [
      "Use the website for unlawful purposes;",
      "Attempt unauthorized access to systems;",
      "Upload malicious software or harmful content;",
      "Copy or misuse website content without permission.",
    ],
    footer:
      "The Company reserves the right to restrict access to any user who violates these terms.",
  },
  {
    id: "liability",
    label: "11 — Limitation of Liability",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Azcon Infra Technical Services LLC shall not be liable for:",
    ],
    list: [
      "Indirect or consequential damages;",
      "Loss of profits or business opportunities;",
      "Delays caused by third parties;",
      "Events beyond reasonable control.",
    ],
    footer:
      "The Company's total liability shall not exceed the value of the relevant contract or service agreement.",
  },
  {
    id: "indemnification",
    label: "12 — Indemnification",
    title: "Indemnification",
    content: [
      "The Client agrees to indemnify and hold harmless Azcon Infra, its directors, employees, subcontractors, and affiliates from claims, damages, losses, liabilities, and expenses arising from:",
    ],
    list: [
      "Client negligence;",
      "Incorrect information provided by the Client;",
      "Unauthorized modifications to completed works;",
      "Breach of these Terms and Conditions.",
    ],
  },
  {
    id: "force-majeure",
    label: "13 — Force Majeure",
    title: "Force Majeure",
    content: [
      "Neither party shall be liable for failure or delay in performance resulting from circumstances beyond reasonable control, including but not limited to:",
    ],
    list: [
      "Natural disasters;",
      "Fire;",
      "Flood;",
      "Pandemic;",
      "Government action;",
      "Labor disputes;",
      "Utility failures;",
      "War or civil unrest.",
    ],
  },
  {
    id: "privacy",
    label: "14 — Privacy",
    title: "Privacy",
    content: [
      "Use of our website and services is also governed by our Privacy Policy. By using our services, you acknowledge that personal information may be collected and processed in accordance with the Privacy Policy.",
    ],
    privacyLink: true,
  },
  {
    id: "termination",
    label: "15 — Termination",
    title: "Termination",
    content: ["The Company reserves the right to terminate or suspend services where:"],
    list: [
      "Payment obligations are not fulfilled;",
      "The Client breaches contractual obligations;",
      "Unsafe site conditions exist;",
      "Continuing work would violate applicable laws or regulations.",
    ],
    footer: "Any completed works up to the termination date shall remain payable.",
  },
  {
    id: "governing-law",
    label: "16 — Governing Law",
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates.",
      "Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts of Dubai, United Arab Emirates, unless otherwise agreed in writing.",
    ],
  },
  {
    id: "amendments",
    label: "17 — Amendments",
    title: "Amendments",
    content: [
      "Azcon Infra Technical Services LLC reserves the right to amend these Terms and Conditions at any time. Updated versions will be published on the Company's website and shall become effective upon publication.",
    ],
  },
  {
    id: "contact",
    label: "18 — Contact Information",
    title: "Contact Information",
    content: ["For any enquiries regarding these Terms and Conditions, please contact us:"],
    contact: {
      company: "Azcon Infra Technical Services LLC",
      address: "Dubai Investment Park 1 (DIP-1), Dubai, United Arab Emirates",
      phone: "+971 4 294 5885",
      mobile: "+971 50 347 6962",
      email: "info@azconinfra.com",
      website: "www.azconinfra.com",
    },
  },
];

const DocumentInfo = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 overflow-hidden">
    {[
      { label: "Company", value: "Azcon Infra Technical Services LLC" },
      { label: "Effective Date", value: "22 October 2014" },
      { label: "Jurisdiction", value: "United Arab Emirates" },
      { label: "Website", value: "www.azconinfra.com" },
      { label: "Applicable Law", value: "Laws of the United Arab Emirates" },
      { label: "Disputes", value: "Courts of Dubai, UAE" },
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

const BulletList = ({ items }) => (
  <ul className="mt-4 space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-4 text-[#486581] text-[15px] leading-relaxed">
        <span className="mt-[6px] w-5 h-5 rounded-sm bg-[#0A192F]/5 border border-[#26C6DA]/30 flex-shrink-0 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#26C6DA]" />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

export default function TermsClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <Image
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
          alt="Terms and Conditions"
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#26C6DA_1px,transparent_1px)] opacity-[0.04] bg-[length:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-transparent to-[#0A192F]" />

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
            Terms &amp;{" "}
            <span className="text-[#26C6DA] italic">Conditions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            The terms governing your use of our website, services, and all
            business dealings with Azcon Infra Technical Services LLC.
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
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mb-16 pb-16 border-b border-gray-100 last:border-none last:mb-0 last:pb-0"
              >
                <span className="text-[#26C6DA] text-[9px] font-black tracking-[0.35em] uppercase block mb-4">
                  {section.label}
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold text-[#0A192F] tracking-tight mb-8">
                  {section.title}
                </h2>

                {section.content?.map((para, j) => (
                  <p key={j} className="text-[#486581] leading-relaxed mb-4 text-[15px]">
                    {para}
                  </p>
                ))}

                {section.list && <BulletList items={section.list} />}

                {section.subsections?.map((sub, k) => (
                  <div key={k} className="mt-8">
                    <h3 className="text-[#0A192F] font-black text-[11px] uppercase tracking-[0.25em] mb-3">
                      {sub.heading}
                    </h3>
                    <p className="text-[#486581] text-[15px] leading-relaxed">{sub.content}</p>
                    {sub.list && <BulletList items={sub.list} />}
                  </div>
                ))}

                {section.footer && (
                  <p className="mt-6 text-[#486581] text-[14px] leading-relaxed italic border-l-2 border-[#26C6DA]/40 pl-5">
                    {section.footer}
                  </p>
                )}

                {section.privacyLink && (
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 mt-4 text-[#26C6DA] text-[11px] font-black uppercase tracking-[0.25em] hover:underline"
                  >
                    Read our Privacy Policy →
                  </Link>
                )}

                {section.contact && (
                  <div className="mt-6 bg-[#0A192F] p-8 space-y-4">
                    {[
                      { label: "Company", value: section.contact.company },
                      { label: "Address", value: section.contact.address },
                      { label: "Phone", value: section.contact.phone, href: `tel:${section.contact.phone}` },
                      { label: "Mobile", value: section.contact.mobile, href: `tel:${section.contact.mobile}` },
                      { label: "Email", value: section.contact.email, href: `mailto:${section.contact.email}` },
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
                          <span className="text-gray-300 text-sm">{row.value}</span>
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
              Ready to Work With Us?
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Let&apos;s build something{" "}
              <span className="text-[#26C6DA] italic">together</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              Have a project in mind or need a technical assessment? Our team is
              ready to assist you across all 7 Emirates.
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
