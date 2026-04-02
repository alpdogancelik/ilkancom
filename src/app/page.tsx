// Ana sayfa: dil parametresine gore profil secip bolumleri birlestirir.
import type { Metadata } from "next";

import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { LinkHub } from "@/components/LinkHub";
import { ProfileHero } from "@/components/ProfileHero";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { getBrandProfile, getLocaleFromSearchParam } from "@/data/brand-profile";
import {
  buildBarberShopSchema,
  buildWebSiteSchema,
  getAbsoluteUrl,
  getHomeMetadata,
} from "@/lib/seo";

type HomePageProps = {
  searchParams: Promise<{
    lang?: string | string[];
  }>;
};

export async function generateMetadata({
  searchParams,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = getLocaleFromSearchParam(lang);
  const seo = getHomeMetadata(locale);
  const canonicalPath = locale === "en" ? "/?lang=en" : "/";

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "tr-TR": "/",
        "en-US": "/?lang=en",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getAbsoluteUrl(canonicalPath),
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // URL'deki ?lang= degerine gore dogru locale belirlenir.
  const { lang } = await searchParams;
  const locale = getLocaleFromSearchParam(lang);
  const profile = getBrandProfile(locale);

  return (
    <>
      <SeoJsonLd data={[buildWebSiteSchema(), buildBarberShopSchema()]} />
      <main lang={locale} className="snap-shell relative overflow-x-hidden bg-background">
        <ProfileHero profile={profile} locale={locale} />
        <LinkHub profile={profile} />
        <FloatingWhatsAppButton
          ariaLabel={profile.phoneLabel}
          label={profile.contactButtonLabel}
        />
      </main>
    </>
  );
}
