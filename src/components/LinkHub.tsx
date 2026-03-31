import Image from "next/image";

import type { BrandActionLink, BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { LinkButton } from "./LinkButton";
import { BrandFooter } from "./BrandFooter";
import LineWaves from "./linewaves";
import { RevealOnView } from "./RevealOnView";
import { ReviewCarousel } from "./ReviewCarousel";
import { SocialRow } from "./SocialRow";

type LinkHubProps = {
  profile: BrandProfile;
};

type LinkHubHeaderProps = {
  profile: BrandProfile;
  appointmentLink?: BrandActionLink;
  appointmentExternal: boolean;
};

type MapCardProps = {
  profile: BrandProfile;
  mapLink?: BrandActionLink;
  mapExternal: boolean;
  desktop?: boolean;
};

function LinkHubHeader({
  profile,
  appointmentLink,
  appointmentExternal,
}: LinkHubHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="max-w-[16rem] sm:max-w-[19rem] lg:max-w-[24rem]">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.5em] text-[#c89a5a]">
          {profile.serviceType}
        </p>
        <h2 className="mt-3 text-[2.1rem] font-[760] leading-[0.95] tracking-[-0.05em] text-[#f5efe8] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.15rem]">
          {profile.brandName}
        </h2>
        <p className="mt-4 max-w-[15.5rem] text-[0.9rem] leading-[1.7] text-[rgba(245,239,232,0.7)] sm:max-w-[17rem] lg:max-w-[21rem] lg:text-[1rem]">
          {profile.hubDescription}
        </p>
      </div>

      <details className="group relative">
        <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-[#1a120f] text-[#d7b48f] transition hover:bg-[#211713] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563]">
          <span className="sr-only">{profile.menuToggleLabel}</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        </summary>

        {appointmentLink ? (
          <div className="absolute top-14 right-0 z-10 w-52 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#17100c]/96 p-2 shadow-[0_24px_60px_-26px_rgba(0,0,0,0.75)] backdrop-blur-md">
            <a
              href={appointmentLink.href}
              target={appointmentExternal ? "_blank" : undefined}
              rel={appointmentExternal ? "noreferrer noopener" : undefined}
              className="flex items-center justify-between rounded-[0.95rem] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f5ebe0] transition hover:bg-white/6"
            >
              <span>{profile.appointmentMenuLabel}</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-4 w-4 fill-none stroke-current stroke-[2] text-[#c29563]"
              >
                <path d="M5 12H19" />
                <path d="M12 5L19 12L12 19" />
              </svg>
            </a>
          </div>
        ) : null}
      </details>
    </div>
  );
}

function MapCard({ profile, mapLink, mapExternal, desktop = false }: MapCardProps) {
  if (!mapLink) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-[1.45rem] border border-[#c29563]/18 bg-[#17110d] shadow-[0_22px_48px_-28px_rgba(0,0,0,0.62)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
        <div>
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#c89a5a]">
            {profile.locationLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-[#f5efe8]">{profile.locationName}</p>
        </div>
        <a
          href={mapLink.href}
          target={mapExternal ? "_blank" : undefined}
          rel={mapExternal ? "noreferrer noopener" : undefined}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c29563]/28 bg-[#1a120f] text-[#c89a5a] transition hover:bg-[#221711] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563]"
          aria-label={profile.mapButtonLabel}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-4 w-4 fill-none stroke-current stroke-[2]"
          >
            <path d="M5 12H19" />
            <path d="M12 5L19 12L12 19" />
          </svg>
        </a>
      </div>

      {profile.mapEmbedUrl ? (
        <div
          className={`relative bg-[#120d0a] ${
            desktop ? "aspect-auto h-[24rem] xl:h-[27rem]" : "aspect-[16/10] lg:aspect-[16/7]"
          }`}
        >
          <iframe
            src={profile.mapEmbedUrl}
            title={`${profile.brandName} ${profile.locationName}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
          <a
            href={mapLink.href}
            target={mapExternal ? "_blank" : undefined}
            rel={mapExternal ? "noreferrer noopener" : undefined}
            aria-label={profile.mapOverlayLabel}
            className="absolute inset-0"
          />
        </div>
      ) : null}
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
  const appointmentLink = profile.links.find((link) => link.id === "appointment");
  const mapLink = profile.links.find((link) => link.id === "location");
  const visibleLinks = profile.links.filter(
    (link) => link.id !== "appointment" && link.id !== "location",
  );
  const appointmentExternal = appointmentLink ? isExternalHref(appointmentLink.href) : false;
  const mapExternal = mapLink ? isExternalHref(mapLink.href) : false;

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

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-start px-3 pt-[max(0.7rem,env(safe-area-inset-top))] pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6 sm:pt-5 sm:pb-6 lg:max-w-[96rem] lg:px-14 lg:py-10 xl:max-w-[108rem] xl:px-20">
          <div
            className="mx-auto flex w-full max-w-[40rem] flex-col rounded-[2rem] border border-white/10 px-5 pt-5 pb-5 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.78)] sm:px-6 sm:pt-6 sm:pb-6 lg:max-w-[74rem] lg:rounded-[2.2rem] lg:px-10 lg:pt-8 lg:pb-8 xl:max-w-[78rem]"
            style={{ backgroundColor: profile.surfaceColor }}
          >
            <div className="mx-auto h-1.5 w-16 rounded-full bg-white/12 lg:hidden" />

            <div className="flex flex-col">
              <div className="lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(25rem,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(27rem,1fr)]">
                <div className="lg:flex lg:flex-col">
                  <RevealOnView className="mt-5 lg:mt-0">
                    <LinkHubHeader
                      profile={profile}
                      appointmentLink={appointmentLink}
                      appointmentExternal={appointmentExternal}
                    />
                  </RevealOnView>

                  <div className="mt-7 hidden lg:block">
                    <SocialRow socials={profile.socials} accentColor={profile.accentColor} />
                  </div>

                  <div className="mt-8 space-y-2.5 lg:mt-10">
                    {visibleLinks.map((link, index) => (
                      <RevealOnView key={link.id} delayMs={index * 70 + 80}>
                        <LinkButton
                          id={link.id}
                          label={link.label}
                          href={link.href}
                          accentColor={profile.accentColor}
                          backgroundColor={profile.buttonBackground}
                          textColor={profile.buttonText}
                        />
                      </RevealOnView>
                    ))}
                  </div>
                </div>

                <RevealOnView
                  delayMs={visibleLinks.length * 70 + 80}
                  className="mt-8 lg:mt-0 lg:self-stretch"
                >
                  <MapCard
                    profile={profile}
                    mapLink={mapLink}
                    mapExternal={mapExternal}
                    desktop
                  />
                </RevealOnView>
              </div>

              <RevealOnView
                delayMs={visibleLinks.length * 70 + 120}
                className="mt-8 lg:mt-9"
              >
                <ReviewCarousel
                  reviews={profile.reviews}
                  accentColor={profile.accentColor}
                  eyebrow={profile.reviewEyebrow}
                  title={profile.reviewTitle}
                  ownerReplyLabel={profile.ownerReplyLabel}
                  guestExperienceLabel={profile.reviewTitle}
                />
              </RevealOnView>

              <RevealOnView
                delayMs={visibleLinks.length * 70 + 160}
                className="mt-6 border-t border-white/10 pt-5 lg:hidden"
              >
                <SocialRow socials={profile.socials} accentColor={profile.accentColor} />
              </RevealOnView>

              <RevealOnView delayMs={visibleLinks.length * 70 + 200} className="mt-8 lg:mt-10">
                <AboutSection profile={profile} />
              </RevealOnView>

              <RevealOnView delayMs={visibleLinks.length * 70 + 220} className="mt-8 lg:hidden">
                <div className="overflow-hidden py-8 text-center">
                  <p className="text-[0.9rem] font-semibold uppercase tracking-[0.34em] text-[#d5baa0]/72">
                    {profile.locationName}
                  </p>
                </div>
              </RevealOnView>
            </div>
          </div>
        </div>
      </section>

      <BrandFooter profile={profile} />
    </>
  );
}
