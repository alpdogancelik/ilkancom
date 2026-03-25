import Image from "next/image";

const phoneHref = "tel:+905531283843";

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed right-3 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 sm:right-5">
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
    </div>
  );
}
