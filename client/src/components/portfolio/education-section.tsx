import { GraduationCap, Award } from "lucide-react";
import { SiOracle } from "react-icons/si";

export default function EducationSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-header" data-testid="education-title">Education & Certifications</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-background rounded-xl shadow-md p-8" data-testid="education-card">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-3xl text-primary mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-foreground" data-testid="degree-title">
                  Bachelor of Technology
                </h4>
                <p className="text-foreground/80" data-testid="institution-name">
                  Keshav Memorial Institute of Technology
                </p>
                <p className="text-foreground/70" data-testid="education-duration">
                  2015 - 2019 | Hyderabad, India
                </p>
                <p className="text-sm text-foreground/70 mt-2" data-testid="major-project">
                  Major Project: Traffic Growth Analysis using Google Analytics
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-background rounded-xl shadow-md p-8" data-testid="certifications-card">
            <div className="flex items-center mb-6">
              <Award className="text-3xl text-primary mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-muted rounded-lg" data-testid="oracle-certification">
                <SiOracle className="text-2xl text-red-600 mr-4" />
                <div>
                  <h4 className="font-medium text-foreground">Oracle Certified Associate</h4>
                  <p className="text-foreground/70">Java SE 8 - Oracle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
