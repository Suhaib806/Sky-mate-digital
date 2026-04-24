import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-display font-bold text-brand mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
