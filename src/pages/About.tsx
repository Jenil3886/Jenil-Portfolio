import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Calendar, MapPin, Coffee, Code, Lightbulb } from "lucide-react"
import profileImg from "@/assets/profile.jpg"

export default function About() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Startup",
      period: "2023 - Present",
      description: "Developing modern web applications using MERN stack, implementing responsive designs and optimizing performance."
    }
  ]

  const skills = [
    "MongoDB", "Express.js", "React.js", "Node.js", 
    "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Git", "Docker", "AWS"
  ]

  const interests = [
    { icon: Code, text: "Clean Code Architecture" },
    { icon: Lightbulb, text: "Problem Solving" },
    { icon: Coffee, text: "Coffee & Code" }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Profile Section */}
          <div className="lg:col-span-1 animate-slide-in-left">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="Jenil Gajera" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold mb-1">Jenil Gajera</h2>
                    <p className="text-white/80 font-mono">MERN Stack Developer</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>1+ years experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="mt-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">What I Love</h3>
                <div className="space-y-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <interest.icon className="h-4 w-4 mr-3 text-accent" />
                      <span>{interest.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-right">
            
            {/* Bio */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">My Journey</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate MERN Stack Developer with over 1 year of experience in creating 
                    modern, scalable web applications. My journey in software development started with 
                    a curiosity about how websites work, and it has evolved into a deep passion for 
                    building exceptional digital experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and love 
                    working with cutting-edge technologies. I believe in writing clean, maintainable 
                    code and creating user interfaces that are both beautiful and functional.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or enjoying a good cup of coffee while solving complex problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                      </div>
                      <p className="text-accent font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}