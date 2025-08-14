import { 
  SiJavascript, 
  SiPython, 
  SiGit,
  SiGradle,
  SiJenkins,
  SiPostman,
  SiJira,
  SiMysql,
  SiOracle
} from "react-icons/si";
import { Code, Database, Cog, TestTube, Coffee, Shield, Layers, Settings, Terminal, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <Terminal className="text-4xl text-red-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" /> },
      { name: "Node.js", icon: <Code className="text-4xl text-green-600" /> },
      { name: "Groovy", icon: <Code className="text-4xl text-purple-600" /> },
      { name: "Python", icon: <SiPython className="text-4xl text-blue-600" /> },
      { name: "SQL", icon: <SiMysql className="text-4xl text-blue-800" /> }
    ]
  },
  {
    title: "Testing Frameworks", 
    skills: [
      { name: "Selenium", icon: <TestTube className="text-4xl text-green-600" /> },
      { name: "WebDriverIO", icon: <Cog className="text-4xl text-blue-600" /> },
      { name: "Cucumber BDD", icon: <Layers className="text-4xl text-green-500" /> },
      { name: "REST Assured", icon: <Shield className="text-4xl text-orange-600" /> }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <SiGit className="text-4xl text-orange-600" /> },
      { name: "Maven", icon: <Settings className="text-4xl text-red-600" /> },
      { name: "Gradle", icon: <SiGradle className="text-4xl text-green-600" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-4xl text-blue-600" /> },
      { name: "Postman", icon: <SiPostman className="text-4xl text-orange-500" /> },
      { name: "JIRA", icon: <SiJira className="text-4xl text-blue-700" /> }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="section-header" data-testid="skills-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 
              className="text-2xl font-semibold text-foreground mb-6 text-center" 
              data-testid={`skills-category-${categoryIndex}`}
            >
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="skill-card text-center p-4 rounded-lg bg-card hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                  data-testid={`skill-${categoryIndex}-${skillIndex}`}
                >
                  <div className="flex justify-center mb-3">
                    {skill.icon}
                  </div>
                  <div className="font-medium text-foreground">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
