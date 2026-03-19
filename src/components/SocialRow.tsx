import type { ReactNode } from "react";

import type { BrandSocialLink, BrandSocialPlatform } from "@/data/brand-profile";

type SocialRowProps = {
  socials: BrandSocialLink[];
  accentColor: string;
};

type SocialMeta = {
  label: string;
  icon: ReactNode;
};

const socialMeta: Record<BrandSocialPlatform, SocialMeta> = {
  instagram: {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  tiktok: {
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M13 5V13.4C13 15.6 11.4 17 9.7 17C8 17 6.7 15.8 6.7 14.2C6.7 12.7 7.9 11.5 9.5 11.5C10.1 11.5 10.5 11.6 11 11.9" />
        <path d="M13 5C13.7 6.4 15 7.4 16.7 7.7" />
      </svg>
    ),
  },
  youtube: {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M6 7.5C4.9 8.2 4.5 9.7 4.5 12C4.5 14.3 4.9 15.8 6 16.5C7.2 17.2 9.2 17.5 12 17.5C14.8 17.5 16.8 17.2 18 16.5C19.1 15.8 19.5 14.3 19.5 12C19.5 9.7 19.1 8.2 18 7.5C16.8 6.8 14.8 6.5 12 6.5C9.2 6.5 7.2 6.8 6 7.5Z" />
        <path d="M10.3 9.2L15 12L10.3 14.8V9.2Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  whatsapp: {
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M12 19C15.9 19 19 16.1 19 12.5C19 8.9 15.9 6 12 6C8.1 6 5 8.9 5 12.5C5 13.8 5.4 15 6.1 16L5.2 19L8.5 18.1C9.5 18.7 10.7 19 12 19Z" />
        <path d="M9.3 10.1C9.7 12.1 11.1 13.7 13.1 14.6" />
      </svg>
    ),
  },
  maps: {
    label: "Maps",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M12 20C12 20 17 14.7 17 10.8C17 8 14.8 6 12 6C9.2 6 7 8 7 10.8C7 14.7 12 20 12 20Z" />
        <circle cx="12" cy="10.8" r="1.8" />
      </svg>
    ),
  },
};

export function SocialRow({ socials, accentColor }: SocialRowProps) {
  return (
    <ul className="flex items-center justify-center gap-2.5">
      {socials.map((social) => {
        const meta = socialMeta[social.platform];

        return (
          <li key={`${social.platform}-${social.href}`}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={meta.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_14px_30px_-22px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c1410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907]"
              style={{
                color: accentColor,
                backgroundColor: "#120d0a",
                borderColor: `${accentColor}2f`,
              }}
            >
              {meta.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
