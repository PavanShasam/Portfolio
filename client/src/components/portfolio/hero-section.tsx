import { Button } from "../ui/button";
import { Download, Mail, Linkedin, Phone, Code2, GitBranch, TestTube } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
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
    <section id="home" className="pt-12 pb-8 min-h-[85vh] flex items-center bg-gradient-to-br from-background via-background/98 to-background/95 relative overflow-hidden">
      {/* Professional Tech Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.015]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.015] to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="text-center">
          <div className="mb-8">
            <div 
              className="w-36 h-36 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 relative"
              data-testid="profile-avatar"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-pulse" />
              <div className="relative z-10">RPS</div>
            </div>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/90 tracking-normal"
            data-testid="hero-title"
          >
            Ranga Pavan Shasam
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium max-w-3xl mx-auto flex items-center justify-center gap-2"
            data-testid="hero-subtitle"
          >
            Software Development Engineer in Test II
            <span className="inline-flex items-center">
              <TestTube className="w-5 h-5 text-primary ml-2" />
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground/90 mb-6 max-w-2xl mx-auto">
            Specialized in WebUI/API Automation • 7+ Years Experience • EA Games
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-muted-foreground text-sm mb-6">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>rangapavan.shasam@gmail.com</span>
            </div>
            <span className="hidden sm:inline text-primary/30">•</span>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9398630105</span>
            </div>
            <span className="hidden sm:inline text-primary/30">•</span>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span>Hyderabad, India</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGetInTouch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              data-testid="button-get-in-touch"
            >
              Contact Me
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium group"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}