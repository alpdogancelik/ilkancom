import Image from "next/image";

import type { BrandFeature } from "@/data/brand-profile";

type FeaturedCardProps = {
  feature: BrandFeature;
  accentColor: string;
};

export function FeaturedCard({ feature, accentColor }: FeaturedCardProps) {
  return (
    <a
      href={feature.href}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-[1.8rem] border border-black/8 bg-[#efe8dd] p-4 shadow-[0_20px_40px_-34px_rgba(18,18,18,0.22)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <p
            className="text-[0.68rem] font-semibold uppercase tracking-[0.28em]"
            style={{ color: accentColor }}
          >
            {feature.eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-6 tracking-tight text-foreground">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
          <span
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: accentColor }}
          >
            {feature.cta}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current stroke-[2] transition group-hover:translate-x-0.5"
            >
              <path d="M5 12H19" />
              <path d="M12 5L19 12L12 19" />
            </svg>
          </span>
        </div>
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.35rem] border border-black/8 bg-white/55">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            fill
            sizes="6rem"
            className="object-contain p-2"
          />
        </div>
      </div>
    </a>
  );
}
