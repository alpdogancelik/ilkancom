import Link from "next/link";

import { BrandFooter } from "@/components/BrandFooter";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { getBrandProfile } from "@/data/brand-profile";
import { buildBarberShopSchema } from "@/lib/seo";

type SeoLandingPageProps = {
  title: string;
  description: string;
  eyebrow: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export function SeoLandingPage({
  title,
  description,
  eyebrow,
  sections,
  faq,
}: SeoLandingPageProps) {
  const profile = getBrandProfile("tr");
  const appointmentLink = profile.links.find((link) => link.id === "appointment")?.href ?? "#";
  const mapLink = profile.links.find((link) => link.id === "location")?.href ?? "#";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SeoJsonLd data={[buildBarberShopSchema(), faqSchema]} />
      <main className="relative overflow-x-hidden bg-[#050402] text-[#f5efe8]">
        <section className="relative isolate overflow-hidden border-b border-white/6 px-4 pt-24 pb-14 sm:px-8 lg:px-14 lg:pt-32 lg:pb-18">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(194,149,99,0.12),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(83,204,201,0.1),transparent_22%),linear-gradient(180deg,#090604_0%,#070504_100%)]" />
          <div className="pointer-events-none absolute inset-x-[10%] top-0 h-24 rounded-b-[3rem] bg-[radial-gradient(circle_at_center_top,rgba(248,237,220,0.12)_0%,rgba(248,237,220,0.03)_42%,transparent_72%)] blur-3xl" />
          <div className="relative mx-auto max-w-[72rem]">
            <p className="text-[0.72rem] font-semibold tracking-[0.34em] text-[#c7a17a] uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-[56rem] text-[clamp(2.4rem,7vw,5.2rem)] font-[780] leading-[0.94] tracking-[-0.05em]">
              {title}
            </h1>
            <p className="mt-5 max-w-[48rem] text-base leading-8 text-[#b8b0a8] sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={appointmentLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full border border-[#c7a17a]/25 bg-[#17110d] px-6 py-3 text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-[#f5efe8] transition hover:border-[#c7a17a]/50 hover:bg-[#1d1510]"
              >
                Online Randevu
              </a>
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/4 px-6 py-3 text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-[#f5efe8] transition hover:border-white/22 hover:bg-white/8"
              >
                Konumu Aç
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-[#b8b0a8] transition hover:border-white/22 hover:text-white"
              >
                Ana Sayfa
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-8 lg:px-14 lg:py-16">
          <div className="mx-auto grid max-w-[72rem] gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,14,11,0.9)_0%,rgba(10,8,7,0.96)_100%)] p-6 shadow-[0_24px_60px_-34px_rgba(0,0,0,0.8)] sm:p-8"
              >
                <h2 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.7rem]">
                  {section.title}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-8 text-[#b8b0a8]">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-8 lg:px-14 lg:pb-18">
          <div className="mx-auto max-w-[72rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,10,8,0.94)_0%,rgba(8,7,6,0.98)_100%)] p-6 sm:p-8">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-6 grid gap-4">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5"
                >
                  <h3 className="text-lg font-medium text-white">{item.question}</h3>
                  <p className="mt-2 text-[0.96rem] leading-7 text-[#b8b0a8]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BrandFooter profile={profile} />
      <FloatingWhatsAppButton
        ariaLabel={profile.phoneLabel}
        label={profile.contactButtonLabel}
      />
    </>
  );
}
