import Reveal from "./Reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ label, title, subtitle, centered = true, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`${centered ? "text-center" : ""} mb-16 ${className}`}>
      {label && (
        <Reveal delay={0}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-accent text-accent-foreground border border-brand-subtle mb-4">
            {label}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
