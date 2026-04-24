import { ArrowUpRight } from "lucide-react";
import { portfolioImages } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// All 11 images destructured
const [a, b, c, d, e, f, g, h, i, j, k] = portfolioImages;

// Live site URLs for all 11 images — update as needed
const siteLinks = {
  a: "https://705contracting.ca/",
  b: "https://claymarelectric.ca/",
  c: "https://bidm8.com/",
  d: "https://gravelridge.ca/",
  e: "https://masonsexteriorservices.ca/",       // Masons_Exterior
  f: "https://your-site-f.com",       // Masons_exterior_builtreach
  g: "https://bidm8.com/",            // bidm8_supplier
  h: "https://your-site-h.com",       // builders_game_podcast
  i: "https://homestand.pro/",
  j: "https://trottergeneralcontracting.com/",
  k: "https://troycluthesales.com/",       // troy_cluthe_sales
};

const CardShell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1a1412] border border-[#e8e8e8] shadow-sm",
      className
    )}
  >
    {children}
  </div>
);

const CaseStudyCta = ({ href }: { href?: string }) => (
  <a
    href={href || "#"}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(ev) => ev.stopPropagation()}
    className="inline-flex items-center gap-2 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-semibold text-[#0a0a0a] shadow-lg hover:bg-[#f5f5f5] transition-colors"
  >
    View live site
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
    </span>
  </a>
);

const ImageCard = ({
  item,
  className = "",
  href,
}: {
  item: (typeof portfolioImages)[number];
  className?: string;
  href?: string;
}) => (
  <CardShell className={className}>
    <div className="absolute inset-0 bg-[#1a0f0a]" aria-hidden />
    <img
      src={item.image}
      alt={item.alt}
      className="relative z-[1] h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.04]"
    />
    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="absolute inset-0 z-[3] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
      <CaseStudyCta href={href} />
    </div>
  </CardShell>
);

const PortfolioProjects = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-[1] w-full px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full mx-auto">
          <header className="text-center pt-2 sm:pt-4 pb-12 sm:pb-14 lg:pb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a]/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#0a0a0a] border border-[#e8e8e8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2A62EB]" />
              Our Projects
            </div>
            <h2 className="mt-6 font-display text-[34px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.08] text-[#0a0a0a] max-w-[720px] mx-auto">
              Innovation and creativity in action
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#666] max-w-[560px] mx-auto leading-relaxed">
              A curated look at interfaces, platforms, and outcomes we&apos;ve delivered—built for clarity, performance,
              and measurable growth.
            </p>
          </header>

          {/*
            Layout — all 11 images:
            Left  (3): a · b · c
            Center(4): d (tall) · e+f (2-col grid) · g
            Right (4): h · i · j · k
          */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5">

            {/* Left column — 3 images */}
            <div className="flex flex-col gap-4 sm:gap-5 order-2 lg:order-1">
              <ImageCard item={a} className="h-[200px] sm:h-[240px] lg:h-[230px]" href={siteLinks.a} />
              <ImageCard item={b} className="h-[200px] sm:h-[240px] lg:h-[230px]" href={siteLinks.b} />
              <ImageCard item={c} className="h-[200px] sm:h-[240px] lg:h-[230px]" href={siteLinks.c} />
            </div>

            {/* Center column — 4 images */}
            <div className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
              {/* d — tall hero card */}
              <ImageCard item={d} className="min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]" href={siteLinks.d} />

              {/* e + f — side by side */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <ImageCard item={e} className="h-[150px] sm:h-[170px]" href={siteLinks.e} />
                <ImageCard item={f} className="h-[150px] sm:h-[170px]" href={siteLinks.f} />
              </div>

              {/* g */}
              <ImageCard item={g} className="h-[190px] sm:h-[220px] lg:h-[200px]" href={siteLinks.g} />
            </div>

            {/* Right column — 4 images */}
            <div className="flex flex-col gap-4 sm:gap-5 order-3">
              <ImageCard item={h} className="h-[170px] sm:h-[200px] lg:h-[185px]" href={siteLinks.h} />
              <ImageCard item={i} className="h-[170px] sm:h-[200px] lg:h-[185px]" href={siteLinks.i} />
              <ImageCard item={j} className="h-[170px] sm:h-[200px] lg:h-[185px]" href={siteLinks.j} />
              <ImageCard item={k} className="h-[170px] sm:h-[200px] lg:h-[185px]" href={siteLinks.k} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;