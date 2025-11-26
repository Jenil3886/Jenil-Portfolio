import { CONSTANTS, RESOURCES } from '../lib/constants';
import { Experience } from '@/types/common';

export const EXP_SECTIONS: Experience[] = [
  {
    company: {
      name: 'Karmadhi Solutions',
      url: 'https://techsolutions.com',
      logo: '/company-logo-1.png', // Add actual logo path
      location: 'Surat, Gujarat, India',
    },
    roles: [
      {
        title: 'Full Stack Developer',
        startDate: '2025-04-31T18:30:00.000Z',
        endDate: CONSTANTS.CURRENT,
        details: ['Working as a Full Stack Developer in MERN technologies'],
        skills: [
          RESOURCES.NESTJS,
          RESOURCES.REACT,
          RESOURCES.NODE_JS,
          RESOURCES.MONGODB,
          RESOURCES.EXPRESS,
          RESOURCES.MONGODB,
          RESOURCES.REDUX,
          RESOURCES.POSTGRESQL,
          RESOURCES.MYSQL,
        ],
      },
    ],
  },
  {
    company: {
      name: 'Karmadhi Solutions',
      url: 'https://webinnovators.com',
      logo: '/company-logo-2.png', // Add actual logo path
      location: 'surat, Gujarat, India',
    },
    roles: [
      {
        title: 'ReactJS Developer',
        startDate: '2024-08-1T18:30:00.000Z',
        endDate: '2025-04-30T18:30:00.000Z',
        details: [
          'Worked as a Full Stack Web Developer, with variety of tools & technologies like JavaScript, React, Node.js, Express, MongoDB, etc.',
        ],
        skills: [
          RESOURCES.REACT,
          RESOURCES.NODE_JS,
          RESOURCES.JAVASCRIPT,
          RESOURCES.MONGODB,
        ],
      },
    ],
  },
];