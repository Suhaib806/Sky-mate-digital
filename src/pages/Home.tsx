import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import HomeServices from "@/components/sections/HomeServices";
import HomeDesignTabs from "@/components/sections/HomeDesignTabs"; 
import HomeResults from "@/components/sections/HomeResults";
import HomeAwards from "@/components/sections/HomeAwards";
import HomeTeam from "@/components/sections/HomeTeam";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";

import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";

import CTASection from "@/components/sections/CTASection";
import WhyUsScrollSection from "@/components/sections/WhyUsScrollSection";
import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import Videotestimonail from "@/components/sections/Videotestimonail";
import TestimonialsGrid from "@/components/sections/testimonialsgrid";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[#f2f6ff]">
      <Hero />
      {/* <TrustedBy /> */}
      <HomeServices />
      <HomeDesignTabs />
      <WhyChooseUs/>
      {/* <WhyUsScrollSection /> */}
      {/* <CaseStudiesHero />  */}
      <HomeResults />
      <HomeAwards />
      <HomeTeam />
      {/* <Videotestimonail /> */}
      {/* <TestimonialsGrid /> */}
      <HomeTestimonials />
      <HomeGetInTouch /> 
      
      
      
      {/* 
      <WhyChooseUs />
      <Process />
      <Stats />
      <TestimonialsPreview />
      <CTASection /> */}
    </div>
  );
};

export default Home;
