import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jenil.gajera@example.com",
      link: "mailto:jenil.gajera@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 12345 67890",
      link: "tel:+911234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      link: "https://wa.me/911234567890",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-200 hover-scale ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow me on social media for updates and tech insights
                </p>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Quick Response Guaranteed</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via WhatsApp or LinkedIn.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Available Hours:</p>
                  <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM IST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}