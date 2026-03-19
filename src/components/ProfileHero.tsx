import Image from "next/image";

import type { BrandActionLink, BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { SwipeIndicator } from "./SwipeIndicator";

type ProfileHeroProps = {
  profile: BrandProfile;
};

export function ProfileHero({ profile }: ProfileHeroProps) {
  const featuredLinks = profile.featuredLinkLabels
    .map((label) => profile.links.find((link) => link.label === label))
    .filter((link): link is BrandActionLink => Boolean(link));

  return (
    <section className="snap-panel safe-screen relative isolate overflow-hidden bg-black">
      <Image
        src={profile.heroImage}
        alt={profile.heroImageAlt}
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-[center_20%] sm:object-[center_18%] lg:object-[center_8%] xl:object-[center_10%]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,2,0.02)_0%,rgba(5,4,3,0.08)_18%,rgba(7,5,4,0.34)_62%,rgba(8,6,5,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,5,4,0.52)_0%,rgba(7,5,4,0.2)_20%,rgba(7,5,4,0.06)_42%,rgba(8,6,5,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,5,0.16)_0%,rgba(8,6,5,0.04)_36%,rgba(8,6,5,0.08)_100%)] lg:hidden" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-6 pt-10 pb-[calc(env(safe-area-inset-bottom)+3.25rem)] sm:px-8 lg:px-14 xl:px-20">
        <div className="max-w-[22rem] sm:max-w-[26rem] lg:max-w-[23rem] xl:max-w-[26rem]">
          <p className="reveal text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-white/74">
            {profile.serviceType}
          </p>
          <h1 className="reveal reveal-delay-1 mt-3 font-display text-[clamp(3.35rem,14vw,6rem)] leading-[0.86] tracking-[-0.04em] text-white lg:text-[clamp(4.15rem,6.2vw,6.2rem)]">
            {profile.brandName}
          </h1>
          <p className="reveal reveal-delay-2 mt-4 max-w-[18rem] text-[0.98rem] leading-6 text-[#efe1cf]/84 sm:max-w-[20rem] lg:max-w-[18rem] xl:max-w-[21rem]">
            {profile.tagline}
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-7 flex flex-wrap gap-3">
          {featuredLinks.map((link) => {
            const external = isExternalHref(link.href);

            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-[#120d0a] px-5 py-3 text-[0.73rem] font-semibold uppercase tracking-[0.24em] text-[#f5ebe0] shadow-[0_18px_44px_-24px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a120f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="reveal reveal-delay-3 mt-8 w-fit">
          <SwipeIndicator href="#link-hub" label="Swipe for links" />
        </div>
      </div>
    </section>
  );
}
