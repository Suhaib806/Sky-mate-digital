import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const socialItems = [
  { label: "Facebook", href: "https://www.facebook.com/skymatedigital?mibextid=ZbWKwL", abbr: "f" },
  { label: "Instagram", href: "https://www.instagram.com/skymatedigital", abbr: "ig" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/skymatedigital/", abbr: "in" },
  
];

const navItems = ["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-[#05070d] text-white">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-14 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8">
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[72px] leading-[0.95] tracking-[-0.03em]">
            Transforming ideas into
            <br />
            digital <span className="text-[#2A62EB]">excellence.</span>
          </h2>
          <Link
            to="/contact-us"
            className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
          >
            <span className="button-children inline-flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="border-t border-white/10 pt-7 pb-7 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div>
          <div className="flex items-center gap-2 mb-6">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="h-7 w-7 rounded-full border border-white/25 text-[11px] text-white/85 flex items-center justify-center hover:border-[#2A62EB] hover:text-[#2A62EB] transition-colors duration-300"
                >
                  {item.abbr}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] uppercase text-white/85">
              {navItems.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3">
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Portfolio"
                          ? "/portfolio"
                          : `/${item.toLowerCase()}`
                    }
                    className="hover:text-[#2A62EB] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                  {index < navItems.length - 1 ? <span className="text-white/25">/</span> : null}
                </span>
              ))}
            </div>
            <div className="mt-6 gap-6 sm:gap-16 text-[16px] text-white/70">
              <b className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 text-[#2A62EB]" />
                Working hours:
              </b>
              <br />
              Monday - Friday <br />
              09am - 06pm (PKT)
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.05] font-medium tracking-[-0.02em] text-left lg:text-right break-all sm:break-normal">
              info@skymatedigital.com
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-16 text-[16px] text-white/70">
              <p className="text-left">
                <b className="text-white flex items-center gap-2">
                  <span>🇵🇰</span> Pakistan
                </b>
                (Global Delivery Center) <br /> <br />
                Trade Center, Bahawalpur <br />
                63100, Punjab, Pakistan. <br /> <br />
              </p>
              <p className="text-left">
                <b className="text-white flex items-center gap-2">
                  <span>🇨🇦</span> Canada
                </b>
                (Global Presence) <br /> <br />
                60 Chisholm Street Unit 56,<br /> Orangeville, Ontario L9W 4P9, Canada <br /> <br />
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[13px] text-white/50">
          <p>
            © {new Date().getFullYear()} Sky mate digital. All rights reserved. Powered by Sky mate digital.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 uppercase">
            <a href="/terms-condition" className="hover:text-[#2A62EB] transition-colors duration-300">
              Terms of use
            </a>
            <a href="/privacy-policy" className="hover:text-[#2A62EB] transition-colors duration-300">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;