import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export default async function DashboardRedirect({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/gallery`);
}
