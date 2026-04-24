import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden h-auto md:h-[80vh]">
      <div className="absolute inset-0">
        {/* Blurred video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-md scale-[1.08]"
        >
          <source src="/Video2.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-4 sm:pb-8 md:pt-24">
        <div className="grid lg:grid-cols-12 items-stretch gap-6 sm:gap-8 lg:gap-10 h-full">
          {/* Left: heading + small steps */}
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* Top spacing for the main heading */}
            <div className="mt-8 sm:mt-10 md:mt-16">
              <Reveal>
                {/* Subheading (comes before the main heading) */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-white/80 font-display font-normal text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[27px]">
                  {/* Red marker icon */}
                  <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-[6px] bg-[#2A62EB]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.2 9.8L9.8 2.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M7 2.2H9.8V5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Welcome to Sky Mate Digital</span>
                </div>
                <h1 className="text-white font-display font-normal tracking-tight text-[42px] leading-[1.08] sm:text-[56px] sm:leading-[1.08] md:text-[78px] md:leading-[1.12] lg:text-[100px] lg:leading-[120px]">
                  Your Path to
                  <br />
                  Digital Excellence
                </h1>
              </Reveal>
            </div>

            {/* Bottom-left steps (no absolute positioning) */}
            <div className="mt-6 sm:mt-8 md:mt-auto">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-10 md:gap-14 text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] text-white/70 font-normal">
                <span className="flex items-center gap-2">
                  <span className="text-white/80">+</span>
                  Innovate
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-white/80">+</span>
                  Integrate
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-white/80">+</span>
                  Elevate
                </span>
              </div>
            </div>
          </div>

          {/* Right: description + CTA buttons */}
          <div className="lg:col-span-5 flex flex-col h-full">
            {/* Keep description + buttons as one bottom-aligned block */}
            <div className="mt-6 sm:mt-8 lg:mt-auto flex flex-col">
              <Reveal delay={0.1}>
                <div className="text-white/85 font-normal text-[20px] leading-[1.35] sm:text-[24px] sm:leading-[1.35] md:text-[26px] md:leading-[1.4]">
                  <div>
                    It takes a strategic, innovative approach. We give you the tools, insights, and support to navigate
                    digital complexity and excel within it.
                  </div>
                </div>
              </Reveal>

              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 pb-1">
                <Link
                  to="/contact-us"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/95 text-[#2A62EB] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] border border-[#2A62EB] transition-colors duration-200 hover:bg-white"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
