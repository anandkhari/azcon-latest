// src/components/SectionWrapper.jsx
const SectionWrapper = ({ children, className = '', id = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${className}`}>
      {/* Container ensures consistent alignment across the site */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;