type SwipeIndicatorProps = {
  href: string;
  label?: string;
};

export function SwipeIndicator({ href, label }: SwipeIndicatorProps) {
  return (
    <a
      href={href}
      aria-label={label ?? "Aşağı kaydır"}
      className="group inline-flex items-center rounded-full border border-white/10 bg-[#120d0a]/92 p-2 text-[#f4ebe0]/70 shadow-[0_14px_36px_-20px_rgba(0,0,0,0.72)] transition duration-300 hover:bg-[#1a120f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span className="swipe-cue inline-flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/18 bg-[#f1e4d2] text-[#1b130f] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
        <svg
          viewBox="0 0 24 24"
          className="h-3.25 w-3.25 fill-none stroke-current stroke-[2]"
        >
          <path d="M12 5V19" />
          <path d="M6 13L12 19L18 13" />
        </svg>
      </span>
    </a>
  );
}
