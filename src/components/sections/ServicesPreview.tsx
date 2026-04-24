import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { services } from "@/data/services";

const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeading
          label="What we offer"
          title="Where strategy meets digital"
          subtitle="Your success story begins with Sky Mate Digital—websites, apps, marketing, automation, maintenance, and SEO for a worldwide audience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.shortDesc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
