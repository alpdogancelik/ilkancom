"use client";

import type { CSSProperties, ElementType, Ref } from "react";
import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);
}

type SplitTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type SplitTextElement = HTMLElement & {
  _rbsplitInstance?: GSAPSplitText;
};

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: SplitTag;
  textAlign?: CSSProperties["textAlign"];
  startDelayMs?: number;
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  startDelayMs = 0,
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    animationCompletedRef.current = false;
    if (ref.current) {
      ref.current.dataset.splitState = "idle";
    }
  }, [text, splitType]);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    let cancelled = false;
    let frameId: number | null = null;

    const markFontsReady = () => {
      frameId = window.requestAnimationFrame(() => {
        if (!cancelled) {
          setFontsLoaded(true);
        }
      });
    };

    if (!("fonts" in document)) {
      markFontsReady();
    } else if (document.fonts.status === "loaded") {
      markFontsReady();
    } else {
      void document.fonts.ready.then(() => {
        if (!cancelled) {
          markFontsReady();
        }
      });
    }

    return () => {
      cancelled = true;
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || animationCompletedRef.current) {
        return;
      }

      const element = ref.current as SplitTextElement;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        element.dataset.splitState = "complete";
        return;
      }

      element.dataset.splitState = "animating";

      if (element._rbsplitInstance) {
        try {
          element._rbsplitInstance.revert();
        } catch {
          // Revert may throw if the split instance is already cleaned up.
        }
        element._rbsplitInstance = undefined;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? Number.parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch?.[2] ?? "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;
      let targets: Element[] = [];

      const assignTargets = (self: GSAPSplitText) => {
        if (splitType.includes("chars") && self.chars.length) {
          targets = self.chars;
        }
        if (!targets.length && splitType.includes("words") && self.words.length) {
          targets = self.words;
        }
        if (!targets.length && splitType.includes("lines") && self.lines.length) {
          targets = self.lines;
        }
        if (!targets.length) {
          targets = self.chars.length ? self.chars : self.words.length ? self.words : self.lines;
        }
      };

      const splitInstance = new GSAPSplitText(element, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          assignTargets(self);

          return gsap.fromTo(targets, { ...from }, {
            ...to,
            delay: startDelayMs / 1000,
            duration,
            ease,
            stagger: delay / 1000,
            scrollTrigger: {
              trigger: element,
              start,
              once: true,
              fastScrollEnd: true,
              anticipatePin: 0.4,
            },
            onComplete: () => {
              animationCompletedRef.current = true;
              element.dataset.splitState = "complete";
              onCompleteRef.current?.();
            },
            willChange: "transform, opacity",
            force3D: true,
          });
        },
      });

      element._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === element) {
            trigger.kill();
          }
        });

        try {
          splitInstance.revert();
        } catch {
          // Revert may throw if the split instance is already cleaned up.
        }

        delete element.dataset.splitState;
        element._rbsplitInstance = undefined;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        startDelayMs,
        fontsLoaded,
      ],
      scope: ref,
    },
  );

  const style: CSSProperties = {
    textAlign,
    overflow: "visible",
    whiteSpace: "normal",
    lineHeight: "inherit",
    overflowWrap: "break-word",
    willChange: "transform, opacity",
  };

  const Tag = tag as ElementType;

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      style={style}
      className={`split-parent ${className}`.trim()}
    >
      {text}
    </Tag>
  );
}
