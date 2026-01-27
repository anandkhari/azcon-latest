import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0A192F] text-white pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand/About Section - Derived from Brochure Page 2 */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black tracking-tighter mb-6">
                AZCON <span className="text-[#26C6DA]">INFRA</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm font-medium">
                {t("Description")}
              </p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#26C6DA] transition-all group">
                  <span className="text-[10px] font-black group-hover:text-[#0A192F]">LI</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#26C6DA] transition-all group">
                  <span className="text-[10px] font-black group-hover:text-[#0A192F]">IG</span>
                </Link>
              </div>
            </div>

            {/* Comprehensive Services - Mapped to Brochure Pages 4-10 */}
            <div>
              <h4 className="text-[#26C6DA] text-[10px] uppercase tracking-[0.3em] font-black mb-8 italic">{t("OurServices")}</h4>
              <ul className="space-y-3 text-[11px] font-black uppercase tracking-widest">
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.BuildingMaintenance")}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.InteriorFitOut")}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.HVACSolutions")}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.ElectricalLV")}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.PlumbingSanitary")}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.MetalFabrication")}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors">{t("ServiceNames.InfrastructureWorks")}</Link></li>
              </ul>
            </div>

            {/* Targeted Sectors - Derived from Brochure Page 2 */}
            <div>
              <h4 className="text-[#26C6DA] text-[10px] uppercase tracking-[0.3em] font-black mb-8 italic">{t("SectorsServed")}</h4>
              <ul className="space-y-3 text-[11px] font-black uppercase tracking-widest">
                <li className="text-gray-400">Hotels & Clinics</li>
                <li className="text-gray-400">Factories & Gyms</li>
                <li className="text-gray-400">Luxury Villas</li>
                <li className="text-gray-400">Labour Accommodations</li>
                <li className="text-gray-400">Shops & Restaurants</li>
                <li className="text-gray-400">Commercial Buildings</li>
              </ul>
            </div>

            {/* Contact & HQ - UAE Focused */}
            <div>
              <h4 className="text-[#26C6DA] text-[10px] uppercase tracking-[0.3em] font-black mb-8 italic">{t("Headquarters")}</h4>
              <address className="not-italic text-gray-400 space-y-5 text-xs font-medium">
                <div className="flex items-start gap-3">
                  <span className="text-[#26C6DA] mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <span className="uppercase tracking-tighter">{t("Address")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#26C6DA]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <a href="tel:+97142945885" className="hover:text-white transition-colors tracking-widest font-black">+971-42 945 885 ,+971-5547 53102</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#26C6DA]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <a href="mailto:info@azconinfra.com" className="hover:text-white transition-colors tracking-widest font-black uppercase">info@azconinfra.com</a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-[#071324] text-gray-600 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.3em] uppercase">
          <p>{t("Copyright", { year: currentYear })}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#26C6DA] transition-colors">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-[#26C6DA] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;