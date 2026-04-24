import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const HomeTestimonials = () => {
  const SCROLL_SECONDS = 75;

  // Split testimonials into 3 rows for the carousel
  const row1 = testimonials.filter((_, idx) => idx % 3 === 0);
  const row2 = testimonials.filter((_, idx) => idx % 3 === 1);
  const row3 = testimonials.filter((_, idx) => idx % 3 === 2);

  const rows = [
    { items: row1, direction: "normal" as const },
    { items: row2, direction: "reverse" as const },
    { items: row3, direction: "normal" as const },
  ];

  const TestimonialCard = (testimonial: typeof testimonials[0]) => (
    <article
      style={{ width: "380px", flexShrink: 0 }}
      className="rounded-2xl bg-white border border-[#e8e8e8] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4 h-full"
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#2A62EB] text-[#2A62EB]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] leading-relaxed text-[#555] italic flex-grow">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="pt-4 border-t border-[#e8e8e8]">
        <p className="font-semibold text-[#0a0a0a] text-[15px]">
          {testimonial.name}
        </p>
        <p className="text-[13px] text-[#9c9c9c]">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </article>
  );

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
      <style>{`
        @keyframes testimonialsScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="w-full mx-auto">
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
            <span className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c]">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a]">
            Client feedback
            <br />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
              and reviews
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div
                className="flex gap-6"
                style={{
                  width: "max-content",
                  animation: `testimonialsScroll ${SCROLL_SECONDS}s linear infinite`,
                  animationDirection: row.direction,
                  willChange: "transform",
                }}
              >
                {[...row.items, ...row.items].map((item, i) => (
                  <div key={`${item.name}-${i}`}>
                    {TestimonialCard(item)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;