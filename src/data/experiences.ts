import { CONSTANTS, RESOURCES } from '../lib/constants';
import { Experience } from '@/types/common';

export const EXP_SECTIONS: Experience[] = [
  {
    company: {
      name: 'Tech Solutions',
      url: 'https://techsolutions.com',
      logo: '/company-logo-1.png', // Add actual logo path
      location: 'Mumbai, Maharashtra, India',
    },
    roles: [
      {
        title: 'Full Stack Developer',
        startDate: '2023-05-31T18:30:00.000Z',
        endDate: CONSTANTS.CURRENT,
        details: ['Working as a Full Stack Developer in MERN technologies'],
        skills: [
          RESOURCES.NEXTJS,
          RESOURCES.REACT,
          RESOURCES.NODEJS,
          RESOURCES.MONGODB,
        ],
      },
    ],
  },
  {
    company: {
      name: 'Web Innovators',
      url: 'https://webinnovators.com',
      logo: '/company-logo-2.png', // Add actual logo path
      location: 'Ahmedabad, Gujarat, India',
    },
    roles: [
      {
        title: 'MERN Stack Developer',
        startDate: '2021-05-31T18:30:00.000Z',
        endDate: '2023-04-30T18:30:00.000Z',
        details: [
          'Worked as a Full Stack Web Developer, with variety of tools & technologies like JavaScript, React, Node.js, Express, MongoDB, etc.',
        ],
        skills: [
          RESOURCES.REACT,
          RESOURCES.NODEJS,
          RESOURCES.JAVASCRIPT,
          RESOURCES.MONGODB,
        ],
      },
    ],
  },
];