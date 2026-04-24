import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import phoneMockup from "@/assets/phone-mockup.png";

const ACCENT = "#3B82F6";

const whyUsSteps = [
  {
    title: "Smart designs,",
    titleBold: "sharp results",
    description:
      "Founded with a passion for technology—we evolve, adapt, and aim to exceed expectations with reliable delivery.",
    angle: -54, // top-right
  },
  {
    title: "Timely, transparent",
    titleBold: "communication",
    description:
      "We keep updates clear and frequent so stakeholders stay aligned—whether you’re next door or overseas.",
    angle: 18, // right
  },
  {
    title: "Boost traffic",
    titleBold: "& sales",
    description:
      "Targeted strategies to improve visibility, engagement, and conversion—measured against goals you actually care about.",
    angle: 90, // bottom-right
  },
  {
    title: "Responsive, scalable",
    titleBold: "solutions",
    description:
      "Adaptable builds that perform across devices and grow with your business—without fragile shortcuts.",
    angle: 162, // bottom-left
  },
  {
    title: "Premium support,",
    titleBold: "worldwide",
    description:
      "Expert help when you need it—Pakistan-based team, trusted by clients across regions and time zones.",
    angle: 234, // left
  },
];

// Position labels around the circle with proper offsets
const labelPositions = [
  { top: "8%", right: "2%", left: "auto", textAlign: "left" as const },
  { top: "38%", right: "-4%", left: "auto", textAlign: "left" as const },
  { bottom: "10%", right: "2%", left: "auto", top: "auto", textAlign: "left" as const },
  { bottom: "10%", left: "2%", right: "auto", top: "auto", textAlign: "right" as const },
  { top: "38%", left: "-4%", right: "auto", textAlign: "right" as const },
];

const mobileLabelPositions = [
  { top: "2%", left: "50%", transform: "translateX(-50%)", textAlign: "center" as const },
  { top: "20%", right: "0%", left: "auto", textAlign: "right" as const },
  { bottom: "2%", right: "0%", left: "auto", top: "auto", textAlign: "right" as const },
  { bottom: "2%", left: "0%", right: "auto", top: "auto", textAlign: "left" as const },
  { top: "20%", left: "0%", right: "auto", textAlign: "left" as const },
];

const WhyUsScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    let ctx: any;
    const initGSAP = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      (gsap as any).registerPlugin(ScrollTrigger);

      if (!triggerRef.current || !sectionRef.current) return;

      ctx = (gsap as any).context(() => {
        // If Lenis smooth scroll is enabled, wire it to ScrollTrigger so pin/scrub
        // sections don't "fight" the scroll and feel stuck.
        if (window.__lenis) {
          const lenis = window.__lenis;

          (ScrollTrigger as any).scrollerProxy(document.documentElement, {
            scrollTop(value?: number) {
              if (typeof value === "number") {
                lenis.scrollTo(value, { immediate: true });
              }
              return (lenis as any).scroll ?? window.scrollY ?? 0;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },
            // Lenis doesn't transform the root; fixed pinning is correct.
            pinType: "fixed",
          });

          const onLenisScroll = () => (ScrollTrigger as any).update();
          lenis.on("scroll", onLenisScroll);

          // Ensure ScrollTrigger measures correctly with smooth scrolling.
          (ScrollTrigger as any).addEventListener("refresh", () => lenis.resize());
          (ScrollTrigger as any).refresh();

          // Cleanup for this context
          (ctx as any).add(() => {
            lenis.off("scroll", onLenisScroll);
          });
        }

        (ScrollTrigger as any).create({
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 5}`,
          pin: sectionRef.current,
          pinSpacing: true,
          scrub: 0.5,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const step = Math.min(4, Math.floor(progress * 5));
            setActiveStep(progress < 0.02 ? -1 : step);
          },
        });
      });
    };

    initGSAP();
    return () => ctx?.revert();
  }, [isMobile]);

  const circleSize = isMobile ? 260 : 420;
  const orbitRadius = isMobile ? 160 : 260;

  // Calculate dot positions on the orbit
  const getDotPosition = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: Math.cos(rad) * orbitRadius,
      y: Math.sin(rad) * orbitRadius,
    };
  };

  // Phone starts mostly below the circle and rises progressively into view
  const phoneBaseOffset = isMobile ? 200 : 300;
  const stepRise = activeStep >= 0 ? (activeStep + 1) * (isMobile ? 30 : 45) : 0;
  const imageTranslateY = phoneBaseOffset - stepRise;

  const positions = isMobile ? mobileLabelPositions : labelPositions;

  if (isMobile) {
    return (
      <section className="relative w-full  py-14">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3">
                <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
                WHY&nbsp;US
              </div>
            </div>
            <h2 className="text-[34px] leading-[1.12] font-display font-bold tracking-tight text-[#0a0a0a] mb-3">
              Why partner{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
                with us
              </span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Your trusted partner for innovative online solutions—wherever you are.
            </p>
          </div>

          <div className="mx-auto w-[260px] h-[260px] rounded-full overflow-hidden flex items-center justify-center bg-[radial-gradient(circle,#ffe3b3_0%,#fff7e5_40%,#ffffff_100%)] mb-8">
            <img
              src={phoneMockup}
              alt="Sky Mate Digital product showcase"
              className="w-[150px] h-auto drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="space-y-3">
            {whyUsSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-[#ebe6dc] bg-white px-4 py-3"
              >
                <h3 className="text-[15px] font-medium text-[#1a1a1a]">
                  {step.title} <span className="font-bold">{step.titleBold}</span>
                </h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#666]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={triggerRef}>
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
        
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4 z-10">
          <div className="flex justify-center mb-4">
            <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3">
              <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
              WHY&nbsp;US
            </div>
          </div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold tracking-tight text-[#0a0a0a] mb-4">
            Why partner{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
              with us
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            Your trusted partner for innovative online solutions—wherever you are.
          </p>
        </div>

        {/* Orbit area */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: isMobile ? "100vw" : "900px",
            height: isMobile ? "400px" : "600px",
          }}
        >
          {/* Background circle with phone inside - overflow hidden clips the phone */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden flex items-end justify-center"
            style={{
              width: circleSize,
              height: circleSize,
              background:
                "radial-gradient(circle, #ffe3b3 0%, #fff7e5 40%, #ffffff 100%)",
            }}
          >
            {/* Phone mockup - inside the circle, emerging from bottom */}
            <motion.div
              className="relative z-10"
              animate={{
                y: imageTranslateY,
              }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <img
                src={phoneMockup}
                alt="Sky Mate Digital product showcase"
                className="drop-shadow-2xl"
                loading="lazy"
                style={{
                  width: isMobile ? 160 : 240,
                  height: "auto",
                }}
              />
            </motion.div>
          </div>

          {/* Labels around orbit */}
          {whyUsSteps.map((step, i) => {
            const isActive = i === activeStep;
            const posStyle = positions[i];
            return (
              <motion.div
                key={`label-${i}`}
                className="absolute z-20 max-w-[180px] md:max-w-[220px]"
                style={{
                  ...posStyle,
                }}
                animate={{
                  opacity: isActive ? 1 : activeStep === -1 ? 0.35 : 0.25,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3
                  className="text-sm md:text-base font-medium leading-snug transition-colors duration-500"
                  style={{
                    color: isActive
                      ? "hsl(220 26% 10%)"
                      : "hsl(220 9% 64%)",
                  }}
                >
                  {(() => {
                    const isRight = posStyle.textAlign === "right";
                    return (
                      <span className={`inline-flex items-start gap-2 ${isRight ? "flex-row-reverse" : ""}`}>
                        <span
                          className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                          style={{
                            background: isActive ? ACCENT : "hsl(220 9% 78%)",
                          }}
                        />
                        <span
                          style={{
                            textAlign: posStyle.textAlign,
                          }}
                        >
                          {step.title}{" "}
                          <span
                            className="font-bold"
                            style={{
                              color: isActive ? "hsl(220 26% 10%)" : "hsl(220 9% 64%)",
                            }}
                          >
                            {step.titleBold}
                          </span>
                        </span>
                      </span>
                    );
                  })()}
                </h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-xs md:text-sm leading-relaxed mt-1.5"
                      style={{
                        color: "hsl(220 9% 46%)",
                        textAlign: posStyle.textAlign,
                      }}
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhyUsScrollSection;