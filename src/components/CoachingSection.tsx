import { Dumbbell, Utensils, MessageCircle, BarChart3, Eye, Home } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface CoachingSectionProps {
  onOpenModal: () => void;
}

const services = [
  { icon: Dumbbell, num: "01", title: "Customized Workout Plans", desc: "Programs engineered for your body, goals, and schedule. No templates." },
  { icon: Utensils, num: "02", title: "Customized Diet & Nutrition", desc: "Meal plans that fuel performance and match your lifestyle." },
  { icon: MessageCircle, num: "03", title: "24/7 WhatsApp Support", desc: "Your coach is always one message away. Anytime, anywhere." },
  { icon: BarChart3, num: "04", title: "Weekly Progress Check-ins", desc: "Consistent accountability through data-driven weekly reviews." },
  { icon: Eye, num: "05", title: "Real-time Form Correction", desc: "Every rep watched, every angle corrected. Precision training." },
  { icon: Home, num: "06", title: "In-House Training", desc: "We bring the gym to you. Equipment + personal coach at your location. Pricing discussed after consultation." },
];

const CoachingSection = ({ onOpenModal }: CoachingSectionProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="coaching" className="py-28 bg-elite-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, hsl(0 72% 51% / 0.06) 0%, transparent 60%)`,
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-primary/[0.03]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
            1-ON-1 <span className="text-gradient-red text-glow-red">COACHING</span>
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6 glow-red" />
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Your goals. Your program. Your dedicated coach. Precision-engineered transformation built around your body, your schedule, and your ambition.
          </p>
        </div>

        {/* Timeline layout — features alternate left/right with red connecting line */}
        <div ref={ref} className="relative max-w-4xl mx-auto mb-20">
          {/* Central red line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-[1px]"
            style={{
              background: `linear-gradient(to bottom, transparent, hsl(0 72% 51% / 0.5) 10%, hsl(0 72% 51% / 0.5) 90%, transparent)`,
              boxShadow: '0 0 12px hsl(0 72% 51% / 0.3)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-out',
            }}
          />

          {services.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-start mb-8 last:mb-0 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease-out ${i * 0.12}s, transform 0.6s ease-out ${i * 0.12}s`,
                }}
              >
                {/* Dot on the line */}
                <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 -translate-x-[5px] md:-translate-x-[6px] rounded-full bg-primary z-10 shadow-[0_0_12px_hsl(0_72%_51%/0.6)]" />

                {/* Spacer for mobile offset */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"} group`}
                >
                  <div className="relative p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(0_72%_51%/0.1)]">
                    {/* Number watermark */}
                    <span className="absolute top-3 right-4 font-heading text-5xl font-bold text-primary/[0.07] group-hover:text-primary/[0.15] transition-colors duration-500 select-none">
                      {s.num}
                    </span>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-sm font-semibold text-primary/60 tracking-widest">{s.num}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { num: "500+", label: "Transformations" },
            { num: "12+", label: "Years Experience" },
            { num: "100%", label: "Commitment" },
          ].map((s, i) => (
            <div key={i} className="glass-dark p-6 rounded text-center">
              <p className="font-heading text-4xl font-bold text-primary">{s.num}</p>
              <p className="text-muted-foreground font-body text-base mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="bg-primary text-primary-foreground px-10 py-4 font-heading text-xl font-bold tracking-wider hover:bg-elite-red-bright transition-all glow-red-hover"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;
