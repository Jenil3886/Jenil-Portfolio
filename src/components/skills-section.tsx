'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Database, Globe, Server, Code } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { SKILLS } from '@/data/skills';
import { CONSTANTS } from '@/lib/constants';
import { IconRenderer } from '@/components/icon-renderer';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function SkillsSection() {
  const { ref } = useSectionInView('Skills');
  
  // Convert the SKILLS data to the format needed by the component
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: (SKILLS[CONSTANTS.FRONTEND] || []).map(skill => ({
        name: skill?.title || 'Unknown',
        level: 90,
        description: "Building dynamic user interfaces"
      }))
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: (SKILLS[CONSTANTS.BACKEND] || []).map(skill => ({
        name: skill?.title || 'Unknown',
        level: 85,
        description: "Server-side development"
      }))
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: (SKILLS[CONSTANTS.TOOLS] || []).map(skill => ({
        name: skill?.title || 'Unknown',
        level: 80,
        description: "Development tools and utilities"
      }))
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
    <section ref={ref} id="skills" className="min-h-screen py-20 bg-gradient-to-br from-background via-muted/10 to-background">
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
        <Card className="mb-16 hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Code className="h-6 w-6 text-primary" />
              Certifications & Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-primary/50 transition-colors duration-200">
                  <h4 className="font-medium mb-1">{cert.name}</h4>
                  <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{cert.year}</span>
                    <span className={cert.status === "Completed" ? "text-green-500" : "text-amber-500"}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Interested in working together? Let's discuss your project.</p>
          <Button 
            size="lg" 
            className="hover-scale"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

// SkillList component removed as it's not being used in the main component
