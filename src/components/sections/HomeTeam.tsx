import teamImg from "@/assets/team/1.jpeg";

import teamImg2 from "@/assets/team/2.jpeg";
import teamImg3 from "@/assets/team/3.jpeg";
import teamImg4 from "@/assets/team/4.jpeg";
import teamImg5 from "@/assets/team/5.jpeg"; 
import teamImg6 from "@/assets/team/6.png"; 



import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const team = [
  { name: "Nouman Sheikh", role: "CEO & Founder", image: teamImg },
  { name: "Haseeb Ahmed ", role: "Website developer", image: teamImg2 },
  { name: "Hasnain Ahmed", role: "Business Manager", image: teamImg3 },
  { name: "Fiza Naeem", role: "Copy Write Specialist", image: teamImg4 },
  { name: "Shaheera Shahid", role: "Business Executive", image: teamImg5 },
  { name: "Hussain", role: "Graphic Designer", image: teamImg6 },

];

const HomeTeam = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className=" py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3 mb-4">
              <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
              OUR TEAM
            </div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a]">
              Meet the creators
              <br />
              behind{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
                Sky Mate Digital
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[14px] sm:text-[15px] leading-relaxed text-[#3b2a0f]">
            Discover the Sky Mate Digital journey—fueled by passion and creativity, devoted to impactful online solutions.
            Customer satisfaction is our foremost priority.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 mb-4">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            className="h-9 w-9 rounded-full border border-[#dedede] bg-white flex items-center justify-center text-[#555] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous team members"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            className="h-9 w-9 rounded-full border border-[#dedede] bg-white flex items-center justify-center text-[#555] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next team members"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex-[0_0_auto] w-[160px] sm:w-[190px] lg:w-[230px] flex flex-col items-center gap-2"
              >
                <div className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] lg:h-[190px] lg:w-[190px] rounded-full bg-[#3B82F6] flex items-center justify-center overflow-hidden border border-black/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <div className="text-[14px] font-semibold text-[#141414]">{member.name}</div>
                  <div className="text-[12px] text-[#5b4319] mt-0.5">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;

