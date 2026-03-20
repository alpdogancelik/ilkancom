export type BrandSocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whatsapp"
  | "maps";

export type BrandActionLink = {
  label: string;
  href: string;
};

export type BrandSocialLink = {
  platform: BrandSocialPlatform;
  href: string;
};

export type BrandProfile = {
  brandName: string;
  brandBadge: string;
  tagline: string;
  serviceType: string;
  heroImage: string;
  heroImageAlt: string;
  linksImage: string;
  linksImageAlt: string;
  featuredLinkLabels: string[];
  accentColor: string;
  surfaceColor: string;
  buttonBackground: string;
  buttonText: string;
  links: BrandActionLink[];
  socials: BrandSocialLink[];
  footerTag: string;
};

export const brandProfile: BrandProfile = {
  brandName: "İlkan Kaymak",
  brandBadge: "İK",
  tagline: "Detay, kalite, ayrıcalık.",
  serviceType: "HAIR STYLIST",
  heroImage: "/images/ilkkan.png",
  heroImageAlt: "İlkan Kaymak'ın tam ekran portresi.",
  linksImage: "/images/ilkan2.PNG",
  linksImageAlt: "İlkan Kaymak'ın bağlantı sayfası için portre arka planı.",
  featuredLinkLabels: ["Randevu Al", "Instagram"],
  accentColor: "#c29563",
  surfaceColor: "#120d0a",
  buttonBackground: "#1b130f",
  buttonText: "#f6ecde",
  links: [
    { label: "Online Randevu", href: "https://example.com/book" },
    { label: "WhatsApp", href: "https://whatsapp.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Konum", href: "https://maps.google.com" },
  ],
  socials: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "tiktok", href: "https://tiktok.com" },
    { platform: "youtube", href: "https://youtube.com" },
    { platform: "whatsapp", href: "https://whatsapp.com" },
    { platform: "maps", href: "https://maps.google.com" },
  ],
  footerTag: "@330",
};
