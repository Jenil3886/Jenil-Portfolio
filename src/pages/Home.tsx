import { Button } from "../components/ui/button"
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react"
// import { Link } from "react-router-dom"
import heroBg from "../assets/hero-bg.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-muted-foreground mb-2">Hi, I'm</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent font-mono">
                Jenil Gajera
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-mono">
              <span className="border-r-2 border-primary animate-typing overflow-hidden whitespace-nowrap">
                MERN Stack Developer
              </span>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating modern, scalable web applications using 
              <span className="text-primary font-semibold"> MongoDB</span>,
              <span className="text-primary font-semibold"> Express.js</span>,
              <span className="text-primary font-semibold"> React.js</span>, and
              <span className="text-primary font-semibold"> Node.js</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="hero"
                className="animate-glow-pulse group"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="hero"
                className="hover:border-primary group"
                asChild
              >
                {/* <link href="/contact"> */}
                  <Mail className="mr-2 h-5 w-5 group-hover:text-primary" />
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {/* </link> */}
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" asChild>
                <a href="https://github.com/jenilgajera" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" asChild>
                <a href="https://linkedin.com/in/jenilgajera" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}