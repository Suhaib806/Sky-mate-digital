const stats = [
  {
    value: "500+",
    subtitle: "Projects delivered",
    description: "From landing pages to complex integrations—shipping work clients can rely on.",
  },
  {
    value: "15+",
    subtitle: "Regions served",
    description: "Trusted by teams across countries—with collaboration that works across time zones.",
  },
  {
    value: "4.7+",
    subtitle: "Client ratings",
    description: "Feedback that reflects our focus on quality, communication, and outcomes.",
  },
  {
    value: "Top",
    subtitle: "Rated delivery",
    description: "Consistent quality across web, apps, automation, SEO, and ongoing support.",
  },
];

const HomeResults = () => {
  return (
    <section
      className="w-full px-5 md:px-12 lg:px-20 py-16 md:py-20 bg-[#6892ff41]"
      // style={{
      //   background: "linear-gradient(180deg, #fff4df 0%, #fffaf2 45%, #ffffff 100%)",
      // }}
    >
      <div className="w-full">
        <div className="flex justify-center mb-4">
          <div className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c] flex items-center gap-3">
            <span className="inline-flex h-[10px] w-[10px] bg-[#2A62EB] rounded-full" />
            RESULTS
          </div>
        </div>

        <h2 className="text-center text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold tracking-tight text-[#0a0a0a] mb-10 md:mb-12">
          Pioneering digital{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#2A62EB_22%,#0a0a0a_45%,#2A62EB_68%,#0a0a0a_100%)]">
            excellence
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 items-stretch">
          {stats.map((item) => (
            <article
              key={item.value}
              className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-[0_12px_30px_rgba(59,130,246,0.12)] border border-[#dbeafe] p-7 md:p-8 min-h-[240px] flex flex-col justify-start h-full"
            >
              <div className="text-[68px] leading-[0.95] font-normal tracking-[-0.03em] text-[#1f1a12]">
                {item.value}
              </div>
              <div className="mt-2 text-[13px] md:text-[14px] text-[#3B82F6]">{item.subtitle}</div>
              <p className="mt-9 text-[14px] leading-[1.45] text-[#746454] max-w-[230px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeResults;
