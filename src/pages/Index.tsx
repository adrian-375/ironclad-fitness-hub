import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CoachingSection from "@/components/CoachingSection";
import MembershipsSection from "@/components/MembershipsSection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <WhyChooseUs />
      <CoachingSection onOpenModal={() => setModalOpen(true)} />
      <MembershipsSection />
      <Testimonials />
      <FounderSection />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
