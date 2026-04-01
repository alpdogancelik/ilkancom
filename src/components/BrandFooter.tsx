"use client";

// Sayfa sonundaki iletisim ve hizli baglanti bolumu.
import { useEffect, useRef, useState } from "react";

import type { BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import styles from "./BrandFooter.module.css";
import SplitText from "./splittext";

type BrandFooterProps = {
  profile: BrandProfile;
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

function findSocialHref(profile: BrandProfile, platform: "instagram" | "tiktok" | "whatsapp") {
  return profile.socials.find((social) => social.platform === platform)?.href ?? "#";
}

const DIRECT_PHONE_HREF = "tel:+905531283843";

export function BrandFooter({ profile }: BrandFooterProps) {
  // Footer gorunur oldugunda tek seferlik giris animasyonunu tetikler.
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  const copy = footerCopy[profile.locale];
  const instagramHref = findSocialHref(profile, "instagram");
  const tiktokHref = findSocialHref(profile, "tiktok");
  const whatsappHref = findSocialHref(profile, "whatsapp");
  const phoneHref = DIRECT_PHONE_HREF;
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
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-black px-4 pt-4 pb-[max(env(safe-area-inset-bottom),0.6rem)] font-sans text-[#fdfdfd] sm:px-8 sm:pt-8 sm:pb-5 lg:pb-6"
    >
      <img
        src="https://i.hizliresim.com/p6nkv01.png"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute -left-24 bottom-0 z-0 w-[400px] max-w-none opacity-30 mix-blend-screen sm:-left-20 sm:w-[600px] ${styles.leftFloat}`}
      />
      <img
        src="https://i.hizliresim.com/mbrjyhb.png"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute top-0 -right-24 z-0 w-[400px] max-w-none opacity-30 mix-blend-screen sm:-right-20 sm:w-[600px] ${styles.rightFloat}`}
      />

      <div className="relative z-10 mx-auto flex w-full items-start justify-center">
        <div
          ref={domRef}
          className={`z-10 w-full max-w-[1100px] transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
            }`}
        >
          <div className="mb-8 grid grid-cols-1 gap-6 lg:mb-10 lg:grid-cols-3">
            <div className="group relative flex flex-col justify-between overflow-visible rounded-[32px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.006)_46%,rgba(255,255,255,0.01)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(255,255,255,0.05),0_18px_48px_-36px_rgba(0,0,0,0.72)] sm:p-10 lg:col-span-2">
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(163,196,255,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.09)_0%,transparent_30%,transparent_68%,rgba(255,255,255,0.045)_100%)] opacity-95" />
              <div className="relative mb-10 sm:mb-12 lg:mb-16">
                <h2 className="max-w-[19rem] text-[clamp(1.95rem,7.2vw,2.75rem)] leading-[1.08] font-medium tracking-tight sm:max-w-none sm:text-4xl">
                  <SplitText
                    text={copy.headingTop}
                    tag="span"
                    splitType="words, chars"
                    delay={18}
                    duration={0.95}
                    threshold={0.16}
                    rootMargin="-40px"
                    textAlign="left"
                    className="block"
                    from={{ opacity: 0, y: 22 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <SplitText
                    text={copy.headingBottom}
                    tag="span"
                    splitType="words, chars"
                    delay={18}
                    duration={0.95}
                    threshold={0.16}
                    rootMargin="-40px"
                    startDelayMs={140}
                    textAlign="left"
                    className="block"
                    from={{ opacity: 0, y: 22 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </h2>
                <div className="mt-4 inline-flex rounded-2xl bg-[#a5f3bc] px-4 py-2 text-xs font-semibold text-[#1a5d2e] shadow-lg lg:absolute lg:top-6 lg:right-6 lg:mt-0 lg:text-sm">
                  <SplitText
                    text={copy.bubbleLabel}
                    tag="span"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    threshold={0.16}
                    rootMargin="-40px"
                    textAlign="center"
                    className="block"
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>

              <div className="z-10 grid gap-5 sm:gap-6">
                <SplitText
                  text={copy.quickLinksTitle}
                  tag="h3"
                  splitType="chars"
                  delay={16}
                  duration={0.8}
                  threshold={0.16}
                  rootMargin="-40px"
                  textAlign="left"
                  className="text-[10px] font-semibold tracking-[0.28em] text-[#c7a17a] uppercase sm:text-xs"
                  from={{ opacity: 0, y: 14 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <div className="grid gap-4">
                  <div className="grid gap-3 sm:max-w-[24rem]">
                    <a
                      href="#about-section"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,rgba(255,255,255,0.006)_100%)] px-4 py-3 transition-all hover:border-[#c7a17a]/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.034)_0%,rgba(255,255,255,0.012)_100%)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/16 bg-[rgba(255,255,255,0.02)]">
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-[#c7a17a] stroke-[1.8]"
                          >
                            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                            <path d="M4 20c1.6-3.2 4.4-5 8-5s6.4 1.8 8 5" />
                          </svg>
                        </span>
                        <SplitText
                          text={copy.aboutLabel}
                          tag="span"
                          splitType="chars"
                          delay={14}
                          duration={0.75}
                          threshold={0.16}
                          rootMargin="-40px"
                          textAlign="left"
                          className="text-sm font-medium text-[#e2dfda]"
                          from={{ opacity: 0, y: 12 }}
                          to={{ opacity: 1, y: 0 }}
                        />
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
                      href="#location-section"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,rgba(255,255,255,0.006)_100%)] px-4 py-3 transition-all hover:border-[#c7a17a]/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.034)_0%,rgba(255,255,255,0.012)_100%)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/16 bg-[rgba(255,255,255,0.02)]">
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-[#c7a17a] stroke-[1.8]"
                          >
                            <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
                            <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-[#e2dfda]">
                          {copy.locationLabel}
                        </span>
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
              <div className="relative flex flex-grow flex-col justify-between rounded-[32px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.006)_46%,rgba(255,255,255,0.01)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(255,255,255,0.05),0_18px_48px_-36px_rgba(0,0,0,0.72)] sm:p-10">
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(163,196,255,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.09)_0%,transparent_30%,transparent_68%,rgba(255,255,255,0.045)_100%)] opacity-95" />
                <div className="mb-5">
                  {copy.contactEyebrow ? (
                    <SplitText
                      text={copy.contactEyebrow}
                      tag="p"
                      splitType="chars"
                      delay={14}
                      duration={0.75}
                      threshold={0.16}
                      rootMargin="-40px"
                      textAlign="left"
                      className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#c7a17a]"
                      from={{ opacity: 0, y: 12 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  ) : null}
                  <h2 className="text-[clamp(1.7rem,3.3vw,2.4rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-[#f4f4f4]">
                    <SplitText
                      text={copy.contactTitle}
                      tag="span"
                      splitType="words, chars"
                      delay={18}
                      duration={0.9}
                      threshold={0.16}
                      rootMargin="-40px"
                      textAlign="left"
                      className="block"
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                    <SplitText
                      text={copy.contactHighlight}
                      tag="span"
                      splitType="words, chars"
                      delay={18}
                      duration={0.9}
                      threshold={0.16}
                      rootMargin="-40px"
                      startDelayMs={120}
                      textAlign="left"
                      className="split-gradient-gold block"
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </h2>
                  <SplitText
                    text={copy.contactSubtitle}
                    tag="p"
                    splitType="lines"
                    delay={80}
                    duration={0.8}
                    threshold={0.16}
                    rootMargin="-40px"
                    startDelayMs={180}
                    textAlign="left"
                    className="mt-3 text-sm leading-relaxed text-[#a1a1aa]"
                    from={{ opacity: 0, y: 16 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
                <div className="relative space-y-4">
                  <a
                    href={phoneHref}
                    className={`group flex items-center gap-4 rounded-2xl border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.008)_100%)] p-4 transition-all hover:border-[#c7a17a]/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.036)_0%,rgba(255,255,255,0.012)_100%)] ${styles.animateShake}`}
                  >
                    <svg
                      className="h-6 w-6 fill-[#c7a17a] group-hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 22.621 16.479 15.83c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.82c-2.106 1.039-8.917 4.194-2.342 16.634 6.784 12.857 16.033 6.953 13.946 5.987Z" />
                    </svg>
                    <SplitText
                      text={copy.phoneLabel}
                      tag="span"
                      splitType="chars"
                      delay={14}
                      duration={0.75}
                      threshold={0.16}
                      rootMargin="-40px"
                      textAlign="left"
                      className="text-sm font-medium text-[#a1a1aa] transition-colors group-hover:text-white"
                      from={{ opacity: 0, y: 12 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <a
                  href={tiktokHref}
                  target={isExternalHref(tiktokHref) ? "_blank" : undefined}
                  rel={isExternalHref(tiktokHref) ? "noreferrer noopener" : undefined}
                  className="group flex aspect-square items-center justify-center rounded-[24px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,rgba(255,255,255,0.006)_100%)] transition-all hover:border-[#c7a17a]/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.032)_0%,rgba(255,255,255,0.01)_100%)]"
                >
                  <svg
                    className="h-7 w-7 fill-[#c7a17a] transition-transform group-hover:scale-110 group-hover:fill-white sm:h-8 sm:w-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.39-1.16 1.35-2.92 2.15-4.73 2.16-2.34.01-4.74-1.04-6.02-3.05-1.25-1.93-1.35-4.44-.32-6.44 1.05-2.03 3.32-3.21 5.6-3.15v4.02c-1.24-.04-2.58.46-3.24 1.55-.63 1.05-.51 2.51.27 3.42.75.87 1.97 1.25 3.08 1.07 1.15-.17 2.08-1.09 2.38-2.2.14-.52.17-1.07.16-1.6V0h.01Z" />
                  </svg>
                </a>

                <div className="group relative z-10 overflow-visible">
                  <a
                    href={instagramHref}
                    target={isExternalHref(instagramHref) ? "_blank" : undefined}
                    rel={isExternalHref(instagramHref) ? "noreferrer noopener" : undefined}
                    className="flex h-full w-full items-center justify-center rounded-[24px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,rgba(255,255,255,0.006)_100%)] transition-all group-hover:scale-110 hover:border-[#c7a17a]/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.032)_0%,rgba(255,255,255,0.01)_100%)]"
                  >
                    <svg className="h-7 w-7 fill-[#c7a17a] group-hover:fill-white sm:h-8 sm:w-8" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162Zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4Zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44Z" />
                    </svg>
                  </a>
                  <div className="absolute bottom-[-1.05rem] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[#f9a8d4] px-3 py-1 text-xs leading-none font-bold text-[#831843] shadow-lg sm:-right-4 sm:left-auto sm:translate-x-0 sm:rounded-tl-none">
                    <span>{copy.followLabel}</span>
                  </div>
                </div>

                <a
                  href={whatsappHref}
                  target={isExternalHref(whatsappHref) ? "_blank" : undefined}
                  rel={isExternalHref(whatsappHref) ? "noreferrer noopener" : undefined}
                  className="group flex aspect-square items-center justify-center rounded-[24px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,rgba(255,255,255,0.006)_100%)] transition-all hover:border-[#25d366]/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.032)_0%,rgba(255,255,255,0.01)_100%)]"
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

          <div className="mt-6 flex flex-col items-center gap-4 border-t border-[#222] pt-5 text-[#444] md:mt-8 md:flex-row md:pt-6">
            <div className="text-[10px] tracking-widest uppercase sm:text-xs md:mr-auto">© {currentYear}</div>
            <div className="flex items-center gap-4 text-[10px] sm:text-xs md:ml-auto">
              <span className="tracking-[0.2em] uppercase">{copy.rightsLabel}</span>
              <div className="flex items-center font-bold tracking-tighter">
                <span className={`${styles.metalicText} uppercase`}>{profile.footerTag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
