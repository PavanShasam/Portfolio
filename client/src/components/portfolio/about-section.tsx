import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="section-header" data-testid="about-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="summary-paragraph">
            QA Automation Engineer with 6+ years of experience in web and API testing using Selenium (Java), WebDriverIO, 
            Cucumber BDD, Postman, and SQL for data validation. Proficient in Maven, Git, Perforce, JIRA, 
            and reporting tools, with a strong record of delivering quality software in Agile/Scrum environments.
          </p>
        </div>
      </div>
    </section>
  );
}
