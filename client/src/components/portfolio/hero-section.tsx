import { Button } from "../ui/button";
import { Download, Mail, Linkedin, Phone } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = 'Ranga_Pavan_Shasam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="text-center">
          <div className="mb-8">
            <div 
              className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 hover:border-primary/20"
              data-testid="profile-avatar"
            >
              RPS
            </div>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
            data-testid="hero-title"
          >
            Ranga Pavan Shasam
          </h1>
          
          <h2 
            className="text-xl md:text-3xl text-primary mb-6 font-semibold"
            data-testid="hero-subtitle"
          >
            Software Engineer II & QA Automation Expert
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-muted-foreground mb-12 text-lg">
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              rangapavan.shasam@gmail.com
            </span>
            <span className="hidden sm:inline text-primary">•</span>
            <span className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +91 9398630105
            </span>
            <span className="hidden sm:inline text-primary">•</span>
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Hyderabad, India
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleGetInTouch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-auto text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 h-auto text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              data-testid="button-download-resume"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ranga-pavan-shasam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rangapavan.shasam@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+919398630105"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
