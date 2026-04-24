import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6 group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all duration-300">
        <Icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-display font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-brand rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
