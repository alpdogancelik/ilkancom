import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { SwipeIndicator } from "./SwipeIndicator";

type ProfileHeroProps = {
  profile: BrandProfile;
};

export function ProfileHero({ profile }: ProfileHeroProps) {
  const appointmentLink = profile.links.find((link) => link.label === "Online Randevu");
  const primaryActions = [
    ...(appointmentLink
      ? [{ label: "Randevu Al", href: appointmentLink.href, variant: "primary" as const }]
      : []),
    ...profile.links
      .filter((link) => link.label === "Instagram")
      .map((link) => ({ ...link, variant: "secondary" as const })),
  ];

  return (
    <section className="snap-panel safe-screen relative isolate overflow-hidden bg-black">
      <Image
        src={profile.heroImage}
        alt={profile.heroImageAlt}
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-[center_20%] sm:object-[center_18%] lg:hidden"
      />
      {profile.desktopHeroImage ? (
        <Image
          src={profile.desktopHeroImage}
          alt={profile.heroImageAlt}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="hidden object-cover lg:block lg:object-[center_center]"
        />
      ) : (
        <Image
          src={profile.heroImage}
          alt={profile.heroImageAlt}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="hidden object-cover lg:block lg:object-[center_8%] xl:object-[center_10%]"
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,2,0.02)_0%,rgba(5,4,3,0.05)_18%,rgba(7,5,4,0.18)_44%,rgba(8,6,5,0.74)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_52%,rgba(9,6,4,0.38)_72%,rgba(9,6,4,0.78)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-6 pt-8 pb-[calc(env(safe-area-inset-bottom)+1.8rem)] sm:px-8 lg:px-14 xl:px-20">
        <div className="flex items-start justify-between">
          <Image
            src="/images/ikman.png"
            alt={`${profile.brandName} logo`}
            width={88}
            height={88}
            priority
            className="h-14 w-14 object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.42)] sm:h-[4.5rem] sm:w-[4.5rem]"
          />
          <div className="w-10" />
        </div>

        <div className="mt-auto max-w-[15.75rem] pb-2 text-left sm:max-w-[18rem] lg:max-w-[19.5rem]">
          <p className="reveal text-[0.66rem] font-semibold uppercase tracking-[0.52em] text-[#c89a5a]">
            {profile.serviceType}
          </p>
          <h1 className="reveal reveal-delay-1 mt-3 text-[clamp(3.05rem,10.5vw,4.9rem)] font-[780] leading-[0.88] tracking-[-0.06em] text-[#f5efe8]">
            <span className="block">İlkan</span>
            <span className="mt-0.5 block">Kaymak</span>
          </h1>
          <div className="reveal reveal-delay-2 mt-5">
            <p className="inline-flex max-w-[15.5rem] items-center rounded-sm border border-[#c89a5a]/22 bg-[linear-gradient(90deg,rgba(201,153,94,0.34)_0%,rgba(201,153,94,0.18)_55%,rgba(201,153,94,0.05)_100%)] px-3 py-2 text-[1rem] font-[650] leading-[1.5] tracking-[-0.015em] text-[#fff3e1] shadow-[0_10px_30px_-18px_rgba(201,153,94,0.55)] backdrop-blur-[1px] sm:max-w-[17rem]">
              {profile.tagline}
            </p>
          </div>

          <div className="reveal reveal-delay-3 mt-6 flex flex-wrap items-center gap-2.5">
            {primaryActions.map((link) => {
              const external = isExternalHref(link.href);
              const baseClass =
                "inline-flex min-w-[9.1rem] items-center justify-center rounded-full border px-4.5 py-[0.8rem] text-[0.68rem] font-semibold uppercase tracking-[0.28em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
              const variantClass =
                link.variant === "primary"
                  ? "border-[#b7814d3d] bg-[#16100d]/96 text-[#f5efe8] shadow-[0_18px_44px_-28px_rgba(0,0,0,0.78)] hover:border-[#c2956360] hover:bg-[#1c140f]"
                  : "border-white/10 bg-[#120d0a]/38 text-[rgba(245,239,232,0.82)] hover:bg-[#18110e]/72";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className={`${baseClass} ${variantClass}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="reveal reveal-delay-3 mt-5 w-fit">
            <SwipeIndicator href="#link-hub" label="Linkler İçin Kaydır" />
          </div>
        </div>
      </div>
    </section>
  );
}
