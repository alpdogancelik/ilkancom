import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";

import LineWaves from "./linewaves";

type BrandFooterProps = {
  profile: BrandProfile;
};

export function BrandFooter({ profile }: BrandFooterProps) {
  const wordmark = profile.brandName.toLocaleUpperCase("tr-TR");

  return (
    <footer className="relative overflow-hidden bg-[#050402] text-[#f7efe5]">
      <div className="absolute inset-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,2,0.18)_0%,rgba(4,3,2,0.52)_100%)]" />

      <div className="relative mx-auto max-w-[120rem] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
        <div className="relative mx-auto max-w-[74rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[rgba(18,13,10,0.52)] shadow-[0_36px_90px_-48px_rgba(0,0,0,0.88)] backdrop-blur-[22px]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_18%,rgba(0,0,0,0.08)_100%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[10.5rem] w-[10.5rem] sm:h-[12rem] sm:w-[12rem] lg:h-[14.5rem] lg:w-[14.5rem]">
                <Image
                  src="/images/ikfooter.png"
                  alt={`${profile.brandName} emblem`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 14.5rem, (min-width: 640px) 12rem, 10.5rem"
                  className="object-contain"
                />
              </div>

              <h2
                className="-mt-2 text-center text-[clamp(3rem,7.3vw,5.2rem)] font-bold uppercase leading-[0.98] tracking-[0.035em] text-[#fff7ec]"
                style={{
                  fontFamily: "var(--font-libre-baskerville)",
                }}
              >
                {wordmark}
              </h2>

              <div className="relative mt-3 h-[3.6rem] w-[14rem] sm:h-[4rem] sm:w-[15.5rem] lg:h-[4.8rem] lg:w-[18.5rem]">
                <Image
                  src="/images/hairartist.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18.5rem, (min-width: 640px) 15.5rem, 14rem"
                  className="object-contain"
                />
              </div>

              <p className="mt-5 text-[0.76rem] font-semibold uppercase tracking-[0.36em] text-[#d8bea0]/78">
                {profile.locationName}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-4 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#d8bea0]/64">
              <span>{profile.footerTag}</span>
              <span>{profile.serviceType}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
