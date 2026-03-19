import { isExternalHref } from "@/lib/utils";

type LinkButtonProps = {
  label: string;
  href: string;
  detail: string;
  accentColor: string;
  featured?: boolean;
};

export function LinkButton({
  label,
  href,
  detail,
  accentColor,
  featured = false,
}: LinkButtonProps) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group block rounded-[1.55rem] border bg-white/90 px-5 py-4 shadow-[0_18px_40px_-30px_rgba(18,18,18,0.18)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={
        featured
          ? {
              backgroundColor: "#141210",
              borderColor: "#141210",
              color: "#fffaf4",
            }
          : {
              borderColor: `${accentColor}55`,
              color: accentColor,
            }
      }
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p
            className="text-[1rem] font-semibold tracking-tight"
            style={featured ? { color: "#fffaf4" } : undefined}
          >
            {label}
          </p>
          <p
            className="mt-1 text-sm leading-6"
            style={featured ? { color: "rgba(255,250,244,0.72)" } : { color: "#5d6398" }}
          >
            {detail}
          </p>
        </div>
        <span
          aria-hidden
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 group-hover:translate-x-0.5"
          style={
            featured
              ? {
                  borderColor: "rgba(255,250,244,0.22)",
                  color: "#fffaf4",
                }
              : {
                  borderColor: `${accentColor}35`,
                  color: accentColor,
                }
          }
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
