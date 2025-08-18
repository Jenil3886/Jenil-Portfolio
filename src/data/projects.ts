import { RESOURCES } from '../lib/constants';
import { Project } from '@/types/common';

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    subTitle: 'Full Stack Shopping Application',
    preview: '/project-1.jpg', // Add actual preview image path
    github: 'https://github.com/jenilgajera/ecommerce-platform',
    details: [
      'Built a complete e-commerce solution with product catalog, shopping cart, and secure checkout process.',
      'Implemented user authentication, product search, filtering, and sorting capabilities.',
      'Integrated payment gateway and order management system with email notifications.',
    ],
    technologies: [
      RESOURCES.REACT,
      RESOURCES.NODEJS,
      RESOURCES.MONGODB,
      RESOURCES.JAVASCRIPT,
    ],
  },
  {
    title: 'Task Management App',
    subTitle: 'Productivity Tool',
    preview: '/project-2.jpg', // Add actual preview image path
    github: 'https://github.com/jenilgajera/task-manager',
    details: [
      'Developed a task management application with drag-and-drop interface for organizing tasks.',
      'Implemented features like task categorization, priority levels, due dates, and reminders.',
      'Created a responsive design that works seamlessly across desktop and mobile devices.',
    ],
    technologies: [
      RESOURCES.NEXTJS,
      RESOURCES.NODEJS,
      RESOURCES.MONGODB,
      RESOURCES.TAILWIND_CSS,
    ],
  },
  {
    title: 'Social Media Dashboard',
    subTitle: 'Analytics Platform',
    preview: '/project-3.jpg', // Add actual preview image path
    github: 'https://github.com/jenilgajera/social-dashboard',
    details: [
      'Created a comprehensive dashboard for tracking social media metrics across multiple platforms.',
      'Implemented data visualization with charts and graphs for engagement analytics.',
      'Built a customizable reporting system with export capabilities.',
    ],
    technologies: [
      RESOURCES.REACT,
      RESOURCES.NODEJS,
      RESOURCES.JAVASCRIPT,
      RESOURCES.TAILWIND_CSS,
    ],
  },
];