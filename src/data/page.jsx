import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import Image from "next/image";
import Stats from "@/components/Stats";

export const metadata = {
  title: 'Azcon Infra | Engineering Aesthetic & Technical Perfection',
  description: 'A trusted UAE contractor providing sustainable, high-performance building maintenance, fit-out works, and infrastructure solutions with 18+ years of expertise.',
};

const CheckmarkListItem = ({ children }) => (
  <li className="flex items-start group">
    <div className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
      <svg className="w-5 h-5 text-[#26C6DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <p className="ml-4 text-gray-600 font-medium leading-tight">{children}</p>
  </li>
);

export default function HomePage() {
  const azconServices = [
    { 
      title: "Building Maintenance", 
      description: "Preventive, corrective, and predictive maintenance for all facility types.", 
      image: "/service.png",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
    },
    { 
      title: "Fit-Out Works", 
      description: "Transforming interior spaces into functional and visually appealing environments.", 
      image: "/service_2.png",
      iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
    },
    { 
      title: "HVAC Works", 
      description: "Design, installation, and maintenance of heating and cooling systems.", 
      image: "/service_3.png",
      iconPath: "M9.59 4.59A2 2 0 1111 8H2.41a2 2 0 100 2H11a2 2 0 110 4H2.41a2 2 0 100 2H11a2 2 0 110 4h-1.41a2 2 0 100 2H19a2 2 0 110-4h-1.41a2 2 0 100-2H19a2 2 0 110-4h-1.41a2 2 0 100-2H19a2 2 0 110-4h-9.41z" 
    },
    { 
      title: "Electrical & Plumbing", 
      description: "Comprehensive MEP solutions including 132/11KV substations and piping.", 
      image: "/service_4.jpeg",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z" 
    },
    { 
      title: "Metal Fabrication", 
      description: "Structural steel works, trusses, beams, and architectural metal features.", 
      image: "/service_5.jpg",
      iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    },
    { 
      title: "Infrastructure", 
      description: "Full lifecycle maintenance of roads, pavements, and utility verification.", 
      image: "/service_6.jpg",
      iconPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
    }
  ];

 return (
    <>
      <Hero />

      {/* Why Choose Us Section */}
     <SectionWrapper className="bg-white overflow-hidden">
  <div className="grid lg:grid-cols-2 gap-24 items-center">
    
    {/* Left Side: Architectural Image Composition */}
    <div className="relative group">
      {/* Main Image with decorative offset border */}
      <div className="relative h-[600px] w-full rounded-sm overflow-hidden z-10 shadow-2xl">
        <Image
          src="/about.jpg" 
          alt="Azcon Infra Engineering"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Subtle Brand Wash Overlay */}
        <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-[#26C6DA]/10 transition-colors duration-500" />
      </div>

      {/* Decorative Background Element (Engineering Grid) */}
      <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#26C6DA]/30 -z-0" />
      
      {/* Redesigned 18+ Badge: Floating Glassmorphism */}
      <div className="absolute -bottom-10 -right-6 md:right-10 z-20 bg-white/90 backdrop-blur-md p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.1)] border-b-4 border-[#26C6DA] transition-transform duration-500 group-hover:-translate-y-4">
        <div className="relative">
          <span className="text-7xl font-black text-[#0A192F] leading-none tracking-tighter italic">
            18<span className="text-[#26C6DA] text-5xl not-italic">+</span>
          </span>
          <div className="mt-2 h-[2px] w-full bg-[#0A192F]/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[#26C6DA] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A192F] mt-4">
            Years UAE <br/> Market Mastery
          </p>
        </div>
      </div>
    </div>

    {/* Right Side: High-End Feature Grid */}
    <div className="lg:pl-10">
      <div className="flex items-center gap-4 mb-6">
        <span className="w-12 h-[1px] bg-[#26C6DA]" />
        <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs">Innovation & Precision</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-black text-[#0A192F] leading-[1.05] tracking-tighter mb-8">
        Attention to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A192F] to-[#26C6DA]">Aesthetic Details</span> Makes Us Unique
      </h2>
      
      <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium max-w-lg">
        We bridge the gap between heavy-duty engineering and architectural beauty. Every project is a balance of technical accuracy and visual excellence.
      </p>

      {/* Modern Grid Items (Replacing Tick Marks) */}
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {[
          { id: "01", title: "Sustainable HVAC", desc: "Eco-optimized cooling" },
          { id: "02", title: "Refined Fit-outs", desc: "Luxury interior finish" },
          { id: "03", title: "24/7 Support", desc: "Technical rapid response" },
          { id: "04", title: "Expert Design", desc: "Bespoke engineering" },
          { id: "05", title: "Material Sourcing", desc: "Authorized supply" },
          { id: "06", title: "Ready Handover", desc: "Flawless completion" }
        ].map((item) => (
          <div key={item.id} className="group/item relative pb-4 border-b border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4">
              <span className="text-[#26C6DA] font-black text-xs tracking-tighter group-hover/item:-translate-y-1 transition-transform">
                {item.id}
              </span>
              <div>
                <h4 className="font-black text-[#0A192F] text-sm uppercase tracking-wider mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest">{item.desc}</p>
              </div>
            </div>
            {/* Animated Underline */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#26C6DA] group-hover/item:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button className="group flex items-center gap-6 text-[#0A192F] font-black text-xs uppercase tracking-[0.3em]">
          Learn about our process
          <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0A192F] group-hover:text-white transition-all duration-500">
            →
          </span>
        </button>
      </div>
    </div>
  </div>
</SectionWrapper>

      {/* Redesigned Specialized Technical Services Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#26C6DA] font-bold tracking-[0.3em] uppercase text-xs">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A192F] mt-4 mb-6 leading-tight uppercase tracking-tighter">
            Specialized Technical Services
          </h2>
          <div className="h-1.5 w-20 bg-[#26C6DA] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {azconServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              {/* Image Container with Custom Teal Overlay */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Branding: Teal Overlay (Low opacity to keep image visible) */}
                <div className="absolute inset-0 bg-[#26C6DA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Corner Icon Badge - Matches Hero's Solid Navy feel */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#0A192F] text-white flex items-center justify-center shadow-2xl z-20 rounded-bl-xl transition-all duration-500 group-hover:bg-[#26C6DA]">
  <svg 
    className="w-5 h-5 transition-transform duration-700 group-hover:rotate-[360deg]" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="1.2" 
      d={service.iconPath} 
    />
  </svg>
</div>
              </div>

              {/* Content Area - Designed for engineering focus */}
              <div className="p-10 flex flex-col items-start text-left bg-white relative">
                <h3 className="text-xl font-black text-[#0A192F] mb-4 tracking-tight group-hover:text-[#26C6DA] transition-colors uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Aesthetic Detailing: Dynamic Progress Line */}
                <div className="relative w-full h-[1px] bg-gray-100 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-0 bg-[#26C6DA] transition-all duration-500 group-hover:w-full" />
                </div>
                
                <div className="mt-4 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#0A192F] group-hover:text-[#26C6DA] transition-colors">
                  Technical Specification <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>  

      <Stats />  


      <SectionWrapper className="bg-[#0A192F] text-white overflow-hidden">
  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
    <div className="max-w-2xl">
      <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs block mb-4">Core Values</span>
      <h2 className="text-4xl md:text-6xl font-black leading-tight">Why Industry Leaders <br/> Partner With Azcon</h2>
    </div>
    <p className="text-gray-400 max-w-sm mb-2 text-sm uppercase tracking-widest font-bold">
      Exceeding client expectations through skilled workforce and authorized supply chains.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-1">
    {[
      { title: "Skilled Workforce", desc: "Our greatest strength. Continuously trained in technical and soft skills for superior service delivery.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Authorized Sourcing", desc: "Strong partnerships with leading equipment and material suppliers ensuring long-term reliability.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Strong Management", desc: "Leaders with extensive UAE and regional experience delivering projects from assessment to handover.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
    ].map((card, i) => (
      <div key={i} className="bg-white/5 p-12 border border-white/10 hover:bg-[#26C6DA] group transition-all duration-500">
        <svg className="w-12 h-12 text-[#26C6DA] group-hover:text-[#0A192F] mb-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={card.icon} />
        </svg>
        <h3 className="text-xl font-black uppercase mb-4 group-hover:text-[#0A192F]">{card.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-[#0A192F]/80">{card.desc}</p>
      </div>
    ))}
  </div>
</SectionWrapper>  

      {/* Sectors Served */}
      <SectionWrapper className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#26C6DA] font-bold tracking-[0.3em] uppercase text-xs">Versatility</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A192F] mt-4">Industry Sectors We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Hotels & Clinics", "Factories & Warehouses", "Luxurious Villas", "Commercial Retail"].map((sector) => (
            <div key={sector} className="p-8 bg-gray-50 border border-transparent text-center hover:border-[#26C6DA] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
              <p className="text-[#0A192F] font-bold text-xs uppercase tracking-[0.15em] transition-colors group-hover:text-[#26C6DA]">{sector}</p>
            </div>
          ))}
        </div>
      </SectionWrapper> 


     

      <SectionWrapper className="bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-3 gap-16 items-center">
      <div className="lg:col-span-1">
        <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs">Trust</span>
        <h2 className="text-4xl font-black text-[#0A192F] mt-4 mb-6">Client Stories</h2>
        <p className="text-gray-500 mb-8">From boutique retail to luxury hospitality, we are the trusted partner for UAE's premier establishments.</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#0A192F] hover:text-white transition-all">←</div>
          <div className="w-12 h-12 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#0A192F] hover:text-white transition-all">→</div>
        </div>
      </div>
      
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
        {[
          { name: "Hospitality Manager", sector: "Luxury Hotel Chain", quote: "Azcon's attention to aesthetic detail in our HVAC and fit-out maintenance is unmatched. They understand the luxury standards of the UAE." },
          { name: "Facilities Director", sector: "Commercial Retail Hub", quote: "The 24/7 support isn't just a claim—it's a reality. Their technical accuracy saved our operations during a critical infrastructure failure." }
        ].map((t, i) => (
          <div key={i} className="bg-gray-50 p-10 relative overflow-hidden group">
            <span className="text-8xl absolute -top-4 -left-4 text-gray-200 font-black opacity-50 group-hover:text-[#26C6DA]/20 transition-colors">“</span>
            <p className="relative z-10 text-[#0A192F] font-medium mb-8 italic">"{t.quote}"</p>
            <div className="relative z-10">
              <p className="font-black uppercase text-xs tracking-widest text-[#0A192F]">{t.name}</p>
              <p className="text-[#26C6DA] text-[10px] uppercase font-bold tracking-widest mt-1">{t.sector}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</SectionWrapper> 

<SectionWrapper className="bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black text-[#0A192F] uppercase tracking-tighter">Technical Inquiries</h2>
    </div>
    <div className="space-y-4">
      {[
        { q: "What sectors does Azcon Infra serve?", a: "We provide technical services across hotels, clinics, factories, warehouses, luxury villas, labor accommodations, and commercial retail shops." },
        { q: "How do you ensure quality standards?", a: "Every project is executed to international and local UAE regulations, utilizing authorized material supply and a strictly managed skilled workforce." },
        { q: "Do you offer emergency 24/7 support?", a: "Yes. We specialize in corrective and emergency response maintenance to ensure facility uptime across all Emirates." }
      ].map((faq, i) => (
        <div key={i} className="bg-white border border-gray-100 group">
          <button className="w-full p-6 text-left flex justify-between items-center group-hover:bg-[#0A192F] transition-all">
            <span className="font-black text-sm uppercase tracking-widest text-[#0A192F] group-hover:text-white">{faq.q}</span>
            <span className="text-[#26C6DA] group-hover:text-white font-black">+</span>
          </button>
          <div className="px-6 py-0 h-0 overflow-hidden group-hover:h-auto group-hover:pb-6 transition-all duration-500">
            <p className="text-gray-500 text-sm leading-relaxed pt-4 border-t border-gray-50">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</SectionWrapper> 


 <CTA />   
    </>
  );
}