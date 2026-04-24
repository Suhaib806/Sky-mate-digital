import React, { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "Discovery call",       desc: "We learn your business, audience, and goals in a no-pressure 30-minute conversation. No decks, no jargon — just clarity." },
  { n: "02", title: "Scope & strategy",     desc: "We translate your vision into a practical plan — stack, timeline, milestones, and success metrics — before writing a line of code." },
  { n: "03", title: "Design & wireframes",  desc: "Prototypes before pixels. We validate UX flows and get your sign-off on structure before investing in high-fidelity design." },
  { n: "04", title: "Build & iterate",      desc: "Weekly sprints with live previews. You see progress every step of the way and shape the final product in real time." },
  { n: "05", title: "Launch & support",     desc: "We handle deployment, QA, and go-live — then stay on for monitoring, updates, and continuous improvement." },
];

const HomeDesignTabs = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const circumference = 2 * Math.PI * 120;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleClick = (i: number) => {
    clearInterval(timerRef.current);
    setActive(i);
  };

  const progress = (active + 1) / steps.length;
  const offset = circumference * (1 - progress);
  const angle = -90 + progress * 360;
  const rad = (angle * Math.PI) / 180;
  const dotX = 140 + 120 * Math.cos(rad) - 5;
  const dotY = 140 + 120 * Math.sin(rad) - 5;

  const n = steps.length;
  const nodeInset  = `${(0.5 / n) * 100}%`;
  const fillWidth  = `${(active / (n - 1)) * ((n - 1) / n) * 100}%`;

  return (
    <div className="border-t border-b bg-black border-white/10 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(235,159,28,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header row — stacks on mobile, side-by-side on lg */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0 mb-12 lg:mb-0">
        <div>
          <div className="text-[11px] tracking-[.22em] font-semibold text-[#2A62EB] mb-6 flex items-center gap-2">
            <span className="w-6 h-px bg-[#2A62EB]" /> HOW WE WORK
          </div>
          <h2 className="font-display text-white font-bold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.1] max-w-lg">
            A process built for<br />clarity and speed.
          </h2>
        </div>

        {/* Dial — smaller on mobile */}
        <div className="flex items-center justify-start lg:justify-center">
          <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px]">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-5 rounded-full border border-[#2A62EB]/15" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
              <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(235,159,28,0.08)" strokeWidth="1" />
              <circle
                cx="140" cy="140" r="120" fill="none"
                stroke="#2A62EB" strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 140 140)"
                style={{ transition: "stroke-dashoffset 0.6s ease" }}
              />
            </svg>
            <div className="absolute inset-10 rounded-full bg-[#1a1a1a] border border-white/10 flex flex-col items-center justify-center gap-1">
              <div className="font-display font-extrabold text-[36px] sm:text-[44px] lg:text-[48px] text-[#2A62EB] leading-none">{active + 1}</div>
              <div className="text-[9px] sm:text-[11px] text-white/35 tracking-widest">OF {steps.length} STEPS</div>
            </div>
            <div
              className="absolute w-2.5 h-2.5 rounded-full bg-[#2A62EB] shadow-[0_0_12px_#2A62EB]"
              style={{ left: dotX, top: dotY, transition: "all 0.6s ease" }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal steps */}
      <div className="lg:mt-14">

        {/* Track + nodes */}
        <div className="relative flex items-start">

          {/* Background track */}
          <div
            className="absolute top-[22px] sm:top-[27px] h-px bg-white/10"
            style={{ left: nodeInset, right: nodeInset }}
          />
          {/* Gold fill */}
          <div
            className="absolute top-[22px] sm:top-[27px] h-px bg-gradient-to-r from-[#2A62EB] to-[#2A62EB]/20 transition-all duration-500"
            style={{ left: nodeInset, width: fillWidth }}
          />

          {steps.map((s, i) => (
            <div
              key={s.n}
              onClick={() => handleClick(i)}
              className="flex-1 flex flex-col items-center cursor-pointer group/step"
            >
              {/* Node — smaller on mobile */}
              <div className={`w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] rounded-full border flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 ${i === active ? "border-[#2A62EB] bg-[#2A62EB]/10" : "border-white/10 bg-[#1a1a1a] group-hover/step:border-white/25"}`}>
                <span className={`font-display font-bold text-[11px] sm:text-[13px] transition-colors duration-300 ${i === active ? "text-[#2A62EB]" : "text-white/35"}`}>{s.n}</span>
              </div>

              {/* Title — hidden on xs, visible sm+ */}
              <div className={`mt-3 font-display font-bold text-center leading-tight px-1 transition-colors duration-300 hidden sm:block text-[12px] lg:text-[15px] ${i === active ? "text-white" : "text-white/35 group-hover/step:text-white/60"}`}>
                {s.title}
              </div>

              {/* Mobile: only show title for active step */}
              <div className={`mt-2 font-display font-bold text-[11px] text-center leading-tight px-1 transition-all duration-300 sm:hidden ${i === active ? "text-[#2A62EB] opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                {s.title}
              </div>
            </div>
          ))}
        </div>

        {/* Description card */}
        <div
          key={active}
          className="mt-8 sm:mt-10 rounded-xl border border-[#2A62EB]/20 bg-[#2A62EB]/5 px-5 sm:px-7 py-5 sm:py-6 text-white/50 text-[13px] leading-relaxed"
          style={{ animation: "fadeUp 0.35s ease both" }}
        >
          <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }`}</style>
          <span className="text-[#2A62EB] font-semibold font-display mr-2">
            {steps[active].n} — {steps[active].title}.
          </span>
          {steps[active].desc}
        </div>
      </div>
    </div>
  );
};

export default HomeDesignTabs;