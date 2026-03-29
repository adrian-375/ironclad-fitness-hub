import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ReviewData {
  name: string;
  text: string;
  highlights: string[];
}

const testimonials: ReviewData[] = [
  { name: "Viswa Moulie", text: "Great for all levels. Clean and crowd-free. Personalized coaching. Must try.", highlights: ["Clean and crowd-free", "Personalized coaching"] },
  { name: "Vikram Vikram", text: "Clean, well-maintained, great music. Friendly, helpful coach. Well organized.", highlights: ["well-maintained", "helpful coach"] },
  { name: "Mohammed Bilal", text: "Best place to workout. Very clean. Trainer has excellent knowledge.", highlights: ["Best place to workout", "excellent knowledge"] },
  { name: "Karthik U", text: "Perfect environment. Warm atmosphere, separate cardio/weight zones, spacious.", highlights: ["Perfect environment", "separate cardio/weight zones"] },
  { name: "Azarudheen KM", text: "20-year-old gym looks brand new. Master trainer Ramesh tailors guidance perfectly.", highlights: ["20-year-old gym looks brand new", "tailors guidance perfectly"] },
  { name: "Sangeetha Sharma", text: "Best training, perfect cleanliness, supportive coach. Most recommended.", highlights: ["perfect cleanliness", "Most recommended"] },
  { name: "Shreya Devadiga", text: "First gym experience, amazing! Women-friendly, great strength progress.", highlights: ["Women-friendly", "great strength progress"] },
  { name: "Mangesh Singh", text: "Well-maintained, clean, quality machines. Highly recommended.", highlights: ["quality machines", "Highly recommended"] },
  { name: "Md Noor Ahmed", text: "Best gym, reasonable price, personal feel. Classes included.", highlights: ["reasonable price", "personal feel"] },
  { name: "Stella Tony", text: "Well-maintained, spacious, positive vibe. Trainer Ramesh encouraging.", highlights: ["positive vibe", "Trainer Ramesh encouraging"] },
  { name: "Gowtham Naidu", text: "Trainer details every muscle benefit. Felt more active in 2 weeks. Clean.", highlights: ["every muscle benefit", "more active in 2 weeks"] },
  { name: "Moy Mawite", text: "Tough rewarding workouts, instant form correction, amazing energy, super clean.", highlights: ["instant form correction", "amazing energy"] },
];

const cardStyles = [
  "glass-dark",
  "bg-gradient-to-br from-secondary to-elite-charcoal border border-border",
  "glass-dark border-l-2 border-l-primary/40",
  "bg-secondary/50 backdrop-blur-sm border border-primary/10",
  "glass-dark border-b-2 border-b-primary/30",
  "bg-gradient-to-b from-elite-charcoal to-secondary border border-border/50",
];

const highlightText = (text: string, highlights: string[]) => {
  let result = text;
  highlights.forEach((h) => {
    result = result.replace(h, `<strong class="text-primary font-semibold not-italic">${h}</strong>`);
  });
  return result;
};

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
          WHAT THEY <span className="text-gradient-red text-glow-red">SAY</span>
        </h2>
        <p className="text-muted-foreground text-center font-body text-lg max-w-xl mx-auto">
          Real reviews from real members. No filters.
        </p>
      </div>

      {/* Marquee starts only when section is visible */}
      <div className="relative">
        <div className={`flex w-max gap-6 px-6 ${isVisible ? "animate-marquee-slow" : ""}`}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className={`${cardStyles[i % cardStyles.length]} p-8 rounded min-w-[320px] max-w-[360px] flex flex-col`}
              style={{ minHeight: "220px" }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[hsl(var(--gold-star))] text-[hsl(var(--gold-star))]" />
                ))}
              </div>
              <p
                className="text-foreground/85 font-body text-lg leading-relaxed mb-5 italic flex-1"
                dangerouslySetInnerHTML={{ __html: `"${highlightText(t.text, t.highlights)}"` }}
              />
              <p className="font-heading text-lg font-bold text-primary">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
