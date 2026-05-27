// src/services/api.ts
import axios from 'axios';
import { Project, ContactFormInput } from '../types';

const getBaseURL = () => {
  if (process.env.NEXT_PUBLIC_BACKEND_URL) {
    return process.env.NEXT_PUBLIC_BACKEND_URL;
  }
  
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000/api';
  }
  
  return 'https://myportfolio-kvyg.onrender.com/api';
};

const API = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
});

API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// Projects Endpoints
export const fetchProjects = () => API.get<Project[]>('/projects');

// Contact Form Endpoint
export const sendMessage = (data: ContactFormInput) => API.post('/messages', data);

// Dynamic About Endpoint
export const fetchAbout = () => API.get('/about');

// Single Project Endpoint
export const fetchProjectById = (id: string) => API.get<Project>(`/projects/${id}`);
