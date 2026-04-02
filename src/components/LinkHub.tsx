// Ana icerik merkezi: harita, yorumlar, hakkimda ve footer bolumlerini toplar.
import Image from "next/image";

import type { BrandActionLink, BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { AnimatedCounter } from "./AnimatedCounter";
import { BrandFooter } from "./BrandFooter";
import ColorBends from "./colorbends";
import { DesktopAnimatedHeroTitle } from "./DesktopAnimatedHeroTitle";
import { RevealOnView } from "./RevealOnView";
import { ReviewCarousel } from "./ReviewCarousel";
import { ServicePriceDialog } from "./ServicePriceDialog";
import SplitText from "./splittext";

type LinkHubProps = {
  profile: BrandProfile;
};

type MapCardProps = {
  profile: BrandProfile;
  mapLink?: BrandActionLink;
  mapExternal: boolean;
  desktop?: boolean;
};

type AnimatedHeroTitleProps = {
  lines: string[];
  accentLine?: number;
};

type HeroQuickNavProps = {
  profile: BrandProfile;
  appointmentLink?: BrandActionLink;
  appointmentExternal: boolean;
};


function AnimatedHeroTitle({ lines, accentLine }: AnimatedHeroTitleProps) {
  // Baslik karakterleri gecikmeli animasyonla satir satir gosterilir.
  const titleClassName =
    "font-display mx-auto w-full max-w-[96vw] text-center text-[clamp(1.64rem,9.1vw,2.7rem)] font-extrabold leading-[1] tracking-[-0.034em] text-white uppercase sm:max-w-[26rem] sm:text-[clamp(1.95rem,6.8vw,3.35rem)] sm:tracking-[-0.042em] lg:mx-0 lg:max-w-[31rem] lg:text-left lg:text-[clamp(2.15rem,3.2vw,3.75rem)] lg:leading-[0.96] lg:tracking-[-0.05em]";

  return (
    <>
      <h2 className={`${titleClassName} lg:hidden`}>
        {lines.map((line, lineIndex) => (
          <SplitText
            key={`${line}-${lineIndex}`}
            text={line}
            tag="span"
            splitType="chars"
            delay={20}
            duration={0.95}
            threshold={0.18}
            rootMargin="-40px"
            startDelayMs={lineIndex * 160}
            textAlign="center"
            className={`hero-title-line block ${lineIndex === accentLine ? "split-gradient-gold" : ""}`}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
          />
        ))}
      </h2>

      <DesktopAnimatedHeroTitle lines={lines} accentLine={accentLine} className={titleClassName} />
    </>
  );
}

function HeroQuickNav({ profile, appointmentLink, appointmentExternal }: HeroQuickNavProps) {
  const isTurkish = profile.locale === "tr";
  const items = [
    { label: isTurkish ? "Hakkımızda" : "About", href: "#about-section", external: false, soon: false },
    {
      label: isTurkish ? "Randevu Oluştur" : "Book Appointment",
      href: appointmentLink?.href ?? "#",
      external: appointmentExternal,
      soon: !appointmentLink,
    },
    {
      label: isTurkish ? "Kozmetik Ürünleri" : "Cosmetic Products",
      href: "#",
      external: false,
      soon: true,
    },
  ];

  return (
    <div className="mt-5 hidden w-full max-w-[28rem] flex-col gap-2.5 lg:flex">
      {items.map((item) =>
        item.soon ? (
          <div
            key={item.label}
            aria-disabled="true"
            className="group flex h-[3.45rem] cursor-default items-center justify-between rounded-[1.1rem] border border-[#1f1f1f] bg-[#090909]/72 px-4 text-[#e7e7e7] opacity-70"
          >
            <span className="flex items-baseline gap-2.5">
              <span className="text-[1.18rem] font-medium tracking-[-0.016em]">{item.label}</span>
              <span className="text-[0.56rem] font-semibold tracking-[0.12em] text-[#5f5f5f] uppercase">
                {isTurkish ? "(yakında)" : "(soon)"}
              </span>
            </span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#242424] bg-black/36 text-[#a48663]">
              <svg viewBox="0 0 24 24" aria-hidden className="h-[0.62rem] w-[0.62rem] fill-none stroke-current stroke-[2.4]">
                <path d="M7 12h10" />
                <path d="M13 8l4 4-4 4" />
              </svg>
            </span>
          </div>
        ) : (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer noopener" : undefined}
            className="group flex h-[3.45rem] items-center justify-between rounded-[1.1rem] border border-[#1f1f1f] bg-[#090909]/72 px-4 text-[#e7e7e7] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#2f2f2f] hover:bg-[#0d0d0d]/88"
          >
            <span className="text-[1.18rem] font-medium tracking-[-0.016em]">{item.label}</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#242424] bg-black/36 text-[#a48663] transition-colors duration-300 group-hover:border-[#3b3b3b] group-hover:text-[#cfac84]">
              <svg viewBox="0 0 24 24" aria-hidden className="h-[0.62rem] w-[0.62rem] fill-none stroke-current stroke-[2.4]">
                <path d="M7 12h10" />
                <path d="M13 8l4 4-4 4" />
              </svg>
            </span>
          </a>
        ),
      )}
    </div>
  );
}


function MapCard({ profile, mapLink, mapExternal, desktop = false }: MapCardProps) {
  if (!mapLink) {
    return null;
  }

  const mapUiCopy =
    profile.locale === "tr"
      ? {
          routeLabel: "YOL TARIFI AL",
        }
      : {
          routeLabel: "GET DIRECTIONS",
        };

  return (
    <div
      className={`${
        desktop
          ? "aspect-square w-full"
          : "h-[30rem] min-h-[30rem] w-[calc(100%+0.75rem)] -mx-[0.375rem] sm:mx-0 sm:h-[32rem] sm:min-h-[32rem] sm:w-full lg:h-auto lg:min-h-0 lg:aspect-[16/7]"
      } flex`}
    >
      <div className="bento-item group relative flex h-full w-full flex-col overflow-hidden rounded-[38px] border-2 sm:rounded-[48px] sm:border">
        <div
          className={`absolute left-6 z-20 sm:left-8 md:left-9 ${
            desktop ? "bottom-5 md:bottom-7" : "top-6 sm:top-7 md:top-8"
          }`}
        >
          {desktop ? (
            <>
              <span className="mb-2 block text-[10px] font-bold tracking-[0.4em] uppercase text-[#C7A17A]">
                {profile.locationLabel}
              </span>
              <h3 className="text-[2rem] font-medium tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                {profile.locationName}
              </h3>
            </>
          ) : (
            <>
              <SplitText
                text={profile.locationLabel}
                tag="span"
                splitType="chars"
                delay={16}
                duration={0.8}
                threshold={0.2}
                rootMargin="-40px"
                textAlign="left"
                className="mb-2 block text-[10px] font-bold tracking-[0.4em] text-[#C7A17A] uppercase"
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                text={profile.locationName}
                tag="h3"
                splitType="words, chars"
                delay={16}
                duration={0.95}
                threshold={0.2}
                rootMargin="-40px"
                startDelayMs={120}
                textAlign="left"
                className="text-[2rem] font-medium tracking-tight text-white sm:text-[2.2rem]"
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
            </>
          )}
        </div>

        <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-1000 group-hover:opacity-60">
          {profile.mapEmbedUrl ? (
            <iframe
              src={profile.mapEmbedUrl}
              title={`${profile.brandName} ${profile.locationName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="premium-map h-full w-full scale-150 border-0"
              allowFullScreen
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="berber-pole mb-1 shadow-[0_0_25px_rgba(199,161,122,0.4)]" />
          <div className="h-2 w-2 rounded-full bg-[#C7A17A] shadow-[0_0_15px_#C7A17A]" />
        </div>

        <div
          className={`z-20 flex justify-end ${
            desktop
              ? "pointer-events-none absolute right-5 bottom-5 md:right-7 md:bottom-7"
              : "mt-auto p-6 sm:p-10"
          }`}
        >
          <a
            href={mapLink.href}
            target={mapExternal ? "_blank" : undefined}
            rel={mapExternal ? "noreferrer noopener" : undefined}
            className={`cursor-pointer rounded-full border border-white/10 bg-white/5 text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase backdrop-blur-md transition-all hover:border-[#C7A17A] hover:text-[#C7A17A] sm:text-[10px] ${
              desktop ? "pointer-events-auto px-9 py-4" : "px-6 py-3.5 sm:px-10 sm:py-5"
            }`}
            aria-label={profile.mapButtonLabel}
          >
            {mapUiCopy.routeLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutSection({ profile }: { profile: BrandProfile }) {
  const aboutStats =
    profile.locale === "tr"
      ? [
          { value: "22", label: "YILLIK TECRÜBE" },
          { value: "15+", label: "ULUSLARARASI ÖDÜL" },
        ]
      : [
          { value: "22", label: "YEARS EXPERIENCE" },
          { value: "15+", label: "INTERNATIONAL AWARDS" },
        ];
  const aboutLead = profile.aboutParagraphs[0];
  // Ikinci paragraf destekleyici metin olarak kullanilir.
  const aboutSupport = profile.aboutParagraphs[1] ?? "";
  const aboutHeading =
    profile.locale === "tr"
      ? {
          line1: "Kişisel yaklaşım, güçlü teknik altyapı",
          line2: "ve rafine erkek bakımı.",
        }
      : {
          line1: "Personal approach, strong technical foundation",
          line2: "and refined men's grooming.",
        };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-4 shadow-[0_28px_70px_-34px_rgba(0,0,0,0.72)] sm:p-6 lg:p-7 xl:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(194,149,99,0.1),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_46%)]" />

      <div className="relative grid items-start gap-7 lg:grid-cols-12 lg:gap-8 xl:gap-10">
        <div className="order-1 flex flex-col gap-4 sm:gap-6 lg:order-1 lg:col-span-4">
          <RevealOnView>
            <div className="bento-item rounded-[24px] p-2 sm:rounded-[30px]">
              <div className="relative aspect-square overflow-hidden rounded-[18px] sm:aspect-[4/5] sm:rounded-[24px] lg:min-h-[25.5rem] xl:min-h-[27.5rem]">
                <Image
                  src="/images/hakkimdapic.jpg"
                  alt={`${profile.brandName} about portrait`}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 25vw, 100vw"
                  quality={92}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </RevealOnView>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {aboutStats.map((stat, index) => (
              <RevealOnView key={stat.label} delayMs={100 + index * 100}>
                <div className="bento-item rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.78)_0%,rgba(12,12,12,0.92)_100%)] flex h-full flex-col items-center justify-center p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:rounded-[1.75rem] sm:p-5">
                  <AnimatedCounter
                    value={Number.parseInt(stat.value, 10)}
                    suffix={stat.value.includes("+") ? "+" : ""}
                    suffixPersistent={stat.value.includes("+")}
                    suffixAtEndOnly={stat.value.includes("+")}
                    durationMs={stat.value.includes("+") ? 2400 : 1800}
                    className="bg-[linear-gradient(180deg,#f3d2b3_0%,#c7a17a_58%,#8b6f4d_100%)] bg-clip-text text-[2.15rem] font-bold tracking-[-0.05em] text-transparent tabular-nums sm:text-[2.8rem] md:text-[3.2rem]"
                  />
                  <span className="mt-2 text-[8px] tracking-[0.24em] text-[#8f8f96] uppercase sm:text-[10px]">
                    {stat.label}
                  </span>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>

        <div className="order-2 flex flex-col justify-start lg:order-2 lg:col-span-8">
          <div className="mb-6 sm:mb-9 lg:mb-8">
            <RevealOnView delayMs={150}>
              <>
                <SplitText
                  text={profile.aboutEyebrow}
                  tag="span"
                  splitType="chars"
                  delay={18}
                  duration={0.85}
                  threshold={0.18}
                  rootMargin="-50px"
                  textAlign="left"
                  className="mb-3 block text-[9px] font-bold tracking-[0.4em] text-[#C7A17A] uppercase sm:mb-4 sm:text-[10px] lg:hidden"
                  from={{ opacity: 0, y: 14 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <span className="mb-3 hidden text-[9px] font-bold tracking-[0.4em] text-[#C7A17A] uppercase sm:mb-4 sm:text-[10px] lg:block">
                  {profile.aboutEyebrow}
                </span>
              </>
            </RevealOnView>
            <RevealOnView delayMs={250}>
              <>
                <div className="max-w-[43rem] lg:hidden">
                  <SplitText
                    text={aboutHeading.line1}
                    tag="span"
                    splitType="words, chars"
                    delay={18}
                    duration={1}
                    threshold={0.18}
                    rootMargin="-50px"
                    textAlign="left"
                    className="block text-[2.1rem] font-[780] leading-[1] tracking-[-0.05em] text-white sm:text-[2.45rem]"
                    from={{ opacity: 0, y: 24 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <SplitText
                    text={aboutHeading.line2}
                    tag="span"
                    splitType="words, chars"
                    delay={18}
                    duration={1}
                    threshold={0.18}
                    rootMargin="-50px"
                    startDelayMs={180}
                    textAlign="left"
                    className="split-gradient-silver mt-1 block text-[2.1rem] font-[780] leading-[1] tracking-[-0.05em] sm:text-[2.45rem]"
                    from={{ opacity: 0, y: 24 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
                <h3 className="hidden max-w-[43rem] text-[2.1rem] font-[780] leading-[1] tracking-[-0.05em] text-white sm:text-[2.45rem] lg:block lg:text-[2.95rem] xl:text-[3.3rem]">
                  {aboutHeading.line1}
                  <br className="hidden sm:block" />
                  <span className="bg-[linear-gradient(90deg,#ffffff_0%,#a3a3a3_100%)] bg-clip-text text-transparent">
                    {" "}
                    {aboutHeading.line2}
                  </span>
                </h3>
              </>
            </RevealOnView>
          </div>

          <div className="mb-7 flex max-w-[36rem] flex-col gap-4 text-sm leading-[1.68] font-light text-[#A1A1AA] sm:mb-10 sm:gap-5 sm:text-base lg:text-[0.93rem]">
            <RevealOnView delayMs={350}>
              <>
                <SplitText
                  text={aboutLead}
                  tag="p"
                  splitType="lines"
                  delay={80}
                  duration={0.8}
                  threshold={0.12}
                  rootMargin="-50px"
                  textAlign="left"
                  className="lg:hidden"
                  from={{ opacity: 0, y: 18 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <p className="hidden lg:block">{aboutLead}</p>
              </>
            </RevealOnView>
            <RevealOnView delayMs={450}>
              <>
                <SplitText
                  text={aboutSupport}
                  tag="p"
                  splitType="lines"
                  delay={80}
                  duration={0.8}
                  threshold={0.12}
                  rootMargin="-50px"
                  startDelayMs={120}
                  textAlign="left"
                  className="lg:hidden"
                  from={{ opacity: 0, y: 18 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <p className="hidden lg:block lg:max-w-[36rem]">{aboutSupport}</p>
              </>
            </RevealOnView>
          </div>

          <RevealOnView delayMs={650}>
            <div className="bento-item relative overflow-hidden rounded-[1.7rem] border border-[#c7a17a]/18 bg-[linear-gradient(135deg,rgba(27,23,20,0.92)_0%,rgba(15,14,13,0.96)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:rounded-[2rem] sm:p-7">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#f0c898] via-[#c7a17a] to-[#7f5b38]" />
              <p className="about-shiny-text text-sm leading-relaxed font-light italic sm:text-base md:text-lg">
                &quot;{profile.aboutClosing}&quot;
              </p>
              <div className="relative z-10 mt-4 flex items-center gap-3 sm:mt-6">
                <div className="h-px w-6 bg-[#C7A17A] sm:w-8" />
                <span className="text-[9px] font-bold tracking-[0.28em] text-[#C7A17A] uppercase sm:text-[10px]">
                  {profile.aboutSignature.replace(/^.*?,\s*/u, "")}
                </span>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </div>
  );
}

export function LinkHub({ profile }: LinkHubProps) {
  // Profil linklerinden harita ve randevu baglantilari secilir.
  const mapLink = profile.links.find((link) => link.id === "location");
  const mapExternal = mapLink ? isExternalHref(mapLink.href) : false;
  const appointmentLink = profile.links.find((link) => link.id === "appointment");
  const appointmentExternal = appointmentLink ? isExternalHref(appointmentLink.href) : false;

  const headingCopy =
    profile.locale === "tr"
      ? {
          line1: "KAFAMIZA G\u00d6RE",
          line2: "DE\u011e\u0130L",
          line3: "KAFANIZA G\u00d6RE",
          line4: "KES\u0130YORUZ.",
        }
      : {
          line1: "WE CUT",
          line2: "ACCORDING TO",
          line3: "YOUR WILL,",
          line4: "NOT OURS.",
        };

  return (
    <>
      <section id="link-hub" className="snap-panel relative overflow-hidden bg-[#050402]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-8 bg-[linear-gradient(180deg,rgba(7,5,4,0.72)_0%,rgba(7,5,4,0.3)_48%,transparent_100%)] sm:h-10 lg:h-12" />
        <div className="pointer-events-none absolute inset-x-[10%] top-0 z-[1] h-10 rounded-b-[1.8rem] bg-[radial-gradient(circle_at_center_top,rgba(244,232,214,0.08)_0%,rgba(117,90,66,0.05)_34%,rgba(8,6,5,0)_72%)] blur-xl sm:inset-x-[16%] sm:h-12 sm:rounded-b-[2.2rem] lg:inset-x-[24%] lg:h-14 lg:rounded-b-[2.6rem]" />
        <div className="pointer-events-none absolute inset-x-[14%] top-0 z-[1] h-px bg-[linear-gradient(90deg,transparent_0%,rgba(231,210,183,0.14)_18%,rgba(231,210,183,0.24)_50%,rgba(231,210,183,0.14)_82%,transparent_100%)] opacity-60" />
        <div className="pointer-events-none absolute inset-0">
          <ColorBends
            className="h-full w-full"
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            autoRotate={0}
            transparent
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,5,14,0.36)_0%,rgba(7,4,12,0.18)_24%,rgba(5,3,10,0.16)_42%,rgba(4,3,7,0.58)_78%,rgba(0,0,0,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,3,10,0.68)_0%,rgba(5,3,10,0.28)_26%,rgba(5,3,10,0.12)_54%,rgba(2,1,4,0.76)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(0,0,0,0.14)_74%,rgba(0,0,0,0.34)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[108rem] items-start px-3 pt-[max(0.9rem,env(safe-area-inset-top))] pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6 sm:pt-5 sm:pb-6 lg:px-14 lg:pt-8 lg:pb-8 xl:px-20">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
              <RevealOnView delayMs={40} className="lg:col-span-5">
                <div className="flex w-full flex-col items-center lg:items-start">
                  <AnimatedHeroTitle
                    lines={[
                      headingCopy.line1,
                      headingCopy.line2,
                      headingCopy.line3,
                      headingCopy.line4,
                    ]}
                    accentLine={3}
                  />
                  <ServicePriceDialog
                    accentColor={profile.accentColor}
                    brandName={profile.brandName}
                    locale={profile.locale}
                    className="mt-5 sm:mt-7 lg:mt-8"
                  />
                  <HeroQuickNav
                    profile={profile}
                    appointmentLink={appointmentLink}
                    appointmentExternal={appointmentExternal}
                  />
                </div>
              </RevealOnView>

              <RevealOnView delayMs={80} className="mt-1 lg:hidden">
                <div id="location-section" className="scroll-mt-24">
                  <MapCard profile={profile} mapLink={mapLink} mapExternal={mapExternal} />
                </div>
              </RevealOnView>

              <RevealOnView delayMs={80} className="mt-2 hidden lg:col-span-7 lg:mt-0 lg:block lg:pl-2 xl:pl-4">
                <div
                  id="location-section-desktop"
                  className="scroll-mt-24 lg:ml-auto lg:w-full lg:max-w-[34rem] xl:max-w-[38rem]"
                >
                  <MapCard profile={profile} mapLink={mapLink} mapExternal={mapExternal} desktop />
                </div>
              </RevealOnView>
            </div>

            <RevealOnView delayMs={120} className="mt-2 lg:mt-12">
              <ReviewCarousel
                reviews={profile.reviews}
                accentColor={profile.accentColor}
                eyebrow={profile.reviewEyebrow}
                title={profile.reviewTitle}
                ownerReplyLabel={profile.ownerReplyLabel}
                guestExperienceLabel={profile.reviewTitle}
              />
            </RevealOnView>

            <RevealOnView delayMs={200} className="mt-8 lg:mt-10">
              <div id="about-section" className="scroll-mt-24">
                <AboutSection profile={profile} />
              </div>
            </RevealOnView>

            <RevealOnView delayMs={220} className="mt-8 lg:hidden">
              <div className="overflow-hidden py-8 text-center">
                <SplitText
                  text={profile.locationName}
                  tag="p"
                  splitType="chars"
                  delay={16}
                  duration={0.85}
                  threshold={0.2}
                  rootMargin="-30px"
                  textAlign="center"
                  className="text-[0.9rem] font-semibold tracking-[0.34em] text-[#d5baa0]/72 uppercase"
                  from={{ opacity: 0, y: 14 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
            </RevealOnView>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-[linear-gradient(180deg,transparent_0%,rgba(4,3,3,0.38)_34%,rgba(4,3,3,0.86)_100%)] sm:h-16 lg:h-20" />
        <div className="pointer-events-none absolute inset-x-[8%] bottom-0 z-20 h-14 rounded-t-[2rem] bg-[radial-gradient(circle_at_center_bottom,rgba(247,237,223,0.16)_0%,rgba(141,110,92,0.1)_28%,rgba(4,3,3,0)_72%)] blur-2xl sm:inset-x-[12%] sm:h-16 sm:rounded-t-[2.5rem] lg:inset-x-[18%] lg:h-20 lg:rounded-t-[3rem]" />
        <div className="pointer-events-none absolute inset-x-[12%] bottom-0 z-20 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(231,210,183,0.16)_18%,rgba(231,210,183,0.3)_50%,rgba(231,210,183,0.16)_82%,transparent_100%)] opacity-80" />
      </section>

      <BrandFooter profile={profile} />
    </>
  );
}
