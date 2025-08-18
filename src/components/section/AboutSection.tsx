import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin, Calendar, Code, Coffee, Gamepad2, Music } from "lucide-react";
import profileImage from "../../assets/jenilProfile.jpeg";

export default function AboutSection() {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js"
    }
  ];

  const skills = [
    "MongoDB", "Express.js", "React.js", "Node.js", 
    "JavaScript", "HTML5", "CSS3", "Git", "REST APIs", "JWT"
  ];

  const interests = [
    { icon: Code, label: "Open Source" },
    { icon: Coffee, label: "Coffee Brewing" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Music, label: "Music Production" }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-background via-background/50 to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="relative mb-6">
                <img
                  src={profileImage}
                  alt="Jenil Gajera"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jenil Gajera</h3>
              <p className="text-muted-foreground mb-4">MERN Stack Developer</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>India</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>1+ Years Experience</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio & Experience */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate MERN Stack Developer with 1+ year of experience in creating 
                  dynamic web applications. I specialize in building scalable solutions using 
                  MongoDB, Express.js, React, and Node.js. My journey in web development started 
                  with a curiosity about how things work on the internet, and it has evolved into 
                  a deep passion for creating user-centric applications that solve real-world problems.
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-medium">{exp.title}</h4>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-sm text-primary mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="hover-scale">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex flex-col items-center text-center hover-scale">
                      <interest.icon className="h-8 w-8 text-primary mb-2" />
                      <span className="text-sm text-muted-foreground">{interest.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}