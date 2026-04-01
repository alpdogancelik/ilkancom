import Image from "next/image";

import type { BrandActionLink, BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { BrandFooter } from "./BrandFooter";
import LineWaves from "./linewaves";
import { RevealOnView } from "./RevealOnView";
import { ReviewCarousel } from "./ReviewCarousel";

type LinkHubProps = {
  profile: BrandProfile;
};

type MapCardProps = {
  profile: BrandProfile;
  mapLink?: BrandActionLink;
  mapExternal: boolean;
  desktop?: boolean;
};

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
        desktop ? "aspect-auto h-[12rem] sm:h-[13rem] lg:h-[14rem] xl:h-[15rem]" : "aspect-[16/10] lg:aspect-[16/7]"
      } flex`}
    >
      <div className="bento-item group relative flex h-full w-full flex-col overflow-hidden rounded-[48px]">
        <div className="absolute top-7 left-8 z-20 md:top-8 md:left-9">
          <span className="mb-2 block text-[10px] font-bold tracking-[0.4em] uppercase text-[#C7A17A]">
            {profile.locationLabel}
          </span>
          <h3 className="text-3xl font-medium tracking-tight text-white">{profile.locationName}</h3>
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
              ? "pointer-events-none absolute inset-y-0 right-5 items-center md:right-7"
              : "mt-auto p-10"
          }`}
        >
          <a
            href={mapLink.href}
            target={mapExternal ? "_blank" : undefined}
            rel={mapExternal ? "noreferrer noopener" : undefined}
            className={`cursor-pointer rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase backdrop-blur-md transition-all hover:border-[#C7A17A] hover:text-[#C7A17A] ${
              desktop ? "pointer-events-auto px-9 py-4" : "px-10 py-5"
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
  const splitIndex = Math.ceil(profile.aboutParagraphs.length / 2);
  const aboutParagraphColumns = [
    profile.aboutParagraphs.slice(0, splitIndex),
    profile.aboutParagraphs.slice(splitIndex),
  ].filter((column) => column.length > 0);

  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,19,14,0.92)_0%,rgba(16,11,8,0.98)_100%)] p-4 shadow-[0_28px_70px_-34px_rgba(0,0,0,0.72)] sm:p-5 lg:p-5 xl:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,149,99,0.14),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%)]" />

      <div className="relative grid gap-5 lg:grid-cols-[minmax(16rem,0.56fr)_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[minmax(17rem,0.54fr)_minmax(0,1fr)]">
        <div>
          <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0f0a08] shadow-[0_20px_48px_-28px_rgba(0,0,0,0.78)]">
            <Image
              src="/images/ilkankaymakcup.png"
              alt={`${profile.brandName} portrait`}
              width={1600}
              height={2000}
              sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, 100vw"
              quality={92}
              className="h-full max-h-[25rem] w-full object-cover object-center lg:max-h-[34rem] xl:max-h-[36rem]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.36em] text-[#c89a5a]">
            {profile.aboutEyebrow}
          </p>
          <h3 className="mt-3 max-w-[48rem] text-[1.9rem] font-[760] leading-[0.94] tracking-[-0.045em] text-[#f5efe8] sm:text-[2.15rem] lg:text-[2.35rem] xl:text-[2.65rem]">
            {profile.aboutTitle}
          </h3>

          <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {aboutParagraphColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-[0.92rem] leading-[1.78] text-[#eadfce]/80 lg:text-[0.86rem] lg:leading-[1.72] xl:text-[0.9rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-[#c29563]/18 bg-black/16 px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#c89a5a]">
              {profile.aboutTrainingTitle}
            </p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
              {profile.aboutTrainingItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 text-[0.82rem] leading-[1.55] text-[#f0e5d8]/84 lg:text-[0.76rem]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-white/8 bg-[linear-gradient(135deg,rgba(194,149,99,0.12),rgba(255,255,255,0.02))] px-4 py-4">
            <p className="text-[0.94rem] leading-[1.8] text-[#f4ebdf]/84 lg:text-[0.84rem] lg:leading-[1.72] xl:text-[0.88rem]">
              {profile.aboutClosing}
            </p>
            <p className="mt-4 text-[0.76rem] font-semibold uppercase tracking-[0.28em] text-[#d8c0a5]/68">
              {profile.aboutSignature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LinkHub({ profile }: LinkHubProps) {
  const mapLink = profile.links.find((link) => link.id === "location");
  const mapExternal = mapLink ? isExternalHref(mapLink.href) : false;

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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.34)_0%,rgba(5,4,3,0.16)_24%,rgba(7,5,4,0.58)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,5,4,0.62)_0%,rgba(7,5,4,0.18)_28%,rgba(7,5,4,0.08)_56%,rgba(7,5,4,0.54)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_34%,rgba(5,4,3,0.16)_72%,rgba(5,4,3,0.34)_100%)]" />

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[108rem] items-start px-3 pt-[max(0.7rem,env(safe-area-inset-top))] pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6 sm:pt-5 sm:pb-6 lg:px-14 lg:py-12 xl:px-20">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <RevealOnView delayMs={40} className="lg:col-span-5">
                <h2 className="max-w-[40rem] text-left text-[clamp(3rem,5.6vw,6.2rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white uppercase">
                  <span className="block">{headingCopy.line1}</span>
                  <span className="block">{headingCopy.line2}</span>
                  <span className="block">{headingCopy.line3}</span>
                  <span className="block bg-[linear-gradient(90deg,#c7a17a_0%,#f3ddba_45%,#a47b4f_100%)] bg-clip-text text-transparent">
                    {headingCopy.line4}
                  </span>
                </h2>
              </RevealOnView>

              <RevealOnView delayMs={80} className="mt-2 lg:col-span-7 lg:mt-0 lg:pl-2 xl:pl-4">
                <MapCard profile={profile} mapLink={mapLink} mapExternal={mapExternal} desktop />
              </RevealOnView>
            </div>

            <RevealOnView delayMs={120} className="mt-10 lg:mt-12">
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
              <div id="about-section">
                <AboutSection profile={profile} />
              </div>
            </RevealOnView>

            <RevealOnView delayMs={220} className="mt-8 lg:hidden">
              <div className="overflow-hidden py-8 text-center">
                <p className="text-[0.9rem] font-semibold uppercase tracking-[0.34em] text-[#d5baa0]/72">
                  {profile.locationName}
                </p>
              </div>
            </RevealOnView>
          </div>
        </div>
      </section>

      <BrandFooter profile={profile} />
    </>
  );
}
