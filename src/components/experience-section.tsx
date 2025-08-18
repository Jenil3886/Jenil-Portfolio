'use client';

import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { EXP_SECTIONS } from '@/data/experiences';
import { CONSTANTS } from '@/lib/constants';
import { IconRenderer } from '@/components/icon-renderer';

// Convert the EXP_SECTIONS data to the format needed by the component
const experiences = EXP_SECTIONS.flatMap(exp => {
  return exp.roles.map(role => {
    const startDate = new Date(role.startDate);
    const endDate = role.endDate === CONSTANTS.CURRENT 
      ? 'Present' 
      : new Date(role.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    const formattedDate = `${startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${endDate}`;
    
    // Skip the icon rendering for now to fix the error
    const mappedSkills = role.skills.map(skill => ({
      ...skill,
      icon: null // Temporarily set to null to avoid errors
    }));
    
    return {
      icon: <Briefcase />,
      date: formattedDate,
      title: role.title,
      company: exp.company.name,
      description: role.details.join(' '),
      skills: mappedSkills,
    };
  });
});

export function ExperienceSection() {
  const { ref } = useSectionInView('Experience');
  return (
    <section ref={ref} id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A timeline of my professional and educational experiences.
          </p>
        </motion.div>
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start md:items-center"
              >
                {/* Desktop: Alternating sides */}
                <div className="hidden md:flex w-1/2 pr-8 text-right order-1">
                  {index % 2 === 0 && (
                     <TimelineContent exp={exp} />
                  )}
                </div>

                {/* Mobile: All on right side */}
                <div className="flex md:hidden w-full ml-10 order-2">
                   <TimelineContent exp={exp} />
                </div>
                
                {/* Icon */}
                <div className="z-10 absolute left-3 md:left-1/2 top-1 md:top-auto flex items-center order-1 bg-primary shadow-xl w-10 h-10 rounded-full text-primary-foreground justify-center -translate-x-1/2">
                  {exp.icon}
                </div>

                {/* Desktop: Alternating sides */}
                <div className="hidden md:flex w-1/2 pl-8 order-3">
                   {index % 2 !== 0 && (
                     <TimelineContent exp={exp} />
                   )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const TimelineContent = ({exp}: {exp: (typeof experiences)[0]}) => {
  return (
    <div className="rounded-lg shadow-lg w-full px-6 py-4 bg-card">
      <p className="mb-2 text-sm text-muted-foreground">{exp.date}</p>
      <h3 className="mb-2 font-bold text-card-foreground text-lg">{exp.title}</h3>
      <h4 className="mb-3 font-semibold text-primary">{exp.company}</h4>
      <p className="text-sm leading-snug tracking-wide text-muted-foreground">
        {exp.description}
      </p>
    </div>
  )
}
                    