import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { 
  MessageCircle, 
  Search, 
  HelpCircle, 
  Clock, 
  Code, 
  Briefcase, 
  DollarSign, 
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqCategories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "technical", label: "Technical", icon: Code },
    { id: "business", label: "Business", icon: Briefcase },
    { id: "pricing", label: "Pricing", icon: DollarSign },
    { id: "timeline", label: "Timeline", icon: Clock }
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) along with modern tools like Tailwind CSS, Git, and REST APIs. I'm also familiar with authentication systems, database design, and responsive web development.",
      category: "technical",
      tags: ["MERN", "React", "Node.js", "MongoDB"]
    },
    {
      question: "How long does it take to complete a typical project?",
      answer: "Project timelines vary based on complexity. A simple website takes 1-2 weeks, a medium complexity web app takes 3-4 weeks, and complex applications with multiple features can take 6-8 weeks. I always provide detailed timelines during project discussion.",
      category: "timeline",
      tags: ["Timeline", "Project Duration", "Planning"]
    },
    {
      question: "What is your hourly rate for freelance work?",
      answer: "My hourly rate ranges from $25-50 depending on project complexity and requirements. For fixed-price projects, I provide detailed quotes after understanding the scope. I offer competitive rates while ensuring high-quality deliverables.",
      category: "pricing",
      tags: ["Pricing", "Hourly Rate", "Freelance"]
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! I offer post-launch support including bug fixes, updates, and feature enhancements. I provide 30 days of free support after project completion, and ongoing maintenance packages are available for long-term partnerships.",
      category: "business",
      tags: ["Support", "Maintenance", "Post-Launch"]
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Absolutely! I can work with existing React/Node.js applications, add new features, fix bugs, optimize performance, and refactor code. I'm experienced in reading and understanding different coding styles and architectures.",
      category: "technical",
      tags: ["Existing Code", "Refactoring", "Bug Fixes"]
    },
    {
      question: "What's your development process?",
      answer: "I follow an agile approach: 1) Requirements gathering and planning, 2) UI/UX design and approval, 3) Development in sprints with regular updates, 4) Testing and quality assurance, 5) Deployment and handover. You'll receive regular progress updates throughout.",
      category: "business",
      tags: ["Process", "Agile", "Development"]
    },
    {
      question: "Do you handle database design and setup?",
      answer: "Yes, I design and implement database schemas for MongoDB and can work with relational databases too. I ensure proper data modeling, indexing for performance, and implement data validation and security measures.",
      category: "technical",
      tags: ["Database", "MongoDB", "Schema Design"]
    },
    {
      question: "Can you integrate third-party APIs and services?",
      answer: "Definitely! I have experience integrating various APIs including payment gateways (Stripe), authentication services, social media APIs, email services, and custom REST/GraphQL APIs. I ensure secure and efficient integration.",
      category: "technical",
      tags: ["API Integration", "Third-party", "Stripe"]
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const quickContacts = [
    {
      icon: Mail,
      label: "Email Me",
      value: "jenil@example.com",
      action: "mailto:jenil@example.com"
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "+91 XXXXX XXXXX",
      action: "tel:+91XXXXXXXXX"
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      value: "Book a meeting",
      action: "#"
    }
  ];

  return (
    <section id="faq" className="min-h-screen py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FAQ & Quick Answers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to common questions or reach out for personalized assistance
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions, answers, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="hover-scale"
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredFaqs.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or browse different categories
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Quick Contact Sidebar */}
          <div className="space-y-6">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Still have questions?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for? I'm here to help!
                </p>
                
                {quickContacts.map((contact, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start hover-scale"
                    asChild
                  >
                    <a href={contact.action}>
                      <contact.icon className="h-4 w-4 mr-3" />
                      <div className="text-left">
                        <div className="text-sm font-medium">{contact.label}</div>
                        <div className="text-xs text-muted-foreground">{contact.value}</div>
                      </div>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within <span className="text-primary font-medium">2-4 hours</span> during business hours
                </p>
              </CardContent>
            </Card>

            {/* AI Assistant Placeholder */}
            <Card className="hover-scale border-dashed">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">AI Assistant</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon! Chat with an AI assistant for instant answers
                </p>
                <Button variant="outline" size="sm" disabled>
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}