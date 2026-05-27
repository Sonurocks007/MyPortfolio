"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Sonurocks007",
      icon: FaGithub,
      label: "GitHub",
      color: "text-gray-700 dark:text-gray-300",
      hoverColor: "group-hover:text-black dark:group-hover:text-white",
      gradient: "from-gray-400 via-gray-500 to-gray-400 dark:from-gray-500 dark:via-gray-400 dark:to-gray-500",
      ring: "focus:ring-gray-400 dark:focus:ring-gray-500",
    },
    {
      href: "https://www.linkedin.com/in/sonu-gupta-a0b10a210/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "text-blue-500 dark:text-blue-400",
      hoverColor: "group-hover:text-blue-700 dark:group-hover:text-blue-300",
      gradient: "from-blue-400 via-blue-500 to-blue-400",
      ring: "focus:ring-blue-400",
    },
    {
      href: "https://leetcode.com/u/Sonurocks/",
      icon: SiLeetcode,
      label: "LeetCode",
      color: "text-yellow-600 dark:text-yellow-500",
      hoverColor: "group-hover:text-yellow-700 dark:group-hover:text-yellow-400",
      gradient: "from-yellow-400 via-amber-500 to-yellow-400",
      ring: "focus:ring-yellow-400",
    },
    {
      href: "https://x.com/SonuGup23391000",
      icon: SiX,
      label: "Twitter/X",
      color: "text-gray-900 dark:text-gray-200",
      hoverColor: "group-hover:text-black dark:group-hover:text-white",
      gradient: "from-gray-700 via-gray-800 to-gray-700 dark:from-gray-300 dark:via-gray-400 dark:to-gray-300",
      ring: "focus:ring-gray-900",
    },
    {
      href: "mailto:sg5798671@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      color: "text-red-500 dark:text-red-400",
      hoverColor: "group-hover:text-red-700 dark:group-hover:text-red-300",
      gradient: "from-red-400 via-red-500 to-red-400",
      ring: "focus:ring-red-400",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden w-full"
    >
      {/* Clean Background - Consistent with Home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10" />

      {/* Top Border Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Sonu Gupta
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Full Stack Developer crafting beautiful & functional web experiences.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500 dark:text-gray-500">
                <span>Made with</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>using</span>
                <FaCode className="text-blue-500" />
                <span>&</span>
                <FaRocket className="text-purple-500" />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block text-left">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Link href={link.to} className="inline-block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"><span className="relative">{link.label}</span><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" /></Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4 justify-center flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 500,
                    }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative group focus:outline-none focus:ring-2 focus:ring-offset-2 ${social.ring} rounded-full p-3 sm:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20`}
                  >
                    {/* Glow effect */}
                    <span
                      className={`absolute -inset-1 rounded-full bg-gradient-to-r ${social.gradient} opacity-0 blur-lg group-hover:opacity-30 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <social.icon
                      className={`relative text-xl sm:text-2xl ${social.color} ${social.hoverColor} transition-colors duration-300`}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 space-y-2"
              >
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Open for opportunities</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for work
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
          />
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left"
            >
              © {year}{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Sonu Gupta
              </span>{" "}
              • All rights reserved.
            </motion.p>

            {/* Tech Stack Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500"
            >
              <span>Built with</span>
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-md font-medium">
                <span>Next.js</span>
              </div>
              <span>&</span>
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md font-medium">
                <span>Node.js</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
    </motion.footer>
  );
}
