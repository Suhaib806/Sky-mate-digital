import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import websiteDevelopment from "@/assets/web_development.jpg";
import appDevelopment from "@/assets/Mobile_app.jpg";
import digitalMarketing from "@/assets/marketing.jpg";
import automation from "@/assets/automation.jpg";
import maintenance from "@/assets/web_maintenance.jpg";
import seoContentWriting from "@/assets/seo.jpg";

type ServiceRow = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  image: string;
  detailPath: string;
};

const serviceRows: ServiceRow[] = [
  {
    title: "Website",
    subtitle: "Development",
    image: websiteDevelopment,
    tags: [
      "RESPONSIVE WEBSITES",
      "PERFORMANCE",
      "CMS & CUSTOM",
      "E-COMMERCE",
      "UI/UX",
      "INTEGRATIONS",
      "LAUNCH SUPPORT",
    ],
    description:
      "Sky Mate Digital crafts dynamic, user-friendly websites with modern technology to elevate your online presence and drive success.",
    detailPath: "/services/website-development",
  },
  {
    title: "App",
    subtitle: "Development",
    image: appDevelopment,
    tags: [
      "IOS & ANDROID",
      "CROSS-PLATFORM",
      "PRODUCT DESIGN",
      "APIs",
      "QA",
      "RELEASE",
      "ITERATION",
    ],
    description:
      "Transform your digital landscape with tailored app development—built for clarity, speed, and impactful results.",
    detailPath: "/services/app-development",
  },
  {
    title: "Digital",
    subtitle: "Marketing",
    image: digitalMarketing,
    tags: [
      "STRATEGY",
      "CAMPAIGNS",
      "SOCIAL",
      "CONTENT",
      "ANALYTICS",
      "CONVERSION",
      "GROWTH",
    ],
    description:
      "Enhance your online presence with creative digital marketing that helps your brand stand out in competitive markets.",
    detailPath: "/services/digital-marketing",
  },
  {
    title: "Automation",
    subtitle: "& AI",
    image: automation,
    tags: [
      "WORKFLOWS",
      "INTEGRATIONS",
      "MAKE & ZAPIER",
      "EMAIL & CRM",
      "AI FEATURES",
      "EFFICIENCY",
      "SUPPORT",
    ],
    description:
      "Automation uses advanced technology to perform tasks reliably—reducing manual effort and increasing productivity across your stack.",
    detailPath: "/services/automation-ai",
  },
  {
    title: "Website",
    subtitle: "Maintenance",
    image: maintenance,
    tags: [
      "UPDATES",
      "SECURITY",
      "BACKUPS",
      "OPTIMIZATION",
      "MONITORING",
      "BUG FIXES",
      "UPTIME",
    ],
    description:
      "Keep operations smooth with maintenance—updates, optimization, and security checks so your site stays trustworthy worldwide.",
    detailPath: "/services/website-maintenance",
  },
  {
    title: "SEO &",
    subtitle: "Content Writing",
    image: seoContentWriting,
    tags: [
      "ON-PAGE SEO",
      "TECHNICAL SEO",
      "KEYWORDS",
      "BLOGS",
      "COPY",
      "AUTHORITY",
      "REPORTING",
    ],
    description:
      "Improve visibility with advanced SEO and clear content—so the right audience finds you and understands your value fast.",
    detailPath: "/services/seo-content-writing",
  },
];

const HomeServices = () => {
  return (
    <section
      className="text-[#0b0b0b] py-14 lg:py-20 md:mt-12"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "900px",
      }}
    >
      <div className="w-full px-5 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3 mb-4">
              <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-sm" />
              WHAT WE OFFER
            </div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold max-w-2xl text-[#0a0a0a]">
              Where strategy meets{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
                digital.
              </span>
            </h2>
          </div>

          <p className="text-sm font-bold sm:text-[24px] leading-[30px] text-[#000000] max-w-xl">
            Deliver worldwide web, apps, marketing, automation, maintenance, and SEO under one roof.
          </p>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-[#e4e4e4] bg-white">
          {serviceRows.map((row, idx) => (
            <div
              key={`${row.title}-${row.subtitle}`}
              className={idx === 0 ? "" : "border-t border-[#e4e4e4]"}
            >
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 p-5 md:p-7 items-start">

                {/* ── Image column ── */}
                <div className="md:col-span-4">
                  {/*
                    Fixed h-[200px] on the wrapper means the browser
                    reserves exactly this space before the image loads,
                    so there is zero layout shift / scroll jerk.
                  */}
                  <div className="relative h-[200px] rounded-xl overflow-hidden bg-[#f4f4f4] border border-[#e5e5e5]">
                    <img
                      src={row.image}
                      alt={`${row.title} ${row.subtitle}`}
                      /*
                        width + height tell the browser the intrinsic
                        size so it can compute aspect-ratio before decode.
                        Adjust to match your actual asset dimensions.
                      */
                      width={400}
                      height={200}
                      /*
                        loading="lazy"  → only fetched when near viewport
                        decoding="async" → decode off the main thread,
                                           no jank during scroll
                      */
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* ── Title column ── */}
                <div className="md:col-span-3">
                  <div className="text-[35px] sm:text-[26px] lg:text-[38px] font-display font-bold leading-[1.05]">
                    {row.title}
                    <br />
                    {row.subtitle}
                  </div>
                </div>

                {/* ── Description + tags column ── */}
                <div className="md:col-span-5">
                  <div className="text-sm sm:text-[14px] leading-[20px] text-[#555]">
                    {row.description}
                  </div>
                  
                  <div className="relative mt-4 overflow-hidden">
                    <div className="flex flex-nowrap gap-2 py-2 w-max animate-tag-marquee">
                      {[...row.tags, ...row.tags].map((t, i) => (
                        <span
                          key={`${t}-${i}`}
                          className="inline-flex items-center rounded-full border border-[#e0e0e0] px-3 py-1 text-[10px] sm:text-[11px] text-[#555] tracking-[0.08em] whitespace-nowrap"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={row.detailPath}
                      className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/95 text-[#2A62EB] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] border border-[#2A62EB] transition-colors duration-200 hover:bg-white"
                    >
                      <span className="button-children inline-flex items-center gap-2">View Service Details</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden">
            <div className="relative">
              <div>
                <Link
                  to="/services"
                  className="animate-bottom-top inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 hover:bg-[#2A62EB] hover:text-white text-[#2A62EB] font-normal text-[16px] leading-[24px] border border-[#2A62EB] transition-colors duration-200"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    View All Services
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

export default HomeServices;