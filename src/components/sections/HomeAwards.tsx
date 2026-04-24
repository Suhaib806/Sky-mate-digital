import awardImg from "@/assets/awards/pasha-logo.png";
import awardImg2 from "@/assets/awards/images.png";
import awardImg3 from "@/assets/awards/secp.png";
import awardImg4 from "@/assets/awards/tech1.png";
import awardImg5 from "@/assets/awards/tech2.png";
import awardImg8 from "@/assets/awards/fiverr.png";
import awardImg9 from "@/assets/awards/Upwork.png";

const badges = [
  {
    label: "THE WEBBY AWARDS",
    size: "w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] md:w-[138px] md:h-[138px]",
  },
  {
    label: "CREATIVE EXCELLENCE",
    size: "w-[104px] h-[104px] sm:w-[116px] sm:h-[116px] md:w-[156px] md:h-[156px]",
  },
  {
    label: "UX DESIGN AWARDS",
    size: "w-[100px] h-[100px] sm:w-[112px] sm:h-[112px] md:w-[148px] md:h-[148px]",
  },
  {
    label: "AWWWARDS",
    size: "w-[98px] h-[98px] sm:w-[110px] sm:h-[110px] md:w-[142px] md:h-[142px]",
  },
  {
    label: "UK DIGITAL GROWTH",
    size: "w-[104px] h-[104px] sm:w-[116px] sm:h-[116px] md:w-[154px] md:h-[154px]",
  },
  {
    label: "SPECIAL DESIGN AWARDED",
    size: "w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px]",
  },
  {
    label: "EG",
    size: "w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px]",
  },
];

const awardFolderImages = Object.values(
  import.meta.glob("@/assets/awards/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  })
) as string[];

const HomeAwards = () => {
  const images = awardFolderImages.length ? awardFolderImages : [awardImg];

  return (
    <section className="w-full  text-black px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="w-full">
        <div className="flex justify-between items-start mb-3">
          <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3">
            <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
            AWARDS
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-8 mb-12">
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold tracking-tight text-[#0a0a0a]">
            <span className="text-[#0a0a0a]">Awards & </span>
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
               Certifications
            </span>
          </h2>
          <p className="text-black text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] max-w-[520px] md:justify-self-end">
            Smart designs, sharp results—choose Sky Mate Digital for digital excellence. Recognition reflects our commitment to
            quality across web, apps, and growth-focused delivery.
          </p>
        </div>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-10 place-items-center">
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              className={`${badge.size} p-2 rounded-full overflow-hidden shadow-[0_12px_26px_rgba(0,0,0,0.24)]`}
            >
              <img
                src={images[index % images.length]}
                alt={badge.label}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
