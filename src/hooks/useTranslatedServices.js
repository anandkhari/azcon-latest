"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { services as azconServices } from "@/data/services";

export default function useTranslatedServices() {
  const t = useTranslations("Services");

  return useMemo(
    () =>
      azconServices.map((service) => ({
        ...service,
        title: t(`${service.slug}.title`),
        description: t(`${service.slug}.shortDescription`),
      })),
    [t]
  );
}
