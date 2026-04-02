// Site genelindeki ad, aciklama ve temel URL ayarlari.
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "https://ilkankaymak.vercel.app";

const normalizedSiteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const siteConfig = {
  name: "İlkan Kaymak",
  shortName: "IK",
  description:
    "İzmir Balçova'da premium erkek berberi. Saç kesimi, sakal tasarımı, grooming, iletişim ve randevu için İlkan Kaymak Hair Artist.",
  url: normalizedSiteUrl,
};
