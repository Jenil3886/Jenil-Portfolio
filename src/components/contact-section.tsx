'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { PERSONAL_INFO, PERSONAL_INFO_LINKS } from '@/data/personal-info';
import { EMAILJS_DATA } from '@/lib/constants';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '@/lib/motion';
import { TerminalSection } from '@/components/terminal-section';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

// EmailJS configuration - set these in your .env.local
const EMAILJS_SERVICE_ID = EMAILJS_DATA.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = EMAILJS_DATA.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = EMAILJS_DATA.EMAILJS_PUBLIC_KEY;

// Use the social media links from personal-info
const socialLinks = [
  { name: 'GitHub', icon: Github, url: PERSONAL_INFO_LINKS.github },
  { name: 'LinkedIn', icon: Linkedin, url: PERSONAL_INFO_LINKS.linkedIn },
  // { name: 'WhatsApp', icon: ExternalLink, url: PERSONAL_INFO_LINKS.whatsapp },
];

export function ContactSection() {
  const { ref } = useSectionInView('Contact');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: 'Email service not configured',
        description: 'EmailJS keys are missing. Please try again later.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Your message could not be sent. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <TerminalSection title={"Let's Connect"} path="~/portfolio/contact" command="send-message --new">
          <p className="terminal-output mb-8">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          {/* <Card className="shadow-lg hover-scale"> */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} whileHover={{ y: -5 }}>
          <Card className="terminal-shell">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription>
                I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="space-y-6">
            {/* <Card className="shadow-lg hover-scale"> */}
            <Card className="terminal-shell">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <Label>Email</Label>
                      <p className="text-sm">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <Label>Phone</Label>
                      <p className="text-sm">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <Label>Location</Label>
                      <p className="text-sm">Surat, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Connect with me</Label>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        whileHover={{ y: -3, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="shadow-lg hover-scale bg-gradient-to-br from-primary/10 via-background to-background"> */}
            <Card className="terminal-shell bg-gradient-to-br from-primary/10 via-background to-background">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Available for Freelance</h3>
                <p className="text-muted-foreground mb-4">
                  I&apos;m currently available for freelance projects and open to new opportunities.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        </TerminalSection>
      </div>
    </section>
  );
}
                    
