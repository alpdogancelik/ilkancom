"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  className?: string;
  durationMs?: number;
  suffix?: string;
  suffixAtEndOnly?: boolean;
  suffixPersistent?: boolean;
};

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

export function AnimatedCounter({
  value,
  className,
  durationMs = 1800,
  suffix = "",
  suffixAtEndOnly = false,
  suffixPersistent = false,
}: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const frameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const lastCountRef = useRef(-1);

  const [count, setCount] = useState(0);
  const [showSuffix, setShowSuffix] = useState(
    suffix.length > 0 && !suffixAtEndOnly,
  );

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const stopAnimation = () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        lastCountRef.current = value;
        setCount(value);
        setShowSuffix(suffix.length > 0);
        return;
      }

      const startTime = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        const nextCount = Math.round(value * easeOutCubic(progress));

        if (nextCount !== lastCountRef.current) {
          lastCountRef.current = nextCount;
          setCount(nextCount);
        }

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(step);
          return;
        }

        lastCountRef.current = value;
        setCount(value);
        if (suffix.length > 0) {
          setShowSuffix(true);
        }
      };

      frameRef.current = window.requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      startAnimation();

      return stopAnimation;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        observerRef.current?.disconnect();
        startAnimation();
      },
      { threshold: 0.35 },
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
      stopAnimation();
    };
  }, [durationMs, suffix, value]);

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${value}${suffix}`}
    >
      {count}
      {suffixPersistent ? suffix : showSuffix ? suffix : ""}
    </span>
  );
}
