import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

/** Routes where the first screen is a dark hero — navbar uses light text until scroll. */
const NAV_HERO_PATHS = ["/", "/about", "/portfolio", "/services", "/testimonials", "/contact"];

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const navbarVariant = NAV_HERO_PATHS.includes(pathname) ? "hero" : "fixed";

  useEffect(() => {
    // Prefer Lenis (smooth scroll) if enabled; fallback to native.
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant={navbarVariant} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
