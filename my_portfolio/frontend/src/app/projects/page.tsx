"use client";

import { useEffect, useState } from "react";
import { fetchProjects } from "../../services/api";
import { Project } from "../../types";
import ProjectCard from "../../components/ui/project-card";
import { motion } from "framer-motion";

const fallbackProjects: Project[] = [
  {
    _id: "p1",
    title: "E-Commerce Platform — Storefront + Admin Panel",
    description: "Built a full-featured multi-department e-commerce storefront (Womenswear, Menswear, Kidswear, Accessories, Bags, Shoes, Sale) with dynamic department landing pages, product listing with advanced filter/sort drawers, image-zoom product detail, vendor store pages, and a cart with localStorage persistence, size-swap merge logic, and full checkout flow. Developed comprehensive authentication flows with OTP verification and reCAPTCHA protection. Built the Admin Panel with Recharts/ApexCharts dashboards, full CRUD for Products, Categories, Sub-Categories, Attributes, and Coupons using TanStack Table with server-side pagination.",
    shortDescription: "Full-Featured Multi-Department E-Commerce Hub with Admin Panel, Vendor Management & 5-Language Support.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    techStack: ["Next.js 16", "React 19", "TypeScript", "TanStack React Query", "TanStack Table", "Redux Toolkit", "Tailwind CSS v4", "Recharts", "Firebase", "Formik", "Yup"],
    demoLink: "https://ecommerce-demo.vercel.app",
    repoLink: "https://github.com/Sonurocks007"
  },
  {
    _id: "p2",
    title: "LeadTracyz — Real-Time Multi-Tenant Lead Management SaaS",
    description: "Architected and delivered a Turborepo monorepo (pnpm workspaces) with three apps — web-app (company/staff portal), admin-panel (super-admin), backend — and shared packages (@leadtracz/types, @leadtracz/utils, @leadtracz/ui) for DRY cross-app consistency. Built the core lead management engine with full CRUD, advanced multi-filter search, bulk CSV/Excel import-export via Papaparse, PDF export per lead via pdf-lib, lead transfer between staff, and configurable custom lead fields per company. Implemented SSE real-time engine with auto-reconnect, Firebase Cloud Messaging for push notifications, and granular RBAC permission system.",
    shortDescription: "Turborepo Monorepo SaaS CRM with SSE Real-Time Analytics, RBAC & Firebase Push Notifications.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    techStack: ["Turborepo", "Next.js 16", "React 19", "TypeScript", "Redux Toolkit", "TanStack React Query", "SSE", "Firebase FCM", "Leaflet Maps", "Papaparse", "pdf-lib"],
    demoLink: "https://leadcrm-demo.vercel.app",
    repoLink: "https://github.com/Sonurocks007"
  },
  {
    _id: "p3",
    title: "Dog Sitter Application",
    description: "Developed a Model-View-Controller (MVC)-based web application using Spring Boot to manage dog sitter registration, role-based JWT authentication (Spring Security), and location-based search with HTTP endpoints and JSP for dynamic content rendering. Integrated Multipart File Upload, SQL-based pagination, location-based search, and Spring Security profile management, ensuring secure and efficient dog sitter data operations.",
    shortDescription: "Spring Boot MVC Application with JWT Auth, Location-Based Search & File Upload.",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800",
    techStack: ["Spring Boot", "Spring Security", "JWT", "JSP", "MySQL", "MVC Architecture"],
    demoLink: "",
    repoLink: "https://github.com/Sonurocks007"
  }
];

const ProjectCardSkeleton = () => (
  <div className="relative overflow-hidden h-full min-h-[350px] bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/40 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-6 flex flex-col justify-between">
    <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-2xl animate-pulse mb-4" />
    <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse mb-3" />
    <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-2" />
    <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4" />
    <div className="flex gap-2">
      <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
      <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
    </div>
  </div>
);

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Preparing my portfolio showcase...");

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      if (loading) setLoadingMessage("Loading my creative works...");
    }, 1500);

    fetchProjects()
      .then((res) => {
        const projectsData = Array.isArray(res.data) ? res.data : ((res.data as any).data || res.data);
        setProjects(projectsData || fallbackProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Backend unavailable, using premium fallback portfolio projects:", err);
        setProjects(fallbackProjects);
        setLoading(false);
      })
      .finally(() => {
        clearTimeout(timeout1);
      });

    return () => {
      clearTimeout(timeout1);
    };
  }, [loading]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full mb-6 shadow-xl border border-white/30 dark:border-gray-700/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Portfolio Showcase
              </span>
            </motion.div>

            <motion.h2
              className="relative text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-black tracking-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                My Projects
              </span>
            </motion.h2>
            <motion.p
              className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore my latest works and creative endeavors
            </motion.p>
          </div>

          {/* Loading Skeletal state */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project._id || project.title || index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
