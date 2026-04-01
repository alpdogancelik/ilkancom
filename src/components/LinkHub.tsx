import Image from "next/image";

import type { BrandActionLink, BrandProfile } from "@/data/brand-profile";
import { isExternalHref } from "@/lib/utils";

import { BrandFooter } from "./BrandFooter";
import { RevealOnView } from "./RevealOnView";
import { ReviewCarousel } from "./ReviewCarousel";
import { ServicePriceDialog } from "./ServicePriceDialog";

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
  const aboutStats =
    profile.locale === "tr"
      ? [
          { value: "22", label: "YILLIK TECRUBE" },
          { value: "15+", label: "ULUSLARARASI ODUL" },
        ]
      : [
          { value: "22", label: "YEARS EXPERIENCE" },
          { value: "15+", label: "INTERNATIONAL AWARDS" },
        ];
  const aboutLead = profile.aboutParagraphs[0];
  const aboutSupport = profile.aboutParagraphs[3] ?? profile.aboutParagraphs[1] ?? "";
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
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-4 shadow-[0_28px_70px_-34px_rgba(0,0,0,0.72)] sm:p-6 lg:p-8 xl:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(194,149,99,0.1),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_46%)]" />

      <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 flex flex-col gap-4 sm:gap-6 lg:order-1 lg:col-span-5">
          <RevealOnView>
            <div className="bento-item p-2">
              <div className="relative aspect-square overflow-hidden rounded-[18px] sm:aspect-[4/5] sm:rounded-[24px]">
                <Image
                  src="/images/hakkimdapic.jpg"
                  alt={`${profile.brandName} about portrait`}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  quality={95}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </RevealOnView>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {aboutStats.map((stat, index) => (
              <RevealOnView key={stat.label} delayMs={100 + index * 100}>
                <div className="bento-item flex h-full flex-col items-center justify-center p-4 text-center sm:p-6">
                  <span className="bg-[linear-gradient(180deg,#f3d2b3_0%,#c7a17a_58%,#8b6f4d_100%)] bg-clip-text text-[2.15rem] font-bold tracking-[-0.05em] text-transparent sm:text-[2.8rem] md:text-[3.2rem]">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[8px] tracking-[0.24em] text-[#8f8f96] uppercase sm:text-[10px]">
                    {stat.label}
                  </span>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
          <div className="mb-6 sm:mb-10">
            <RevealOnView delayMs={150}>
              <span className="mb-3 block text-[9px] font-bold tracking-[0.4em] text-[#C7A17A] uppercase sm:mb-4 sm:text-[10px]">
                {profile.aboutEyebrow}
              </span>
            </RevealOnView>
            <RevealOnView delayMs={250}>
              <h3 className="max-w-[54rem] text-[2.1rem] font-[780] leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.65rem] lg:text-[3.6rem]">
                {aboutHeading.line1}
                <br className="hidden sm:block" />
                <span className="bg-[linear-gradient(90deg,#ffffff_0%,#a3a3a3_100%)] bg-clip-text text-transparent">
                  {" "}
                  {aboutHeading.line2}
                </span>
              </h3>
            </RevealOnView>
          </div>

          <div className="mb-8 flex max-w-2xl flex-col gap-4 text-sm leading-relaxed font-light text-[#A1A1AA] sm:mb-12 sm:gap-6 sm:text-base">
            <RevealOnView delayMs={350}>
              <p>{aboutLead}</p>
            </RevealOnView>
            <RevealOnView delayMs={450}>
              <p className="hidden sm:block">{aboutSupport}</p>
            </RevealOnView>
          </div>

          <RevealOnView delayMs={650}>
            <div className="bento-item relative overflow-hidden border-l-4 border-l-[#C7A17A] bg-gradient-to-r from-[#C7A17A]/5 to-transparent p-6 sm:p-8">
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
        <div className="absolute inset-0 premium-ambient-bg" />
        <div className="absolute inset-0 premium-ambient-noise" />
        <div className="pointer-events-none absolute -top-28 -left-24 h-[34rem] w-[34rem] rounded-full bg-[#c29563]/18 blur-[130px] premium-ambient-orb" />
        <div className="pointer-events-none absolute -right-24 bottom-[-9rem] h-[30rem] w-[30rem] rounded-full bg-[#8a5c35]/16 blur-[140px] premium-ambient-orb-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.58)_0%,rgba(8,6,4,0.38)_28%,rgba(8,6,4,0.68)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,6,4,0.74)_0%,rgba(8,6,4,0.4)_30%,rgba(8,6,4,0.28)_58%,rgba(8,6,4,0.72)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_34%,rgba(5,4,3,0.16)_72%,rgba(5,4,3,0.34)_100%)]" />

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[108rem] items-start px-3 pt-[max(0.7rem,env(safe-area-inset-top))] pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6 sm:pt-5 sm:pb-6 lg:px-14 lg:py-12 xl:px-20">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <RevealOnView delayMs={40} className="lg:col-span-5">
                <div className="flex flex-col items-start">
                  <h2 className="max-w-[40rem] text-left text-[clamp(3rem,5.6vw,6.2rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white uppercase">
                    <span className="block">{headingCopy.line1}</span>
                    <span className="block">{headingCopy.line2}</span>
                    <span className="block">{headingCopy.line3}</span>
                    <span className="block bg-[linear-gradient(90deg,#c7a17a_0%,#f3ddba_45%,#a47b4f_100%)] bg-clip-text text-transparent">
                      {headingCopy.line4}
                    </span>
                  </h2>

                  <ServicePriceDialog
                    accentColor={profile.accentColor}
                    brandName={profile.brandName}
                    locale={profile.locale}
                    className="mt-8 sm:mt-10"
                  />
                </div>
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
