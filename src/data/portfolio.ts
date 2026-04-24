import heroBg from "@/assets/Case Studies/7o5_contracting.png";
import servicesWebp from "@/assets/Case Studies/Bidm8.png";
import srvicImg from "@/assets/Case Studies/Claymar_electric.png";
import phoneMockup from "@/assets/Case Studies/Gravel_ridge.png";
import teamImg from "@/assets/Case Studies/Masons_Exterior.png";
import awardImg from "@/assets/Case Studies/Masons_exterior_builtreach.png";
import bidm8Img from "@/assets/Case Studies/bidm8_supplier.png";
import buildersImg from "@/assets/Case Studies/builders_game_podcast.png";
import homestandImg from "@/assets/Case Studies/homestand.png";
import trotterImg from "@/assets/Case Studies/trotter_generalcon_tracting.png";
import troyImg from "@/assets/Case Studies/troy_cluthe_sales.png";

export type PortfolioItem = {
  id: string;
  image: string;
  alt: string;
};

/** Images cycle through real project-style assets; swap URLs when you have final shots. */
export const portfolioImages: PortfolioItem[] = [
  { id: "1", image: heroBg, alt: "Web platform UI concept" },
  { id: "2", image: srvicImg, alt: "Mobile product screens" },
  { id: "3", image: servicesWebp, alt: "Analytics dashboard" },
  { id: "4", image: phoneMockup, alt: "App interface" },
  { id: "5", image: teamImg, alt: "Brand and web design" },
  { id: "6", image: awardImg, alt: "Product showcase" },
  { id: "7", image: bidm8Img, alt: "Admin dashboard" },
  { id: "8", image: buildersImg, alt: "Marketing site" },
  { id: "9", image: homestandImg, alt: "Mobile experience" },
  { id: "10", image: trotterImg, alt: "SaaS dashboard" },
  { id: "11", image: troyImg, alt: "troy Image" },
];
