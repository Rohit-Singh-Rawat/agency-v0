import heliaChat from '@/public/images/projects/heliaChat.png';
import instadapp from '@/public/images/projects/Instadapp.png';
import konnectUp from '@/public/images/projects/konnectUpp.png';
import stratoCore from '@/public/images/projects/stratoCore.png';
import taskFlow from '@/public/images/projects/taskFlow.png';
import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  description: string;  
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    title: 'Helia',
    description: 'An AI-powered chatbot app for parents, offering expert guidance across digital safety, emotional development, family bonding, and mindfulness.',
    image: heliaChat
  },
  {
    title: 'Instadapp',
    description: 'Manage multiple DeFi protocols and positions utilizing a DeFi Smart Account or Avocado Smart Wallet. Everything you need in one unified platform.',
    image: instadapp
  },
  {
    title: 'KonnectUp',
    description: 'Connect with mentors and get expert guidance to accelerate your career growth and professional development.',
    image: konnectUp
  },
  {
    title: 'StratoCore',
    description: 'A powerful content management system for building and managing modern websites with ease.',
    image: stratoCore
  },
  {
    title: 'TaskFlow',
    description: 'A comprehensive CRM solution for managing customer relationships, sales pipelines, and business operations.',
    image: taskFlow
  }
];
