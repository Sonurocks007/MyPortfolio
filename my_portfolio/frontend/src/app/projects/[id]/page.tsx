"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { fetchProjectById } from "../../../services/api";
import { Project } from "../../../types";
import { motion } from "framer-motion";

interface PageProps {
  params: Promise<{ id: string }>;
}

const fallbackProjects: Project[] = [
  {
    _id: "p1",
    title: "E-Commerce Platform — Storefront + Admin Panel",
    description: "Built a full-featured multi-department e-commerce storefront (Womenswear, Menswear, Kidswear, Accessories, Bags, Shoes, Sale) with dynamic department landing pages, product listing with advanced filter/sort drawers, image-zoom product detail, vendor store pages, and a cart with localStorage persistence, size-swap merge logic, and full checkout flow. Developed comprehensive authentication flows with OTP verification and reCAPTCHA protection. Built the Admin Panel with Recharts/ApexCharts dashboards, full CRUD for Products, Categories, Sub-Categories, Attributes, and Coupons using TanStack Table with server-side pagination.",
    shortDescription: "Full-Featured Multi-Department E-Commerce Hub with Admin Panel, Vendor Management & 5-Language Support.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    techStack: ["Next.js 16", "React 19", "TypeScript", "TanStack React Query", "TanStack Table", "Redux Toolkit", "Tailwind CSS v4", "Recharts", "Firebase", "Formik", "Yup"],
    demoLink: "https://ecommerce-demo.vercel.app",
    repoLink: "https://github.com/Sonurocks007",
    features: [
      "Built a full-featured multi-department e-commerce storefront with 7 departments (Womenswear, Menswear, Kidswear, Accessories, Bags, Shoes, Sale) with dynamic landing pages and advanced filter/sort drawers.",
      "Developed comprehensive authentication flows: Sign In/Up modal, Forgot Password with OTP verification, Set New Password — using Formik + Yup validation with reCAPTCHA protection and JWT Bearer interceptors.",
      "Implemented multi-language i18n (English, Arabic, French, Hindi, Urdu) with Language Context and modal selector, and dark/light theme switching via next-themes.",
      "Built the Admin Panel with Recharts/ApexCharts dashboards (Sales Chart, Revenue Stats, Top Selling Products, Top Customers) and full CRUD for Products, Categories, Attributes, and Coupons using TanStack Table.",
      "Engineered Vendor Management: multi-step onboarding (Personal → Contact → Store → Bank), subscription plan management, payout tracking, and User & Role Management with granular RBAC and Two-Factor Authentication.",
      "Designed a dynamic API-driven sidebar (Vertical + Horizontal layouts) with icon mapping, collapsible groups, mobile portal, and customizable background themes."
    ]
  },
  {
    _id: "p2",
    title: "LeadTracyz — Real-Time Multi-Tenant Lead Management SaaS",
    description: "Architected and delivered a Turborepo monorepo (pnpm workspaces) with three apps — web-app (company/staff portal), admin-panel (super-admin), backend — and shared packages (@leadtracz/types, @leadtracz/utils, @leadtracz/ui) for DRY cross-app consistency. Built the core lead management engine with full CRUD, advanced multi-filter search, bulk CSV/Excel import-export via Papaparse, PDF export per lead via pdf-lib, lead transfer between staff, and configurable custom lead fields per company.",
    shortDescription: "Turborepo Monorepo SaaS CRM with SSE Real-Time Analytics, RBAC & Firebase Push Notifications.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    techStack: ["Turborepo", "Next.js 16", "React 19", "TypeScript", "Redux Toolkit", "TanStack React Query", "SSE", "Firebase FCM", "Leaflet Maps", "Papaparse", "pdf-lib"],
    demoLink: "https://leadcrm-demo.vercel.app",
    repoLink: "https://github.com/Sonurocks007",
    features: [
      "Architected a Turborepo monorepo (pnpm workspaces) with three apps — web-app, admin-panel, backend — and shared packages (@leadtracz/types, @leadtracz/utils, @leadtracz/ui) reducing code duplication by 40%+.",
      "Built the core lead management engine: full CRUD with advanced multi-filter search (status, tags, source, assigned staff, date range), bulk CSV/Excel import-export via Papaparse, and PDF export per lead via pdf-lib.",
      "Implemented Server-Sent Events (SSE) real-time engine with custom SSEContext/Provider — auto-reconnect with exponential backoff, named event subscriptions, and memory-leak-safe cleanup.",
      "Built granular RBAC permission system: per-module per-action checks, staff vs. company user-type detection, and proxy-token support for super-admin login-as-company with JWT encrypted cookie storage.",
      "Developed Broadcast messaging system: create/schedule/send/cancel broadcasts with target-type filtering, multi-channel support, priority levels, and status tracking.",
      "Built interactive Leaflet map dashboards with marker clustering for geographic lead visualization, staff performance analytics with Recharts, and a Support Ticket system with attachment preview."
    ]
  },
  {
    _id: "p3",
    title: "Dog Sitter Application",
    description: "Developed a Model-View-Controller (MVC)-based web application using Spring Boot to manage dog sitter registration, role-based JWT authentication (Spring Security), and location-based search with HTTP endpoints and JSP for dynamic content rendering. Integrated Multipart File Upload, SQL-based pagination, location-based search, and Spring Security profile management.",
    shortDescription: "Spring Boot MVC Application with JWT Auth, Location-Based Search & File Upload.",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800",
    techStack: ["Spring Boot", "Spring Security", "JWT", "JSP", "MySQL", "MVC Architecture"],
    demoLink: "",
    repoLink: "https://github.com/Sonurocks007",
    features: [
      "Developed a Model-View-Controller (MVC)-based web application using Spring Boot to manage dog sitter registration and profile management.",
      "Implemented role-based JWT authentication using Spring Security for secure access control.",
      "Built location-based search with HTTP endpoints for finding nearby dog sitters.",
      "Integrated Multipart File Upload for dog sitter profile images and documents.",
      "Implemented SQL-based pagination for efficient data retrieval and browsing.",
      "Used JSP for dynamic server-side content rendering with responsive layouts."
    ]
  }
];

export default function ProjectDetails({ params }: PageProps) {
  const { id } = React.use(params);
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [linkLoading, setLinkLoading] = useState({ demo: false, repo: false });

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    fetchProjectById(id)
      .then((res) => {
        const p = res.data;
        const images = p.imageUrls && p.imageUrls.length > 0
          ? p.imageUrls
          : p.imageUrl
            ? [p.imageUrl]
            : [];
        setProject({ ...p, images });
      })
      .catch((err) => {
        console.warn("Backend unavailable, loading from client fallback repository:", err);
        const match = fallbackProjects.find((x) => x._id === id);
        if (match) {
          const images = match.imageUrls && match.imageUrls.length > 0
            ? match.imageUrls
            : match.imageUrl
              ? [match.imageUrl]
              : [];
          setProject({ ...match, images });
        } else {
          const first = fallbackProjects[0];
          const images = first.imageUrls && first.imageUrls.length > 0 ? first.imageUrls : [first.imageUrl!];
          setProject({ ...first, images });
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handlePrev = () => {
    if (!project?.images?.length) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    if (!project?.images?.length) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleLinkClick = (type: "demo" | "repo") => {
    setLinkLoading(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setLinkLoading(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  if (loading) return <LoadingPlaceholder />;
  if (!project) return <ProjectNotFound />;

  const images = project.images || [];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900">
      <div className="fixed inset-0 top-16 sm:top-20 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-96 lg:h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-6 sm:space-y-8">
        <BackButton />

        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-10 border border-white/20 dark:border-gray-700/20">
          {/* Images Carousel */}
          {images.length > 0 && (
            <div className="relative mb-6 sm:mb-8 lg:mb-10">
              <div
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-xl group"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-video flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[currentImageIndex]}
                    alt={`${project.title} ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain max-h-[70vh]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {images.length > 1 && (
                  <>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4">
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex flex-col items-center gap-3 mt-4 sm:mt-6">
                  <div className="flex gap-2">
                    {images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 ${
                          index === currentImageIndex
                            ? "w-8 sm:w-10 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {currentImageIndex + 1} / {images.length}
                  </p>
                </div>
              )}
            </div>
          )}

          <ProjectContent project={project} linkLoading={linkLoading} handleLinkClick={handleLinkClick} />
        </div>
      </div>
    </section>
  );
}

const BackButton = () => (
  <div>
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
        Back to Projects
      </span>
    </Link>
  </div>
);

const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900 px-4">
    <div className="relative p-8 sm:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-900" />
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin" />
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-medium">
          Loading project details...
        </p>
      </div>
    </div>
  </div>
);

const ProjectNotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900 px-4">
    <div className="p-8 sm:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl max-w-md w-full shadow-2xl text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Project Not Found
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        The project you're looking for doesn't exist.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold"
      >
        Back to Projects
      </Link>
    </div>
  </div>
);

const ProjectContent = ({ project, linkLoading, handleLinkClick }: any) => (
  <>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
      {project.title}
    </h1>

    <div className="prose prose-base sm:prose-lg lg:prose-xl dark:prose-invert max-w-none mb-8 sm:mb-10">
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>
    </div>

    {project.techStack?.length > 0 && (
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 backdrop-blur-sm shadow-sm border border-blue-200/50 dark:border-blue-700/50 text-sm sm:text-base font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}

    {project.features?.length > 0 && (
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Key Features
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          {project.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick("demo")}
          className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base relative overflow-hidden"
        >
          {linkLoading.demo && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <span className={linkLoading.demo ? "opacity-0" : "opacity-100"}>View Live Demo</span>
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${linkLoading.demo ? "opacity-0" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
      {project.repoLink && (
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick("repo")}
          className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-2xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 font-semibold text-sm sm:text-base relative overflow-hidden"
        >
          {linkLoading.repo && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-gray-400/30 border-t-gray-600 dark:border-gray-300/30 dark:border-t-gray-200 rounded-full animate-spin" />
            </div>
          )}
          <span className={linkLoading.repo ? "opacity-0" : "opacity-100"}>View Source Code</span>
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform ${linkLoading.repo ? "opacity-0" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </a>
      )}
    </div>
  </>
);
