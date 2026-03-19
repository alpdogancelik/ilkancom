import type { Metadata } from "next";

import { LinkHub } from "@/components/LinkHub";
import { ProfileHero } from "@/components/ProfileHero";
import { brandProfile } from "@/data/brand-profile";

export const metadata: Metadata = {
  title: "ilkancom",
  description:
    "A mobile-first profile microsite with an editorial cover and a swipe-down link hub.",
};

export default function HomePage() {
  return (
    <main className="snap-shell">
      <ProfileHero profile={brandProfile} />
      <LinkHub profile={brandProfile} />
    </main>
  );
}
