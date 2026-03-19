import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";

import { FeaturedCard } from "./FeaturedCard";
import { LinkButton } from "./LinkButton";
import { SocialRow } from "./SocialRow";

type LinkHubProps = {
  profile: BrandProfile;
};

export function LinkHub({ profile }: LinkHubProps) {
  return (
    <section
      id="link-hub"
      className="snap-panel safe-screen relative overflow-hidden"
      style={{ backgroundColor: profile.linkBackground }}
    >
      <div
        className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_68%)]"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.85fr_0.78fr]">
          <div className="hidden lg:block">
            <p
              className="text-[0.72rem] font-semibold uppercase tracking-[0.28em]"
              style={{ color: profile.linkAccent }}
            >
              Practical Layer
            </p>
            <h2 className="mt-4 max-w-lg font-display text-6xl leading-[0.92] tracking-tight text-foreground">
              Scroll lands on the useful part: taps, bookings, socials, and
              one fast featured story.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-muted">
              The cover builds desire. This section converts it with thumb-sized
              actions and a calm, direct hierarchy.
            </p>

            <div className="mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/8 bg-white/60 px-4 py-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Best For
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  Creators, salons, barbers, pastry brands.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-black/8 bg-white/60 px-4 py-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Mobile Target
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  Built around phone-first taps and scroll behavior.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[27rem]">
            <div
              className="phone-shadow rounded-[2.3rem] border border-black/8 p-5 sm:p-6"
              style={{ backgroundColor: profile.surfaceColor }}
            >
              <div className="text-center">
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-black uppercase tracking-tight text-[#16120f]"
                  style={{ backgroundColor: profile.accentColor }}
                >
                  {profile.brandBadge}
                </div>
                <p className="mt-5 text-[1.9rem] font-semibold tracking-tight text-foreground">
                  {profile.brandName}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {profile.tagline}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {profile.links.map((link) => (
                  <LinkButton
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    detail={link.detail}
                    accentColor={profile.linkAccent}
                    featured={link.featured}
                  />
                ))}
              </div>

              <div className="mt-5">
                <SocialRow socials={profile.socials} accentColor={profile.linkAccent} />
              </div>

              <div className="mt-5">
                <FeaturedCard
                  feature={profile.featuredCard}
                  accentColor={profile.linkAccent}
                />
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.9rem] border border-black/8 bg-[linear-gradient(180deg,#faf8f3_0%,#ede7dd_100%)] p-4">
                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-[11rem]">
                    <p
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: profile.linkAccent }}
                    >
                      Take Home Ritual
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                      Beard oil and finishing texture for post-cut care.
                    </p>
                  </div>

                  <div className="relative h-28 w-24 shrink-0">
                    <Image
                      src={profile.productImage}
                      alt={profile.productImageAlt}
                      fill
                      sizes="6rem"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-xs leading-6 tracking-[0.14em] text-muted">
                {profile.footerNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
