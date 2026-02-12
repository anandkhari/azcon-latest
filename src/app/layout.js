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

export const metadata = {
  metadataBase: new URL("https://azconinfra.com"),

  title: {
    default: "AZCON Infra | UAE Technical Services & Infrastructure Experts",
    template: "%s | AZCON Infra",
  },

  description:
    "Specialized technical services, infrastructure maintenance, HVAC, electrical and fit-out solutions across Dubai and the UAE.",

  keywords: [
    "Azcon Infra",
    "Dubai Technical Services",
    "UAE Infrastructure Maintenance",
    "HVAC UAE",
    "Fit Out Dubai",
    "Electrical LV Systems UAE",
  ],

  authors: [{ name: "AZCON Infra" }],
  creator: "AZCON Infra",
  publisher: "AZCON Infra",

  openGraph: {
    title: "AZCON Infra — Engineering Aesthetic Perfection",
    description:
      "Delivering precision engineering, technical maintenance and infrastructure excellence across the UAE.",
    url: "https://azconinfra.com",
    siteName: "AZCON Infra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AZCON Infra UAE Technical Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AZCON Infra UAE Technical Services",
    description:
      "Engineering excellence in specialized technical domains across the UAE.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    languages: {
      "en-US": "/en",
      "ar-AE": "/ar",
    },
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
    ],
  },

  manifest: "/manifest.json",
  themeColor: "#0A192F",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  other: {
    "msapplication-TileColor": "#0A192F",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies(); // ✅ must await
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;

  const locales = ["en", "ar"];
  const locale = locales.includes(localeCookie) ? localeCookie : "en";

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="antialiased font-poppins">
        <LanguageProvider initialLang={locale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}


