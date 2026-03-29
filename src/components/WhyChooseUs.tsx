import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Reason {
  title: string;
  desc: string;
  image: string;
  alt: string;
}

const reasons: Reason[] = [
  {
    title: "PREMIUM EQUIPMENT",
    desc: "State-of-the-art machines and free weights from world-class brands, maintained to perfection for every workout.",
    image: "/images/1.webp",
    alt: "Premium Equipment"
  },
  {
    title: "EXPERT TRAINERS",
    desc: "Certified professionals who design programs tailored to your goals, guiding you through every rep with precision.",
    image: "/images/weights.jpg",
    alt: "Expert Trainers"
  },
  {
    title: "FLEXIBLE HOURS",
    desc: "Open early and close late so you can train on your schedule. We adapt to your lifestyle, not the other way around.",
    image: "/images/cardio.jpg",
    alt: "Flexible Hours"
  },
  {
    title: "PROVEN RESULTS",
    desc: "Over 272 five-star reviews and counting. Our members transform their bodies and stay transformed for life.",
    image: "/images/equip.jpg",
    alt: "Proven Results"
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-choose" className="py-24 bg-elite-dark">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
          WHY <span className="text-gradient-red text-glow-red">ELITE</span>
        </h2>
        <p className="text-muted-foreground text-center font-body text-base max-w-xl mx-auto mb-16">
          We don't do average. Every detail is engineered for results.
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="glass-dark rounded overflow-hidden group hover:border-primary/50 transition-all duration-500 glow-red-hover"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center border-b border-border overflow-hidden">
                <img 
                  src={r.image} 
                  alt={r.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{r.title}</h3>
                <p className="text-muted-foreground text-base font-body leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 