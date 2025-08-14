import { ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer II",
    company: "Electronic Arts Games",
    duration: "Jan 2023 – Present",
    location: "Hyderabad, India",
    highlights: [
      "Built WebDriverIO and Mocha framework, improving regression efficiency by 50%",
      "Developed Robot Framework-based image validation tests, expanding coverage by 30%", 
      "Created BDD-based API test suite with Selenium Java, reducing validation time by 40%",
      "Maintained regression suite with zero missed high-priority bugs in last three releases",
      "Worked with Perforce for version control and contributed to CI pipeline stabilization"
    ],
    isPrimary: true
  },
  {
    title: "QA Engineer", 
    company: "DP World",
    duration: "Feb 2022 – Sep 2022",
    location: "Hyderabad, India",
    highlights: [
      "Automated 20+ critical API scenarios using Java, Selenium, and Gradle",
      "Developed Service Bus test flows, increasing message validation efficiency by 50%",
      "Improved test cycle times by 35% via optimized script execution",
      "Integrated Git version control in cross-functional team"
    ],
    isPrimary: false
  },
  {
    title: "QA Engineer",
    company: "Informatica", 
    duration: "Oct 2021 – Feb 2022",
    location: "Hyderabad, India",
    highlights: [
      "Developed Selenium-Java test suite with Cucumber BDD, enhancing reliability by 25%",
      "Contributed to Gradle-based build automation using Perforce for code maintenance",
      "Refactored POM structure for greater modularity and reuse"
    ],
    isPrimary: false
  },
  {
    title: "Software Test Automation Engineer",
    company: "EPAM Systems",
    duration: "Jun 2019 – Oct 2021", 
    location: "Hyderabad, India",
    highlights: [
      "Built and maintained over 100 test scripts across Web UI, API, and mobile platforms",
      "Reduced manual regression by 60% through custom, reusable Katalon keywords",
      "Automated end-to-end tests in Cucumber and Groovy with detailed reports",
      "Involved in daily scrum, sprint planning, defect triage, and UAT sign-offs",
      "Managed bug lifecycle in JIRA and tracked progress across 12+ sprints"
    ],
    isPrimary: false
  },
  {
    title: "Automation Test Engineer",
    company: "OpenText Technologies",
    duration: "May 2018 – Jun 2019",
    location: "Hyderabad, India", 
    highlights: [
      "Designed BDD-based automation for TempoBox and Content Server (45% reuse rate)",
      "Created custom HTML/XLSX report tool using Python to analyze test runs",
      "Self-learned Selenium-Java; implemented AutoIT and Jenkins integration",
      "Used TestNG and ExtentReports for execution analysis"
    ],
    isPrimary: false
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-10 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-header" data-testid="experience-title">Professional Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="experience-card"
              data-testid={`experience-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${index}`}>
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-medium text-primary mb-2" data-testid={`experience-company-${index}`}>
                    {exp.company}
                  </h4>
                  <div className="text-muted-foreground text-sm mb-4" data-testid={`experience-location-${index}`}>
                    {exp.location}
                  </div>
                </div>
                <div className="text-muted-foreground font-medium text-sm" data-testid={`experience-duration-${index}`}>
                  {exp.duration}
                </div>
              </div>
              
              <ul className="space-y-2 text-muted-foreground">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start text-sm" data-testid={`experience-highlight-${index}-${highlightIndex}`}>
                    <span className="text-primary mr-3">▶</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
