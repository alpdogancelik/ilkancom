// Ilk ekran kahraman bolumu: dil secimi, sosyal kisayollar ve CTA alanlari.
import Link from "next/link";
import Image from "next/image";

import {
  defaultLocale,
  type BrandProfile,
  type BrandSocialLink,
  type BrandSocialPlatform,
  type Locale,
} from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import SplitText from "./splittext";
import { SwipeIndicator } from "./SwipeIndicator";

type ProfileHeroProps = {
  profile: BrandProfile;
  locale: Locale;
};

type SocialMeta = {
  label: string;
  icon: React.ReactNode;
};

const languageSwitchCopy = {
  tr: {
    tr: "Türkçe",
    en: "İngilizce",
  },
  en: {
    tr: "Turkish",
    en: "English",
  },
} as const;

const heroSocialOrder = ["tiktok", "instagram", "whatsapp"] as const;

const socialMeta: Record<BrandSocialPlatform, SocialMeta> = {
  instagram: {
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[0.95rem] w-[0.95rem] fill-none stroke-current stroke-[1.85]"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  tiktok: {
    label: "TikTok",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[0.95rem] w-[0.95rem] fill-none stroke-current stroke-[1.85]"
      >
        <path d="M13 5V13.4C13 15.6 11.4 17 9.7 17C8 17 6.7 15.8 6.7 14.2C6.7 12.7 7.9 11.5 9.5 11.5C10.1 11.5 10.5 11.6 11 11.9" />
        <path d="M13 5C13.7 6.4 15 7.4 16.7 7.7" />
      </svg>
    ),
  },
  youtube: {
    label: "YouTube",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[0.95rem] w-[0.95rem] fill-none stroke-current stroke-[1.85]"
      >
        <path d="M6 7.5C4.9 8.2 4.5 9.7 4.5 12C4.5 14.3 4.9 15.8 6 16.5C7.2 17.2 9.2 17.5 12 17.5C14.8 17.5 16.8 17.2 18 16.5C19.1 15.8 19.5 14.3 19.5 12C19.5 9.7 19.1 8.2 18 7.5C16.8 6.8 14.8 6.5 12 6.5C9.2 6.5 7.2 6.8 6 7.5Z" />
        <path d="M10.3 9.2L15 12L10.3 14.8V9.2Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  whatsapp: {
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden className="h-[0.9rem] w-[0.9rem] fill-current">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    ),
  },
  maps: {
    label: "Maps",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-[0.95rem] w-[0.95rem] fill-none stroke-current stroke-[1.85]"
      >
        <path d="M12 20C12 20 17 14.7 17 10.8C17 8 14.8 6 12 6C9.2 6 7 8 7 10.8C7 14.7 12 20 12 20Z" />
        <circle cx="12" cy="10.8" r="1.8" />
      </svg>
    ),
  },
};

function getLocaleHref(locale: Locale) {
  // Varsayilan dil URL'de parametre olmadan acilir.
  return locale === defaultLocale ? "/" : `/?lang=${locale}`;
}

function LanguageSwitch({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#140e0b]/76 p-1 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.72)] backdrop-blur-sm ${className ?? ""}`}
    >
      {(["tr", "en"] as const).map((language) => {
        const isActive = locale === language;

        return (
          <Link
            key={language}
            href={getLocaleHref(language)}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            aria-label={languageSwitchCopy[locale][language]}
            className={`inline-flex min-w-[2.5rem] items-center justify-center rounded-full px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b09] ${
              isActive
                ? "bg-[#f1e4d2] text-[#1b130f] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]"
                : "text-[#e8d8c4]/72 hover:bg-white/7 hover:text-[#f5efe8]"
            }`}
          >
            {language.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

function HeroSocialRail({
  socials,
  accentColor,
  iconClassName,
  containerClassName,
}: {
  socials: BrandSocialLink[];
  accentColor: string;
  iconClassName?: string;
  containerClassName?: string;
}) {
  // Hero alanindaki sosyal ikon listesini cizer.
  return (
    <ul className={containerClassName ?? "flex flex-col gap-3"}>
      {socials.map((social) => {
        const meta = socialMeta[social.platform];

        return (
          <li key={`${social.platform}-${social.href}`}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={meta.label}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border bg-[#120d0a]/76 shadow-[0_18px_32px_-22px_rgba(0,0,0,0.55)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#18110e]/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907] ${iconClassName ?? ""}`}
              style={{
                color: "#f3e7d8",
                borderColor: `${accentColor}24`,
              }}
            >
              {meta.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function ProfileHero({ profile, locale }: ProfileHeroProps) {
  // Profil verisine gore hero icerigi locale bazli olusturulur.
  const appointmentLink = profile.links.find((link) => link.id === "appointment");
  const appointmentExternal = appointmentLink ? isExternalHref(appointmentLink.href) : false;
  const [firstName, ...restName] = profile.brandName.split(" ");
  const lastName = restName.join(" ");
  const heroSocials = heroSocialOrder.flatMap((platform) => {
    const social = profile.socials.find((item) => item.platform === platform);
    return social ? [social] : [];
  });

  return (
    <section className="snap-panel safe-screen relative isolate overflow-hidden bg-black">
      <Image
        src={profile.heroImage}
        alt={profile.heroImageAlt}
        fill
        priority
        quality={92}
        sizes="(max-width: 1023px) 100vw, 0px"
        className="object-cover object-[center_20%] sm:object-[center_18%] lg:hidden"
      />
      <div className="absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_50%_14%,rgba(120,20,48,0.32),transparent_32%),linear-gradient(180deg,#28050d_0%,#18040a_58%,#090505_100%)]" />
      <Image
        src={profile.heroImage}
        alt={profile.heroImageAlt}
        fill
        priority
        quality={92}
        sizes="(min-width: 1024px) 60vw, 0px"
        className="hidden object-contain lg:block lg:scale-[1.08] lg:object-[53%_86%] xl:scale-[1.1] xl:object-[53%_88%]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,2,0.02)_0%,rgba(5,4,3,0.06)_18%,rgba(7,5,4,0.18)_44%,rgba(8,6,5,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,5,0.42)_0%,rgba(8,6,5,0.12)_18%,rgba(8,6,5,0.04)_48%,rgba(8,6,5,0.26)_100%)]" />

      <div className="relative flex min-h-[100svh] w-full flex-col px-6 pt-8 pb-[calc(env(safe-area-inset-bottom)+4.75rem)] sm:px-8 sm:pb-[calc(env(safe-area-inset-bottom)+6rem)] lg:px-14 lg:pb-[calc(env(safe-area-inset-bottom)+1.2rem)] xl:px-16">
        <div className="flex items-start justify-between gap-4">
          <Image
            src="/images/ikman.png"
            alt={`${profile.brandName} logo`}
            width={88}
            height={88}
            priority
            className="h-14 w-14 object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.42)] sm:h-[4.5rem] sm:w-[4.5rem]"
          />

          <div className="flex flex-col items-end gap-3 lg:hidden">
            <LanguageSwitch locale={locale} />
            <HeroSocialRail
              socials={heroSocials}
              accentColor={profile.accentColor}
              iconClassName="h-11 w-11"
              containerClassName="mt-5 flex flex-col gap-3"
            />
          </div>
        </div>

        <div className="absolute top-8 right-6 hidden items-start gap-6 lg:flex xl:top-10 xl:right-8 xl:gap-7">
          <LanguageSwitch locale={locale} className="scale-[0.92] origin-top-right" />
          <HeroSocialRail socials={heroSocials} accentColor={profile.accentColor} />
        </div>

        <div className="mt-auto max-w-[16.75rem] translate-y-8 pb-16 text-left sm:max-w-[18.25rem] sm:translate-y-0 sm:pb-24 lg:max-w-[20rem] lg:pb-24">
          <SplitText
            text={profile.serviceType}
            tag="p"
            splitType="chars"
            delay={18}
            duration={0.9}
            threshold={0.18}
            rootMargin="-60px"
            textAlign="left"
            className="text-[0.66rem] font-semibold tracking-[0.5em] text-[#c89a5a] uppercase lg:hidden"
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
          />
          <p className="reveal hidden text-[0.66rem] font-semibold uppercase tracking-[0.5em] text-[#c89a5a] lg:block">
            {profile.serviceType}
          </p>

          <div className="mt-5 lg:hidden">
            <h1 className="text-[clamp(3.8rem,12vw,6.8rem)] font-[790] leading-[0.88] tracking-[-0.065em] text-[#f5efe8]">
              <SplitText
                text={firstName}
                tag="span"
                splitType="chars"
                delay={22}
                duration={1}
                threshold={0.18}
                rootMargin="-60px"
                textAlign="left"
                className="block"
                from={{ opacity: 0, y: 28 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                text={lastName}
                tag="span"
                splitType="chars"
                delay={22}
                duration={1}
                threshold={0.18}
                rootMargin="-60px"
                startDelayMs={180}
                textAlign="left"
                className="mt-0.5 block"
                from={{ opacity: 0, y: 28 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h1>
          </div>
          <h1 className="reveal reveal-delay-1 mt-5 hidden text-[clamp(3.8rem,12vw,6.8rem)] font-[790] leading-[0.88] tracking-[-0.065em] text-[#f5efe8] lg:mt-6 lg:block lg:text-[clamp(5rem,8vw,7.2rem)]">
            <span className="block">{firstName}</span>
            <span className="mt-0.5 block">{lastName}</span>
          </h1>

          <div className="mt-4 lg:hidden">
            <p className="inline-flex max-w-[16.5rem] items-center rounded-[0.38rem] border border-[#c89a5a]/18 bg-[linear-gradient(90deg,rgba(201,153,94,0.2)_0%,rgba(201,153,94,0.1)_58%,rgba(201,153,94,0.03)_100%)] px-3.5 py-2 text-[0.8rem] font-medium tracking-[0.18em] text-[#f3e6d7]/86 shadow-[0_16px_30px_-22px_rgba(0,0,0,0.74)] backdrop-blur-[1px] sm:max-w-[18rem]">
              <span>{profile.tagline}</span>
            </p>
          </div>
          <div className="reveal reveal-delay-2 mt-4 hidden lg:block">
            <p className="inline-flex max-w-[16.5rem] items-center rounded-[0.38rem] border border-[#c89a5a]/18 bg-[linear-gradient(90deg,rgba(201,153,94,0.2)_0%,rgba(201,153,94,0.1)_58%,rgba(201,153,94,0.03)_100%)] px-3.5 py-2 text-[0.8rem] font-medium tracking-[0.18em] text-[#f3e6d7]/86 shadow-[0_16px_30px_-22px_rgba(0,0,0,0.74)] backdrop-blur-[1px] sm:max-w-[18rem]">
              {profile.tagline}
            </p>
          </div>

          {appointmentLink ? (
            <>
              <div className="reveal reveal-delay-3 mt-4 flex w-full justify-start lg:hidden">
                <a
                  href={appointmentLink.href}
                  target={appointmentExternal ? "_blank" : undefined}
                  rel={appointmentExternal ? "noreferrer noopener" : undefined}
                  className="inline-flex min-w-[9rem] items-center justify-center rounded-full border border-[#b7814d30] bg-[#15100d]/96 px-6 py-3 text-[0.56rem] font-semibold uppercase tracking-[0.34em] text-[#f5efe8] shadow-[0_18px_44px_-28px_rgba(0,0,0,0.78)] transition duration-300 hover:-translate-y-0.5 hover:border-[#c2956355] hover:bg-[#1b140f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <span>{profile.heroAppointmentLabel}</span>
                </a>
              </div>
              <div className="reveal reveal-delay-3 mt-4 hidden w-full justify-start lg:flex">
                <a
                  href={appointmentLink.href}
                  target={appointmentExternal ? "_blank" : undefined}
                  rel={appointmentExternal ? "noreferrer noopener" : undefined}
                  className="inline-flex min-w-[9rem] items-center justify-center rounded-full border border-[#b7814d30] bg-[#15100d]/96 px-6 py-3 text-[0.56rem] font-semibold uppercase tracking-[0.34em] text-[#f5efe8] shadow-[0_18px_44px_-28px_rgba(0,0,0,0.78)] transition duration-300 hover:-translate-y-0.5 hover:border-[#c2956355] hover:bg-[#1b140f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {profile.heroAppointmentLabel}
                </a>
              </div>
            </>
          ) : null}

        </div>

        <div className="reveal reveal-delay-3 mt-3 flex w-full justify-center lg:hidden">
          <SwipeIndicator href="#link-hub" label={profile.swipeIndicatorLabel} />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1.9rem)] hidden justify-center lg:flex">
          <SwipeIndicator
            href="#link-hub"
            label={profile.swipeIndicatorLabel}
            className="pointer-events-auto bg-[#120d0a]/76 shadow-[0_16px_34px_-22px_rgba(0,0,0,0.72)] backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
}
