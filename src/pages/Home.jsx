import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ClientsShowcase from "../components/ClientsShowcase";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StarField from "../components/StarField";

export default function Home() {
  return (
    <div className="min-h-screen font-body relative" style={{ background: "#020d1f" }}>
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ClientsShowcase />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}