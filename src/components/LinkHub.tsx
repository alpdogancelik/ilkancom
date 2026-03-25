import Image from "next/image";

import type { BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { LinkButton } from "./LinkButton";
import { RevealOnView } from "./RevealOnView";
import { ReviewCarousel } from "./ReviewCarousel";
import { SocialRow } from "./SocialRow";

type LinkHubProps = {
  profile: BrandProfile;
};

type LinkHubHeaderProps = {
  profile: BrandProfile;
  appointmentLink?: BrandProfile["links"][number];
  appointmentExternal: boolean;
};

type MapCardProps = {
  profile: BrandProfile;
  mapLink?: BrandProfile["links"][number];
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
          Modern erkek bakımında rafine yaklaşım.
        </p>
      </div>

      <details className="group relative">
        <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-[#1a120f] text-[#d7b48f] transition hover:bg-[#211713] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563]">
          <span className="sr-only">Menüyü aç</span>
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
              <span>Online Randevu</span>
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
            Konum
          </p>
          <p className="mt-1 text-sm font-medium text-[#f5efe8]">Balçova / İzmir</p>
        </div>
        <a
          href={mapLink.href}
          target={mapExternal ? "_blank" : undefined}
          rel={mapExternal ? "noreferrer noopener" : undefined}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c29563]/28 bg-[#1a120f] text-[#c89a5a] transition hover:bg-[#221711] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563]"
          aria-label="Google Maps'te aç"
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
            title={`${profile.brandName} konum haritası`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
          <a
            href={mapLink.href}
            target={mapExternal ? "_blank" : undefined}
            rel={mapExternal ? "noreferrer noopener" : undefined}
            aria-label="Konumu Google Maps'te aç"
            className="absolute inset-0"
          />
        </div>
      ) : null}
    </div>
  );
}

export function LinkHub({ profile }: LinkHubProps) {
  const appointmentLink = profile.links.find((link) => link.label === "Online Randevu");
  const mapLink = profile.links.find((link) => link.label === "Konum");
  const visibleLinks = profile.links.filter(
    (link) => link.label !== "Online Randevu" && link.label !== "Konum",
  );
  const appointmentExternal = appointmentLink ? isExternalHref(appointmentLink.href) : false;
  const mapExternal = mapLink ? isExternalHref(mapLink.href) : false;

  return (
    <>
      <section id="link-hub" className="snap-panel relative overflow-hidden bg-black">
        <Image
          src={profile.linksImage}
          alt={profile.linksImageAlt}
          fill
          quality={92}
          sizes="100vw"
          className="object-cover object-[50%_18%] lg:object-[center_14%] xl:object-[center_18%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.14)_0%,rgba(5,4,3,0.08)_18%,rgba(7,5,4,0.26)_58%,rgba(8,6,5,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,5,4,0.5)_0%,rgba(7,5,4,0.18)_26%,rgba(7,5,4,0.08)_56%,rgba(7,5,4,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,5,0.12)_0%,rgba(8,6,5,0.04)_40%,rgba(8,6,5,0.12)_100%)] lg:hidden" />

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
                      <RevealOnView key={link.label} delayMs={index * 70 + 80}>
                        <LinkButton
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
                <ReviewCarousel reviews={profile.reviews} accentColor={profile.accentColor} />
              </RevealOnView>

              <RevealOnView
                delayMs={visibleLinks.length * 70 + 160}
                className="mt-6 border-t border-white/10 pt-5 lg:hidden"
              >
                <SocialRow socials={profile.socials} accentColor={profile.accentColor} />
              </RevealOnView>

              <RevealOnView delayMs={visibleLinks.length * 70 + 220} className="mt-8 lg:hidden">
                <div className="overflow-hidden py-8 text-center">
                  <p className="text-[0.9rem] font-semibold uppercase tracking-[0.34em] text-[#d5baa0]/72">
                    Balçova / İzmir
                  </p>
                </div>
              </RevealOnView>

              <RevealOnView delayMs={visibleLinks.length * 70 + 260} className="mt-5 lg:hidden">
                <p className="text-center text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#d5baa0]/58">
                  {profile.footerTag}
                </p>
              </RevealOnView>
            </div>
          </div>
        </div>
      </section>

      <section className="relative hidden overflow-hidden bg-black lg:block">
        <Image
          src={profile.linksImage}
          alt={profile.linksImageAlt}
          fill
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_14%] xl:object-[center_18%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,5,4,0.5)_0%,rgba(7,5,4,0.18)_26%,rgba(7,5,4,0.08)_56%,rgba(7,5,4,0.46)_100%)]" />

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[96rem] items-start px-14 py-10 xl:max-w-[108rem] xl:px-20">
          <div
            className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[78rem] flex-col items-center justify-center rounded-[2.2rem] border border-white/10 px-12 py-12 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.78)]"
            style={{ backgroundColor: profile.surfaceColor }}
          >
            <RevealOnView className="w-full max-w-[34rem]">
              <Image
                src="/images/ilkanhair-signature.svg"
                alt={`${profile.brandName} imza görseli`}
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="h-auto w-full object-contain"
              />
            </RevealOnView>

            <RevealOnView delayMs={120} className="mt-14">
              <p className="text-center text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#d5baa0]/58">
                {profile.footerTag}
              </p>
            </RevealOnView>
          </div>
        </div>
      </section>
    </>
  );
}
