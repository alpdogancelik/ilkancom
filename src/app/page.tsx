import type { Metadata } from "next";

import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { LinkHub } from "@/components/LinkHub";
import { ProfileHero } from "@/components/ProfileHero";
import { brandProfile } from "@/data/brand-profile";

export const metadata: Metadata = {
  title: brandProfile.brandName,
  description: "İlkan Kaymak için premium randevu, iletişim ve sosyal medya bağlantıları.",
};

export default function HomePage() {
  return (
    <main className="snap-shell relative overflow-x-hidden bg-background">
      <ProfileHero profile={brandProfile} />
      <LinkHub profile={brandProfile} />
      <FloatingWhatsAppButton />
    </main>
  );
}
