import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";

type BrandFooterProps = {
  profile: BrandProfile;
};

export function BrandFooter({ profile }: BrandFooterProps) {
  const wordmark = profile.brandName.toLocaleUpperCase("tr-TR");

  return (
    <footer className="relative overflow-hidden bg-[#f7f5f1] text-[#14100d]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(247,245,241,0.96)_100%)]" />

      <div className="relative mx-auto max-w-[120rem] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
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
            className="-mt-2 text-center text-[clamp(3rem,7.3vw,5.2rem)] font-bold uppercase leading-[0.98] tracking-[0.035em] text-black"
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
        </div>
      </div>
    </footer>
  );
}
