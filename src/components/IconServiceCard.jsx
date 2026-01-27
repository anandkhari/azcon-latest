// src/components/IconServiceCard.jsx
import Image from 'next/image';
import Link from 'next/link';

const IconServiceCard = ({ service }) => {
  // In a real app, you'd have a mapping of slugs to actual icons
  const iconMap = {
    "general-contracting": "/globe.svg",
    "structural-repair": "/window.svg",
    "electrical-services": "/file.svg",
    "plumbing-and-piping": "/globe.svg",
    "hvac-maintenance": "/window.svg",
    "facility-management": "/file.svg",
  };

  return (
    <div className="bg-surface p-6 rounded-lg text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
        <Image
          src={iconMap[service.slug] || "/file.svg"}
          alt={`${service.title} icon`}
          width={40}
          height={40}
          className="filter-primary" // You might need a custom CSS filter to color the SVG
        />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-text-muted mb-4 h-20 overflow-hidden">{service.shortDescription}</p>
      <Link href={`/services/${service.slug}`} className="font-semibold text-primary hover:text-primary-light">
        View Details &rarr;
      </Link>
    </div>
  );
};

export default IconServiceCard;
