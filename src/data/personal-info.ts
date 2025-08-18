import { LABELS } from '../lib/constants';
import { VALUES } from '@/lib/values';
import { removeSpaces } from '@/lib/utils';
import { Icon } from '@/types/common';

export const PERSONAL_INFO = {
  fullName: 'Jenil Gajera',
  nickName: 'Jenil',
  designation: 'MERN Stack Developer',
  email: 'jenilgajera@gmail.com',
  phone: '98765 43210',
  yearOfExp: 3,
};

export const PERSONAL_INFO_LINKS = {
  phone: `tel:+${VALUES.PHONE_CODE}${removeSpaces(PERSONAL_INFO.phone)}`,
  whatsapp: `tel:+${VALUES.PHONE_CODE}${removeSpaces(PERSONAL_INFO.phone)}`,
  email: `mailto:${PERSONAL_INFO.email}`,
  linkedIn: 'https://www.linkedin.com/in/jenilgajera',
  github: 'https://github.com/jenilgajera',
  telegram: 'https://t.me/jenilgajera',
};

export const ABOUT_SECTIONS = [
  "I'm Jenil Gajera, a passionate MERN Stack Developer with 3+ years of experience in crafting dynamic web applications. I specialize in React for intuitive front-end experiences and Node.js/Express for robust back-end solutions, while leveraging databases like MongoDB and PostgreSQL to deliver scalable projects.",
  'From designing responsive UIs to architecting efficient APIs, I thrive in solving complex problems with clean, maintainable code. My tech stack includes AWS, TypeScript, and more—ensuring cutting-edge solutions tailored to client needs.',
  "With a commitment to innovation and continuous learning, I'm always eager to explore new technologies and create impactful digital experiences. Let's connect and build something extraordinary together!",
];

export const SOCIAL_MEDIA_ICONS: Icon[] = [
  {
    label: LABELS.WHATSAPP,
    icon: () => null, // Replace with actual WhatsApp icon component
    url: PERSONAL_INFO_LINKS.whatsapp,
  },
  {
    label: LABELS.LINKEDIN,
    icon: () => null, // Replace with actual LinkedIn icon component
    url: PERSONAL_INFO_LINKS.linkedIn,
  },
  { 
    label: LABELS.GITHUB, 
    icon: () => null, // Replace with actual GitHub icon component
    url: PERSONAL_INFO_LINKS.github 
  },
  {
    label: LABELS.TELEGRAM,
    icon: () => null, // Replace with actual Telegram icon component
    url: PERSONAL_INFO_LINKS.telegram,
  },
];