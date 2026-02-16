import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  // ⭐ Skip metadata/system files completely
  if (
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return;
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*|admin).*)"],
};
