import { isExternalHref } from "@/lib/utils";

type LinkButtonProps = {
  label: string;
  href: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
};

export function LinkButton({
  label,
  href,
  accentColor,
  backgroundColor,
  textColor,
}: LinkButtonProps) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group relative block overflow-hidden rounded-[1.55rem] border px-5 py-[1.05rem] shadow-[0_20px_44px_-34px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-34px_rgba(0,0,0,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c29563] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0907] active:scale-[0.995]"
      style={{ backgroundColor, borderColor: `${accentColor}1f`, color: textColor }}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0)_48%)]"
      />

      <div className="relative flex items-center justify-between gap-4">
        <p className="text-[1rem] font-semibold tracking-[-0.01em]">{label}</p>
        <span
          aria-hidden
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 group-hover:translate-x-0.5"
          style={{
            backgroundColor: `${accentColor}12`,
            borderColor: `${accentColor}35`,
            color: accentColor,
          }}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
            <path d="M5 12H19" />
            <path d="M12 5L19 12L12 19" />
          </svg>
        </span>
      </div>
    </a>
  );
}
