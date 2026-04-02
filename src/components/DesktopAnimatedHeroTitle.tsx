"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type DesktopAnimatedHeroTitleProps = {
  lines: string[];
  accentLine?: number;
  className: string;
};

export function DesktopAnimatedHeroTitle({
  lines,
  accentLine,
  className,
}: DesktopAnimatedHeroTitleProps) {
  const desktopTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [desktopReady, setDesktopReady] = useState(false);

  useEffect(() => {
    const element = desktopTitleRef.current;
    let frameId: number | null = null;

    if (!element) {
      return;
    }

    const startAnimation = () => {
      frameId = window.requestAnimationFrame(() => {
        setDesktopReady(true);
      });
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      startAnimation();

      return () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        startAnimation();
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <h2 ref={desktopTitleRef} className={`${className} hidden lg:block`}>
      {lines.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`} className="hero-title-line">
          {Array.from(line).map((character, characterIndex) => {
            const style = {
              "--hero-delay": `${lineIndex * 140 + characterIndex * 24}ms`,
            } as CSSProperties;
            const characterClassName =
              lineIndex === accentLine
                ? `hero-title-char hero-title-char-accent ${desktopReady ? "hero-title-char-active hero-title-char-accent-active" : ""}`
                : `hero-title-char ${desktopReady ? "hero-title-char-active" : ""}`;

            return (
              <span
                key={`${lineIndex}-${characterIndex}-${character}`}
                className={characterClassName}
                style={style}
              >
                {character === " " ? "\u00A0" : character}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}
