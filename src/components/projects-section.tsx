'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { PROJECTS } from '@/data/projects';
import { fadeInUp, staggerContainer, viewport } from '@/lib/motion';
import { TerminalSection } from '@/components/terminal-section';

// Convert the PROJECTS data to the format needed by the component
const projects = PROJECTS.map(project => ({
  title: project.title,
  description: project.subTitle,
  details: project.details || [],
  preview: project.preview,
  liveUrl: project.liveUrl,
  technologies: project.technologies ? project.technologies.map(tech => tech?.title || 'Unknown') : [],
  githubUrl: project.github,
}));

export function ProjectsSection() {
  const { ref } = useSectionInView('Projects');
  return (
    <section ref={ref} id="projects" className="min-h-screen py-20 bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSection title="Featured Projects" path="~/portfolio/projects" command="git log --oneline --graph">
          <p className="terminal-output mb-8">A showcase of my recent work and technical expertise.</p>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {projects.map((project, index) => {
            // Handle both object (with .src) and string previews
            const previewSrc = typeof project.preview === 'string' 
              ? project.preview 
              : (project.preview?.src || null);
            
            return (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -8 }}
            >
            <Card className="group overflow-hidden terminal-shell hover:border-primary/60 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  {previewSrc ? (
                    <img
                      src={previewSrc}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No preview</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              
              <CardContent className="p-3">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                {project.details && project.details.length > 0 && (
                  <ul className="text-muted-foreground text-sm mb-4 space-y-1.5 list-disc list-inside">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-3 pb-3 pt-0 flex justify-between">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.liveUrl ? (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
            </motion.div>
            );
          })}
        </motion.div>
        </TerminalSection>
      </div>
    </section>
  );
}
