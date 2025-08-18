import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Trophy, Award, Star, Target, Zap, Users, Coffee, Code2 } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "MERN Stack Master",
      description: "Successfully completed 15+ full-stack projects",
      date: "2024",
      category: "Technical",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Award,
      title: "MongoDB Certified Developer",
      description: "Certified in MongoDB database design and operations",
      date: "2023",
      category: "Certification",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Star,
      title: "GitHub Star Collector",
      description: "Received 100+ stars across various repositories",
      date: "2024",
      category: "Recognition",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Target,
      title: "Perfect Client Satisfaction",
      description: "Maintained 5-star rating on all freelance projects",
      date: "2024",
      category: "Professional",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Mastered React.js in just 2 months",
      date: "2022",
      category: "Learning",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Users,
      title: "Team Collaborator",
      description: "Successfully led 3 team projects",
      date: "2023",
      category: "Leadership",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: Coffee,
      title: "Coffee-Powered Coder",
      description: "Consumed 500+ cups of coffee while coding",
      date: "Ongoing",
      category: "Fun",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Code2,
      title: "Code Quality Champion",
      description: "Maintained clean code standards across all projects",
      date: "2024",
      category: "Technical",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10"
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed", icon: Trophy },
    { number: "3", label: "Certifications", icon: Award },
    { number: "100+", label: "GitHub Stars", icon: Star },
    { number: "5★", label: "Client Rating", icon: Target }
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 bg-gradient-to-br from-muted/10 via-background to-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements & Milestones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating the journey with key accomplishments and recognitions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="hover-scale group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center relative z-10">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Badge Icon */}
                <div className={`inline-flex p-4 rounded-full ${achievement.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Category & Date */}
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="outline" className="group-hover:border-primary transition-colors">
                    {achievement.category}
                  </Badge>
                  <span className="text-muted-foreground">{achievement.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Progress */}
        <Card className="hover-scale">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Current Goals & Progress</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  2024 Objectives
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Complete 20 Projects</span>
                    <span className="text-sm text-primary">15/20</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Learn 3 New Technologies</span>
                    <span className="text-sm text-primary">2/3</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Upcoming Certifications
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">AWS Developer Associate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Node.js Certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">React Advanced Patterns</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}