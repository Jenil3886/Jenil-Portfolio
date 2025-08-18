import { Card, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, description: "Building dynamic user interfaces" },
        { name: "JavaScript", level: 85, description: "Modern ES6+ features and best practices" },
        { name: "TypeScript", level: 80, description: "Type-safe development" },
        { name: "HTML5", level: 95, description: "Semantic markup and accessibility" },
        { name: "CSS3", level: 85, description: "Modern layouts and animations" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 80, description: "Web application framework" },
        { name: "MongoDB", level: 75, description: "NoSQL database management" },
        { name: "RESTful APIs", level: 85, description: "API design and development" },
        { name: "Authentication", level: 80, description: "JWT and OAuth implementation" },
        { name: "Socket.io", level: 70, description: "Real-time communication" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, description: "Version control and collaboration" },
        { name: "Docker", level: 70, description: "Containerization and deployment" },
        { name: "AWS", level: 65, description: "Cloud services and deployment" },
        { name: "Postman", level: 80, description: "API testing and documentation" },
        { name: "VS Code", level: 90, description: "Development environment" },
        { name: "Figma", level: 70, description: "Design collaboration" },
      ]
    }
  ]

  const certifications = [
    {
      name: "MongoDB Developer",
      issuer: "MongoDB University",
      year: "2023",
      status: "Certified"
    },
    {
      name: "React Developer",
      issuer: "Meta",
      year: "2023",
      status: "Certified"
    },
    {
      name: "Node.js Developer",
      issuer: "Node.js Foundation",
      year: "2022",
      status: "Certified"
    }
  ]

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-gradient-accent"
    if (level >= 60) return "bg-gradient-primary"
    return "bg-muted"
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-primary">{category.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name} 
                        className="group space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                          <Badge variant="outline" className="ml-2">
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                        
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-4">🏆</span>
                <h2 className="text-2xl font-bold text-primary">Certifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <Badge variant="secondary" className="ml-2">
                        {cert.year}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.issuer}
                    </p>
                    
                    <Badge 
                      variant="outline" 
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and work with innovative teams. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}