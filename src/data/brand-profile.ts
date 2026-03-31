export type Locale = "tr" | "en";

export type BrandSocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whatsapp"
  | "maps";

export type BrandActionLinkId =
  | "appointment"
  | "whatsapp"
  | "instagram"
  | "tiktok"
  | "location";

export type BrandActionLink = {
  id: BrandActionLinkId;
  label: string;
  href: string;
};

export type BrandSocialLink = {
  platform: BrandSocialPlatform;
  href: string;
};

export type BrandReview = {
  author: string;
  rating: number;
  timeAgo: string;
  summary?: string;
  quote: string;
  ownerReply?: string;
};

export type BrandProfile = {
  brandName: string;
  brandBadge: string;
  tagline: string;
  serviceType: string;
  heroImage: string;
  desktopHeroImage?: string;
  heroImageAlt: string;
  linksImage: string;
  linksImageAlt: string;
  accentColor: string;
  surfaceColor: string;
  buttonBackground: string;
  buttonText: string;
  mapEmbedUrl?: string;
  hubDescription: string;
  menuToggleLabel: string;
  appointmentMenuLabel: string;
  heroAppointmentLabel: string;
  swipeIndicatorLabel: string;
  phoneLabel: string;
  contactButtonLabel: string;
  locationLabel: string;
  locationName: string;
  mapButtonLabel: string;
  mapOverlayLabel: string;
  reviewEyebrow: string;
  reviewTitle: string;
  ownerReplyLabel: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutTrainingTitle: string;
  aboutTrainingItems: string[];
  aboutClosing: string;
  aboutSignature: string;
  links: BrandActionLink[];
  socials: BrandSocialLink[];
  reviews: BrandReview[];
  footerTag: string;
};

type LocalizedText = Record<Locale, string>;

type ReviewSeed = {
  author: string;
  rating: number;
  timeAgo: LocalizedText;
  summary?: LocalizedText;
  quote: LocalizedText;
  ownerReply?: LocalizedText;
};

type LinkSeed = {
  id: BrandActionLinkId;
  label: LocalizedText;
  href: Record<Locale, string> | string;
};

type SocialSeed = {
  platform: BrandSocialPlatform;
  href: Record<Locale, string> | string;
};

export const defaultLocale: Locale = "tr";

const sharedProfile = {
  brandName: "İlkan Kaymak",
  brandBadge: "İK",
  serviceType: "HAIR ARTIST",
  heroImage: "/images/ilkkan.png",
  desktopHeroImage: "/images/ilkankaymak-w.png",
  linksImage: "/images/ilkan2.PNG",
  accentColor: "#c29563",
  surfaceColor: "#120d0a",
  buttonBackground: "#1b130f",
  buttonText: "#f6ecde",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.0667694464046!2d27.051147000000004!3d38.3937052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdd93072a6925%3A0xd15100635744800f!2s%C4%B0lkan%20kaymak%20hair%20artist%20bal%C3%A7ova!5e0!3m2!1str!2str!4v1774442051149!5m2!1str!2str",
  footerTag: "@330",
} as const;

const linkSeeds: LinkSeed[] = [
  {
    id: "appointment",
    label: {
      tr: "Online Randevu",
      en: "Online Appointment",
    },
    href: "https://www.kolayrandevu.com/isletme/ilkan-kaymak-hair-artist?website=1",
  },
  {
    id: "whatsapp",
    label: {
      tr: "WhatsApp",
      en: "WhatsApp",
    },
    href: {
      tr: "https://wa.me/905531283843?text=Merhaba%2C%20randevu%20almak%20istiyorum.",
      en: "https://wa.me/905531283843?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.",
    },
  },
  {
    id: "instagram",
    label: {
      tr: "Instagram",
      en: "Instagram",
    },
    href: "https://www.instagram.com/ilkankaymakofficial/",
  },
  {
    id: "tiktok",
    label: {
      tr: "TikTok",
      en: "TikTok",
    },
    href: "https://www.tiktok.com/@oktyyilmaz/video/7612401422164004103?q=ilkankaymak&t=1774442796997",
  },
  {
    id: "location",
    label: {
      tr: "Konum",
      en: "Location",
    },
    href: "https://www.google.com/maps/place/%C4%B0lkan+kaymak+hair+artist+bal%C3%A7ova/@38.3937052,27.051147,17z",
  },
];

const socialSeeds: SocialSeed[] = [
  {
    platform: "whatsapp",
    href: {
      tr: "https://wa.me/905531283843?text=Merhaba%2C%20randevu%20almak%20istiyorum.",
      en: "https://wa.me/905531283843?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.",
    },
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/ilkankaymakofficial/",
  },
  {
    platform: "tiktok",
    href: "https://www.tiktok.com/@oktyyilmaz/video/7612401422164004103?q=ilkankaymak&t=1774442796997",
  },
];

const reviewSeeds: ReviewSeed[] = [
  {
    author: "sercan tunçer",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "1 yorum", en: "1 review" },
    quote: {
      tr: "Haftada bir severek hizmet aldığım, temizliği ve kalitesi ile takdir kazanan bir işletme.",
      en: "A place I gladly visit every week, appreciated for both its cleanliness and quality.",
    },
  },
  {
    author: "İlhamcan Celikoglu",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: {
      tr: "Yerel Rehber · 24 yorum · 68 fotoğraf",
      en: "Local Guide · 24 reviews · 68 photos",
    },
    quote: {
      tr: "Gerçekten işini güzel yapan ve hızlı temiz bir işletme.",
      en: "A genuinely professional business that delivers clean and efficient service.",
    },
  },
  {
    author: "Aykut toprakseven",
    rating: 5,
    timeAgo: { tr: "4 ay önce", en: "4 months ago" },
    summary: { tr: "3 yorum", en: "3 reviews" },
    quote: {
      tr: "Uzun zamandır bu kadar profesyonel bir erkek kuaförüyle karşılaşmamıştım. İçeri adım attığınız anda kendinizi VIP bir müşteri gibi hissediyorsunuz.",
      en: "I had not come across such a professional men's hairdresser in a long time. The moment you walk in, you feel like a VIP client.",
    },
    ownerReply: {
      tr: "Aykut bey çok teşekkür ederiz. Her zaman önceliğimiz sizlere iyi ve kaliteli bir hizmet sunabilmek.",
      en: "Thank you very much, Mr. Aykut. Our priority is always to provide you with high-quality service.",
    },
  },
  {
    author: "Deniz KÖMÜRCÜ",
    rating: 5,
    timeAgo: { tr: "6 ay önce", en: "6 months ago" },
    summary: {
      tr: "Yerel Rehber · 40 yorum · 110 fotoğraf",
      en: "Local Guide · 40 reviews · 110 photos",
    },
    quote: {
      tr: "Damat tıraşında çıta mı? İlkan Bey ile gökyüzünde. İşini öyle ciddiye alıyor ki yanında adeta kuaför Avengers takım çantası taşıyor.",
      en: "The bar for groom styling? With Mr. İlkan, it's sky high. He takes his craft so seriously that he practically carries a barber Avengers toolkit.",
    },
  },
  {
    author: "Murat Yaşar",
    rating: 5,
    timeAgo: { tr: "3 yıl önce", en: "3 years ago" },
    summary: {
      tr: "Yerel Rehber · 16 yorum · 3 fotoğraf",
      en: "Local Guide · 16 reviews · 3 photos",
    },
    quote: {
      tr: "İzmir'deki net en iyi erkek kuaförü. Adamlar işinde iyi. Hızla kalitenin birleşmesi ekstra iyi.",
      en: "Clearly the best men's hairdresser in İzmir. They truly know what they are doing. The combination of speed and quality is exceptional.",
    },
  },
  {
    author: "Can Akcan",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "3 yorum", en: "3 reviews" },
    quote: {
      tr: "Yaklaşık 2 senedir geldiğim, İzmir'de olduğum sürece geleceğim tek kuaför salonu. Salonun temizliğinden kullanılan aletlerin kalitesine kadar her şey muazzam.",
      en: "This has been the only salon I have visited for nearly two years, and it will remain so as long as I am in İzmir. Everything, from the cleanliness of the salon to the quality of the tools, is outstanding.",
    },
  },
  {
    author: "Umut Karakoç",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "3 yorum", en: "3 reviews" },
    quote: {
      tr: "Şehrin en iyi erkek kuaförü olduğuna hiç şüphem yok. Buraya her geldiğimde kendimi özel hissediyorum.",
      en: "I have no doubt that this is the best men's hairdresser in the city. Every time I come here, I feel special.",
    },
  },
  {
    author: "Oguz İLGEN",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "10 yorum", en: "10 reviews" },
    quote: {
      tr: "Başta Doğuş Bey olmak üzere işine bu kadar saygılı, profesyonel insanları bir arada bulmak çok mümkün değil.",
      en: "It is not easy to find such respectful and professional people together, especially Mr. Doğuş and the rest of the team.",
    },
  },
  {
    author: "Eray İnce",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "6 yorum", en: "6 reviews" },
    quote: {
      tr: "Gösterilen ilginin kusursuz olması, yapılan işin hakkını verme konusunda burası bir numaralı yer diyebilirim.",
      en: "With flawless attention and a strong commitment to doing the job properly, I can say this place is number one.",
    },
  },
  {
    author: "İdris Kale",
    rating: 5,
    timeAgo: { tr: "10 ay önce", en: "10 months ago" },
    summary: { tr: "5 yorum · 2 fotoğraf", en: "5 reviews · 2 photos" },
    quote: {
      tr: "Deneyimlerim her zaman güzeldi. Personel güler yüzlü ve çok ilgili, herkese tavsiye ederim.",
      en: "My experiences have always been great. The staff are friendly and attentive. I recommend it to everyone.",
    },
  },
  {
    author: "özge doğmuş",
    rating: 5,
    timeAgo: { tr: "2 yıl önce", en: "2 years ago" },
    summary: {
      tr: "Yerel Rehber · 24 yorum · 7 fotoğraf",
      en: "Local Guide · 24 reviews · 7 photos",
    },
    quote: {
      tr: "Oğlumu tıraş için getirdim. Çok profesyonel ve güler yüzlüler, teşekkürler.",
      en: "I brought my son for a haircut. They were very professional and friendly, thank you.",
    },
  },
  {
    author: "Buğra Arisoy",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "1 yorum · 1 fotoğraf", en: "1 review · 1 photo" },
    quote: {
      tr: "Her şeyi ile 10 numara.",
      en: "Top-notch in every way.",
    },
  },
  {
    author: "Ümit Efe Sarıca",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "7 yorum", en: "7 reviews" },
    quote: {
      tr: "Çok temiz ve güler yüzlüler, tavsiye ederim.",
      en: "Very clean and friendly, highly recommended.",
    },
  },
  {
    author: "soner cura",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "7 yorum", en: "7 reviews" },
    quote: {
      tr: "Tamamen kendinizi gönül rahatlığıyla kendisine bırakabilirsiniz. Sanatkar ve profesyonel, haftada bir uğruyorum.",
      en: "You can completely trust him with peace of mind. Artistic and professional. I stop by every week.",
    },
  },
  {
    author: "oytun kulay",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "8 yorum", en: "8 reviews" },
    quote: {
      tr: "Mükemmel hizmet, sıra dışı bir kalite. Özellikle Doğuş Bey ve Halil Bey muazzam.",
      en: "Excellent service and extraordinary quality. Mr. Doğuş and Mr. Halil are especially fantastic.",
    },
  },
  {
    author: "Berkay Yağız",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "6 yorum", en: "6 reviews" },
    quote: {
      tr: "Mükemmel.",
      en: "Excellent.",
    },
  },
  {
    author: "Volkan Kaynak",
    rating: 5,
    timeAgo: { tr: "2 yıl önce", en: "2 years ago" },
    summary: { tr: "3 yorum", en: "3 reviews" },
    quote: {
      tr: "İzmir'in en iyi kuaförü.",
      en: "The best hairdresser in İzmir.",
    },
  },
  {
    author: "Atakan Nevres İyi",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: {
      tr: "Yerel Rehber · 22 yorum · 34 fotoğraf",
      en: "Local Guide · 22 reviews · 34 photos",
    },
    quote: {
      tr: "İstenen stil: dalgalıya özel kesim. Hizmetten çok memnun kaldım.",
      en: "Requested style: a cut tailored for wavy hair. I was very pleased with the service.",
    },
  },
  {
    author: "Selim Macit",
    rating: 5,
    timeAgo: { tr: "1 yıl önce", en: "1 year ago" },
    summary: { tr: "6 yorum · 3 fotoğraf", en: "6 reviews · 3 photos" },
    quote: {
      tr: "Saç kesimi olsun, müşteri ile iletişim olsun, mekan olsun her açıdan çok iyi. Başarılarının devamını diliyorum.",
      en: "Whether it is the haircut, customer communication, or the atmosphere, everything is excellent. I wish them continued success.",
    },
  },
];

function getLocalizedHref(
  href: Record<Locale, string> | string,
  locale: Locale,
) {
  return typeof href === "string" ? href : href[locale];
}

function buildLinks(locale: Locale): BrandActionLink[] {
  return linkSeeds.map((link) => ({
    id: link.id,
    label: link.label[locale],
    href: getLocalizedHref(link.href, locale),
  }));
}

function buildSocials(locale: Locale): BrandSocialLink[] {
  return socialSeeds.map((social) => ({
    platform: social.platform,
    href: getLocalizedHref(social.href, locale),
  }));
}

function buildReviews(locale: Locale): BrandReview[] {
  return reviewSeeds.map((review) => ({
    author: review.author,
    rating: review.rating,
    timeAgo: review.timeAgo[locale],
    summary: review.summary?.[locale],
    quote: review.quote[locale],
    ownerReply: review.ownerReply?.[locale],
  }));
}

export const brandProfiles: Record<Locale, BrandProfile> = {
  tr: {
    ...sharedProfile,
    tagline: "Detay, kalite, ayrıcalık.",
    heroImageAlt: "İlkan Kaymak'ın tam ekran portresi.",
    linksImageAlt: "İlkan Kaymak'ın bağlantı sayfası için portre arka planı.",
    hubDescription: "Modern erkek bakımında rafine yaklaşım.",
    menuToggleLabel: "Menüyü aç",
    appointmentMenuLabel: "Online Randevu",
    heroAppointmentLabel: "Randevu Oluştur.",
    swipeIndicatorLabel: "Daha fazlası için kaydır",
    phoneLabel: "Telefon ile ara",
    contactButtonLabel: "İletişime Geç",
    locationLabel: "Konum",
    locationName: "Balçova / İzmir",
    mapButtonLabel: "Google Maps'te aç",
    mapOverlayLabel: "Konumu Google Maps'te aç",
    reviewEyebrow: "Yorumlar",
    reviewTitle: "Misafir deneyimleri",
    ownerReplyLabel: "İşletme yanıtı",
    aboutEyebrow: "Hakkımda",
    aboutTitle: "Kişisel yaklaşım, güçlü teknik altyapı ve rafine erkek bakımı.",
    aboutParagraphs: [
      "Ben İlkan Kaymak. 19.08.1991 İzmir / Ödemiş doğumluyum. Erkek kuaförlüğü ve saç tasarımı mesleğini 22 yıldır severek ve tutkuyla yapıyorum.",
      "Saça olan ilgim çok küçük yaşlarda başladı. Kendi saçımla sürekli ilgilenir, arkadaşlarımın saçlarını yapardım. Hatta lise döneminde saçımı istediğim gibi yapamadığım günlerde okula gitmediğim bile olurdu. O zamanlar fark ettim ki, bu benim için sadece bir hobi değil, gerçek bir tutku ve hayatımın odak noktası.",
      "Zamanla erkek berberliğinin ve vizyoner saç tasarımının benim için en doğru meslek olduğunu anlayarak bu yola girdim. Çıraklık ve kalfalık dönemlerimde kendimi sürekli geliştirmeye odaklandım. Mesleğin akademik eğitimini alarak kalfalık, ustalık ve usta öğreticilik belgelerimi tamamladım ve sektörel altyapımı sağlamlaştırdım.",
      "Meslek hayatım boyunca gelişimi hiç bırakmadım. Ulusal ve uluslararası organizasyonlara katılarak farklı bakış açıları kazandım, çeşitli sahne şovlarında ve yarışmalarda yer alarak dereceler elde ettim ve uluslararası sertifikalar kazandım. Bu tecrübeler, dünya standartlarını yakından takip edip İzmir'e taşımamı sağladı.",
      "Dünya markası saç bakım ürünleri ve şampuanlar üzerine eğitimler alarak her saç tipine uygun doğru ürünü belirleme konusunda uzmanlaştım. Bugün müşterilerime sadece bir saç kesimi değil; doğru analiz, doğru teknik ve doğru ürün kombinasyonunu sunuyorum.",
      "Mesleğimde her zaman yeniliği ve kaliteyi ön planda tutuyorum. Gerek salon dekorasyonu gerek uyguladığım modern kesim teknikleri ile kendimi sürekli güncelliyor, koltuğuma oturan her misafirimin salonumdan özgüvenle ayrılması için gelişmeye devam ediyorum.",
    ],
    aboutTrainingTitle: "İleri Düzey Eğitimler",
    aboutTrainingItems: [
      "Saç kesim teknikleri",
      "Pivot Point kesim teknikleri",
      "Anatomik saç kesim teknikleri",
    ],
    aboutClosing:
      "Kalite, hijyen ve müşteri memnuniyeti bizim için vazgeçilmezdir. Her zaman en iyi ürünleri kullanarak hizmet standartlarımızı en üst seviyede tutuyoruz. Sizi de bu ayrıcalıklı deneyimi yaşamak için salonumuza bekliyoruz.",
    aboutSignature: "Saygılarımla, İlkan Kaymak",
    links: buildLinks("tr"),
    socials: buildSocials("tr"),
    reviews: buildReviews("tr"),
  },
  en: {
    ...sharedProfile,
    tagline: "Detail, quality, distinction.",
    heroImageAlt: "Full-screen portrait of İlkan Kaymak.",
    linksImageAlt: "Portrait background for İlkan Kaymak's link page.",
    hubDescription: "A refined approach to modern men's grooming.",
    menuToggleLabel: "Open menu",
    appointmentMenuLabel: "Online Appointment",
    heroAppointmentLabel: "Book Appointment",
    swipeIndicatorLabel: "Scroll for more",
    phoneLabel: "Call by phone",
    contactButtonLabel: "Get in Touch",
    locationLabel: "Location",
    locationName: "Balcova / Izmir",
    mapButtonLabel: "Open in Google Maps",
    mapOverlayLabel: "Open location in Google Maps",
    reviewEyebrow: "Reviews",
    reviewTitle: "Guest experiences",
    ownerReplyLabel: "Business reply",
    aboutEyebrow: "About",
    aboutTitle: "Personal approach, strong technical foundation, and refined men's grooming.",
    aboutParagraphs: [
      "I am İlkan Kaymak. I was born on August 19, 1991, in Ödemiş / İzmir. I have been practicing men's hairdressing and hair design with passion and dedication for 22 years.",
      "My interest in hair started at a very young age. I was constantly styling my own hair and doing my friends' hair. In fact, during high school there were days I would not go to school if I could not style my hair the way I wanted. That was when I realized this was not just a hobby for me, but a true passion and the focus of my life.",
      "Over time, I understood that men's barbering and visionary hair design were the right profession for me, and I committed myself to this path. During my apprenticeship and journeyman years, I focused on continuously improving myself. I completed my journeyman, master craftsman, and master instructor certifications through formal vocational training and built a solid professional foundation.",
      "I have never stopped improving throughout my career. By taking part in national and international organizations, I gained different perspectives, participated in various stage shows and competitions, earned awards, and obtained international certificates. These experiences enabled me to closely follow global standards and bring them to İzmir.",
      "I also trained in world-renowned hair care products and shampoos, becoming specialized in identifying the right product for every hair type. Today, I offer my clients not just a haircut, but the combination of correct analysis, correct technique, and correct products.",
      "I always prioritize innovation and quality in my profession. From the salon atmosphere to the modern cutting techniques I apply, I keep myself up to date and continue to improve so that every guest who sits in my chair leaves the salon with confidence.",
    ],
    aboutTrainingTitle: "Advanced Training",
    aboutTrainingItems: [
      "Hair cutting techniques",
      "Pivot Point cutting techniques",
      "Anatomical haircut techniques",
    ],
    aboutClosing:
      "Quality, hygiene, and customer satisfaction are non-negotiable for us. By always using the best products, we keep our service standards at the highest level. We would be pleased to welcome you to our salon for this privileged experience.",
    aboutSignature: "Respectfully, İlkan Kaymak",
    links: buildLinks("en"),
    socials: buildSocials("en"),
    reviews: buildReviews("en"),
  },
};

export const brandProfile = brandProfiles[defaultLocale];

export function getLocaleFromSearchParam(
  input: string | string[] | undefined,
): Locale {
  const value = Array.isArray(input) ? input[0] : input;
  return value === "en" ? "en" : "tr";
}

export function getBrandProfile(locale: Locale) {
  return brandProfiles[locale];
}
