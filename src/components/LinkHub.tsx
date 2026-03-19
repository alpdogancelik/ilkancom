import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";

import { LinkButton } from "./LinkButton";
import { RevealOnView } from "./RevealOnView";
import { SocialRow } from "./SocialRow";

type LinkHubProps = {
  profile: BrandProfile;
};

export function LinkHub({ profile }: LinkHubProps) {
  return (
    <section
      id="link-hub"
      className="snap-panel relative overflow-hidden bg-black"
    >
      <Image
        src={profile.linksImage}
        alt={profile.linksImageAlt}
        fill
        quality={92}
        sizes="100vw"
        className="object-cover object-[50%_18%] lg:object-[center_14%] xl:object-[center_18%]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.14)_0%,rgba(5,4,3,0.08)_18%,rgba(7,5,4,0.26)_58%,rgba(8,6,5,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,5,4,0.5)_0%,rgba(7,5,4,0.18)_26%,rgba(7,5,4,0.08)_56%,rgba(7,5,4,0.46)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,5,0.12)_0%,rgba(8,6,5,0.04)_40%,rgba(8,6,5,0.12)_100%)] lg:hidden" />

      <div className="relative mx-auto flex h-[100svh] w-full max-w-7xl items-stretch px-3 pt-[max(0.7rem,env(safe-area-inset-top))] pb-[calc(env(safe-area-inset-bottom)+0.8rem)] sm:px-6 sm:pt-5 sm:pb-6 lg:min-h-[100svh] lg:h-auto lg:items-center lg:px-14 lg:py-10 xl:px-20">
        <div
          className="mx-auto flex h-full w-full max-w-[40rem] flex-col rounded-[2rem] border border-white/12 p-5 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.78)] sm:p-6 lg:mx-0 lg:h-auto lg:max-w-[72rem] lg:rounded-[2.35rem] lg:p-8"
          style={{ backgroundColor: profile.surfaceColor }}
        >
          <div className="mx-auto h-1.5 w-16 rounded-full bg-white/12 lg:hidden" />

          <div className="flex-1 lg:grid lg:grid-cols-[minmax(16rem,0.78fr)_minmax(24rem,1fr)] lg:gap-8 xl:gap-12">
            <RevealOnView className="mt-5 lg:mt-0">
              <div className="flex items-start justify-between gap-4 lg:flex-col lg:h-full lg:justify-between">
                <div className="max-w-[18.5rem] sm:max-w-[24rem] lg:max-w-[22rem]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#cfb08a]">
                    {profile.serviceType}
                  </p>
                  <h2 className="mt-3 font-display text-[2.25rem] leading-[0.92] tracking-[-0.035em] text-[#fbf1e4] sm:text-[2.8rem] lg:text-[clamp(3rem,3.8vw,4.15rem)]">
                    {profile.brandName}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-6 text-[#eadccc]/78 lg:max-w-[18rem]">
                    {profile.tagline}
                  </p>
                </div>

                <div className="flex items-start gap-4 lg:mt-auto lg:flex-col lg:items-start">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[#1a120f] text-[0.78rem] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: profile.accentColor }}
                  >
                    {profile.brandBadge}
                  </div>

                  <div className="hidden lg:block">
                    <SocialRow socials={profile.socials} accentColor={profile.accentColor} />
                    <p className="mt-5 text-left text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d5baa0]/66">
                      {profile.footerTag}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnView>

            <div className="mt-7 space-y-3 lg:mt-0">
              {profile.links.map((link, index) => (
                <RevealOnView key={link.label} delayMs={index * 70 + 80}>
                  <LinkButton
                    label={link.label}
                    href={link.href}
                    accentColor={profile.accentColor}
                    backgroundColor={profile.buttonBackground}
                    textColor={profile.buttonText}
                  />
                </RevealOnView>
              ))}

              <RevealOnView
                delayMs={profile.links.length * 70 + 120}
                className="mt-8 border-t border-white/10 pt-5 lg:hidden"
              >
                <SocialRow socials={profile.socials} accentColor={profile.accentColor} />
                <p className="mt-5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d5baa0]/66">
                  {profile.footerTag}
                </p>
              </RevealOnView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
