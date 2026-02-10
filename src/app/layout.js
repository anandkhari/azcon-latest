import "./globals.css";
import { cookies } from "next/headers";
import { Inter, Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const locales = ["en", "ar"];
  const defaultLocale = "en";
  const locale = locales.includes(localeCookie) ? localeCookie : defaultLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-poppins">
        <LanguageProvider initialLang={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
