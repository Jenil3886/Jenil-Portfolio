import { RESOURCES } from '../lib/constants';
import { Project } from '@/types/common';
import GajeraFilms from '@/assets/images.webp';
// import StudyFinds from '@/assets/study-finds.webp';
import YoutubeClone from '@/assets/images2.webp';

export const PROJECTS: Project[] = [
  {
    title: 'Gajera Films',
    subTitle: 'Cinematic Photography & Filmmaking Web Page',
    preview: GajeraFilms,
    github: 'https://github.com/Jenil3886/Gajera-Films',
    liveUrl: 'http://gajera-films.netlify.app/',
    details: [
      'Built a complete Portfolio with product catalog.',
      'Implemented user authentication, product search, filtering, and sorting capabilities.',
      'Integrated payment gateway and order management system with email notifications.',
    ],
    technologies: [
      RESOURCES.NEXTJS,
      RESOURCES.TYPESCRIPT,
      RESOURCES.TAILWIND_CSS,
      RESOURCES.EMAILJS
    ],
  },
  {
    title: 'Youtube Clone',
    subTitle: 'Youtube Clone',
    liveUrl: '',
    preview: YoutubeClone,
    github: 'https://github.com/jenilgajera/youtube-clone',
    details: [
      'Developed a youtube clone application with drag-and-drop interface for organizing tasks.',
      'Implemented features like youtube search, video playback, and video suggestions.',
      'Created a responsive design that works seamlessly across desktop and mobile devices.',
    ],
    technologies: [
      RESOURCES.REACT,
      RESOURCES.SHADCN,
      RESOURCES.TAILWIND_CSS,
      RESOURCES.NODE_JS,
      RESOURCES.EXPRESS,
      RESOURCES.POSTGRESQL,
    ],
  },
  {
    title: 'Study Finds Landing Page',
    subTitle: 'Study Finds Landing Page',
    liveUrl: '',
    preview: '/project-3.jpg',
    github: 'https://github.com/jenilgajera/study-finds',
    details: [
      'Developed a study finds application with drag-and-drop interface for organizing tasks.',
      'Implemented features like study search, video playback, and video suggestions.',
      'Created a responsive design that works seamlessly across desktop and mobile devices.',
    ],
    technologies: [RESOURCES.REACT, RESOURCES.SHADCN, RESOURCES.TAILWIND_CSS],
  },
];