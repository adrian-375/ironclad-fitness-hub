import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const [step, setStep] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text reveal sequence
    const t1 = setTimeout(() => setStep(1), 200);   // ELITE fades in
    const t2 = setTimeout(() => setStep(2), 500);   // FITNESS slides up
    const t3 = setTimeout(() => setStep(3), 900);   // Subhead
    const t4 = setTimeout(() => setStep(4), 1200);  // CTAs
    const t5 = setTimeout(() => setStep(5), 1500);  // Badge
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  // Parallax at 0.5x speed
  useEffect(() => {
    const handler = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image — parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <img src={heroImg} alt="Elite Fitness gym equipment with dramatic red lighting" width={1920} height={1080} className="w-full h-full object-cover brightness-[0.85]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* ELITE */}
          <h1 className="font-heading font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            <span
              className="inline-block transition-all duration-700 ease-out"
              style={{
                opacity: step >= 1 ? 1 : 0,
                transform: step >= 1 ? "translateY(0)" : "translateY(20px)",
              }}
            >
              ELITE
            </span>
            <br />
            {/* FITNESS with red pulse glow */}
            <span className="relative inline-block">
              <span
                className="text-gradient-red transition-all duration-700 ease-out"
                style={{
                  opacity: step >= 2 ? 1 : 0,
                  transform: step >= 2 ? "translateY(0)" : "translateY(40px)",
                  display: "inline-block",
                }}
              >
                FITNESS
              </span>
              {/* Pulse glow behind FITNESS */}
              {step >= 2 && (
                <span
                  className="absolute inset-0 -z-10 animate-red-pulse rounded-lg"
                  aria-hidden="true"
                />
              )}
            </span>
          </h1>

          {/* Subhead */}
          <div
            className="red-line-left mt-8 transition-all duration-700 ease-out"
            style={{
              opacity: step >= 3 ? 1 : 0,
              transform: step >= 3 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p className="font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.2em] text-muted-foreground font-medium">
              BE ELITE OR BE NOTHING
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-12 transition-all duration-700 ease-out"
            style={{
              opacity: step >= 4 ? 1 : 0,
              transform: step >= 4 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <button
              onClick={onOpenModal}
              className="bg-primary text-primary-foreground px-10 py-4 font-heading text-xl font-bold tracking-wider hover:bg-elite-red-bright transition-all glow-red-hover"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => scrollTo("coaching")}
              className="border border-primary text-primary px-10 py-4 font-heading text-xl font-bold tracking-wider hover:bg-primary/10 transition-all"
            >
              LEARN MORE
            </button>
          </div>

          {/* Trust Badge */}
          <div
            className="mt-16 transition-all duration-700 ease-out"
            style={{
              opacity: step >= 5 ? 1 : 0,
              transform: step >= 5 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="glass-dark inline-flex items-center gap-3 px-5 py-3 rounded">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-base font-body">
                <span className="text-foreground font-semibold">4.8</span>
                <span className="text-muted-foreground ml-1">· 272 Verified Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
