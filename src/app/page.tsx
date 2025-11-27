import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { PERSONAL_INFO, PERSONAL_INFO_LINKS } from '@/data/personal-info';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.fullName,
    jobTitle: PERSONAL_INFO.designation,
    url: 'https://jenilgajera.netlify.app',
    image: 'https://jenilgajera.netlify.app/og-image.jpg',
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    sameAs: [
      PERSONAL_INFO_LINKS.linkedIn,
      PERSONAL_INFO_LINKS.github,
      PERSONAL_INFO_LINKS.telegram,
    ],
    knowsAbout: [
      'MERN Stack Development',
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'Full Stack Development',
      'Web Development',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Educational Institution',
    },
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jenil Gajera Portfolio',
    url: 'https://jenilgajera.netlify.app',
    description: 'Portfolio of Jenil Gajera - Expert MERN Stack Developer',
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.fullName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jenilgajera.netlify.app/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <div className="flex flex-col min-h-dvh bg-background">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
