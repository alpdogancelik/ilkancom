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
  brandName: "Ilkan Kaymak",
  brandBadge: "IK",
  tagline: "Modern cuts, beard styling, and premium appointments.",
  serviceType: "Hair Stylist",
  heroImage: "/images/ilkkan.png",
  heroImageAlt: "Full-screen portrait of Ilkan Kaymak.",
  linksImage: "/images/ilkan2.PNG",
  linksImageAlt: "Portrait background for Ilkan Kaymak's links page.",
  featuredLinkLabels: ["Book Appointment", "Instagram"],
  accentColor: "#c29563",
  surfaceColor: "#120d0a",
  buttonBackground: "#1d1511",
  buttonText: "#f6ecde",
  links: [
    { label: "Book Appointment", href: "https://example.com/book" },
    { label: "WhatsApp", href: "https://whatsapp.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Location", href: "https://maps.google.com" },
  ],
  socials: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "tiktok", href: "https://tiktok.com" },
    { platform: "youtube", href: "https://youtube.com" },
    { platform: "whatsapp", href: "https://whatsapp.com" },
    { platform: "maps", href: "https://maps.google.com" },
  ],
  footerTag: "\u00A9330",
};
