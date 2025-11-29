'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
      title: 'Frontend Development',
      icon: Globe,
      skills: (SKILLS[CONSTANTS.FRONTEND] || []).map((skill) => ({
        name: skill?.title || 'Unknown',
        icon: skill?.icon || null,
      })),
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: (SKILLS[CONSTANTS.BACKEND] || []).map((skill) => ({
        name: skill?.title || 'Unknown',
        icon: skill?.icon || null,
      })),
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: (SKILLS[CONSTANTS.TOOLS] || []).map((skill) => ({
        name: skill?.title || 'Unknown',
        icon: skill?.icon || null,
      })),
    },
  ];

  

  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-br from-background via-muted/10 to-background"
    >
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
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-5">
              <div className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="text-xl font-semibold text-emerald-400">
                  {category.title.replace(' Development', '')}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="border-border/60 bg-card/80 hover:bg-card hover:border-primary/70 transition-colors"
                  >
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/80">
                        <IconRenderer icon={skill.icon} className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let&apos;s discuss your project.
          </p>
          <Button size="lg" onClick={() => scrollToSection('#contact')}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

