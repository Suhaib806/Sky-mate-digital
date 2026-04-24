import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceWebsiteMaintenance = () => {
  return <ServiceDetailPage service={serviceDetails["website-maintenance"]} />;
};

export default ServiceWebsiteMaintenance;
