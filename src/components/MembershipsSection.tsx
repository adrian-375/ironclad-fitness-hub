import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "1 MONTH",
    price: "2,500",
    highlight: false,
    accent: "border-border/30",
    bg: "bg-gradient-to-b from-secondary/80 via-elite-charcoal to-secondary/60",
    image: "/images/2.jpg",
  },
  {
    name: "6 MONTHS",
    price: "10,000",
    highlight: true,
    accent: "border-primary/40",
    bg: "bg-gradient-to-b from-primary/10 via-elite-charcoal to-primary/5",
    image: "/images/3.jpg",
  },
  {
    name: "1 YEAR",
    price: "15,000",
    highlight: false,
    accent: "border-[hsl(45,30%,40%)]/30",
    bg: "bg-gradient-to-b from-secondary/60 via-elite-charcoal to-secondary/80",
    image: "/images/image3.png",
  },
];

const whatsappLink = "https://wa.me/919999999999?text=Hi%20Elite%20Fitness%2C%20I%27m%20interested%20in%20joining!";

const MembershipsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="memberships" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
          MEMBER<span className="text-gradient-red text-glow-red">SHIPS</span>
        </h2>
        <p className="text-muted-foreground text-center font-body text-base max-w-xl mx-auto mb-16">
          Choose your level. Commit to the grind.
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${plan.bg} border ${plan.accent} rounded-lg relative flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                plan.highlight ? "md:-mt-6 md:mb-0 glow-red" : ""
              } ${plan.highlight && isVisible ? "animate-pulse-glow-once" : ""}`}
              style={{
                minHeight: plan.highlight ? "480px" : "420px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-2 font-heading text-xs font-bold tracking-wider text-center z-10">
                  MOST POPULAR ⭐
                </div>
              )}
              <div className="relative flex-1 flex items-center justify-center bg-secondary/30 h-[200px] overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.name}
                  className={`w-full h-full object-cover ${i === 2 ? "scale-125" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
              </div>
              <div className={`p-8 text-center ${plan.highlight ? "pt-6" : ""}`}>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className={`font-heading text-6xl font-bold ${
                    plan.highlight ? "text-primary" : i === 2 ? "text-foreground" : "text-foreground/90"
                  }`}>₹{plan.price}</span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 font-heading text-lg font-bold tracking-wider transition-all text-center block rounded ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-elite-red-bright glow-red-hover"
                      : "bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  JOIN ON WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body text-sm mt-8">
          In-house personal training available —{" "}
          <a href="https://wa.me/919999999999?text=Hi%20Elite%20Fitness%2C%20I%27m%20interested%20in%20in-house%20personal%20training!" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">inquire on WhatsApp</a>
        </p>
      </div>
    </section>
  );
};

export default MembershipsSection;