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
      {/* Background glow - Optimized for mobile (smaller blur) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#26C6DA] rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#0A192F] rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Header - Adjusted margins for mobile */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 relative z-10">
        <span className="text-[#26C6DA] font-black uppercase inline-block tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs bg-[#0A192F]/5 px-4 py-2 rounded-full mb-4">
          {t("Subtitle")}
        </span>

        <h2 className="text-3xl md:text-6xl font-black text-[#0A192F] mt-2 mb-4 md:mb-6 uppercase tracking-tighter leading-none">
          {t.rich("Title", {
            span: (chunks) => (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26C6DA] to-[#0A192F] italic">
                {chunks}
              </span>
            ),
          })}
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4 md:px-0">
          {t("Description")}
        </p>
      </div>

      {/* Services Grid - Responsive column flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 px-2 md:px-0">
        {azconServices.map((service, index) => (
          <div
            key={service.slug}
            className="group relative flex flex-col bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#26C6DA]/50"
            style={{
              // Animation handled via CSS to prevent JS layout shifts on slow mobile loads
              animation: `slideInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            {/* Image Section - Scaled for mobile aspect ratios */}
            <div className="relative h-56 md:h-72 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent opacity-70" />

              {/* Icon Overlay - Slightly smaller on mobile */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-[#26C6DA] transition-colors duration-300">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-white"
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

            {/* Content Section - Balanced padding */}
            <div className="p-6 md:p-8 flex flex-col bg-white/40 backdrop-blur-md flex-grow relative">
              {/* Counter Badge */}
              <div className="absolute -top-4 left-6 md:left-8 bg-gradient-to-r from-[#0A192F] to-[#26C6DA] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg z-20">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg md:text-xl font-black text-[#0A192F] mb-3 uppercase mt-2 group-hover:text-[#26C6DA] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                {service.description}
              </p>

              {/* Decorative line - stays hidden until hover on desktop, always visible/thin on mobile? 
                  Better to keep it as a progress-style bar that fills on hover */}
              <div className="relative w-full h-[1px] bg-gray-100 mb-6 overflow-hidden">
                <div className="absolute h-full w-0 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] group-hover:w-full transition-all duration-700" />
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A192F] hover:text-[#26C6DA] transition-all"
              >
                {t("TechnicalSpecification")}
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
