import { useState, useEffect, ReactNode } from "react";
import { Sparkles, ChevronUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Visión 360", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Navbar - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-20 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary rounded-lg text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
              VISIÓN 360
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/contacto">
              <Button variant="gradient">Escríbenos</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-3 px-4 hover:bg-slate-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="gradient" className="w-full">
                  Escríbenos
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content with padding for fixed header */}
      <div className="pt-20">
        {children}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-50 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ boxShadow: '0 4px 15px rgba(217, 72, 239, 0.4)' }}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
}
