import { Eye, Target, Heart, Lightbulb, Users, Award } from "lucide-react";
import HomeResults from "@/components/sections/HomeResults";
import HomeTeam from "@/components/sections/HomeTeam";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay at the cutting edge, bringing fresh solutions to complex problems.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent communication and honest timelines, always.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Your team and ours work as one, with shared goals and open dialogue.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standard in every line of code we write.",
  },
];

const timeline = [
  { year: "2018", title: "Founded", desc: "Started with a team of 3 passionate engineers." },
  { year: "2019", title: "First Enterprise Client", desc: "Delivered a healthcare platform serving 100K+ users." },
  { year: "2020", title: "Expanded Services", desc: "Added AI/ML and SaaS development capabilities." },
  { year: "2021", title: "Global Reach", desc: "Clients across North America, Europe, and Asia." },
  { year: "2023", title: "50+ Team Members", desc: "Grew to a multidisciplinary team of engineers, designers, and strategists." },
  { year: "2025", title: "Industry Recognition", desc: "Named among top software agencies for innovation and delivery." },
];

const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", dark: true },
      { name: "Vue", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "jQuery", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", dark: true },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    title: "CMS & eCommerce",
    items: [
      { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "Shopify", src: "https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/shopify.svg" },
    ],
  },
  {
    title: "Automation",
    items: [
      { name: "Make.com", src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/make.svg", dark: true },
      { name: "n8n", src: "/n8n-icon.webp", dark: true },
      { name: "Zapier", src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg", dark: true },
      { name: "GHL", src: "/ghl-logo.png", dark: false },
    ],
  },
];

const About = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full h-[66vh] sm:h-[72vh] min-h-[430px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/50" />
        </div>

        <div className="relative z-10 h-full w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-10 sm:pb-14 flex items-end">
          <div className="max-w-[620px]">
            <h1 className="text-white font-display font-normal tracking-tight text-[42px] leading-[1.05] sm:text-[56px] sm:leading-[1.04] lg:text-[66px]">
              Innovate, integrate,
              <br />
              elevate
            </h1>
            <p className="mt-4 text-white/90 text-[15px] sm:text-[20px] leading-[1.45] max-w-[560px]">
              A Pakistan-based software partner for companies worldwide—strategy-led delivery, transparent
              communication, and solutions built to scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3 mb-4">
                <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
                OUR STORY
              </div>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a] mb-5">
                From Startup to{" "}
                <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
                  Strategic Partner
                </span>
              </h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Founded with a passion for technology, Sky mate digital has a history of delivering excellence—evolving,
                adapting, and aiming to exceed expectations. Ensuring customer satisfaction is our foremost priority.
              </p>
              <p className="text-[#666] leading-relaxed">
                Today we help global clients with websites, apps, digital marketing, automation &amp; AI, maintenance,
                and SEO—one accountable team, end to end.
              </p>
            </div>

            <div className="rounded-3xl p-5 sm:p-7 border border-[#2A62EB ]  bg-[#2A62EB]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#ececec] bg-white p-5">
                  <Eye className="w-6 h-6 text-[#2A62EB] mb-3" />
                  <h3 className="font-display font-semibold text-[#0a0a0a] mb-1">Vision</h3>
                  <p className="text-sm text-[#666]">
                    Elevate your digital presence with Sky mate digital expertise—we aspire to lead in transformative
                    technology solutions and help industries move forward with confidence.
                  </p>
                </div>
                <div className="rounded-xl border border-[#ececec] bg-white p-5">
                  <Target className="w-6 h-6 text-[#2A62EB] mb-3" />
                  <h3 className="font-display font-semibold text-[#0a0a0a] mb-1">Mission</h3>
                  <p className="text-sm text-[#666]">
                    Unleash your potential in the digital realm—empowering businesses through innovative IT solutions
                    and cutting-edge technology for client success and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16 sm:py-20 bg-[#f8f8f8]">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3 mb-4">
            <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
            CORE VALUES
          </div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a] mb-10">
            What{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
              Drives Us
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {values.map((v, idx) => {
              const isFeatured = idx === 2;
              return (
                <div
                  key={v.title}
                  className={`rounded-xl border p-5 sm:p-6 min-h-[220px] sm:min-h-[230px] flex flex-col ${isFeatured
                      ? "bg-[#2A62EB] border-[#2A62EB] text-white"
                      : "bg-[#efeeed] border-[#e6e3df] text-[#141414]"
                    }`}
                >
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center ${isFeatured ? "bg-white/95 text-[#111]" : "bg-white text-[#111]"
                      }`}
                  >
                    <v.icon className="w-4 h-4" />
                  </div>

                  <div className="mt-auto pt-10">
                    <h3 className={`font-display font-semibold mb-2 ${isFeatured ? "text-white" : "text-[#111]"}`}>
                      {v.title}
                    </h3>
                    <p className={`text-[15px] leading-[1.45] ${isFeatured ? "text-white/90" : "text-[#3d3d3d]"}`}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: heading */}
            <div>
              <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3 mb-4">
                <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
                TECHNOLOGIES
              </div>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a] mb-5">
                Technologies we{" "}
                <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
                  work with
                </span>
              </h2>
              <p className="text-[#666] leading-relaxed max-w-[560px]">
                We build with modern, proven tools—choosing the right stack for your product, timeline, and long-term
                growth.
              </p>
            </div>

            {/* Right: logo cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-[#efe3cb] bg-[#2a62eb4a] p-5 sm:p-6"
                >
                  <h3 className="font-display font-semibold text-[#0a0a0a] mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center gap-1.5 group/logo">
                        <div className="w-10 h-10 rounded-lg border border-[#e6e0d6] bg-white flex items-center justify-center p-1.5 transition-transform duration-150 group-hover/logo:-translate-y-0.5">
                          <img
                            src={tech.src}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className={`w-6 h-6 object-contain${tech.dark ? " dark:invert" : ""}`}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-[#666]">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3 mb-4">
            <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
            OUR JOURNEY
          </div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a] mb-10">
            Growing with{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
              Purpose
            </span>
          </h2>

          {/* Horizontal timeline — large screens */}
          <div className="hidden lg:block">
            <div className="flex items-center mb-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex items-center flex-1 last:flex-none">
                  <div className="w-11 h-11 rounded-full bg-[#2A62EB] text-[#fff] text-xs font-bold flex items-center justify-center shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="h-px flex-1 bg-[#e6e6e6] mx-1" />}
                </div>
              ))}
            </div>
            <div className="flex">
              {timeline.map((item) => (
                <div key={item.year} className="flex-1 pr-6 last:pr-0">
                  <h3 className="font-display font-semibold text-[#0a0a0a] mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical timeline — mobile & tablet */}
          <div className="lg:hidden max-w-4xl">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-4 sm:gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-[#2A62EB] text-[#111] text-xs font-bold flex items-center justify-center shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px h-full bg-[#e6e6e6] mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-display font-semibold text-[#0a0a0a] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeResults />
      <HomeTeam />
      <CTASection />
    </>
  );
};

export default About;