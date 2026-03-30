import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const certs = [
  { name: "Certified Personal Trainer", image: "/images/3cert.jpg" },
  { name: "Certified Nutrition Consultant", image: "/images/1cert.jpg" },
  { name: "Certified Supplement Consultant", image: "/images/2cert.jpg" },
];

const FounderSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="founder" className="py-24 bg-elite-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div ref={ref} className="container mx-auto px-4 relative">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground text-center mb-16">
          THE <span className="text-gradient-red text-glow-red">FOUNDER</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image — slides in from left */}
          <div
            className="relative transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded border border-border">
              <img
                src="/images/founder.jpeg"
                alt="Coach Ramesh — Founder of Elite Fitness"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded -z-10" />
          </div>

          {/* Text — slides in from right */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
              transitionDelay: "0.2s",
            }}
          >
            <h3 className="font-heading text-3xl font-bold text-foreground mb-2">COACH NIHAL</h3>
            <p className="text-primary font-heading text-lg mb-6">Founder & Head Coach</p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
              Coach Ramesh is the founder of Elite Fitness, bringing over 20 years of hands-on experience in the fitness industry. Throughout his career, he has successfully guided more than 500 individuals through transformative fitness journeys, earning a reputation for delivering consistent, results-driven outcomes.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
              A certified personal trainer, nutrition consultant, and supplement specialist, Coach Ramesh combines scientific knowledge with practical expertise to create personalized fitness solutions. His approach goes beyond conventional training — focusing on sustainable lifestyle changes, precise nutrition planning, and performance optimization.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Under his leadership, Elite Fitness has evolved into a trusted name for individuals seeking disciplined, structured, and effective transformation, backed by decades of proven credibility.
            </p>
          </div>
        </div>

        {/* Certifications — fade in last */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-16">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="glass-dark p-6 rounded text-center group hover:border-primary/50 transition-all relative overflow-hidden min-w-[220px] max-w-[320px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease-out ${0.6 + i * 0.15}s, transform 0.5s ease-out ${0.6 + i * 0.15}s`,
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 hex-badge bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <span className="font-heading text-primary text-xl font-bold">✓</span>
              </div>
              <h4 className="font-heading text-base font-bold text-foreground mb-4">{cert.name}</h4>
              <div className="h-64 w-full bg-secondary/50 rounded border border-border/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;