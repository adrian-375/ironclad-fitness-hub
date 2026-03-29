import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0 font-heading text-2xl md:text-3xl font-bold tracking-wider">
          <span className="text-primary">ELITE</span>
          <span className="text-foreground ml-1">FITNESS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <button onClick={() => scrollTo("hero")} className="text-foreground hover:text-primary transition-colors">Home</button>

          <button onClick={() => scrollTo("founder")} className="text-foreground hover:text-primary transition-colors">Our Team</button>

          <button onClick={() => scrollTo("why-choose")} className="text-foreground hover:text-primary transition-colors">Why Choose Us</button>
          <button onClick={() => scrollTo("testimonials")} className="text-foreground hover:text-primary transition-colors">Testimonials</button>

          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              Our Programs <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="glass-dark rounded p-2 min-w-[180px]">
                <button onClick={() => scrollTo("coaching")} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors text-sm">1-on-1 Coaching</button>
                <button onClick={() => scrollTo("memberships")} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors text-sm">Memberships</button>
              </div>
            </div>
          </div>

          <button onClick={onOpenModal} className="bg-primary text-primary-foreground px-5 py-2 font-heading font-semibold tracking-wider hover:bg-elite-red-bright transition-colors glow-red-hover">
            JOIN NOW
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4 font-body">
            <button onClick={() => scrollTo("hero")} className="text-left text-foreground hover:text-primary transition-colors py-2">Home</button>
            
            <button onClick={() => scrollTo("founder")} className="text-left text-foreground hover:text-primary transition-colors py-2">Our Team</button>

            <button onClick={() => scrollTo("why-choose")} className="text-left text-foreground hover:text-primary transition-colors py-2">Why Choose Us</button>
            <button onClick={() => scrollTo("testimonials")} className="text-left text-foreground hover:text-primary transition-colors py-2">Testimonials</button>

            <div>
              <button onClick={() => setProgramsOpen(!programsOpen)} className="flex items-center gap-1 text-foreground hover:text-primary transition-colors py-2">
                Our Programs <ChevronDown className={`w-3 h-3 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
              </button>
              {programsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <button onClick={() => scrollTo("coaching")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1 text-sm">1-on-1 Coaching</button>
                  <button onClick={() => scrollTo("memberships")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1 text-sm">Memberships</button>
                </div>
              )}
            </div>

            <button onClick={onOpenModal} className="bg-primary text-primary-foreground px-5 py-3 font-heading font-semibold tracking-wider text-center mt-2 glow-red">
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
