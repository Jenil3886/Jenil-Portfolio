'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Code, Coffee, Gamepad2, Music } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { ABOUT_SECTIONS, PERSONAL_INFO } from '@/data/personal-info';


export function AboutSection() {
  const { ref } = useSectionInView('About');
  
  const experiences = [
    {
      title: "React Developer",
      company: "CarrerSahi",
      period: "2023",
      description: [
        "Started career as a React Developer",
        "Implemented Redux for scalable state management",
        "Integrated APIs and handled async data flow",
        "Improved UI design and reusable component structure",
        "Understood complete state management lifecycle"
      ]
    },
    {
      title: "Node.js Developer",
      company: "JobWork Platform",
      period: "2023",
      description: [
        "Worked on a pre-built JobWork management system",
        "Handled backend logic using Node.js",
        "Worked with PostgreSQL database operations",
        "Implemented job handling & invoice calculation modules",
        "Fixed frontend UI and small design issues"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Edysor AI",
      period: "2024",
      description: [
        "Developed backend APIs using Node.js",
        "Integrated VAPI Voice Agent for AI automation",
        "Implemented role-based APIs and OAuth flows",
        "Integrated backend APIs in React frontend",
        "Built dynamic UI using Shadcn UI & Tailwind CSS",
        "Performed major SQL-based backend operations"
      ]
    }
  ];

  const interests = [
    { icon: Code, label: "Open Source" },
    { icon: Coffee, label: "Coffee Brewing" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Music, label: "Music Production" }
  ];
  
  return (
    <section ref={ref} id="about" className="min-h-screen py-20 bg-gradient-to-br from-background via-background/50 to-muted/20">
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
          <Card className="lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-primary/20">
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary">
                    {PERSONAL_INFO.fullName.charAt(0)}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{PERSONAL_INFO.fullName}</h3>
              <p className="text-muted-foreground mb-4">{PERSONAL_INFO.designation}</p>
              
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
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  My Journey
                </h3>
                <div className="space-y-4">
                  {ABOUT_SECTIONS.map((section, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">{section}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
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

                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      {exp.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                </div>
              </CardContent>
            </Card>
            
            {/* Interests */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-2">
                      <div className="p-3 rounded-full bg-primary/10">
                        <interest.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm">{interest.label}</span>
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
