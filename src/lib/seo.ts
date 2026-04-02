import { brandProfiles, defaultLocale } from "@/data/brand-profile";
import { siteConfig } from "@/lib/site";

const defaultProfile = brandProfiles[defaultLocale];
const mapHref =
  defaultProfile.links.find((link) => link.id === "location")?.href ?? siteConfig.url;

export const seoConfig = {
  businessName: defaultProfile.brandName,
  primaryPhone: "+90 553 128 38 43",
  phoneHref: "tel:+905531283843",
  locality: "Balçova",
  region: "İzmir",
  country: "TR",
  coordinates: {
    latitude: 38.3937052,
    longitude: 27.051147,
  },
  mapHref,
  keywords: [
    "izmir erkek berberi",
    "balçova berber",
    "izmir erkek kuaförü",
    "ilkan kaymak",
    "ilkan kaymak hair artist",
    "izmir berber",
    "balçova erkek berberi",
    "sakal tasarımı izmir",
  ],
} as const;

export function getAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function getHomeMetadata(locale: "tr" | "en") {
  if (locale === "en") {
    return {
      title: "İlkan Kaymak Hair Artist | Men's Hairdresser in İzmir Balçova",
      description:
        "Premium men's hairdresser in İzmir Balçova. Discover haircut, beard design, grooming, contact details, directions, and online appointment options for İlkan Kaymak Hair Artist.",
    };
  }

  return {
    title: "İlkan Kaymak Hair Artist | İzmir Erkek Berberi, Balçova Berber",
    description:
      "İzmir Balçova'da premium erkek berberi. Saç kesimi, sakal tasarımı, grooming, konum, iletişim ve online randevu için İlkan Kaymak Hair Artist.",
  };
}

export function buildBarberShopSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": getAbsoluteUrl("/#barbershop"),
    name: seoConfig.businessName,
    url: getAbsoluteUrl("/"),
    image: [
      getAbsoluteUrl("/images/ilkkan.png"),
      getAbsoluteUrl("/images/ikpage1.PNG"),
      getAbsoluteUrl("/images/ilkan2.PNG"),
    ],
    description:
      "İlkan Kaymak Hair Artist, Balçova İzmir merkezli premium erkek berberi, saç kesimi ve sakal tasarımı hizmetleri sunar.",
    telephone: seoConfig.primaryPhone,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "İzmir",
      },
      {
        "@type": "AdministrativeArea",
        name: "Balçova",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: seoConfig.locality,
      addressRegion: seoConfig.region,
      addressCountry: seoConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.coordinates.latitude,
      longitude: seoConfig.coordinates.longitude,
    },
    sameAs: [
      defaultProfile.socials.find((social) => social.platform === "instagram")?.href,
      defaultProfile.socials.find((social) => social.platform === "tiktok")?.href,
      mapHref,
    ].filter(Boolean),
    hasMap: mapHref,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": getAbsoluteUrl("/#website"),
    url: getAbsoluteUrl("/"),
    name: seoConfig.businessName,
    inLanguage: ["tr-TR", "en-US"],
  };
}
