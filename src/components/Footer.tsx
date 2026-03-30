import { Star, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="border-t border-primary/30 bg-elite-dark pt-16 pb-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-heading text-2xl font-bold tracking-wider mb-2">
              <span className="text-primary">ELITE</span> <span className="text-foreground">FITNESS</span>
            </div>
            <p className="text-muted-foreground font-body text-sm tracking-wide mb-6">Be Elite or Be Nothing</p>
            <div className="glass-dark inline-flex items-center gap-2 px-4 py-2 rounded">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground text-xs font-body font-semibold">4.8</span>
              <span className="text-muted-foreground text-xs font-body">· 272 Google Reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-4 tracking-wider">FIND US</h4>
            <div className="aspect-video rounded overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4!2d77.6!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Fitness Bangalore Location"
              />
            </div>
            <a 
              href="https://www.google.com/maps/place/Elite+Fitness/@13.011281,77.6227275,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae16e3dc986341:0x79e32c0bb05ed04c!8m2!3d13.0112758!4d77.6253024!16s%2Fg%2F1tj7zdqz?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-xs font-body mt-3 leading-relaxed transition-colors inline-block"
            >
              📍 #31, K.P.J Arcade, H.M Road, Sakkama Layout,<br />
              Lingarajpuram, Bangalore - 560084
            </a>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-4 tracking-wider">QUICK LINKS</h4>
            <div className="flex flex-col gap-2 mb-8">
              {[
                { label: "Home", id: "hero" },
                { label: "About Us", id: "founder" },
                { label: "Programs", id: "coaching" },
                { label: "Contact", id: "hero" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <h4 className="font-heading text-sm font-bold text-foreground mb-3 tracking-wider">FOLLOW US</h4>
            <a
              href="https://www.instagram.com/elitefitblr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-body text-sm">@elitefitblr</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm font-body">© 2026 Elite Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;