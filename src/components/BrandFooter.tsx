"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import type { BrandProfile } from "@/data/brand-profile";

import styles from "./BrandFooter.module.css";

type BrandFooterProps = {
  profile: BrandProfile;
};

type SplitTextProps = {
  text: string;
};

const footerCopy = {
  tr: {
    headingTop: "Gitmeden önce,",
    headingBottom: "bu bağlantılara göz atın",
    bubbleLabel: "Görüşmek üzere!",
    quickLinksTitle: "Hızlı Bağlantılar",
    aboutLabel: "Hakkımda",
    locationLabel: "Konum",
    contactEyebrow: "",
    contactTitle: "En sevdiğin berberi",
    contactHighlight: "tekrar ara.",
    contactSubtitle: "Koltuğun hazır. İlkan Kaymak ile doğrudan iletişim kur.",
    phoneLabel: "Şimdi Ara",
    followLabel: "Takip Et",
    rightsLabel: "Tüm Hakları Saklıdır",
  },
  en: {
    headingTop: "Before you go,",
    headingBottom: "check these links",
    bubbleLabel: "See you soon!",
    quickLinksTitle: "Quick Links",
    aboutLabel: "About",
    locationLabel: "Location",
    contactEyebrow: "Personal Line",
    contactTitle: "Call your favorite barber",
    contactHighlight: "again.",
    contactSubtitle: "Your chair is ready. Reach Ilkan Kaymak directly.",
    phoneLabel: "Call Now",
    followLabel: "Follow",
    rightsLabel: "All Rights Reserved",
  },
} as const;

function SplitText({ text }: SplitTextProps) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={styles.char}
          style={{ animationDelay: `${index * 0.03}s` } as CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function findSocialHref(profile: BrandProfile, platform: "instagram" | "tiktok" | "whatsapp") {
  return profile.socials.find((social) => social.platform === platform)?.href ?? "#";
}

const DIRECT_PHONE_HREF = "tel:+905531283843";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function BrandFooter({ profile }: BrandFooterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  const copy = footerCopy[profile.locale];
  const instagramHref = findSocialHref(profile, "instagram");
  const tiktokHref = findSocialHref(profile, "tiktok");
  const whatsappHref = findSocialHref(profile, "whatsapp");
  const phoneHref = DIRECT_PHONE_HREF;
  const locationHref =
    profile.links.find((link) => link.id === "location")?.href ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.locationName)}`;
  const locationExternal = isExternalHref(locationHref);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black p-4 pb-28 font-sans text-[#fdfdfd] sm:p-8">
      <div className="relative mx-auto flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
        <img
          src="https://i.hizliresim.com/p6nkv01.png"
          alt=""
          aria-hidden
          className={`pointer-events-none absolute -left-20 -bottom-20 z-0 w-[400px] opacity-30 mix-blend-screen sm:w-[600px] ${styles.leftFloat}`}
        />
        <img
          src="https://i.hizliresim.com/mbrjyhb.png"
          alt=""
          aria-hidden
          className={`pointer-events-none absolute -top-20 -right-20 z-0 w-[400px] opacity-30 mix-blend-screen sm:w-[600px] ${styles.rightFloat}`}
        />

        <div
          ref={domRef}
          className={`z-10 w-full max-w-[1100px] transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
            }`}
        >
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#222] bg-[#101010]/70 p-6 backdrop-blur-xl sm:p-10 lg:col-span-2">
              <div className="relative mb-12 sm:mb-24">
                <h2 className="max-w-[19rem] text-[clamp(1.95rem,7.2vw,2.75rem)] leading-[1.08] font-medium tracking-tight sm:max-w-none sm:text-4xl">
                  {isVisible ? (
                    <>
                      <span className="sm:hidden">{copy.headingTop}</span>
                      <span className="hidden sm:inline">
                        <SplitText text={copy.headingTop} />
                      </span>
                      <br />
                      <span className="sm:hidden">{copy.headingBottom}</span>
                      <span className="hidden sm:inline">
                        <SplitText text={copy.headingBottom} />
                      </span>
                    </>
                  ) : null}
                </h2>
                <div className="mt-4 inline-flex rounded-2xl bg-[#a5f3bc] px-4 py-2 text-xs font-semibold text-[#1a5d2e] shadow-lg sm:absolute sm:top-8 sm:-right-8 sm:mt-0 sm:translate-x-full sm:rounded-bl-none sm:text-sm">
                  {copy.bubbleLabel}
                </div>
              </div>

              <div className="z-10 grid gap-5 sm:gap-6">
                <h3 className="text-[10px] font-semibold tracking-[0.28em] text-[#c7a17a] uppercase sm:text-xs">
                  {copy.quickLinksTitle}
                </h3>

                <div className="grid gap-4">
                  <div className="grid gap-3 sm:max-w-[24rem]">
                    <a
                      href="#link-hub"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-[#2a2a2a] bg-[#151515]/82 px-4 py-3 transition-all hover:border-[#c7a17a] hover:bg-[#191919]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#c7a17a]/35 bg-[#1d1a16]">
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-[#c7a17a] stroke-[1.8]"
                          >
                            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                            <path d="M4 20c1.6-3.2 4.4-5 8-5s6.4 1.8 8 5" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-[#e2dfda]">{copy.aboutLabel}</span>
                      </div>
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-[#8a8a8a] stroke-[1.9] transition-transform group-hover:translate-x-0.5 group-hover:stroke-white"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </a>

                    <a
                      href={locationHref}
                      target={locationExternal ? "_blank" : undefined}
                      rel={locationExternal ? "noreferrer noopener" : undefined}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-[#2a2a2a] bg-[#151515]/82 px-4 py-3 transition-all hover:border-[#c7a17a] hover:bg-[#191919]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#c7a17a]/35 bg-[#1d1a16]">
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-[#c7a17a] stroke-[1.8]"
                          >
                            <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
                            <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-[#e2dfda]">{copy.locationLabel}</span>
                      </div>
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-[#8a8a8a] stroke-[1.9] transition-transform group-hover:translate-x-0.5 group-hover:stroke-white"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-grow flex-col justify-between rounded-[32px] border border-[#222] bg-[#101010]/70 p-6 backdrop-blur-xl sm:p-10">
                <div className="mb-5">
                  <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#c7a17a]">
                    {copy.contactEyebrow}
                  </p>
                  <h2 className="text-[clamp(1.7rem,3.3vw,2.4rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-[#f4f4f4]">
                    {copy.contactTitle}
                    <span className="block text-[#c7a17a]">{copy.contactHighlight}</span>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                    {copy.contactSubtitle}
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href={phoneHref}
                    className={`group flex items-center gap-4 rounded-2xl border border-[#222] bg-[#1a1a1a]/80 p-4 transition-all hover:border-[#c7a17a] ${styles.animateShake}`}
                  >
                    <svg
                      className="h-6 w-6 fill-[#c7a17a] group-hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 22.621 16.479 15.83c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.82c-2.106 1.039-8.917 4.194-2.342 16.634 6.784 12.857 16.033 6.953 13.946 5.987Z" />
                    </svg>
                    <span className="text-sm font-medium text-[#a1a1aa] transition-colors group-hover:text-white">
                      {copy.phoneLabel}
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <a
                  href={tiktokHref}
                  target={isExternalHref(tiktokHref) ? "_blank" : undefined}
                  rel={isExternalHref(tiktokHref) ? "noreferrer noopener" : undefined}
                  className="group flex aspect-square items-center justify-center rounded-[24px] border border-[#222] bg-[#101010]/70 transition-all hover:border-[#c7a17a]"
                >
                  <svg
                    className="h-7 w-7 fill-[#c7a17a] transition-transform group-hover:scale-110 group-hover:fill-white sm:h-8 sm:w-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.39-1.16 1.35-2.92 2.15-4.73 2.16-2.34.01-4.74-1.04-6.02-3.05-1.25-1.93-1.35-4.44-.32-6.44 1.05-2.03 3.32-3.21 5.6-3.15v4.02c-1.24-.04-2.58.46-3.24 1.55-.63 1.05-.51 2.51.27 3.42.75.87 1.97 1.25 3.08 1.07 1.15-.17 2.08-1.09 2.38-2.2.14-.52.17-1.07.16-1.6V0h.01Z" />
                  </svg>
                </a>

                <div className="group relative">
                  <a
                    href={instagramHref}
                    target={isExternalHref(instagramHref) ? "_blank" : undefined}
                    rel={isExternalHref(instagramHref) ? "noreferrer noopener" : undefined}
                    className="flex h-full w-full items-center justify-center rounded-[24px] border border-[#222] bg-[#101010]/70 transition-all group-hover:scale-110 hover:border-[#c7a17a]"
                  >
                    <svg className="h-7 w-7 fill-[#c7a17a] group-hover:fill-white sm:h-8 sm:w-8" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162Zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4Zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44Z" />
                    </svg>
                  </a>
                  <div className="absolute -right-4 -bottom-4 z-20 whitespace-nowrap rounded-xl rounded-tl-none bg-[#f9a8d4] px-3 py-1 text-xs font-bold text-[#831843] shadow-lg">
                    {copy.followLabel}
                  </div>
                </div>

                <a
                  href={whatsappHref}
                  target={isExternalHref(whatsappHref) ? "_blank" : undefined}
                  rel={isExternalHref(whatsappHref) ? "noreferrer noopener" : undefined}
                  className="group flex aspect-square items-center justify-center rounded-[24px] border border-[#222] bg-[#101010]/70 transition-all hover:border-[#25d366]"
                >
                  <svg
                    className="h-8 w-8 fill-[#c7a17a] transition-transform group-hover:scale-110 group-hover:fill-[#25d366] sm:h-9 sm:w-9"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#222] pt-8 text-[#444] md:flex-row">
            <div className="text-[10px] tracking-widest uppercase sm:text-xs">© {currentYear}</div>
            <div className="flex items-center gap-4 text-[10px] sm:text-xs">
              <span className="tracking-[0.2em] uppercase">{copy.rightsLabel}</span>
              <div className="flex items-center font-bold tracking-tighter">
                <span className={`${styles.metalicText} pr-1 uppercase`}>{profile.footerTag}</span>
                <span className="relative inline-block text-[#888]">
                  R
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] font-bold text-[#888]">
                    ©
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
