'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Code, Coffee, Gamepad2, Music } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { ABOUT_SECTIONS, PERSONAL_INFO } from '@/data/personal-info';
import jenilImage from '@/assets/jenil1.png';
import Image from 'next/image';

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
          <Card className="lg:col-span-1 overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <CardContent className="p-8 text-center relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
              
              {/* Profile Image */}
              <div className="relative mb-6 z-10">
                <div className="relative w-40 h-40 mx-auto">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl animate-pulse" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 ring-4 ring-background">
                    <Image 
                      src={jenilImage} 
                      alt="Jenil Gajera" 
                      width={160} 
                      height={160} 
                      className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-100" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Name & Title */}
              <div className="relative z-10 mb-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {PERSONAL_INFO.fullName}
                </h3>
                <p className="text-sm font-medium text-primary mb-1">{PERSONAL_INFO.designation}</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-3" />
              </div>
              
              {/* Info Items */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors duration-200 border border-border/50">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors duration-200 border border-border/50">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{PERSONAL_INFO.yearOfExp}+ Years Experience</span>
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
