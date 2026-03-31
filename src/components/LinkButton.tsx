import type { BrandActionLinkId } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

type LinkButtonProps = {
  id: BrandActionLinkId;
  label: string;
  href: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
};

function LinkIcon({ id }: { id: BrandActionLinkId }) {
  if (id === "whatsapp") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 fill-current">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <path d="M13 5V13.4C13 15.6 11.4 17 9.7 17C8 17 6.7 15.8 6.7 14.2C6.7 12.7 7.9 11.5 9.5 11.5C10.1 11.5 10.5 11.6 11 11.9" />
        <path d="M13 5C13.7 6.4 15 7.4 16.7 7.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-none stroke-current stroke-[2]">
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </svg>
  );
}

export function LinkButton({
  id,
  label,
  href,
  accentColor,
  backgroundColor,
  textColor,
}: LinkButtonProps) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group relative block overflow-hidden rounded-[1.2rem] border px-5 py-[0.96rem] shadow-[0_18px_36px_-32px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_-32px_rgba(0,0,0,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907] active:scale-[0.995]"
      style={{ backgroundColor, borderColor: `${accentColor}1f`, color: textColor }}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0)_48%)]"
      />

      <div className="relative flex items-center justify-between gap-4">
        <p className="text-[0.93rem] font-medium tracking-[-0.012em]">{label}</p>
        <span
          aria-hidden
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 group-hover:translate-x-0.5"
          style={{
            backgroundColor: `${accentColor}12`,
            borderColor: `${accentColor}35`,
            color: accentColor,
          }}
        >
          <LinkIcon id={id} />
        </span>
      </div>
    </a>
  );
}
