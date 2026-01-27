// src/components/ServiceCard.jsx
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full group relative">
      <div className="h-full relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100">

        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Floating Icon */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-[#26C6DA] group-hover:text-[#0A192F] transition-all duration-500 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.iconPath} />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 relative">
          <div className="absolute -top-10 left-8">
            <span className="bg-[#26C6DA] text-[#0A192F] text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg">
              Service
            </span>
          </div>

          <h3 className="text-xl font-black text-[#0A192F] mb-3 uppercase tracking-tight group-hover:text-[#26C6DA] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-600 transition-colors">
            {service.shortDescription}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A192F] group-hover:text-[#26C6DA] transition-colors">
              Explore Details
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#26C6DA] group-hover:text-white transition-all duration-300">
              <svg className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#26C6DA]/20 rounded-xl transition-colors duration-500 pointer-events-none" />
      </div>
    </Link>
  );
};

export default ServiceCard;