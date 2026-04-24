import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About Us", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact-us" },
];

type NavbarVariant = "fixed" | "hero";

const Navbar = ({ variant = "fixed" }: { variant?: NavbarVariant }) => {
  const inHero = variant === "hero";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const textColor = scrolled
    ? "text-foreground"
    : inHero
      ? "text-white"
      : "text-foreground";
  const mutedColor = scrolled
    ? "text-white hover:text-foreground"
    : inHero
      ? "text-white hover:text-white"
      : "text-muted-foreground hover:text-foreground";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2a62eb4a] backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sky mate digital" className=" w-[130px]" />
          </Link>

          {/* Center nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.to ? "text-[#3B82F6]" : "text-white hover:text-[#3B82F6]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
          <Link
                  to="/contact-us"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 text-white`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
               <Link
                  to="/contact-us"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
