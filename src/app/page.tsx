import type { Metadata } from "next";

import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { LinkHub } from "@/components/LinkHub";
import { ProfileHero } from "@/components/ProfileHero";
import {
  defaultLocale,
  getBrandProfile,
  getLocaleFromSearchParam,
} from "@/data/brand-profile";

const defaultProfile = getBrandProfile(defaultLocale);

export const metadata: Metadata = {
  title: defaultProfile.brandName,
  description: "İlkan Kaymak için premium randevu, iletişim ve sosyal medya bağlantıları.",
};

type HomePageProps = {
  searchParams: Promise<{
    lang?: string | string[];
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { lang } = await searchParams;
  const locale = getLocaleFromSearchParam(lang);
  const profile = getBrandProfile(locale);

  return (
    <main lang={locale} className="snap-shell relative overflow-x-hidden bg-background">
      <ProfileHero profile={profile} locale={locale} />
      <LinkHub profile={profile} />
      <FloatingWhatsAppButton
        ariaLabel={profile.phoneLabel}
        label={profile.contactButtonLabel}
      />
    </main>
  );
}
