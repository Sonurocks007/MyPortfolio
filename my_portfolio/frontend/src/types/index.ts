// src/types/index.ts

export interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription?: string;
  imageUrl?: string;
  imageUrls?: string[];
  images?: string[];
  techStack?: string[];
  features?: string[];
  demoLink?: string;
  repoLink?: string;
}

export interface SkillCategory {
  _id: string;
  category: string;
  items: string[];
}

export interface Experience {
  _id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Achievement {
  _id: string;
  title: string;
  description: string;
}

export interface Certification {
  _id: string;
  name: string;
  issuer: string;
  link?: string;
}

export interface AboutData {
  skills: SkillCategory[];
  experience: Experience[];
  achievements: Achievement[];
  certifications: Certification[];
  currentFocus: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

