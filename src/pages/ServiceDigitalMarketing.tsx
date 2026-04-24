import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceDigitalMarketing = () => {
  return <ServiceDetailPage service={serviceDetails["digital-marketing"]} />;
};

export default ServiceDigitalMarketing;
