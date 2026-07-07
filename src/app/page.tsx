import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutTerminal from "@/components/AboutTerminal";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutTerminal />
        <FeaturedProjects />
        <TechnicalExpertise />
        <ExperienceTimeline />
        <EngineeringPrinciples />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
