import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Award, BookOpen, Code2, Trophy } from "lucide-react";

export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "2022",
      title: "Started Web Development Journey",
      description: "Began learning HTML, CSS, and basic JavaScript fundamentals",
      icon: BookOpen,
      category: "Learning",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      year: "2022",
      title: "Frontend Mastery",
      description: "Deep dive into React.js and modern frontend development",
      icon: Code2,
      category: "Skill",
      technologies: ["React.js", "ES6+", "Responsive Design"]
    },
    {
      year: "2023",
      title: "Backend Development",
      description: "Learned Node.js, Express.js, and database management",
      icon: Code2,
      category: "Skill",
      technologies: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      year: "2023",
      title: "First MERN Project",
      description: "Built my first full-stack application using MERN stack",
      icon: Trophy,
      category: "Achievement",
      technologies: ["MERN Stack", "Authentication", "REST APIs"]
    },
    {
      year: "2023",
      title: "MongoDB Certification",
      description: "Completed MongoDB Developer Certification",
      icon: Award,
      category: "Certification",
      technologies: ["MongoDB", "Database Design", "Aggregation"]
    },
    {
      year: "2024",
      title: "Freelance Developer",
      description: "Started working as a freelance MERN stack developer",
      icon: Trophy,
      category: "Career",
      technologies: ["Freelancing", "Client Projects", "MERN Stack"]
    },
    {
      year: "2024",
      title: "Advanced Skills",
      description: "Learning advanced concepts like microservices and cloud deployment",
      icon: Code2,
      category: "Learning",
      technologies: ["Docker", "AWS", "Microservices"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Learning": return "bg-blue-500/10 text-blue-600 border-blue-200";
      case "Skill": return "bg-green-500/10 text-green-600 border-green-200";
      case "Achievement": return "bg-purple-500/10 text-purple-600 border-purple-200";
      case "Certification": return "bg-yellow-500/10 text-yellow-600 border-yellow-200";
      case "Career": return "bg-red-500/10 text-red-600 border-red-200";
      default: return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  return (
    <section id="timeline" className="min-h-screen py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tech Journey Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My learning path and major milestones in web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20"></div>
          
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${getCategoryColor(event.category)}`}>
                        <event.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {event.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Center Circle with Year */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="text-center">
                  <Calendar className="h-4 w-4 text-primary mx-auto mb-1" />
                  <span className="text-xs font-bold text-primary">{event.year}</span>
                </div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="text-center mt-16">
          <Card className="inline-block hover-scale">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">What's Next?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Continuing to learn and grow as a developer
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-primary/10">Next.js</Badge>
                <Badge variant="outline" className="bg-primary/10">TypeScript</Badge>
                <Badge variant="outline" className="bg-primary/10">GraphQL</Badge>
                <Badge variant="outline" className="bg-primary/10">Cloud Architecture</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}