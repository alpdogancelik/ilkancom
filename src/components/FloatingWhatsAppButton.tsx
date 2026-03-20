import Image from "next/image";

const whatsappHref =
  "https://wa.me/905531283843?text=Randevu%20bilgisi%20almak%20istiyorum";
const phoneHref = "tel:+905531283843";

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+0.9rem)] z-50 flex items-center gap-2 sm:right-5">
      <a
        href={phoneHref}
        aria-label="Telefon ile ara"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c29563]/24 bg-[#18110e]/94 text-[#f5efe8] shadow-[0_18px_36px_-20px_rgba(0,0,0,0.58)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#201612]/96 hover:border-[#c29563]/36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907]"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#f3e7d5] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
          <Image
            src="/images/icons8-phone.svg"
            alt="Telefon"
            width={18}
            height={18}
            className="h-[1.05rem] w-[1.05rem] object-contain"
          />
        </span>
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="WhatsApp ile randevu bilgisi al"
        className="inline-flex items-center gap-2 rounded-full border border-[#c29563]/24 bg-[#18110e]/94 px-2.5 py-2 pr-3 text-[#f5efe8] shadow-[0_18px_36px_-20px_rgba(0,0,0,0.58)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#201612]/96 hover:border-[#c29563]/36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907]"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#f3e7d5] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
          <Image
            src="/images/icons8-whatsapp.gif"
            alt="WhatsApp"
            width={36}
            height={36}
            className="h-9 w-9 object-cover"
            unoptimized
          />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-[0.52rem] font-semibold uppercase tracking-[0.24em] text-[#c89a5a]">
            WhatsApp
          </span>
          <span className="mt-1 text-[0.72rem] font-semibold tracking-[0.01em] text-[#f5efe8]">
            +90 553 128 38 43
          </span>
        </span>
      </a>
    </div>
  );
}
