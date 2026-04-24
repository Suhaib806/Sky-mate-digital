import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceAutomationAI = () => {
  return <ServiceDetailPage service={serviceDetails["automation-ai"]} />;
};

export default ServiceAutomationAI;
