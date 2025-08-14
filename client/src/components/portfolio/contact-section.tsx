import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";

const contactMethods = [
  {
    icon: <Mail className="text-2xl" />,
    title: "Email",
    value: "rangapavan.shasam@gmail.com",
    href: "mailto:rangapavan.shasam@gmail.com",
    testId: "contact-email"
  },
  {
    icon: <Linkedin className="text-2xl" />,
    title: "LinkedIn", 
    value: "linkedin.com/in/ranga-pavan-shasam",
    href: "https://www.linkedin.com/in/ranga-pavan-shasam",
    testId: "contact-linkedin"
  },
  {
    icon: <Phone className="text-2xl" />,
    title: "Phone",
    value: "+91 9398630105", 
    href: "tel:+919398630105",
    testId: "contact-phone"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-header" data-testid="contact-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="p-6 rounded-lg bg-card hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center" data-testid={method.testId}>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{method.title}</h3>
              <a 
                href={method.href}
                className="text-primary hover:text-primary/80 transition-colors text-sm hover:underline"
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {method.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
