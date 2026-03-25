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
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[1.35rem] w-[1.35rem] fill-none stroke-current stroke-[1.8]"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  tiktok: {
    label: "TikTok",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[1.35rem] w-[1.35rem] fill-none stroke-current stroke-[1.8]"
      >
        <path d="M13 5V13.4C13 15.6 11.4 17 9.7 17C8 17 6.7 15.8 6.7 14.2C6.7 12.7 7.9 11.5 9.5 11.5C10.1 11.5 10.5 11.6 11 11.9" />
        <path d="M13 5C13.7 6.4 15 7.4 16.7 7.7" />
      </svg>
    ),
  },
  youtube: {
    label: "YouTube",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[1.35rem] w-[1.35rem] fill-none stroke-current stroke-[1.8]"
      >
        <path d="M6 7.5C4.9 8.2 4.5 9.7 4.5 12C4.5 14.3 4.9 15.8 6 16.5C7.2 17.2 9.2 17.5 12 17.5C14.8 17.5 16.8 17.2 18 16.5C19.1 15.8 19.5 14.3 19.5 12C19.5 9.7 19.1 8.2 18 7.5C16.8 6.8 14.8 6.5 12 6.5C9.2 6.5 7.2 6.8 6 7.5Z" />
        <path d="M10.3 9.2L15 12L10.3 14.8V9.2Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  whatsapp: {
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden className="h-[1.2rem] w-[1.2rem] fill-current">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    ),
  },
  maps: {
    label: "Konum",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[1.35rem] w-[1.35rem] fill-none stroke-current stroke-[1.8]"
      >
        <path d="M12 20C12 20 17 14.7 17 10.8C17 8 14.8 6 12 6C9.2 6 7 8 7 10.8C7 14.7 12 20 12 20Z" />
        <circle cx="12" cy="10.8" r="1.8" />
      </svg>
    ),
  },
};

export function SocialRow({ socials, accentColor }: SocialRowProps) {
  return (
    <ul className="flex items-center justify-center gap-3">
      {socials.map((social) => {
        const meta = socialMeta[social.platform];

        return (
          <li key={`${social.platform}-${social.href}`}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={meta.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_14px_30px_-22px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c1410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907]"
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
