import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceAppDevelopment = () => {
  return <ServiceDetailPage service={serviceDetails["app-development"]} />;
};

export default ServiceAppDevelopment;
