import type { BrandReview } from "@/data/brand-profile";

type ReviewCarouselProps = {
  reviews: BrandReview[];
  accentColor: string;
};

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#d9a15f]">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden
          className={`h-3.5 w-3.5 ${index < rating ? "fill-current" : "fill-[#4c3725]"}`}
        >
          <path d="M10 1.7L12.5 6.8L18.1 7.6L14 11.6L15 17.3L10 14.7L5 17.3L6 11.6L1.9 7.6L7.5 6.8L10 1.7Z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCarousel({ reviews, accentColor }: ReviewCarouselProps) {
  return (
    <div className="mt-6">
      <div className="flex items-end justify-between gap-4 px-1">
        <div>
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#c89a5a]">
            Yorumlar
          </p>
          <h3 className="mt-2 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#f5efe8]">
            Misafir deneyimleri
          </h3>
        </div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#d8c0a5]/60">
        </p>
      </div>

      <div className="review-carousel -mx-5 mt-4 overflow-x-auto overflow-y-hidden px-5 pb-2 sm:-mx-6 sm:px-6 lg:-mx-0 lg:px-0">
        <div className="flex w-max snap-x snap-mandatory gap-3 pb-2 pr-5 lg:pr-0">
          {reviews.map((review, index) => {
            const initials = review.author
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase())
              .join("");

            return (
              <article
                key={`${review.author}-${index}`}
                className="min-w-[16.5rem] max-w-[16.5rem] snap-start rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(37,25,18,0.94)_0%,rgba(24,16,12,0.96)_100%)] p-4 shadow-[0_24px_44px_-30px_rgba(0,0,0,0.65)] sm:min-w-[18rem] sm:max-w-[18rem] lg:min-w-[19rem] lg:max-w-[19rem]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[0.78rem] font-semibold uppercase"
                    style={{
                      backgroundColor: `${accentColor}20`,
                      color: "#f5efe8",
                      border: `1px solid ${accentColor}3a`,
                    }}
                  >
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[0.98rem] font-semibold text-[#f5efe8]">
                      {review.author}
                    </p>
                    {review.summary ? (
                      <p className="mt-0.5 text-[0.74rem] leading-[1.4] text-[#d8c0a5]/72">
                        {review.summary}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <ReviewStars rating={review.rating} />
                  <span className="text-[0.76rem] text-[#d8c0a5]/76">{review.timeAgo}</span>
                </div>

                <p className="mt-4 text-[0.92rem] leading-[1.7] text-[#f2e8dc]">
                  {review.quote}
                </p>

                {review.ownerReply ? (
                  <div className="mt-4 rounded-[1rem] border border-white/8 bg-black/16 px-3 py-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#c89a5a]">
                      İşletme yanıtı
                    </p>
                    <p className="mt-2 text-[0.82rem] leading-[1.65] text-[#e9dccb]/84">
                      {review.ownerReply}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
