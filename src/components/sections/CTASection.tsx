import Reveal from "../ui/Reveal";
import AnimatedButton from "../ui/AnimatedButton";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover object-center" />
        {/* Dark overlay — heavier on left so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/75" />
        {/* Subtle amber warmth layer */}
        <div className="absolute inset-0 bg-[#2A62EB]/8 mix-blend-multiply" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A62EB]/50 to-transparent" />
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A62EB]/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full  px-4 sm:px-6 md:px-12 lg:px-20">

        {/* Label */}
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="inline-flex h-[10px] w-[10px] rounded-full bg-[#2A62EB]" />
            <span className="text-xs tracking-[0.2em] font-medium text-white/60">
              Sky Mate Digital ADVANTAGE
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.05}>
          <h2 className="font-display font-bold text-center text-white leading-[1.08] text-[38px] sm:text-[52px] lg:text-[68px] mb-6">
            Pioneering digital excellence:
            <br />
            discover the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg,#ffffff 0%,#2A62EB 22%,#ffffff 45%,#2A62EB 68%,#ffffff 100%)",
              }}
            >
              Sky Mate Digital
            </span>{" "}
            advantage.
          </h2>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.1}>
          <p className="mx-auto mb-10 max-w-[500px] text-center text-white/70 text-[16px] sm:text-[18px] leading-[1.6]">
            Elevate your online presence with innovative solutions and strategic digital services—innovate, integrate,
            and grow with a team that puts your outcomes first.
          </p>
        </Reveal>

        {/* CTA row */}
        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
                  to="/contact-us"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    Discover more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
            <Link
                  to="/portfolio"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/95 text-[#2A62EB] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] border border-[#2A62EB] transition-colors duration-200 hover:bg-white"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    View portfolio
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
          </div>
        </Reveal>

        {/* Divider + trust line */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-white/10" />
            <p className="shrink-0 text-xs text-white/40 tracking-wide">
              Trusted by teams in 15+ countries
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default CTASection;