import Image from "next/image"
import { Link } from "@/i18n/routing"
import SectionWrapper from "@/components/SectionWrapper"
import { useTranslations } from "next-intl"

const azconServices = [
  { 
    slug: "building-maintenance",
    title: "Building Maintenance", 
    description: "Preventive, corrective, and predictive maintenance for all facility types.", 
    image: "/service.png",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
  },
  { 
    slug: "fit-out-works",
    title: "Fit-Out Works", 
    description: "Transforming interior spaces into functional and visually appealing environments.", 
    image: "/service_2.png",
    iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
  },
  { 
    slug: "hvac-works",
    title: "HVAC Works", 
    description: "Design, installation, and maintenance of heating and cooling systems.", 
    image: "/service_3.png",
    iconPath: "M9.59 4.59A2 2 0 1111 8H2.41a2 2 0 100 2H11a2 2 0 110 4H2.41a2 2 0 100 2H11a2 2 0 110 4h-1.41a2 2 0 100 2H19a2 2 0 110-4h-1.41a2 2 0 100-2H19a2 2 0 110-4h-1.41a2 2 0 100-2H19a2 2 0 110-4h-9.41z" 
  },
  { 
    slug: "electrical",
    title: "Electrical & Plumbing", 
    description: "Comprehensive MEP solutions including 132/11KV substations and piping.", 
    image: "/service_4.jpeg",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z" 
  },
  { 
    slug: "metal-fabrication",
    title: "Metal Fabrication", 
    description: "Structural steel works, trusses, beams, and architectural metal features.", 
    image: "/service_5.jpg",
    iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
  },
  { 
    slug: "infrastructure",
    title: "Infrastructure", 
    description: "Full lifecycle maintenance of roads, pavements, and utility verification.", 
    image: "/service_6.jpg",
    iconPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
  }
];


export default function ServicesSection() {
  const t = useTranslations("Services")
  return (
    <SectionWrapper className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#26C6DA] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A192F] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs bg-[#0A192F]/5 px-4 py-2 rounded-full">
          {t("Subtitle")}
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-[#0A192F] mt-6 mb-6 uppercase tracking-tighter">
          {t.rich("Title", {
            span: (chunks) => (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26C6DA] to-[#0A192F] italic">
                {chunks}
              </span>
            ),
          })}
        </h2>

        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          {t("Description")}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {azconServices.map((service, index) => (
          <div
            key={service.slug}
            className="group relative flex flex-col bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_30px_80px_rgba(38,198,218,0.25)] transition-all duration-700 border border-white/50 hover:border-[#26C6DA]/50 opacity-0 translate-y-8"
            style={{
              animation: `slideInUp 0.6s ease-out forwards`,
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {/* Glow */}
            {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#26C6DA] via-[#0A192F] to-[#26C6DA] blur-md" />
            </div> */}

            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-[#0A192F]/20 to-transparent opacity-60" />

              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-[#26C6DA] transition-all">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={service.iconPath}
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md flex-grow">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#0A192F] to-[#26C6DA] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-black text-[#0A192F] mb-4 uppercase mt-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A192F] group-hover:to-[#26C6DA] transition-all">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="relative w-full h-[2px] bg-gray-200 rounded-full mb-6 overflow-hidden">
                <div className="absolute h-full w-0 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] group-hover:w-full transition-all duration-700" />
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A192F] group-hover:text-[#26C6DA] transition-all"
              >
                {t("TechnicalSpecification")}
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </SectionWrapper>
  )
}
