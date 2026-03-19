import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";

import { SwipeIndicator } from "./SwipeIndicator";

type ProfileHeroProps = {
  profile: BrandProfile;
};

export function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <section
      className="snap-panel safe-screen relative isolate overflow-hidden"
      style={{ backgroundColor: profile.heroBackground }}
    >
      <div
        className="absolute left-0 top-28 h-28 w-3 rounded-r-full"
        style={{ backgroundColor: profile.accentColor }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_50%)]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="reveal flex items-start justify-between gap-4 pt-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-sm font-semibold text-foreground shadow-[0_12px_30px_-22px_rgba(22,16,10,0.45)]">
              {profile.brandBadge}
            </span>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground/55">
                {profile.handle}
              </p>
              <p className="text-base font-semibold tracking-tight text-foreground">
                {profile.brandName}
              </p>
            </div>
          </div>

          <div className="max-w-[10rem] text-right text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.22em] text-foreground/70">
            <p>{profile.serviceType}</p>
            <p className="mt-1">{profile.city}</p>
          </div>
        </div>

        <div className="grid flex-1 content-center gap-6 py-6 lg:grid-cols-[0.92fr_0.95fr_0.78fr] lg:gap-10">
          <div className="order-1 reveal reveal-delay-1">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-foreground/55">
              {profile.category}
            </p>
            <h1 className="mt-4 max-w-[5.2ch] text-[clamp(4.4rem,18vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#15100d]">
              {profile.heroTitle}
            </h1>
            <p className="mt-5 max-w-xs text-sm leading-7 text-foreground/70 sm:text-base">
              {profile.heroSubtitle}
            </p>

            <div className="mt-8 hidden max-w-xs rounded-[1.8rem] border border-black/10 bg-white/24 p-4 backdrop-blur lg:block">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-foreground/55">
                Journal
              </p>
              <p className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                Latest grooming tips and aftercare rituals.
              </p>
            </div>
          </div>

          <div className="order-3 reveal reveal-delay-2 lg:order-2">
            <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem]">
              <div
                className="absolute bottom-[7%] left-1/2 h-[68%] w-[74%] -translate-x-1/2 rounded-t-[2rem]"
                style={{ backgroundColor: profile.posterAccent }}
              />
              <Image
                src={profile.primaryImage}
                alt={profile.primaryImageAlt}
                width={760}
                height={980}
                priority
                className="relative z-10 mx-auto w-full drop-shadow-[0_32px_50px_rgba(35,23,15,0.2)]"
              />
              <div className="absolute left-3 top-6 rounded-2xl bg-white/55 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/75 backdrop-blur">
                <p>Hair Stylist</p>
                <p className="mt-1 text-foreground">{profile.stylistName}</p>
              </div>
              <div className="absolute bottom-10 right-0 rounded-2xl border border-black/8 bg-white/45 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 backdrop-blur">
                By appointment
              </div>
            </div>
          </div>

          <div className="order-2 flex flex-col justify-between gap-4 reveal reveal-delay-3 lg:order-3">
            <div className="rounded-[1.8rem] border border-black/10 bg-white/24 p-4 backdrop-blur">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-foreground/55">
                Salon Service
              </p>
              <ul className="mt-4 space-y-3 text-lg font-semibold uppercase leading-none tracking-tight text-foreground">
                {profile.heroHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-foreground/35" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-[1fr_7rem] gap-4 sm:grid-cols-[1fr_8rem] lg:grid-cols-[1fr_7rem]">
              <div className="rounded-[1.8rem] border border-black/10 bg-white/24 p-4 backdrop-blur">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground/55">
                  Our Special
                </p>
                <p className="mt-4 text-2xl font-semibold uppercase leading-[0.92] tracking-tight text-foreground">
                  Sharp fades and beard detail.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-[#f5ecde] p-2">
                <Image
                  src={profile.supportingImage}
                  alt={profile.supportingImageAlt}
                  fill
                  sizes="8rem"
                  className="object-contain p-2"
                />
              </div>
            </div>

            <a
              href="#link-hub"
              className="inline-flex min-h-14 items-center justify-between rounded-[1.35rem] bg-[#16120f] px-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Explore Links
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
                <path d="M12 5V19" />
                <path d="M6 13L12 19L18 13" />
              </svg>
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-3 pb-1">
          <SwipeIndicator href="#link-hub" label="Swipe Up For Links" />
        </div>
      </div>
    </section>
  );
}
