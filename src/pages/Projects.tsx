import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ExternalLink, Github, Zap, Database, Globe, ShoppingCart, MessageSquare, Calendar } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with MERN stack and Stripe API.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/jenilgajera/ecommerce",
      icon: ShoppingCart,
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      description: "Modern chat application with real-time messaging, file sharing, and group chats. Features Socket.io for real-time communication.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/jenilgajera/chat-app",
      icon: MessageSquare,
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Comprehensive project management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      liveUrl: "https://task-manager-demo.com",
      githubUrl: "https://github.com/jenilgajera/task-manager",
      icon: Calendar,
      featured: false
    },
    {
      id: 4,
      title: "Weather Analytics App",
      description: "Weather tracking application with beautiful data visualizations, location-based forecasts, and historical weather data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "Chart.js", "OpenWeather API", "Express"],
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/jenilgajera/weather-app",
      icon: Globe,
      featured: false
    },
    {
      id: 5,
      title: "Inventory Management System",
      description: "Complete inventory management solution for small businesses with barcode scanning, low stock alerts, and reporting.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://inventory-demo.com",
      githubUrl: "https://github.com/jenilgajera/inventory",
      icon: Database,
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder for developers and designers with customizable themes and components.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://portfolio-builder.com",
      githubUrl: "https://github.com/jenilgajera/portfolio-builder",
      icon: Zap,
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen pt-20 bg-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-primary">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-2 lg:hidden">
                      <Button size="sm" variant="default" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-primary">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-0 bg-card/30 backdrop-blur-sm"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-32">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-full p-1.5">
                        <project.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-2">
                      <Button size="sm" variant="default" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}