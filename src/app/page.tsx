import type { Metadata } from "next";

import { LinkHub } from "@/components/LinkHub";
import { ProfileHero } from "@/components/ProfileHero";
import { brandProfile } from "@/data/brand-profile";

export const metadata: Metadata = {
  title: brandProfile.brandName,
  description:
    "Premium booking, contact, and social links for hair stylist Ilkan Kaymak.",
};

export default function HomePage() {
  return (
    <main className="snap-shell relative overflow-x-hidden bg-background">
      <ProfileHero profile={brandProfile} />
      <LinkHub profile={brandProfile} />
    </main>
  );
}
