"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-cyan-400 to-blue-500",
    level: "Expert",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "from-green-500 to-emerald-600",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "from-green-600 to-lime-600",
    level: "Advanced",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "from-gray-600 to-gray-800",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "from-yellow-400 to-orange-500",
    level: "Expert",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "from-purple-500 to-indigo-600",
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "from-cyan-500 to-teal-500",
    level: "Expert",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "from-purple-600 to-violet-700",
    level: "Advanced",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    level: "Intermediate",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "from-orange-400 via-orange-500 to-red-600",
    level: "Intermediate",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Sonurocks007",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sonu-gupta-a0b10a210/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Sonurocks/",
    label: "LeetCode",
    color: "hover:text-yellow-500",
  },
  {
    icon: SiX,
    href: "https://x.com/SonuGup23391000",
    label: "Twitter/X",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
];

export default function Home() {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }));
  }, [controls]);

  // Mouse parallax effect (subtle)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        {/* Standardized grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px] lg:bg-[size:64px_64px]" />

        {/* Standardized animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-400/15 to-transparent blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-purple-400/25 via-pink-400/15 to-transparent blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-indigo-400/15 to-purple-400/10 blur-2xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-pink-400/20 via-orange-400/15 to-yellow-400/10 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0
                  ? "w-2 h-2 bg-gradient-to-br from-blue-400/60 to-purple-400/60"
                  : i % 3 === 1
                    ? "w-1.5 h-1.5 bg-gradient-to-br from-purple-400/50 to-pink-400/50"
                    : "w-1 h-1 bg-gradient-to-br from-pink-400/40 to-blue-400/40"
              }`}
              style={{
                left: `${(i * 3.3) % 100}%`,
                top: `${(i * 7.7) % 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, (i % 2 === 0 ? 15 : -15), 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full max-w-7xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="group relative inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-xl border border-white/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="relative text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Welcome to my portfolio
              </span>
              <motion.div
                className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="space-y-4 sm:space-y-6 animate-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                <motion.span
                  className="block bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text drop-shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                                >
                  Hi, I'm Sonu
                </motion.span>
                <motion.span
                  className="block mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text drop-shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  Gupta
                </motion.span>
              </h1>
            </div>

            {/* Decorative line */}
            <motion.div
              className="flex justify-center"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="relative">
                <div className="h-1 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg" />
                <motion.div
                  className="absolute inset-0 h-1 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                  animate={{
                    background: [
                      "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                      "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
                      "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, I’m{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  Sonu Gupta
                </span>
                , a{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  Full Stack Developer
                </span>{" "}
                with 1+ year of experience building scalable software and e-commerce platforms using{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  React.js, Next.js, TypeScript, and Node.js
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 ${social.color} transition-all duration-300 hover:shadow-2xl`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 500,
                }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <social.icon className="relative w-5 h-5 sm:w-6 sm:h-6 transform group-hover:rotate-12 transition-transform duration-300" />

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                  {social.label}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6 sm:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* Primary CTA - View Projects */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                href="/projects"
                className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg shadow-2xl transition-all duration-300 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-200, 200] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />

                <span className="relative flex items-center gap-2">
                  <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Projects
                </span>
                <motion.svg
                  className="relative w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </Link>
            </motion.div>

            {/* Secondary CTA - Contact Me */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl text-gray-900 dark:text-white font-bold text-base sm:text-lg shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </span>
                <motion.svg
                  className="relative w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </Link>
            </motion.div>

            {/* Tertiary CTA - View Resume */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                href="/resume"
                className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl text-gray-900 dark:text-white font-bold text-base sm:text-lg shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Resume
                </span>
                <motion.svg
                  className="relative w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            className="pt-12 sm:pt-16 lg:pt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Section Header */}
            <motion.div
              className="mb-8 sm:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full shadow-lg border border-white/20 dark:border-gray-700/20">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Tech Stack & Expertise
                </h3>
              </div>
            </motion.div>

            {/* Tech Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="group"
                >
                  <div className="relative">
                    {/* Icon Container */}
                    <div className="relative w-full aspect-square flex items-center justify-center rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-500/50">
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain transform group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                        loading="lazy"
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                      />

                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Label */}
                    <div className="mt-3 text-center space-y-1">
                      <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                        {tech.name}
                      </span>
                      <div className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.level}
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="hidden lg:block absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900/95 dark:bg-gray-700/95 backdrop-blur-sm text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-50 border border-white/10">
                      <div className="font-semibold">{tech.name}</div>
                      <div className="text-gray-300 text-xs">{tech.level}</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900/95 dark:bg-gray-700/95" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                {
                  label: "Projects",
                  value: "10+",
                  icon: "🚀",
                  color: "from-blue-500 to-cyan-500",
                  description: "Completed",
                },
                {
                  label: "Technologies",
                  value: "12+",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500",
                  description: "Mastered",
                },
                {
                  label: "Certifications",
                  value: "5+",
                  icon: "🏆",
                  color: "from-yellow-500 to-orange-500",
                  description: "Achieved",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl border border-white/30 dark:border-gray-700/30 text-center cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text mb-2">
                      {stat.value}
                    </div>

                    <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-bold mb-1">
                      {stat.label}
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
