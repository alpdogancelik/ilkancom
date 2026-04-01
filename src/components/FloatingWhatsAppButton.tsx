// Mobil/desktop icin sabit bir "ara" butonu sunar.
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

const phoneHref = "tel:+905531283843";

type FloatingWhatsAppButtonProps = {
  ariaLabel: string;
  label: string;
};

export function FloatingWhatsAppButton({
  ariaLabel,
  label,
}: FloatingWhatsAppButtonProps) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed right-3 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 transition-opacity duration-300 sm:right-5 lg:right-8 lg:bottom-8 ${
        isFooterVisible ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Mobilde sadece ikon gorunen hizli arama butonu */}
      <a
        href={phoneHref}
        aria-label={ariaLabel}
        className="group relative isolate inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#c29563]/24 bg-[#18110e]/94 text-[#f5efe8] shadow-[0_18px_36px_-20px_rgba(0,0,0,0.58)] backdrop-blur-sm transition-[transform,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.08] hover:border-[#d6ab78]/42 hover:bg-[#201612]/98 hover:shadow-[0_24px_46px_-20px_rgba(0,0,0,0.7)] active:-translate-y-1 active:scale-[1.12] active:border-[#e3bb88]/48 active:bg-[#241915] active:shadow-[0_28px_52px_-18px_rgba(0,0,0,0.78)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907] lg:hidden"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.2),transparent_52%),linear-gradient(135deg,transparent_20%,rgba(255,255,255,0.12)_52%,transparent_78%)] opacity-60 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-90 group-hover:scale-110 group-active:opacity-100 group-active:scale-110"
        />
        <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#f3e7d5] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-[1.14]">
          <Image
            src="/images/icons8-phone.svg"
            alt=""
            width={18}
            height={18}
            className="h-[1.05rem] w-[1.05rem] object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-125"
          />
        </span>
      </a>

      {/* Desktop'ta metin + ikon birlikte gosterilir */}
      <a
        href={phoneHref}
        aria-label={ariaLabel}
        className="group relative isolate hidden items-center gap-3 overflow-hidden rounded-full border border-[#e6d7c2]/16 bg-[#f3e7d5] px-5 py-2.5 text-[#16100d] shadow-[0_22px_50px_-28px_rgba(0,0,0,0.72)] transition-[transform,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.08] hover:border-[#eadcc6]/30 hover:bg-[#fbf1e4] hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.84)] active:-translate-y-1 active:scale-[1.05] active:bg-[#fff4e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907] lg:inline-flex"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(255,255,255,0.42),transparent_22%),linear-gradient(120deg,transparent_18%,rgba(255,255,255,0.24)_48%,transparent_72%)] opacity-45 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:opacity-80 group-active:opacity-100"
        />
        <span className="relative z-10 text-[0.64rem] font-semibold uppercase tracking-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-active:translate-x-0.5">
          {label}
        </span>
        <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/8 bg-white/32 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-115 group-hover:bg-white/46 group-active:scale-120">
          <Image
            src="/images/icons8-phone.svg"
            alt=""
            width={16}
            height={16}
            className="h-[0.95rem] w-[0.95rem] object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-125"
          />
        </span>
      </a>
    </div>
  );
}
