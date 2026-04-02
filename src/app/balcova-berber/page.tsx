import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getAbsoluteUrl } from "@/lib/seo";

const title = "Balçova Berber | İlkan Kaymak Hair Artist";
const description =
  "Balçova'da erkek berberi arıyorsanız İlkan Kaymak Hair Artist; premium saç kesimi, sakal tasarımı ve profesyonel grooming hizmetleriyle İzmir Balçova'da öne çıkar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/balcova-berber",
  },
  openGraph: {
    title,
    description,
    url: getAbsoluteUrl("/balcova-berber"),
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function BalcovaBerberPage() {
  return (
    <SeoLandingPage
      eyebrow="Balçova Berber"
      title="Balçova'da erkek berberi ve grooming deneyimi"
      description="Balçova berber aramalarında güvenilir, modern ve premium bir deneyim arayanlar için İlkan Kaymak Hair Artist; saç kesimi, sakal tasarımı ve stil odaklı hizmetleri bir araya getirir."
      sections={[
        {
          title: "Balçova'da berber seçimi neden önemli?",
          body: "Balçova'da berber seçerken sadece yakınlık değil, düzenli kalite de belirleyicidir. İlkan Kaymak Hair Artist, kişisel beklentiye göre planlanan kesim anlayışı ve rafine hizmet standardı ile bu ihtiyaca cevap verir.",
        },
        {
          title: "Modern erkek kuaförü anlayışı",
          body: "Bugünün erkek berberi deneyiminde sadece hızlı bir kesim yeterli değildir. Saç formu, sakal çizgisi, yüz dengesi ve kullanılan ürün kalitesi bir arada değerlendirilmelidir. Balçova'daki bu yaklaşım sayesinde sonuç daha düzgün, daha uzun ömürlü ve daha karakterli olur.",
        },
        {
          title: "Balçova ve çevresi için ulaşılabilir konum",
          body: "Salonun Balçova'daki konumu, çevre semtlerden gelen misafirler için kolay ulaşım sağlar. Google Maps üzerinden konuma hızlıca ulaşabilir, online randevu ile bekleme süresini azaltabilirsiniz.",
        },
        {
          title: "Berber, sakal ve stil bütünlüğü",
          body: "İlkan Kaymak Hair Artist'te hizmet sadece makas ve tıraş makinesiyle sınırlı değildir. Hedef, kişinin tarzına uygun bütünlüklü bir görünüm oluşturmaktır. Bu nedenle Balçova berber aramasıyla gelen misafirler burada daha özel bir deneyim bulur.",
        },
      ]}
      faq={[
        {
          question: "Balçova'da erkek berberi olarak hangi hizmetler sunuluyor?",
          answer: "Saç kesimi, sakal tasarımı, grooming ve randevulu premium erkek kuaförü hizmetleri sunuluyor.",
        },
        {
          question: "Salon Balçova'nın neresinde?",
          answer: "Salon Balçova / İzmir bölgesinde yer alır ve konum bilgisine Google Maps bağlantısı üzerinden kolayca ulaşılabilir.",
        },
        {
          question: "Balçova berber aramalarında neden bu salon tercih edilmeli?",
          answer: "Kişisel yaklaşım, premium ürün seçimi, güçlü teknik altyapı ve gerçek müşteri memnuniyeti bu salonu öne çıkarır.",
        },
      ]}
    />
  );
}
