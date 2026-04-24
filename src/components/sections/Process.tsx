import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { Search, Compass, Paintbrush, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Deep-dive into your business, users, and goals." },
  { icon: Compass, title: "Strategy", desc: "Map the roadmap, tech stack, and milestones." },
  { icon: Paintbrush, title: "Design", desc: "Craft pixel-perfect interfaces and experiences." },
  { icon: Code2, title: "Development", desc: "Build with clean, scalable, tested code." },
  { icon: Rocket, title: "Launch", desc: "Deploy with confidence and monitoring." },
  { icon: Headphones, title: "Support", desc: "Ongoing optimization and dedicated care." },
];

const Process = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="From Vision to Reality"
          subtitle="A proven methodology that turns complex challenges into elegant, reliable solutions."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-accent border border-brand-subtle flex items-center justify-center mb-4 group-hover:bg-gradient-brand transition-all duration-300">
                <step.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-brand text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
