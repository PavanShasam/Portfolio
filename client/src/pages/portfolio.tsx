import Navigation from "../components/portfolio/navigation";
import HeroSection from "../components/portfolio/hero-section";
import AboutSection from "../components/portfolio/about-section";
import ExperienceSection from "../components/portfolio/experience-section";
import SkillsSection from "../components/portfolio/skills-section";
import EducationSection from "../components/portfolio/education-section";
import ContactSection from "../components/portfolio/contact-section";
import { Mail, Linkedin, Phone } from "lucide-react";

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
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Ranga Pavan Shasam. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a 
                href="mailto:rangapavan.shasam@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-email-link"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ranga-pavan-shasam" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="tel:+919398630105" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-phone-link"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
