'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from './use-active-section';
import { navLinks } from '@/components/header';

export type SectionName = (typeof navLinks)[number]['name'];

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
