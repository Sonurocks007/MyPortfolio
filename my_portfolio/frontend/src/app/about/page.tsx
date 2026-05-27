"use client";

import { useEffect, useState } from "react";
import { fetchAbout } from "../../services/api";
import { AboutData } from "../../types";
import { motion } from "framer-motion";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaCloud,
  FaTrophy,
  FaCertificate,
  FaLightbulb,
  FaRocket,
  FaCode,
} from "react-icons/fa";

const fallbackAboutData: AboutData = {
  skills: [
    {
      _id: "skill1",
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Java", "HTML5", "CSS3"]
    },
    {
      _id: "skill2",
      category: "Frameworks/Libraries",
      items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Axios"]
    },
    {
      _id: "skill3",
      category: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      _id: "skill4",
      category: "Cloud / Tools",
      items: ["Git", "GitHub", "Vercel", "Postman", "Linux", "VS Code"]
    },
    {
      _id: "skill5",
      category: "Backend",
      items: ["Node.js", "Express.js", "Spring Boot", "Spring Security", "RESTful APIs", "JWT"]
    },
    {
      _id: "skill6",
      category: "Concepts",
      items: ["Monorepo", "Role-Based Access Control", "Multi-tenant Systems", "Agile", "CI/CD"]
    }
  ],
  experience: [
    {
      _id: "exp1",
      role: "Full Stack Developer",
      company: "Hanging Panda Pvt. Ltd.",
      duration: "August 2025 – June 2026",
      description: "Designed and launched production-grade applications serving real users — independently built a real-time lead management monorepo and a full e-commerce system with 6 product categories, subscription setups, multi-language localization (English, Arabic, French, Hindi, Urdu) with RTL, and dynamic sidebar panels."
    }
  ],
  achievements: [
    {
      _id: "ach1",
      title: "Released 2 Production Apps",
      description: "Released 2 production-grade applications serving real users — independently built a real-time multi-tenant platform and a full e-commerce system within 1 year of experience."
    },
    {
      _id: "ach2",
      title: "Localization & Monorepos",
      description: "Delivered 5-language internationalization with RTL support and a monorepo architecture reducing cross-team code duplication by 40%+ across 3 applications."
    }
  ],
  certifications: [
    {
      _id: "cert1",
      name: "6-Month Full Stack Web Development Training: Core Java, Spring Boot, React, Node, SQL",
      issuer: "QSpiders",
      link: "#"
    },
    {
      _id: "cert2",
      name: "The Joy of Computing using Python (Elite Certificate)",
      issuer: "NPTEL – IIT Kharagpur",
      link: "#"
    },
    {
      _id: "cert3",
      name: "C Programming Language Certificate",
      issuer: "NPTEL – IIT Kharagpur",
      link: "#"
    }
  ],
  currentFocus: [
    "Building scalable web platforms with Next.js App Router and type-safe server actions",
    "Optimizing multi-tenant architectures and robust Role-Based Access Control (RBAC)",
    "Fostering enterprise integrations with Spring Boot, Spring Security, and TypeScript"
  ]
};

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading my professional journey...");

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      if (loading) setLoadingMessage("Gathering my skills and experience...");
    }, 1500);

    const timeout2 = setTimeout(() => {
      if (loading) setLoadingMessage("Almost ready! Preparing my achievements...");
    }, 3000);

    fetchAbout()
      .then((res) => {
        setAbout(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Backend unavailable, using premium fallback profiles:", err);
        setAbout(fallbackAboutData);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [loading]);

  const skillIcons: { [key: string]: React.ReactNode } = {
    Languages: (
      <span className="flex space-x-1">
        <motion.span whileHover={{ scale: 1.3, rotate: 15 }} className="inline text-yellow-400">
          <FaJs />
        </motion.span>
        <motion.span whileHover={{ scale: 1.3, rotate: -15 }} className="inline text-orange-500">
          <FaHtml5 />
        </motion.span>
        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="inline text-blue-500">
          <FaCss3Alt />
        </motion.span>
      </span>
    ),
    "Frameworks/Libraries": (
      <span className="flex space-x-1">
        <motion.span whileHover={{ scale: 1.3, rotate: 15 }} className="inline text-blue-400">
          <FaReact />
        </motion.span>
        <motion.span whileHover={{ scale: 1.3, rotate: -10 }} className="inline text-green-600">
          <FaNodeJs />
        </motion.span>
      </span>
    ),
    Database: (
      <motion.span whileHover={{ scale: 1.2 }} className="inline text-green-600">
        <FaDatabase />
      </motion.span>
    ),
    Cloud: (
      <span className="flex space-x-1">
        <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="inline text-orange-500">
          <FaAws />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2, rotate: -10 }} className="inline text-blue-400">
          <FaCloud />
        </motion.span>
      </span>
    ),
    Tools: (
      <span className="flex space-x-1">
        <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="inline text-orange-600">
          <FaGitAlt />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2, rotate: -10 }} className="inline text-pink-500">
          <FaFigma />
        </motion.span>
      </span>
    ),
    "CS Fundamentals": (
      <motion.span whileHover={{ scale: 1.2 }} className="inline text-purple-600">
        <FaCode />
      </motion.span>
    ),
  };

  if (loading || !about) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 p-4">
        <motion.div
          className="relative text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            <motion.div
              className="flex flex-col items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaRocket className="relative w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text mb-3">
                  Crafting My Profile
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                  {loadingMessage}
                </p>
              </div>
            </motion.div>

            <div className="relative flex flex-col items-center gap-6">
              <div className="relative">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const { skills, experience, achievements, certifications, currentFocus } = about;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Profile Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Profile image placeholder container */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-3 sm:border-4 border-white/60 dark:border-gray-800/60 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl sm:text-6xl font-bold">
                  SG
                </div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold">Available</span>
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                  About Me
                </span>
              </motion.h2>

              <motion.div
                className="space-y-4 sm:space-y-6 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Sonu Gupta
                  </span>
                  , a{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Full Stack Developer
                  </span>
                  {" "}with 1+ year of experience building scalable software and e-commerce platforms using{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    React.js, Next.js, TypeScript, and Node.js
                  </span>
                  . I deliver production-grade applications featuring real-time systems, Role-Based Access Control, and multi-tenant architecture.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I also work with{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Spring Boot, PostgreSQL, and Express
                  </span>
                  {" "}to construct secure, type-safe API gateways and real-time backend integrations, with a strong focus on performance optimization, clean code patterns, and agile development workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text drop-shadow-sm">
                  Technical Expertise
                </h3>
              </div>

              {/* Mobile Skills view */}
              <div className="block lg:hidden space-y-4">
                {skills.map((skill, idx) => (
                  <div
                    key={skill._id}
                    className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-lg">{skillIcons[skill.category]}</div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-xs text-gray-700 dark:text-gray-300 rounded-full border border-blue-500/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Skills table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200/30 dark:border-gray-700/30">
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900 dark:text-white">
                        Category
                      </th>
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900 dark:text-white">
                        Skills
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill) => (
                      <tr
                        key={skill._id}
                        className="group border-b border-gray-200/20 dark:border-gray-700/20 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="text-xl">{skillIcons[skill.category]}</div>
                            <span className="font-semibold text-base text-gray-900 dark:text-white">
                              {skill.category}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-3">
                            {skill.items.map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1.5 bg-blue-500/10 dark:bg-blue-500/20 text-sm text-gray-700 dark:text-gray-300 rounded-full border border-blue-500/20"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  Experience
                </h3>
              </div>

              <div className="relative max-w-4xl mx-auto space-y-8">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={exp._id}
                    className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h4>
                    <div className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {exp.company}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
                      {exp.duration}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements & Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
              <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

              <div className="relative p-4 sm:p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <FaTrophy className="text-xl sm:text-2xl text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
                    Achievements
                  </h3>
                </div>

                <div className="space-y-4">
                  {achievements.map((ach) => (
                    <div
                      key={ach._id}
                      className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-yellow-700 dark:text-yellow-400 mb-1">
                        {ach.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
              <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

              <div className="relative p-4 sm:p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <FaCertificate className="text-xl sm:text-2xl text-green-600 dark:text-green-400" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-transparent bg-clip-text">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert._id}
                      className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-green-700 dark:text-green-400 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3">
                        {cert.issuer}
                      </p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-xs sm:text-sm font-medium"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Current Focus
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30"
                  >
                    <div className="flex items-start gap-3">
                      <FaLightbulb className="text-indigo-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
