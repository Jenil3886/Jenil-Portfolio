'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { PERSONAL_INFO, PERSONAL_INFO_LINKS } from '@/data/personal-info';
import heroBg from "@/assets/hero-bg.jpg"
import { getResumeDownloadLink } from '@/lib/utils';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function HeroSection() {
  const { ref } = useSectionInView('Home', 0.5);
  
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "6+" },
    { label: "Technologies Mastered", value: "10+" }
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
  }

  return (
      <div ref={ref} id="home" className="min-h-screen bg-gradient-bg">
    <section  className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {PERSONAL_INFO.designation}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting innovative web solutions with MongoDB, Express.js, React, and Node.js. 
              Passionate about clean code and exceptional user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="hover-scale" 
              onClick={downloadResume}
            >
              <FileText className="mr-2 h-5 w-5" /> Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-scale"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={PERSONAL_INFO_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={PERSONAL_INFO_LINKS.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 hover-scale">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
