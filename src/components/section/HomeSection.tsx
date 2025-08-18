import { Button } from "../ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroImage from "../../assets/hero-bg.jpg";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HomeSection() {
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "10+" }
  ];

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
              Jenil Gajera
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              MERN Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting innovative web solutions with MongoDB, Express.js, React, and Node.js. 
              Passionate about clean code and exceptional user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="hover-scale">
              Download Resume
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
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
  );
}