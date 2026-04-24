import appDevelopment from "@/assets/Mobile_app.jpg";
import automation from "@/assets/automation.jpg";
import digitalMarketing from "@/assets/marketing.jpg";
import makeLogo from "@/assets/make.png";
import seoContentWriting from "@/assets/seo.jpg";
import websiteDevelopment from "@/assets/web_development.jpg";
import maintenance from "@/assets/web_maintenance.jpg";
import zapierLogo from "@/assets/Zapier.png";

export type ServiceSlug =
  | "website-development"
  | "app-development"
  | "digital-marketing"
  | "automation-ai"
  | "website-maintenance"
  | "seo-content-writing";

export type ServiceExtraSection = {
  title: string;
  intro?: string;
  cards?: Array<{ title: string; description: string }>;
  points?: string[];
  paragraphs?: string[];
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  heroSubtitle: string;
  heroIntro: string;
  descriptions: string[];
  comprehensiveItems: string[];
  features: string[];
  advantageTitle: string;
  advantageDescription: string;
  heroImage: string;
  extraSections?: ServiceExtraSection[];
  faqs?: ServiceFAQ[];
  toolHighlights?: Array<{ name: string; logoUrl: string; description: string }>;
};

export const howItWorks = {
  badge: "HOW IT WORKS",
  title: "Unlock Astonishing Results with Just 3 Simple Steps!",
  subtitle: "A focused process that keeps your project moving with clarity.",
  steps: [
    {
      title: "Free Consultations",
      description: "We offer free consultations to tailor digital solutions that fit your unique needs and goals.",
      cta: "Chat Now",
    },
    {
      title: "Discover the Product",
      description: "Transforms your vision into reality with innovative solutions and exceptional results.",
      cta: "Learn more",
    },
    {
      title: "Wireframe & Production",
      description: "Turning concepts into reality with precise planning and expert execution.",
      cta: "Learn more",
    },
    {
      title: "Prototype Application",
      description: "Bringing your ideas to life with interactive models that refine and validate your vision.",
      cta: "Learn more",
    },
  ],
};

export const serviceOrder: Array<{ slug: ServiceSlug; label: string }> = [
  { slug: "website-development", label: "Website Development" },
  { slug: "app-development", label: "App Development" },
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "automation-ai", label: "Automation & AI" },
  { slug: "website-maintenance", label: "Website Maintenance" },
  { slug: "seo-content-writing", label: "SEO & Content Writing" },
];

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    heroSubtitle: "Designing websites that captivate users and provide a seamless, enjoyable browsing experience.",
    heroIntro:
      "In today's digital age, a well-crafted website is crucial for making a lasting impression. From captivating designs to seamless functionality, website development is about more than just creating an online presence. It's about building an engaging and intuitive user experience.",
    descriptions: [
      "Our website development services provide comprehensive solutions from design to launch, ensuring your site is both visually appealing and highly functional. We create responsive, user-friendly websites that adapt seamlessly across devices, focusing on intuitive navigation and engaging content.",
      "With a strong emphasis on SEO, our sites help you rank higher in search results and attract more organic traffic. We also offer robust e-commerce solutions, ongoing maintenance, and support to keep your website secure and up-to-date. Designed for scalability, our websites grow with your business needs.",
    ],
    comprehensiveItems: [
      "Comprehensive Website Development",
      "Custom Web Design and Development",
      "Responsive and Adaptive Design",
      "User-Centric Development",
      "SEO-Friendly Websites",
      "E-Commerce Solutions",
      "Maintenance and Support",
      "Integration and Scalability",
    ],
    features: [
      "Custom Design",
      "User-Friendly Navigation",
      "E-Commerce Integration",
      "Performance Optimization",
      "Analytics and Tracking",
    ],
    advantageTitle: "Pioneering Digital Excellence: Discover the Sky mate digital Advantage.",
    advantageDescription:
      "Leading in Digital Excellence: Experience the Sky mate digital Advantage. Discover how our innovative solutions and expertise can elevate your digital success.",
    heroImage: websiteDevelopment,
  },
  "app-development": {
    slug: "app-development",
    title: "App Development",
    heroSubtitle: "Innovative app solutions designed to elevate your brand and engage users.",
    heroIntro:
      "Our app development approach combines cutting-edge technology with thoughtful design to create applications that resonate with users. By focusing on user experience and scalability, we ensure your app not only meets your current needs but also adapts to future growth and trends.",
    descriptions: [
      "App development involves creating functional and engaging mobile applications tailored to meet your specific needs. Our process combines cutting-edge technology with intuitive design to ensure a seamless user experience.",
      "We focus on building scalable apps that adapt to future growth and evolving trends. With a commitment to performance and security, we deliver solutions that enhance your brand and engage your audience effectively.",
    ],
    comprehensiveItems: [
      "App Design and User Experience (UX)",
      "App Architecture and Frameworks",
      "Backend Development",
      "Mobile App Security",
      "Performance Optimization",
      "App Monetization Strategies",
      "App Store Submission and Marketing",
      "Maintenance and Updates",
    ],
    features: ["User Interface (UI) Design", "Functionality and Performance", "Scalability", "Security", "Integration"],
    advantageTitle: "Pioneering Digital Excellence: Discover the Sky mate digital Advantage.",
    advantageDescription:
      "Leading in Digital Excellence: Experience the Sky mate digital Advantage. Discover how our innovative solutions and expertise can elevate your digital success.",
    heroImage: appDevelopment,
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    heroSubtitle: "Strategic Digital Marketing to Amplify Your Brand and Drive Growth",
    heroIntro:
      "Harness the power of digital marketing to elevate your brand and reach your target audience effectively. We craft tailored strategies that drive engagement, increase visibility, and generate measurable results across all digital channels.",
    descriptions: [
      "At Sky mate digital, we specialize in advanced digital marketing to boost your online presence. Our team employs the latest trends and technologies, creating compelling visuals that resonate with your brand.",
      "From engaging social media content to eye-catching advertisements, we prioritize creativity and excellence, ensuring your brand stands out. Whether launching a new campaign or revitalizing your online image, Sky mate digital is your strategic partner for impactful, customized digital solutions. Elevate your brand in the digital realm with Sky mate digital - where innovation meets results.",
    ],
    comprehensiveItems: [
      "Content Marketing",
      "Social Media Marketing",
      "Influencer Marketing",
      "Mobile Marketing",
      "Email Marketing",
      "Analytics and Reporting",
      "Affiliate Marketing",
      "Search Engine Optimization",
    ],
    features: [
      "Search Engine Optimization",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Pay-Per-Click (PPC) Advertising",
    ],
    advantageTitle: "Pioneering Digital Excellence: Discover the Sky mate digital Advantage.",
    advantageDescription:
      "Leading in Digital Excellence: Experience the Sky mate digital Advantage. Discover how our innovative solutions and expertise can elevate your digital success.",
    heroImage: digitalMarketing,
  },
  "automation-ai": {
    slug: "automation-ai",
    title: "Automation & AI",
    heroSubtitle: "Streamlining Efficiency through Automation",
    heroIntro:
      "Enhance your processes and drive efficiency with our cutting-edge automation solutions, designed to reduce manual tasks and boost productivity.",
    descriptions: [
      "In today's fast-paced digital world, automation is the key to staying ahead. Our comprehensive automation solutions are crafted to optimize workflows, minimize errors, and save valuable time.",
      "Whether you're looking to automate repetitive tasks, integrate systems seamlessly, or deploy intelligent bots, our solutions ensure that your operations run smoother, faster, and more efficiently. Embrace automation and unlock the potential of your business with our tailored strategies that drive growth and innovation.",
    ],
    comprehensiveItems: [
      "Process Automation",
      "Intelligent Workflow Management",
      "Robotic Process Automation (RPA)",
      "System Integration",
      "Data-Driven Automation",
      "Custom Automation Solutions",
      "Scalability and Flexibility",
      "Security and Compliance",
    ],
    features: [
      "Automated Task Management",
      "Seamless Integration",
      "Real-Time Analytics",
      "Customizable Workflows",
      "Enhanced Security",
    ],
    extraSections: [
      {
        title: "Maximize Efficiency with Automation",
        cards: [
          {
            title: "01 Process Automation",
            description:
              "Automate repetitive tasks to boost efficiency and accuracy, reducing time and minimizing errors for smoother operations.",
          },
          {
            title: "02 Custom Workflows",
            description:
              "Create and implement personalized workflows and custom automation solutions to enhance overall efficiency.",
          },
          {
            title: "03 Reporting & Analytics",
            description:
              "Use advanced analytics to track performance and generate reports, helping make informed decisions and drive growth.",
          },
        ],
      },
      {
        title: "Drive Your Success with Sky mate digital Automation",
        paragraphs: [
          "Unlock New Levels of Productivity Through Smart Automation.",
          "Automation enhances efficiency by handling repetitive tasks, allowing for more personal engagement in meaningful work. It leverages smart analytics to provide valuable insights and supports instant responses, ensuring quick and effective service. This blend of efficiency, personalized interaction, and real-time support makes automation essential for modern business success.",
        ],
      },
      {
        title: "Platforms & Custom Automation",
        points: [
          "Custom Automation - Custom automation refers to the creation of bespoke automated processes that are specifically designed to meet the unique requirements of a business or individual. Unlike out-of-the-box solutions, custom automation allows for the fine-tuning of workflows, ensuring that every step aligns with specific operational goals and preferences.",
        ],
      },
    ],
    toolHighlights: [
      {
        name: "Make.com",
        logoUrl: makeLogo,
        description:
          "Offers seamless no-code integrations with thousands of popular apps. Instead of spending hours learning, building, and testing on your own, you can hire experts to get the job done quickly and efficiently.",
      },
      {
        name: "Zapier",
        logoUrl: zapierLogo,
        description:
          "Zapier is a powerful online automation tool that connects various applications and services, enabling users to automate repetitive tasks and streamline their workflows without the need for coding knowledge.",
      },
    ],
    faqs: [
      {
        question: "What is automation in technology?",
        answer:
          "Automation involves using technology to perform tasks with minimal human intervention. It includes software tools, scripts, and systems that execute repetitive or complex processes, enhancing efficiency and reducing errors. This can be applied across industries from manufacturing to IT, marketing, and more.",
      },
      {
        question: "How can automation benefit my business?",
        answer:
          "Automation can improve productivity by reducing time spent on manual tasks, lowering costs, and increasing accuracy. It also helps streamline processes, enabling employees to focus on higher-value tasks like strategy and innovation, ultimately driving business growth.",
      },
      {
        question: "What types of tasks can be automated?",
        answer:
          "Common tasks that can be automated include data entry, report generation, customer support (via chatbots), marketing campaigns, social media scheduling, system monitoring, and workflow approvals. Automation is adaptable across multiple departments and processes.",
      },
      {
        question: "Is automation expensive to implement?",
        answer:
          "The cost of automation depends on the complexity and scale of the system you choose. However, many automation solutions, such as RPA (Robotic Process Automation) or workflow automation tools, are available at different price points, including affordable options for small businesses. The long-term savings and productivity gains often outweigh the initial investment.",
      },
    ],
    advantageTitle: "Pioneering Digital Excellence: Discover the Sky mate digital Advantage.",
    advantageDescription:
      "Leading in Digital Excellence: Experience the Sky mate digital Advantage. Discover how our innovative solutions and expertise can elevate your digital success.",
    heroImage: automation,
  },
  "website-maintenance": {
    slug: "website-maintenance",
    title: "Website Maintenance",
    heroSubtitle: "Website Maintenance: Ensuring Optimal Performance",
    heroIntro: "Professional website maintenance services to keep your site running smoothly, secure, and up-to-date.",
    descriptions: [
      "Our comprehensive website maintenance services are designed to ensure your site remains fully functional, secure, and optimized for performance. We handle everything from regular updates and backups to troubleshooting issues and improving site speed.",
      "By entrusting us with your website maintenance, you can focus on your core business while we keep your online presence in top shape. Whether you need ongoing support or one-time fixes, our team is here to provide reliable, efficient service that keeps your site running at its best.",
    ],
    comprehensiveItems: [
      "Security Updates and Patching",
      "Backup Management",
      "Performance Optimization",
      "Content Updates and Management",
      "SEO Monitoring and Adjustments",
      "Functionality Checks and Bug Fixes",
      "Compatibility Testing",
      "Analytics and Reporting",
    ],
    features: [
      "Security Updates and Patching",
      "Backup Management",
      "Performance Optimization",
      "Uptime Monitoring",
      "SEO Monitoring and Adjustments",
    ],
    advantageTitle: "Pioneering Digital Excellence: Discover the Sky mate digital Advantage.",
    advantageDescription:
      "Leading in Digital Excellence: Experience the Sky mate digital Advantage. Discover how our innovative solutions and expertise can elevate your digital success.",
    heroImage: maintenance,
  },
  "seo-content-writing": {
    slug: "seo-content-writing",
    title: "SEO & Content Writing",
    heroSubtitle: "Maximizing Visibility Through Strategic SEO Practices",
    heroIntro:
      "Maximizing visibility through SEO involves optimizing content and technical elements to improve search engine rankings and drive targeted traffic.",
    descriptions: [
      "At Sky mate digital, we excel in advanced SEO strategies to enhance your online visibility. Our team leverages the latest trends and technologies, creating compelling content that resonates with your brand. From optimizing website elements to crafting engaging articles, we prioritize creativity and excellence, ensuring your brand stands out in search results.",
      "Whether boosting current rankings or optimizing for new keywords, Sky mate digital is your strategic partner for impactful, customized SEO solutions. Elevate your brand's digital presence with Sky mate digital - where innovation meets results.",
    ],
    comprehensiveItems: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Local SEO",
      "SEO Analytics",
      "Mobile Optimization",
    ],
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy", "Link Building"],
    advantageTitle: "Pioneering Digital Excellence: Discover the Sky mate digital Advantage.",
    advantageDescription:
      "Leading in Digital Excellence: Experience the Sky mate digital Advantage. Discover how our innovative solutions and expertise can elevate your digital success.",
    heroImage: seoContentWriting,
  },
};
