export type BrandSocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whatsapp"
  | "maps";

export type BrandActionLink = {
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
  featuredLinkLabels: string[];
  accentColor: string;
  surfaceColor: string;
  buttonBackground: string;
  buttonText: string;
  mapEmbedUrl?: string;
  links: BrandActionLink[];
  socials: BrandSocialLink[];
  reviews: BrandReview[];
  footerTag: string;
};

export const brandProfile: BrandProfile = {
  brandName: "İlkan Kaymak",
  brandBadge: "İK",
  tagline: "Detay, kalite, ayrıcalık.",
  serviceType: "HAIR STYLIST",
  heroImage: "/images/ilkkan.png",
  desktopHeroImage: "/images/ilkankaymak-w.png",
  heroImageAlt: "İlkan Kaymak'ın tam ekran portresi.",
  linksImage: "/images/ilkan2.PNG",
  linksImageAlt: "İlkan Kaymak'ın bağlantı sayfası için portre arka planı.",
  featuredLinkLabels: ["Randevu Al", "Instagram"],
  accentColor: "#c29563",
  surfaceColor: "#120d0a",
  buttonBackground: "#1b130f",
  buttonText: "#f6ecde",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.0667694464046!2d27.051147000000004!3d38.3937052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdd93072a6925%3A0xd15100635744800f!2s%C4%B0lkan%20kaymak%20hair%20artist%20bal%C3%A7ova!5e0!3m2!1str!2str!4v1774442051149!5m2!1str!2str",
  links: [
    {
      label: "Online Randevu",
      href: "https://www.kolayrandevu.com/isletme/ilkan-kaymak-hair-artist?website=1",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/905531283843?text=Merhaba%2C%20randevu%20almak%20istiyorum.",
    },
    { label: "Instagram", href: "https://www.instagram.com/ilkankaymakofficial/" },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@oktyyilmaz/video/7612401422164004103?q=ilkankaymak&t=1774442796997",
    },
    {
      label: "Konum",
      href: "https://www.google.com/maps/place/%C4%B0lkan+kaymak+hair+artist+bal%C3%A7ova/@38.3937052,27.051147,17z",
    },
  ],
  socials: [
    {
      platform: "whatsapp",
      href: "https://wa.me/905531283843?text=Merhaba%2C%20randevu%20almak%20istiyorum.",
    },
    { platform: "instagram", href: "https://www.instagram.com/ilkankaymakofficial/" },
    {
      platform: "tiktok",
      href: "https://www.tiktok.com/@oktyyilmaz/video/7612401422164004103?q=ilkankaymak&t=1774442796997",
    },
  ],
  reviews: [
    {
      author: "sercan tunçer",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "1 yorum",
      quote:
        "Haftada bir severek hizmet aldığım, temizliği ve kalitesi ile takdir kazanan bir işletme.",
    },
    {
      author: "İlhamcan Celikoglu",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "Yerel Rehber · 24 yorum · 68 fotoğraf",
      quote: "Gerçekten işini güzel yapan ve hızlı temiz bir işletme.",
    },
    {
      author: "Aykut toprakseven",
      rating: 5,
      timeAgo: "4 ay önce",
      summary: "3 yorum",
      quote:
        "Uzun zamandır bu kadar profesyonel bir erkek kuaförüyle karşılaşmamıştım. İçeri adım attığınız anda kendinizi VIP bir müşteri gibi hissediyorsunuz.",
      ownerReply:
        "Aykut bey çok teşekkür ederiz. Her zaman önceliğimiz sizlere iyi ve kaliteli bir hizmet sunabilmek.",
    },
    {
      author: "Deniz KÖMÜRCÜ",
      rating: 5,
      timeAgo: "6 ay önce",
      summary: "Yerel Rehber · 40 yorum · 110 fotoğraf",
      quote:
        "Damat tıraşında çıta mı? İlkan Bey ile gökyüzünde. İşini öyle ciddiye alıyor ki yanında adeta kuaför Avengers takım çantası taşıyor.",
    },
    {
      author: "Murat Yaşar",
      rating: 5,
      timeAgo: "3 yıl önce",
      summary: "Yerel Rehber · 16 yorum · 3 fotoğraf",
      quote:
        "İzmir'deki net en iyi erkek kuaförü. Adamlar işinde iyi. Hızla kalitenin birleşmesi ekstra iyi.",
    },
    {
      author: "Can Akcan",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "3 yorum",
      quote:
        "Yaklaşık 2 senedir geldiğim, İzmir'de olduğum sürece geleceğim tek kuaför salonu. Salonun temizliğinden kullanılan aletlerin kalitesine kadar her şey muazzam.",
    },
    {
      author: "Umut Karakoç",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "3 yorum",
      quote:
        "Şehrin en iyi erkek kuaförü olduğuna hiç şüphem yok. Buraya her geldiğimde kendimi özel hissediyorum.",
    },
    {
      author: "Oguz İLGEN",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "10 yorum",
      quote:
        "Başta Doğuş Bey olmak üzere işine bu kadar saygılı, profesyonel insanları bir arada bulmak çok mümkün değil.",
    },
    {
      author: "Eray İnce",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "6 yorum",
      quote:
        "Gösterilen ilginin kusursuz olması, yapılan işin hakkını verme konusunda burası bir numaralı yer diyebilirim.",
    },
    {
      author: "İdris Kale",
      rating: 5,
      timeAgo: "10 ay önce",
      summary: "5 yorum · 2 fotoğraf",
      quote:
        "Deneyimlerim her zaman güzeldi. Personel güler yüzlü ve çok ilgili, herkese tavsiye ederim.",
    },
    {
      author: "özge doğmuş",
      rating: 5,
      timeAgo: "2 yıl önce",
      summary: "Yerel Rehber · 24 yorum · 7 fotoğraf",
      quote:
        "Oğlumu tıraş için getirdim. Çok profesyonel ve güler yüzlüler, teşekkürler.",
    },
    {
      author: "Buğra Arisoy",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "1 yorum · 1 fotoğraf",
      quote: "Her şeyi ile 10 numara.",
    },
    {
      author: "Ümit Efe Sarıca",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "7 yorum",
      quote: "Çok temiz ve güler yüzlüler, tavsiye ederim.",
    },
    {
      author: "soner cura",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "7 yorum",
      quote:
        "Tamamen kendinizi gönül rahatlığıyla kendisine bırakabilirsiniz. Sanatkar ve profesyonel, haftada bir uğruyorum.",
    },
    {
      author: "oytun kulay",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "8 yorum",
      quote:
        "Mükemmel hizmet, sıra dışı bir kalite. Özellikle Doğuş Bey ve Halil Bey muazzam.",
    },
    {
      author: "Berkay Yağız",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "6 yorum",
      quote: "Mükemmel.",
    },
    {
      author: "Volkan Kaynak",
      rating: 5,
      timeAgo: "2 yıl önce",
      summary: "3 yorum",
      quote: "İzmir'in en iyi kuaförü.",
    },
    {
      author: "Atakan Nevres İyi",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "Yerel Rehber · 22 yorum · 34 fotoğraf",
      quote: "İstenen stil: dalgalıya özel kesim. Hizmetten çok memnun kaldım.",
    },
    {
      author: "Selim Macit",
      rating: 5,
      timeAgo: "1 yıl önce",
      summary: "6 yorum · 3 fotoğraf",
      quote:
        "Saç kesimi olsun, müşteri ile iletişim olsun, mekan olsun her açıdan çok iyi. Başarılarının devamını diliyorum.",
    },
  ],
  footerTag: "@330",
};
