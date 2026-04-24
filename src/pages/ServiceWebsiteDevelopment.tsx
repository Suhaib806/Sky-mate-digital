import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceWebsiteDevelopment = () => {
  return <ServiceDetailPage service={serviceDetails["website-development"]} />;
};

export default ServiceWebsiteDevelopment;
