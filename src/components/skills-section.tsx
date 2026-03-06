'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Globe, Server } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { SKILLS } from '@/data/skills';
import { CONSTANTS } from '@/lib/constants';
import { IconRenderer } from '@/components/icon-renderer';
import { fadeInUp, staggerContainer, viewport } from '@/lib/motion';
import { TerminalSection } from '@/components/terminal-section';

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
      // title: 'Database & Tools',
      title: 'Tools',
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
      className="min-h-screen py-20 bg-gradient-to-b from-background via-background to-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSection title="Skills & Expertise" path="~/portfolio/skills" command="ls -la stack/">
          <p className="terminal-output mb-8">Technical proficiencies and continuous learning journey.</p>

        {/* Skills Categories */}
        <motion.div
          className="space-y-12 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.45 }} className="space-y-5">
              <div className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="text-xl font-semibold text-emerald-400">
                  {category.title.replace(' Development', '')}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: skillIndex * 0.03 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="terminal-shell hover:border-primary/70 transition-colors">
                      <CardContent className="flex items-center gap-4 py-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/80">
                          <IconRenderer icon={skill.icon} className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let&apos;s discuss your project.
          </p>
          <Button size="lg" onClick={() => scrollToSection('#contact')}>
            Contact Me
          </Button>
        </motion.div>
        </TerminalSection>
      </div>
    </section>
  );
}
