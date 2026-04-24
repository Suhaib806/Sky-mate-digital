import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import phoneImg from "@/assets/srvic.png";

type Step = {
  title: string;
  description: string;
  // absolute positioning around the circle (desktop)
  x: number;
  y: number;
  side: "left" | "right";
};

const STEPS: Step[] = [
  {
    title: "Results-driven approach",
    description: "Every design drives growth and boosts user engagement.",
    x: 190,
    y: -10,
    side: "right",
  },
  {
    title: "Crafted designs success",
    description: "Polished UI systems built to look premium and convert better.",
    x: 120,
    y: -160,
    side: "right",
  },
  {
    title: "Creativity you can trust",
    description: "Concepts that stay consistent across brand, product, and marketing.",
    x: -140,
    y: -160,
    side: "left",
  },
  {
    title: "Designed to perform beautifully",
    description: "Accessible, responsive, and engineered for smooth experiences.",
    x: -190,
    y: -10,
    side: "left",
  },
  {
    title: "Best possible experience for users",
    description: "We simplify flows so users move faster with less friction.",
    x: -120,
    y: 140,
    side: "left",
  },
];

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const HomeWhyUsStepper = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = clamp(Math.floor(v * STEPS.length), 0, STEPS.length - 1);
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const phoneTranslate = useMemo(() => {
    // px per step — tuned to match the “one step up” feel
    const stepPx = 26;
    return -active * stepPx;
  }, [active]);

  return (
    <section ref={sectionRef} className="bg-white">
      {/* Make room to scroll through 5 steps */}
      <div className="h-[320vh]">
        <div className="sticky top-0">
          <div className="px-8 md:px-12 lg:px-20 py-20">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e6e6e6] text-xs text-[#777]">
                Why us?
              </div>
              <h2 className="mt-6 text-[44px] md:text-[56px] leading-[1.05] font-display font-normal text-[#111]">
                Why partner with us
              </h2>
              <p className="mt-3 text-sm text-[#777]">Your goals, our creative solutions</p>
            </div>

            {/* Visual */}
            <div className="relative mt-14 mx-auto w-[520px] h-[520px] md:w-[560px] md:h-[560px]">
              {/* circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] md:h-[460px] md:w-[460px] rounded-full bg-gradient-to-b from-[#bfe0ea] to-[#eaf6fb]" />

              {/* dotted ring */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[520px] w-[520px] md:h-[560px] md:w-[560px] rounded-full border border-dashed border-[#dcdcdc]" />
              </div>

              {/* phone */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-24px] w-[320px] md:w-[360px]"
                animate={{ y: phoneTranslate }}
                transition={{ type: "spring", stiffness: 140, damping: 18, mass: 0.8 }}
              >
                <div className="rounded-[28px] overflow-hidden border border-[#e6e6e6] shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-white">
                  <img src={phoneImg} alt="App preview" className="w-full h-[220px] object-cover" />
                </div>
              </motion.div>

              {/* points */}
              {STEPS.map((s, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={s.title}
                    className={`hidden lg:flex absolute max-w-[260px] ${
                      s.side === "left" ? "items-start text-right" : "items-start text-left"
                    }`}
                    style={{
                      left: `calc(50% + ${s.x}px)`,
                      top: `calc(50% + ${s.y}px)`,
                      transform: s.side === "left" ? "translate(-100%, -50%)" : "translate(0, -50%)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          isActive ? "bg-[#2A62EB]" : "bg-[#cfcfcf]"
                        }`}
                      />
                      <div className={`font-medium ${isActive ? "text-[#111]" : "text-[#cfcfcf]"}`}>
                        {s.title}
                      </div>
                    </div>
                    <div
                      className={`mt-2 text-sm leading-[18px] ${
                        isActive ? "text-[#666]" : "text-[#e0e0e0]"
                      }`}
                    >
                      {isActive ? s.description : ""}
                    </div>
                  </div>
                );
              })}

              {/* Mobile list */}
              <div className="lg:hidden mt-10 space-y-4">
                {STEPS.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={s.title}
                      className={`rounded-xl border px-5 py-4 transition-colors ${
                        isActive ? "border-[#2A62EB] bg-[#fffaf0]" : "border-[#e6e6e6] bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-[#2A62EB]" : "bg-[#cfcfcf]"}`} />
                        <div className="font-medium text-[#111]">{s.title}</div>
                      </div>
                      {isActive && <div className="mt-2 text-sm text-[#666]">{s.description}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUsStepper;

