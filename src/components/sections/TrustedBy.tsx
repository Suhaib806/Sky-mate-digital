import { Asterisk } from "lucide-react";
import { trustedLogos } from "@/data/trustedLogos";

const TrustedBy = () => {
  const logos = [...trustedLogos, ...trustedLogos];

  return (
    <section className="relative mt-8 z-20 bg-white border border-dashed border-[#d8d8d8]">
      <div className="py-4 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-start gap-3 text-[16px] leading-[24px] font-medium uppercase tracking-[0.01em] text-[#0a0a0a]">
            <Asterisk className="w-4 h-4 mt-1 text-[#0a0a0a]" />
            <div className="flex flex-col">
              <span>WE&apos;VE DONE 500+ ENTERPRISE AND</span>
              <span>BUSINESS CONSULTING</span>
            </div>
          </div>

          <div className="w-full md:flex-1 relative overflow-hidden">
            <div
              className="flex items-center gap-10 md:gap-14 whitespace-nowrap"
              style={{
                animation: "trustedByMarquee 55s linear infinite",
                width: "max-content",
                willChange: "transform",
              }}
            >
              {logos.map((logo, i) => (
                <div key={`${logo.alt}-${i}`} className="flex items-center justify-center shrink-0 h-[44px]">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-[40px] w-auto max-w-[min(160px,28vw)] object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
