export type BrandSocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "x"
  | "whatsapp"
  | "maps";

export type BrandActionLink = {
  label: string;
  href: string;
  detail: string;
  featured?: boolean;
};

export type BrandSocialLink = {
  platform: BrandSocialPlatform;
  href: string;
};

export type BrandFeature = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type BrandProfile = {
  brandName: string;
  brandBadge: string;
  handle: string;
  category: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  city: string;
  serviceType: string;
  stylistName: string;
  primaryImage: string;
  primaryImageAlt: string;
  supportingImage: string;
  supportingImageAlt: string;
  productImage: string;
  productImageAlt: string;
  accentColor: string;
  posterAccent: string;
  linkAccent: string;
  heroBackground: string;
  linkBackground: string;
  surfaceColor: string;
  heroHighlights: string[];
  links: BrandActionLink[];
  socials: BrandSocialLink[];
  featuredCard: BrandFeature;
  footerNote: string;
};

export const brandProfile: BrandProfile = {
  brandName: "Ilkan Studio",
  brandBadge: "IS",
  handle: "@ilkancom",
  category: "Barber Atelier",
  tagline: "Cuts, beard sculpting, and calm appointments for modern men.",
  heroTitle: "MAKE UNIQUE STYLE",
  heroSubtitle:
    "A branded grooming experience with campaign-level visuals on the cover and a clean booking flow underneath.",
  city: "Istanbul",
  serviceType: "Barbering / Grooming",
  stylistName: "Ilkan Demir",
  primaryImage: "/images/experience/barber-portrait.svg",
  primaryImageAlt: "Illustrated barber portrait holding grooming tools.",
  supportingImage: "/images/experience/barber-tools.svg",
  supportingImageAlt: "Illustrated scissors and comb composition.",
  productImage: "/images/experience/grooming-oil.svg",
  productImageAlt: "Illustrated grooming oil bottle.",
  accentColor: "#ff6a2a",
  posterAccent: "#f4c63d",
  linkAccent: "#3548d6",
  heroBackground: "#cdc0b0",
  linkBackground: "#f1eee7",
  surfaceColor: "#fbfaf6",
  heroHighlights: ["Barbering", "Grooming", "Private Chair"],
  links: [
    {
      label: "Book Appointment",
      href: "https://example.com/book",
      detail: "Reserve a fade, beard sculpt, or full grooming session.",
      featured: true,
    },
    {
      label: "Service Menu",
      href: "https://example.com/menu",
      detail: "Cuts, skin fades, beard care, and premium add-ons.",
    },
    {
      label: "Grooming Journal",
      href: "https://example.com/journal",
      detail: "Latest tips, aftercare notes, and product rituals.",
    },
    {
      label: "Visit The Studio",
      href: "https://example.com/location",
      detail: "See the address, opening hours, and directions.",
    },
  ],
  socials: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "tiktok", href: "https://tiktok.com" },
    { platform: "youtube", href: "https://youtube.com" },
    { platform: "x", href: "https://x.com" },
    { platform: "whatsapp", href: "https://whatsapp.com" },
  ],
  featuredCard: {
    eyebrow: "This Week",
    title: "Clean taper with a sharp beard line-up",
    description:
      "A fast preview card for current work, editorial clips, or limited booking slots.",
    href: "https://example.com/story",
    cta: "View Feature",
    image: "/images/experience/barber-tools.svg",
    imageAlt: "Barber tools card illustration.",
  },
  footerNote:
    "Appointments are preferred. Walk-ins only when the chair is open.",
};
