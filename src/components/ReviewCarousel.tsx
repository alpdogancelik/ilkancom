"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import type { BrandReview } from "@/data/brand-profile";

type ReviewCarouselProps = {
  reviews: BrandReview[];
  accentColor: string;
  eyebrow: string;
  title: string;
  ownerReplyLabel: string;
  guestExperienceLabel: string;
};

type ReviewCardProps = {
  review: BrandReview;
  ownerReplyLabel: string;
  guestExperienceLabel: string;
  accentColor: string;
};

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="char-reveal inline-block"
          style={{ animationDelay: `${delay + index * 0.035}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function ReviewCard({
  review,
  ownerReplyLabel,
  guestExperienceLabel,
  accentColor,
}: ReviewCardProps) {
  const initials = review.author
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <article className="review-card-container mx-4 h-[480px]">
      <div className="review-card relative flex h-full w-[320px] flex-col justify-between rounded-[40px] bg-[#0a0a0a] p-8 sm:w-[380px]">
        <div className="no-scrollbar flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={`${review.author}-star-${i}`}
                  className={`h-3.5 w-3.5 ${i < review.rating ? "fill-[#C7A17A]" : "fill-[#222]"}`}
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-[#6a6a6a]">{review.timeAgo}</span>
          </div>

          <p className="text-sm leading-relaxed text-[#A1A1AA] italic transition-colors duration-500 hover:text-white">
            &ldquo;{review.quote}&rdquo;
          </p>

          {review.ownerReply ? (
            <div className="mt-2 rounded-r-2xl border-l-2 bg-[#111] p-5" style={{ borderColor: accentColor }}>
              <p
                className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"
                style={{ color: accentColor }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {ownerReplyLabel}
              </p>
              <p className="text-xs leading-relaxed text-[#777] italic">{review.ownerReply}</p>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-[#222]/50 pt-6">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold uppercase"
            style={{
              borderColor: `${accentColor}45`,
              color: accentColor,
              backgroundColor: "#111",
            }}
          >
            {initials}
          </div>
          <div className="overflow-hidden text-left">
            <h4 className="truncate text-sm font-medium tracking-tight text-white">{review.author}</h4>
            <p className="mt-1 text-[10px] tracking-[0.2em] whitespace-nowrap uppercase text-[#444]">
              {review.summary ?? guestExperienceLabel}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ReviewCarousel({
  reviews,
  accentColor,
  eyebrow,
  title,
  ownerReplyLabel,
  guestExperienceLabel,
}: ReviewCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollRef = useRef(0);
  const velocityRef = useRef(1.2);
  const hoveredRef = useRef(false);
  const draggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const dragOriginRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const reviewsLoop = useMemo(() => [...reviews, ...reviews], [reviews]);

  useEffect(() => {
    const animate = () => {
      if (!draggingRef.current) {
        const targetVelocity = hoveredRef.current ? 0 : 1.2;
        velocityRef.current += (targetVelocity - velocityRef.current) * 0.05;
        scrollRef.current -= velocityRef.current;
      }

      const track = trackRef.current;
      if (track) {
        const maxScroll = track.scrollWidth / 2;

        if (maxScroll > 0) {
          if (Math.abs(scrollRef.current) >= maxScroll) {
            scrollRef.current = 0;
          } else if (scrollRef.current > 0) {
            scrollRef.current = -maxScroll;
          }
        }

        track.style.transform = `translate3d(${scrollRef.current}px, 0, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerIdRef.current = event.pointerId;
    draggingRef.current = true;
    setIsDragging(true);
    startXRef.current = event.clientX;
    dragOriginRef.current = scrollRef.current;
    velocityRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || pointerIdRef.current !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - startXRef.current;
    scrollRef.current = dragOriginRef.current + deltaX;
  };

  const handlePointerRelease = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    pointerIdRef.current = null;
    draggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section className="relative flex flex-col justify-center overflow-hidden py-16">
      <div className="mb-14 w-full px-1 text-left select-none">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#C7A17A]">
            <TypingText text={eyebrow} />
          </span>
          <h3 className="text-3xl font-light tracking-tighter text-white italic sm:text-4xl lg:text-6xl">
            <TypingText text={title} delay={0.6} />
          </h3>
        </div>
      </div>

      <div
        className={`mask-edges relative w-full cursor-grab py-4 active:cursor-grabbing touch-pan-y ${isDragging ? "select-none" : ""}`}
        onMouseEnter={() => {
          hoveredRef.current = true;
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
          draggingRef.current = false;
          pointerIdRef.current = null;
          setIsDragging(false);
        }}
        onPointerCancel={handlePointerRelease}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerRelease}
      >
        <div ref={trackRef} className="flex will-change-transform">
          {reviewsLoop.map((review, index) => (
            <ReviewCard
              key={`${review.author}-${index}`}
              review={review}
              ownerReplyLabel={ownerReplyLabel}
              guestExperienceLabel={guestExperienceLabel}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
