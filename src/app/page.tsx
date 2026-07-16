import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutTerminal from "@/components/AboutTerminal";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Education from "@/components/Education";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutTerminal />
        <FeaturedProjects />
        <TechnicalExpertise />
        <ExperienceTimeline />
        <Education />
        <EngineeringPrinciples />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
