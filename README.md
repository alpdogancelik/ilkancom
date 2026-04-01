# ilkancom

Premium, mobile-first personal brand site for Ilkan Kaymak.

Ilkan Kaymak icin hazirlanmis, premium hissiyatli ve mobile-first yaklasimla tasarlanmis kisisel marka sitesi.

## Overview / Genel Bakis

This project is a bilingual barber and grooming microsite built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It combines an editorial-style hero, a cinematic link hub, animated review and about sections, a map card, direct contact actions, and a glass-style footer.

Bu proje Next.js 16, React 19, TypeScript ve Tailwind CSS 4 ile gelistirilmis, iki dilli bir berber ve grooming microsite'idir. Editoryal karakterli bir hero alani, sinematik bir link hub, animasyonlu yorum ve hakkimda bolumleri, harita karti, dogrudan iletisim aksiyonlari ve cam hissiyatli bir footer icerir.

The homepage is a single flowing experience:

Ana sayfa tek bir akici deneyim olarak kurgulanmistir:

1. A full-screen cover section with bold typography and social/action entry points.
2. A scroll-following content hub with services, map, reviews, about, and footer contact blocks.

1. Cesur tipografi ve sosyal/aksiyon girisleri iceren tam ekran bir cover alani.
2. Servisler, harita, yorumlar, hakkimda ve footer iletisim bloklarindan olusan akici bir icerik hub'i.

## Features / Ozellikler

- Bilingual content model with Turkish as default and English via `?lang=en`.
- Mobile-first responsive layout with polished desktop framing.
- Full-screen hero with localized copy, social rail, and CTA entry points.
- Scroll-driven link hub with service dialog, map section, review carousel, about section, and floating WhatsApp CTA.
- GSAP-powered `SplitText` animations for mobile text reveals.
- Animated counters for experience and awards stats.
- Review carousel with drag support and continuous marquee motion.
- DarkVeil background effect in the link hub for a more cinematic visual layer.
- Glass-style footer cards, direct phone CTA, and social boxes.
- Centralized brand/content configuration in a single data file.

- Varsayilan dili Turkce olan, `?lang=en` ile Ingilizceye gecen iki dilli icerik modeli.
- Mobil oncelikli responsive yerlesim ve masaustunde temizce genisleyen kompozisyon.
- Lokalize metinler, sosyal rail ve CTA alanlari iceren tam ekran hero.
- Servis dialogu, harita, yorumlar, hakkimda ve sabit WhatsApp CTA'si iceren scroll tabanli link hub.
- Mobil metin girislerinde GSAP tabanli `SplitText` animasyonlari.
- Deneyim ve odul sayaclari icin animasyonlu counter bileşeni.
- Suruklenebilir ve surekli akan review carousel.
- Link hub icinde sinematik gorunumu guclendiren DarkVeil arka plan efekti.
- Cam hissiyatli footer kartlari, dogrudan arama CTA'si ve sosyal kutular.
- Tek bir veri dosyasinda merkezilesmis marka ve icerik yonetimi.

## Tech Stack / Teknolojiler

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP + `@gsap/react`
- OGL
- Motion
- `next/font`

## Run Locally / Lokal Calistirma

This project uses `pnpm`.

Bu proje `pnpm` kullanir.

```bash
pnpm install
pnpm dev
```

Open:

Ac:

```text
http://localhost:3000
```

English preview:

Ingilizce onizleme:

```text
http://localhost:3000/?lang=en
```

## Production / Uretim

```bash
pnpm build
pnpm start
```

Lint:

```bash
pnpm lint
```

## Project Structure / Proje Yapisi

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    AnimatedCounter.tsx
    BrandFooter.tsx
    FloatingWhatsAppButton.tsx
    LinkHub.tsx
    ProfileHero.tsx
    RevealOnView.tsx
    ReviewCarousel.tsx
    ServicePriceDialog.tsx
    splittext.tsx
    darkveil.tsx
    SwipeIndicator.tsx
  data/
    brand-profile.ts
  lib/
    site.ts
    utils.ts
public/
  images/
```

## Core Files / Ana Dosyalar

### `src/data/brand-profile.ts`

Single source of truth for:

Su alanlar icin tek gercek kaynak:

- localized brand content
- CTA labels and URLs
- social links
- review data
- about copy
- map embed URL
- image references
- footer labels

- lokalize marka icerigi
- CTA etiketleri ve URL'leri
- sosyal baglantilar
- yorum verileri
- hakkimda metinleri
- map embed URL'si
- gorsel referanslari
- footer etiketleri

### `src/app/page.tsx`

Builds the homepage by:

Ana sayfayi su sekilde kurar:

- resolving the locale from `searchParams`
- loading the correct profile data
- rendering `ProfileHero`, `LinkHub`, and `FloatingWhatsAppButton`

- `searchParams` icinden locale belirleyerek
- dogru profil verisini yukleyerek
- `ProfileHero`, `LinkHub` ve `FloatingWhatsAppButton` bileşenlerini render ederek

### `src/components/ProfileHero.tsx`

Responsible for:

Sorumlu oldugu alanlar:

- first-screen visual impact
- language switch
- social rail
- hero typography
- first CTA layer

- ilk ekran etkisi
- dil degistirici
- sosyal rail
- hero tipografisi
- ilk CTA katmani

### `src/components/LinkHub.tsx`

Contains:

Icerir:

- service dialog trigger
- map card
- review section
- about section
- mobile counters
- DarkVeil background integration

- servis dialogu tetigi
- harita karti
- yorum bolumu
- hakkimda bolumu
- mobil sayaclar
- DarkVeil arka plan entegrasyonu

### `src/components/BrandFooter.tsx`

Handles:

Yonetilen alanlar:

- quick links
- direct phone contact card
- social icons
- footer branding
- glass card presentation

- hizli baglantilar
- dogrudan arama karti
- sosyal ikonlar
- footer marka alani
- cam kart sunumu

## Content Editing / Icerik Duzenleme

If you want to adapt this site for another personal brand, start here:

Bu siteyi baska bir kisisel marka icin uyarlamak istiyorsan ilk bakman gereken yer burasi:

- `src/data/brand-profile.ts`

Update this file to change:

Su alanlari degistirmek icin bu dosyayi guncelle:

- brand name
- service type
- hero and footer copy
- review section texts
- about section texts
- booking link
- WhatsApp link
- Instagram and TikTok links
- location label and city
- Google Maps embed URL

- marka adi
- hizmet tipi
- hero ve footer metinleri
- yorum bolumu metinleri
- hakkimda bolumu metinleri
- randevu linki
- WhatsApp linki
- Instagram ve TikTok linkleri
- konum etiketi ve sehir
- Google Maps embed URL'si

## Images & Visual Assets / Gorseller ve Varliklar

Main assets live in:

Ana varliklar burada bulunur:

- `public/images`

Typical image replacements:

Genelde degistirilen gorseller:

- hero portrait
- desktop hero image
- about portrait
- logo marks
- service list visuals

- hero portresi
- masaustu hero gorseli
- hakkimda portresi
- logo gorselleri
- servis/fiyat listesi gorselleri

## Customization Notes / Ozellestirme Notlari

- Default locale is Turkish.
- English content is already wired and can be extended from the same profile file.
- The site is optimized around one premium personal-brand experience, not a generic multipage corporate layout.
- Animations respect reduced-motion preferences where applicable.
- The map section uses an iframe embed, so ad blockers may block Google Maps requests in local development.
- The repository currently prefers `pnpm` over `npm`.

- Varsayilan locale Turkcedir.
- Ingilizce icerik altyapisi hazir durumdadir ve ayni profil dosyasindan genisletilebilir.
- Site jenerik bir kurumsal coklu sayfa yapisindan ziyade tek bir premium kisisel marka deneyimi icin optimize edilmistir.
- Uygun yerlerde reduced-motion tercihine saygi gosterilir.
- Harita bolumu iframe embed kullandigi icin local gelistirmede ad blocker eklentileri Google Maps isteklerini engelleyebilir.
- Repo `npm` yerine `pnpm` akisini tercih eder.

## Console & Dev Notes / Konsol ve Gelistirme Notlari

If you see `maps.googleapis.com ... ERR_BLOCKED_BY_CLIENT`, it is usually caused by a browser extension such as an ad blocker, not by the app itself.

Konsolda `maps.googleapis.com ... ERR_BLOCKED_BY_CLIENT` goruyorsan bu genelde uygulamadan degil, ad blocker benzeri bir tarayici eklentisinden kaynaklanir.

If you see Next.js image quality warnings, make sure image quality values stay within the configured list in:

Next.js image quality uyarisi gorursen `quality` degerlerinin su dosyada tanimli liste icinde kaldigindan emin ol:

- `next.config.ts`

## Commands / Komutlar

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## License / Lisans

This repository is currently private and tailored to the Ilkan Kaymak brand.

Bu repository su anda private yapidadir ve Ilkan Kaymak markasina ozel olarak uyarlanmistir.
