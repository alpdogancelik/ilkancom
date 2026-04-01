"use client";

// Hizmet/fiyat gorselini tam ekran dialog olarak acar.
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import type { Locale } from "@/data/brand-profile";

type ServicePriceDialogProps = {
  accentColor: string;
  brandName: string;
  locale: Locale;
  className?: string;
};

const servicePriceCopy = {
  tr: {
    buttonLabel: "Hizmet/Fiyat Listesi",
    closeLabel: "Kapat",
    imageAlt: "Ilkan Kaymak hizmet ve fiyat listesi",
    imageSrc: "/images/servicetr.png",
  },
  en: {
    buttonLabel: "Service/Price List",
    closeLabel: "Close",
    imageAlt: "Ilkan Kaymak service and price list",
    imageSrc: "/images/serviceen.png",
  },
} as const;

export function ServicePriceDialog({
  accentColor,
  brandName,
  locale,
  className,
}: ServicePriceDialogProps) {
  // Dialog acildiginda odak yonetimi ve sayfa scroll kilidi uygulanir.
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const dialogId = useId();
  const titleId = useId();
  const copy = servicePriceCopy[locale];
  const canUsePortal = typeof window !== "undefined";

  useEffect(() => {
    if (!isOpen) {
      previousFocusRef.current?.focus();
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className={className}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls={dialogId}
          className="group relative isolate inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#c29563]/28 bg-[#17100d]/96 px-4 py-2.5 text-[#f5efe8] shadow-[0_22px_52px_-28px_rgba(0,0,0,0.78)] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-[#d3ab7b]/48 hover:bg-[#1f1511] hover:shadow-[0_28px_62px_-28px_rgba(0,0,0,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907]"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,153,94,0.32),transparent_42%),linear-gradient(130deg,rgba(255,255,255,0.14),transparent_35%,rgba(201,153,94,0.12)_100%)] opacity-70 transition duration-500 group-hover:opacity-95"
          />
          <span
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#120d0a] text-[#f5efe8] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            style={{ borderColor: `${accentColor}4a` }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-[0.95rem] w-[0.95rem] fill-none stroke-current stroke-[1.9]"
            >
              <path d="M5 7.5H19" />
              <path d="M5 12H15.5" />
              <path d="M5 16.5H12.5" />
            </svg>
          </span>
          <span className="relative text-[0.64rem] font-semibold uppercase tracking-[0.24em] sm:text-[0.66rem]">
            {copy.buttonLabel}
          </span>
        </button>
      </div>

      {canUsePortal
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  className="fixed inset-0 z-[200] bg-[rgba(4,3,2,0.92)] backdrop-blur-[10px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    id={dialogId}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    className="relative flex h-full w-full items-center justify-center p-3 sm:p-5 lg:p-8"
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.985, y: 14 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, scale: 1, y: 0 }
                    }
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.99, y: 10 }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.26, ease: [0.22, 1, 0.36, 1] }
                    }
                    onClick={(event) => event.stopPropagation()}
                  >
                    <h2 id={titleId} className="sr-only">
                      {brandName} {copy.buttonLabel}
                    </h2>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      aria-label={copy.closeLabel}
                      onClick={() => setIsOpen(false)}
                      className="absolute top-3 right-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-black/52 text-[#f5efe8] shadow-[0_20px_40px_-22px_rgba(0,0,0,0.72)] backdrop-blur-md transition hover:bg-black/68 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:top-5 sm:right-5"
                      style={{ borderColor: `${accentColor}40` }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="h-[1rem] w-[1rem] fill-none stroke-current stroke-[2]"
                      >
                        <path d="M6 6L18 18" />
                        <path d="M18 6L6 18" />
                      </svg>
                    </button>

                    <div className="flex h-full w-full items-center justify-center">
                      <Image
                        src={copy.imageSrc}
                        alt={`${brandName} ${copy.imageAlt}`}
                        width={1500}
                        height={2100}
                        priority
                        sizes="100vw"
                        draggable={false}
                        className="h-auto max-h-full w-auto max-w-full select-none object-contain shadow-[0_36px_90px_-44px_rgba(0,0,0,0.85)]"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
