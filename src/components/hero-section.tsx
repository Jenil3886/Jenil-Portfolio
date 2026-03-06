'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, TerminalSquare, ChevronRight } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { PERSONAL_INFO, PERSONAL_INFO_LINKS } from '@/data/personal-info';
import { getResumeDownloadLink } from '@/lib/utils';
import { fadeInUp, staggerContainer, viewport } from '@/lib/motion';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function HeroSection() {
  const { ref } = useSectionInView('Home', 0.5);

  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '6+' },
    { label: 'Technologies Mastered', value: '10+' },
  ];

  const commandLines = [
    `$ whoami`,
    `${PERSONAL_INFO.fullName}`,
    `$ role --current`,
    `${PERSONAL_INFO.designation}`,
    `$ stack --primary`,
    `MongoDB • Express • React • Node.js • Next.js`,
  ];

  const downloadResume = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const downloadLink = getResumeDownloadLink();
      const response = await fetch('/jenil-gajera-resume.pdf');
      
      if (!response.ok) {
        // Try alternative path
        const altResponse = await fetch('/resume.pdf');
        if (!altResponse.ok) {
          throw new Error('Resume file not found');
        }
        const blob = await altResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = downloadLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
        return;
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = downloadLink;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Resume file not found. Please ensure the PDF exists in the public folder.');
    }
  };

  return (
    <section ref={ref} id="home" className="min-h-screen relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] items-start"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.55 }} className="rounded-2xl border border-emerald-500/30 bg-zinc-950 shadow-2xl shadow-emerald-900/20 overflow-hidden">
            <div className="flex items-center justify-between border-b border-emerald-500/20 bg-zinc-900/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-300/80 font-mono">
                <TerminalSquare className="h-4 w-4" />
                jenil@portfolio:~ /dev/hero
              </div>
            </div>

            <div className="p-5 md:p-7 font-mono text-sm md:text-base space-y-2">
              {commandLines.map((line, index) => {
                const isCommand = line.startsWith('$');
                return (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className={isCommand ? 'text-emerald-300' : 'text-zinc-200 pl-4'}
                  >
                    {isCommand ? <span className="text-emerald-500 mr-2">$</span> : null}
                    {isCommand ? line.slice(1).trim() : line}
                  </motion.p>
                );
              })}

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewport}
                transition={{ delay: 0.7 }}
                className="text-emerald-300 pt-2"
              >
                <span className="text-emerald-500 mr-2">$</span>build --beautiful-experiences
                <span className="inline-block ml-1 h-4 w-2 bg-emerald-400 animate-pulse align-middle" />
              </motion.p>
            </div>

            <div className="border-t border-emerald-500/20 px-5 md:px-7 py-4 bg-zinc-900/40">
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                I build fast, scalable and clean full stack products with real business impact.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white" onClick={downloadResume}>
                  <FileText className="mr-2 h-5 w-5" /> Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-200"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ duration: 0.55 }} className="space-y-4">
            <div className="rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5">
              <p className="text-sm text-muted-foreground mb-3">Profile</p>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">{PERSONAL_INFO.fullName}</h1>
              <p className="text-primary mt-2">{PERSONAL_INFO.designation}</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 space-y-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5">
              <p className="text-sm text-muted-foreground mb-3">Connect</p>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href={PERSONAL_INFO_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href={PERSONAL_INFO_LINKS.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </motion.a>
              </div>
            </div>

            <motion.button
              onClick={() => scrollToSection('#about')}
              whileHover={{ x: 3 }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-secondary/40 py-3 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
            >
              Explore More <ChevronRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
