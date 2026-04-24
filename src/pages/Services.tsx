import HomeServices from "@/components/sections/HomeServices";
import portfolioBg from "@/assets/service.jpg";
const Services = () => {
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
          <div className="">  
            <h1 className="text-white font-display font-normal tracking-tight text-[42px] leading-[1.05] sm:text-[56px] sm:leading-[1.04] lg:text-[66px]">
              Where strategy meets
              <br />
              digital
            </h1>
            <p className="mt-4 text-white/90 text-[15px] sm:text-[20px] leading-[1.45] max-w-[560px]">
              Website development, apps, marketing, automation &amp; AI, maintenance, and SEO—everything you need to grow
              online, delivered with clarity and care.
            </p>
          </div>
        </div>
      </section>
        
 <HomeServices />
    </>
  );
};

export default Services;
