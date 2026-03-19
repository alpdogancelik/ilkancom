type SwipeIndicatorProps = {
  href: string;
  label: string;
};

export function SwipeIndicator({ href, label }: SwipeIndicatorProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/35 px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-foreground backdrop-blur transition hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span>{label}</span>
      <span className="swipe-cue inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/75">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 fill-none stroke-current stroke-[2]"
        >
          <path d="M12 5V19" />
          <path d="M6 13L12 19L18 13" />
        </svg>
      </span>
    </a>
  );
}
