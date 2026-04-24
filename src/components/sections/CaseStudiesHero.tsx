import servicesWebp from "@/assets/Case Studies/7o5_contracting.png";
import servicesWebp2 from "@/assets/Case Studies/Bidm8.png";
import servicesWebp3 from "@/assets/Case Studies/bidm8_supplier.png";
import servicesWebp4 from "@/assets/Case Studies/Claymar_electric.png";
import servicesWebp5 from "@/assets/Case Studies/builders_game_podcast.png";
import servicesWebp6 from "@/assets/Case Studies/trotter_generalcon_tracting.png";
import servicesWebp7 from "@/assets/Case Studies/Gravel_ridge.png";
import servicesWebp8 from "@/assets/Case Studies/homestand.png";
import servicesWebp9 from "@/assets/Case Studies/Masons_Exterior.png";
import servicesWebp10 from "@/assets/Case Studies/Masons_exterior_builtreach.png";
import servicesWebp11 from "@/assets/Case Studies/troy_cluthe_sales.png";

import { ArrowRight } from "lucide-react";

const CaseStudiesHero = () => {
  const caseStudies = [
    { src: servicesWebp, alt: "BMW Road Trip Planner" },
    { src: servicesWebp2, alt: "Sunsets Event App" },
    { src: servicesWebp3, alt: "Beauty E-Commerce" },
    { src: servicesWebp4, alt: "Business Dashboard" },
    { src: servicesWebp5, alt: "Legal Firm Website" },
    { src: servicesWebp6, alt: "Fitness Tracker App" },
    { src: servicesWebp7, alt: "Restaurant Platform" },  
    { src: servicesWebp8, alt: "Restaurant Platform" },  
    { src: servicesWebp9, alt: "Restaurant Platform" },  
    { src: servicesWebp10, alt: "Restaurant Platform" },  
    { src: servicesWebp11, alt: "Restaurant Platform" },  
  ];

  return (
    <section
      className="bg-[#111113] pt-6 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      style={{
        // This strip contains many large images; avoid blocking scroll with offscreen work.
        contentVisibility: "auto",
        containIntrinsicSize: "900px",
      }}
    >
      <style>{`
        @keyframes caseStudiesScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Scrolling image strip ── */}
      <div className="overflow-hidden w-full mb-12 sm:mb-14">
        <div
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: "caseStudiesScroll 35s linear infinite",
            willChange: "transform",
          }}
        >
          {[...caseStudies, ...caseStudies].map((cs, i) => (
            <div
              key={i}
              style={{ width: 380, height: 300, flexShrink: 0 }}
              className=" overflow-hidden bg-[#1a1a2e]"
            >
              <img
                src={cs.src}
                alt={cs.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Text content ── */}
      <div className="text-center px-4 sm:px-6">
        <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-white leading-[1.2] mb-7">
          Building{" "}
          <span className="text-[#2A62EB]">top quality</span>{" "}
          software &amp; apps
          <br />
          for over eighteen years.
        </h2>

        <div className="flex flex-wrap gap-2.5 justify-center mb-2.5">
          {["Web Applications", "Mobile Applications", "Business Platforms"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center border border-white/25 rounded-full px-5 py-2 text-sm text-white font-medium hover:border-white/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {["UI/UX Design", "Software Support"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center border border-white/25 rounded-full px-5 py-2 text-sm text-white font-medium hover:border-white/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-white/45 leading-relaxed max-w-[520px] mx-auto mb-9">
          Revolutionize your business with our mobile app and software development expertise,
          delivering innovative solutions to elevate your brand and boost your bottom line.
        </p>


        <a
          href="/portfolio"
          className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
        >
          <span className="button-children inline-flex items-center gap-2">
            View More
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section >
  );
};

export default CaseStudiesHero;