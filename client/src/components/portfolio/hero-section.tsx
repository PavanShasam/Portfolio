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
    <section id="home" className="pt-2 pb-2 min-h-[80vh] flex items-center bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className="mb-4">
            {/* Professional profile image placeholder - similar to Vimal's circular profile */}
            <div 
              className="w-40 h-40 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
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
          <h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-2"
            data-testid="hero-title"
          >
            Ranga Pavan Shasam
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
            data-testid="hero-subtitle"
          >
            Software Engineer II & QA Automation Expert
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-muted-foreground mb-8">
            <span>rangapavan.shasam@gmail.com</span>
            <span className="hidden sm:inline">•</span>
            <span>+91 9398630105</span>
            <span className="hidden sm:inline">•</span>
            <span>Hyderabad, India</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGetInTouch}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
