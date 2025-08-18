import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Download, Mail, Database, Globe, Server, Code } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90, description: "Building dynamic user interfaces" },
        { name: "JavaScript", level: 85, description: "Modern ES6+ features" },
        { name: "HTML5", level: 95, description: "Semantic markup" },
        { name: "CSS3", level: 90, description: "Responsive design & animations" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first styling" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript" },
        { name: "Express.js", level: 80, description: "Web application framework" },
        { name: "REST APIs", level: 85, description: "RESTful service design" },
        { name: "JWT", level: 75, description: "Authentication & authorization" }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80, description: "NoSQL database design" },
        { name: "Git", level: 85, description: "Version control" },
        { name: "npm/yarn", level: 80, description: "Package management" },
        { name: "Postman", level: 75, description: "API testing" }
      ]
    }
  ];

  const certifications = [
    { name: "MongoDB Developer", issuer: "MongoDB University", year: "2023", status: "Completed" },
    { name: "React Developer", issuer: "freeCodeCamp", year: "2023", status: "Completed" },
    { name: "Node.js Certification", issuer: "OpenJS Foundation", year: "2024", status: "In Progress" }
  ];

  const getSkillColor = (level: number): string => {
    if (level >= 85) return "bg-gradient-to-r from-green-500 to-emerald-500";
    if (level >= 70) return "bg-gradient-to-r from-blue-500 to-cyan-500";
    return "bg-gradient-to-r from-yellow-500 to-orange-500";
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and continuous learning journey
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Code className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                    <Badge variant={cert.status === "Completed" ? "default" : "secondary"}>
                      {cert.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('#contact')}>
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}