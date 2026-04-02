import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getAbsoluteUrl } from "@/lib/seo";

const title = "İzmir Erkek Berberi | İlkan Kaymak Hair Artist";
const description =
  "İzmir'de premium erkek berberi arayanlar için İlkan Kaymak Hair Artist. Modern saç kesimi, sakal tasarımı, grooming ve Balçova konumuyla profesyonel erkek kuaförü deneyimi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/izmir-erkek-berberi",
  },
  openGraph: {
    title,
    description,
    url: getAbsoluteUrl("/izmir-erkek-berberi"),
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function IzmirErkekBerberiPage() {
  return (
    <SeoLandingPage
      eyebrow="İzmir Erkek Berberi"
      title="İzmir'de premium erkek berberi deneyimi"
      description="İlkan Kaymak Hair Artist, İzmir Balçova merkezli erkek berberi olarak modern kesim, sakal tasarımı ve rafine grooming deneyimini bir araya getirir. Hedefimiz sadece saç kesmek değil, yüz tipinize, saç yapınıza ve stilinize uygun bir sonuç üretmektir."
      sections={[
        {
          title: "İzmir erkek berberi arayanlar için neden İlkan Kaymak?",
          body: "İzmir'de erkek berberi seçerken teknik yeterlilik, hijyen, iletişim ve süreklilik birlikte değerlendirilir. İlkan Kaymak Hair Artist, uzun yıllara dayanan deneyimi, premium ürün kullanımı ve kişisel yaklaşımıyla Balçova'da güvenilen bir erkek kuaförü deneyimi sunar.",
        },
        {
          title: "Saç kesimi ve sakal tasarımında kişisel planlama",
          body: "Her misafirin saç yoğunluğu, çıkış yönü, yüz hatları ve günlük rutini farklıdır. Bu nedenle kesim ve sakal tasarımı standart kalıplarla değil, size özel planlanır. Amaç daha uzun süre formunu koruyan, kolay yönetilen ve temiz görünen bir sonuç elde etmektir.",
        },
        {
          title: "Balçova konum avantajı",
          body: "Salonun Balçova'daki konumu sayesinde İzmir'in farklı noktalarından rahatça ulaşılabilir. Özellikle Balçova, Narlıdere, Göztepe ve çevre semtlerden gelen misafirler için ulaşım ve randevu süreci pratiktir.",
        },
        {
          title: "Google'da İzmir erkek berberi aramasında doğru seçim",
          body: "İzmir erkek berberi, İzmir erkek kuaförü ya da Balçova berber aramalarında kullanıcılar hem teknik kalite hem de güven arar. İlkan Kaymak Hair Artist bu iki başlığı; gerçek yorumlar, güçlü görsel sunum ve doğrudan iletişim kolaylığı ile birleştirir.",
        },
      ]}
      faq={[
        {
          question: "İlkan Kaymak Hair Artist hangi bölgede hizmet veriyor?",
          answer: "Salon, İzmir Balçova'da konumludur ve İzmir genelinden gelen misafirlere hizmet verir.",
        },
        {
          question: "Randevu almadan gelmek mümkün mü?",
          answer: "Yoğunluk durumuna göre değişebilir ancak en sağlıklı deneyim için online randevu veya telefonla randevu oluşturmak tavsiye edilir.",
        },
        {
          question: "Sakal tasarımı ve premium grooming hizmeti var mı?",
          answer: "Evet. Saç kesimi yanında sakal düzenleme, stil odaklı grooming ve kişisel bakım yaklaşımı da sunulur.",
        },
      ]}
    />
  );
}
