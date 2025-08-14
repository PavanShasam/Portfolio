import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import SkillsSection from "@/components/portfolio/skills-section";
import EducationSection from "@/components/portfolio/education-section";
import ContactSection from "@/components/portfolio/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      

    </div>
  );
}
