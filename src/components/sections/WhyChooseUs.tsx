import React, { useEffect, useRef, useState } from "react";

import office from "@/assets/softech.png"
import office2 from "@/assets/office.png"
import office3 from "@/assets/office2.png"
import office4 from "@/assets/office3.png"

const services = [
  {
    n: "01",
    title: "Digital growth experts",
    desc: "Clear strategy and thoughtful execution come together to create digital experiences that feel intuitive, engaging.",
    img: office,
  },
  {
    n: "02",
    title: "High-impact creative campaigns",
    desc: "Strategic thinking paired with creative craftsmanship results in digital solutions that are intuitive, impactful.",
    img: office2,
  },
  {
    n: "03",
    title: "Lead generation campaigns",
    desc: "We blend clarity, creativity and structure to build digital experiences that connect with users.",
    img: office3,
  },
  {
    n: "04",
    title: "Performance marketing services",
    desc: "Strong concepts and careful execution come together to form digital experiences that feel natural, polished and scalable.",
    img: office4,
  },
];

const CARD_OFFSET = 80; // px each card is staggered below the previous

const MarketingSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fires on EVERY intersection change — in AND out
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className=" font-sans py-14 lg:py-20 px-5 md:px-12 lg:px-20">

      {/* ── Top row ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
        <div className=" sm:px-10 lg:px-16  md:border-r border-gray-200 flex flex-col justify-center">
          <p className="text-[80px] sm:text-[100px] lg:text-[120px] font-extrabold text-[#2A62EB] leading-none tracking-tight">
            190+
          </p>
          <p className="mt-4 text-[13px] text-gray-400 leading-relaxed max-w-[220px]">
            Expert marketing focuses on driving growth through high data analysis.
          </p>
        </div>
        <div className=" sm:px-10 lg:px-16 py-14 flex items-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Our expert marketing team creates targeted campaigns that drive traffic, build trust, and convert visitors into paying customers
          </h2>
        </div>
      </div>

      {/* ── Cards row ── */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 border-b border-gray-200 overflow-hidden"
      >
        {services.map((s, i) => {
          const initialOffset = i * CARD_OFFSET;
          const delay = i * 100;

          return (
            <div
              key={s.n}
              className="flex flex-col  sm:px-6 lg:px-8 py-4 group"
              style={{
                transform: visible
                  ? "translateY(0)"
                  : `translateY(${initialOffset}px)`,
                opacity: visible ? 1 : i === 0 ? 1 : 0.3,
                transition: `transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                             opacity 0.7s ease ${delay}ms`,
              }}
            >
              <span className="text-[11px] font-bold tracking-[.15em] text-[#2A62EB] mb-5">
                {s.n}
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-gray-900 leading-snug mb-5">
                {s.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed flex-1 mb-8">
                {s.desc}
              </p>
              <div className=" rounded-xl mt-auto">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-[300px]  object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketingSection;