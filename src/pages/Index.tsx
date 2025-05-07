
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
      {showModal && <LeadModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Index;
