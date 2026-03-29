import { useState } from "react";
import { X } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        whatsapp: formData.whatsapp,
        interest: formData.interest,
        message: formData.message || "",
      };

      // Send to both Formspree and Google Sheets simultaneously
      await Promise.all([
        fetch("https://formspree.io/f/mdapeavk", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: payload.name,
            "WhatsApp Number": payload.whatsapp,
            Interest: payload.interest,
            Message: payload.message || "N/A",
          }),
        }),
        fetch("https://script.google.com/macros/s/AKfycbyOG7ZhvvuyHaRj3JDnFoBQCFS4W5uNYvECW7ObRpRsD564kUNUB8T2oFPiN2fsPhBi/exec", {
          method: "POST",
          body: JSON.stringify(payload),
        }),
      ]);

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", whatsapp: "", interest: "", message: "" });
    onClose();
  };

  const inputClass =
    "w-full bg-secondary border border-border text-foreground px-4 py-3 font-body text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-muted-foreground";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm animate-fade-in" onClick={handleClose} />
      <div className="relative w-full max-w-md glass-dark rounded-lg p-8 animate-fade-in-up">
        <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors">
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-1">START YOUR JOURNEY</h2>
        <p className="text-muted-foreground text-base font-body mb-6">Fill in your details and we'll reach out.</p>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-primary text-4xl mb-4">✓</div>
            <p className="font-heading text-xl text-foreground mb-2">THANK YOU!</p>
            <p className="text-muted-foreground font-body text-base">We'll WhatsApp you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              required
              className={inputClass}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="WhatsApp Number *"
              required
              className={inputClass}
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />
            <select
              required
              className={inputClass}
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            >
              <option value="" disabled>I'm interested in... *</option>
              <option value="General Membership">General Membership</option>
              <option value="1-on-1 Coaching">1-on-1 Coaching</option>
              <option value="Both">Both</option>
            </select>
            <textarea
              placeholder="Message (optional)"
              rows={3}
              className={inputClass + " resize-none"}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary text-primary-foreground px-6 py-4 font-heading text-lg font-bold tracking-wider hover:bg-elite-red-bright transition-all glow-red-hover mt-2 disabled:opacity-50"
            >
              {submitting ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
