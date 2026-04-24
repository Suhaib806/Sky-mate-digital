import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTASection from "@/components/sections/CTASection";
import { testimonials } from "@/data/testimonials";
import HomeResults from "@/components/sections/HomeResults";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import VideoTestimonials from "@/components/sections/Videotestimonail";
import portfolioBg from "@/assets/testimonial.jpg";

const Testimonials = () => {
  return (
    <>
    <section className="relative w-full h-[66vh] sm:h-[72vh] min-h-[430px] overflow-hidden">
    <div className="absolute inset-0">
          <img
            src={portfolioBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/50" />
        </div>

        <div className="relative z-10 h-full w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-10 sm:pb-14 flex items-end">
          <div className="max-w-[620px]">
            <h1 className="text-white font-display font-normal tracking-tight text-[42px] leading-[1.05] sm:text-[56px] sm:leading-[1.04] lg:text-[66px]">
              Hear it from
              <br />
              our clients
            </h1>
            <p className="mt-4 text-white/90 text-[15px] sm:text-[20px] leading-[1.45] max-w-[560px]">
              Real feedback from businesses worldwide—responsive teams, clear communication, and delivery you can trust.
            </p>
          </div>
        </div>
      </section>

<HomeResults/>

     <HomeTestimonials/>
     {/* <VideoTestimonials/> */}
      {/* Testimonials Grid */}
      {/* <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="More client stories"
            subtitle="A deeper look at reviews and outcomes—professionalism, speed, and solutions under one roof."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section> */}

      <CTASection />
    </>
  );
};

export default Testimonials;
