"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaEye,
  FaDownload,
  FaCode,
  FaProjectDiagram,
  FaTrophy,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaStar,
  FaAward,
  FaUsers,
  FaClock,
} from "react-icons/fa";

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const skills = [
    { name: "TypeScript", level: 92, color: "from-blue-500 to-indigo-500", icon: "🟦", experience: "1.5+ years" },
    { name: "Next.js & React", level: 95, color: "from-cyan-500 to-blue-500", icon: "⚛️", experience: "1.5+ years" },
    { name: "Node.js & Express", level: 90, color: "from-green-500 to-emerald-500", icon: "🟢", experience: "1.5+ years" },
    { name: "Spring Boot", level: 85, color: "from-green-600 to-lime-600", icon: "🍃", experience: "1+ years" },
    { name: "PostgreSQL & MySQL", level: 85, color: "from-blue-600 to-cyan-500", icon: "🗄️", experience: "1+ years" },
    { name: "MongoDB", level: 88, color: "from-emerald-500 to-green-600", icon: "🍃", experience: "1.5+ years" },
    { name: "Redux & Axios", level: 90, color: "from-purple-500 to-pink-500", icon: "📦", experience: "1.5+ years" },
    { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500", icon: "🎨", experience: "1.5+ years" },
    { name: "Git & GitHub", level: 90, color: "from-orange-500 to-red-500", icon: "📚", experience: "2+ years" },
  ];

  const achievements = [
    { icon: FaProjectDiagram, count: "5+", label: "Projects Completed", color: "from-blue-500 to-purple-500", description: "Production & side projects" },
    { icon: FaTrophy, count: "2", label: "Production Apps", color: "from-yellow-500 to-orange-500", description: "Live multi-tenant systems" },
    { icon: FaGraduationCap, count: "3+", label: "Certifications", color: "from-green-500 to-teal-500", description: "Technical coursework" },
    { icon: FaCode, count: "50K+", label: "Lines of Code", color: "from-purple-500 to-pink-500", description: "Clean & structured code" },
    { icon: FaUsers, count: "1+", label: "Years Experience", color: "from-indigo-500 to-blue-500", description: "Remote full-time experience" },
    { icon: FaStar, count: "4.9", label: "Rating", color: "from-yellow-400 to-orange-500", description: "Client satisfaction" },
  ];

  const highlights = [
    { icon: FaLaptopCode, title: "Full Stack Development", desc: "React, Next.js, Node, TS, Spring Boot", color: "from-blue-500 to-cyan-500" },
    { icon: FaRocket, title: "Scalable Architecture", desc: "Multi-tenant & Role-Based RBAC", color: "from-purple-500 to-pink-500" },
    { icon: FaAward, title: "Premium Engineering", desc: "State-of-the-art interactive UI", color: "from-green-500 to-emerald-500" },
    { icon: FaClock, title: "Agile Workflow", desc: "Continuous delivery & updates", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full max-w-7xl mx-auto">
        <motion.div
          className="max-w-7xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            ref={ref}
            className="relative rounded-3xl overflow-hidden bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-gray-800/20"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <motion.div
              className="relative p-6 sm:p-8 lg:p-12"
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Header Section */}
              <div className="text-center mb-8 lg:mb-12">
                <motion.div
                  className="inline-flex items-center gap-3 px-5 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full shadow-xl border border-white/30 dark:border-gray-700/30 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Professional Journey
                  </span>
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-black leading-[0.95] tracking-tight mb-6 animate-pulse-subtle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                    My Resume
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Explore my professional journey, technical expertise, and achievements.
                  Available for viewing online or download as PDF.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.a
                  href="/Sonu_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30" />
                  <span className="relative flex items-center gap-3 text-gray-900 dark:text-white">
                    <FaEye className="text-lg text-blue-500" />
                    <span className="text-sm sm:text-base font-bold">View Resume</span>
                  </span>
                </motion.a>

                <motion.a
                  href="/Sonu_Gupta_Resume.pdf"
                  download="Sonu_Gupta_Resume.pdf"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-semibold shadow-lg text-white"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  <span className="relative flex items-center gap-3">
                    <FaDownload className="text-lg" />
                    <span className="text-sm sm:text-base font-bold">Download PDF</span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                {/* Skills & Highlights */}
                <motion.div
                  className="lg:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative p-6 rounded-2xl overflow-hidden bg-white/10 dark:bg-gray-800/10 border border-white/10 dark:border-gray-700/10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text flex items-center gap-2">
                      <FaCode className="text-blue-500" />
                      Technical Skills
                    </h3>

                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="group/skill">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{skill.icon}</span>
                              <span className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + index * 0.05 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="relative p-5 sm:p-6 rounded-xl overflow-hidden bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/20 flex items-center gap-4 hover:scale-[1.02] transition-all"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${highlight.color} text-white shadow-lg`}>
                          <highlight.icon className="text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{highlight.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{highlight.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative p-6 rounded-2xl overflow-hidden bg-white/10 dark:bg-gray-800/10 border border-white/10 dark:border-gray-700/10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                      Achievements
                    </h3>

                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="relative p-4 sm:p-5 rounded-xl bg-white/25 dark:bg-gray-800/25 border border-white/20 dark:border-gray-700/20 flex items-center gap-4 hover:scale-[1.02] transition-all cursor-pointer"
                        >
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-lg`}>
                            <achievement.icon className="text-xl" />
                          </div>
                          <div>
                            <div className={`text-2xl font-black bg-gradient-to-br ${achievement.color} text-transparent bg-clip-text`}>
                              {achievement.count}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                              {achievement.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm text-center border border-white/30 dark:border-gray-700/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaRocket className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Ready to Collaborate?
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Let's discuss your next project and bring your ideas to life with cutting-edge technology.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative font-bold">Get in Touch</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
