import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, Briefcase, Mail, Settings, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IrozonLogo from "./IrozonLogo";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: Briefcase },
    { label: "Services", href: "/services", icon: Settings },
    { label: "News", href: "/news", icon: Newspaper },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16
    backdrop-blur-lg transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? "bg-[hsl(var(--header-footer))]/60 border-b border-border shadow-md"
        : "bg-[hsl(var(--header-footer))]/0"
    }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          <Link to="/" aria-label="Irozon Home">
            {/* <span className="text-accent">irozon.</span> */}
            <IrozonLogo className="w-32" />
          </Link>
        </motion.div>

        {/* Desktop Menu with Modern Active Indicator */}
        <div className="hidden h-full md:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                className="h-full flex items-center relative group" // h-full ensures centering
              >
                <motion.span
                  whileHover={{ color: "hsl(var(--primary))" }}
                  className={`text-sm font-medium transition-colors py-2 px-1 ${
                    isActive ? "font-bold text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute bottom-0 left-0 h-[3px] w-full bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open mobile menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative flex items-center gap-4 p-3 rounded-lg text-lg font-medium transition-all text-foreground hover:bg-muted/50"
                  >
                    {/* <Icon className="h-5 w-5" /> */}
                    <span className={isActive ? "font-bold text-primary" : ""}>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activePillMobile"
                        // className="absolute bottom-0 left-0 h-[3px] w-full bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navigation;
