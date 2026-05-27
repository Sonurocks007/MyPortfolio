"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiFolder,
  HiDocumentText,
  HiMail,
  HiSun,
  HiMoon,
  HiSparkles,
} from "react-icons/hi";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Transform scroll value for dynamic effects
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [12, 20]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <HiHome className="w-4 h-4 sm:w-5 sm:h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "About", path: "/about", icon: <HiUser className="w-4 h-4 sm:w-5 sm:h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "Projects", path: "/projects", icon: <HiFolder className="w-4 h-4 sm:w-5 sm:h-5" />, color: "from-green-500 to-emerald-500" },
    { name: "Resume", path: "/resume", icon: <HiDocumentText className="w-4 h-4 sm:w-5 sm:h-5" />, color: "from-orange-500 to-red-500" },
    { name: "Contact", path: "/contact", icon: <HiMail className="w-4 h-4 sm:w-5 sm:h-5" />, color: "from-indigo-500 to-purple-500" },
  ];

  // Avoid hydration issues by checking if component is mounted
  const activeTheme = mounted ? resolvedTheme : "light";
  const darkMode = activeTheme === "dark";

  const toggleDarkMode = () => {
    if (mounted) {
      setTheme(darkMode ? "light" : "dark");
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Clean Background - Consistent with Home page */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
          {/* Standardized grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
        </div>

        {/* Enhanced backdrop blur overlay */}
        <motion.div 
          className="absolute inset-0 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30"
          style={{
            background: darkMode 
              ? "rgba(17, 24, 39, 0.8)" 
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(12px)",
          }}
        />

        {/* Animated gradient border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            background: [
              "linear-gradient(to right, transparent, #3b82f6, transparent)",
              "linear-gradient(to right, transparent, #8b5cf6, transparent)",
              "linear-gradient(to right, transparent, #ec4899, transparent)",
              "linear-gradient(to right, transparent, #3b82f6, transparent)"
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="group relative z-10">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Outer glow ring */}
                <div className="relative">
                  <motion.div
                    className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-md"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Main logo container */}
                  <motion.div
                    className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl border border-white/20 dark:border-gray-700/30"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Inner shine effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 via-transparent to-transparent"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Logo letter */}
                    <span className="relative text-white font-black text-lg sm:text-xl drop-shadow-lg">
                      SG
                    </span>
                  </motion.div>

                  {/* Floating sparkle effect */}
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <HiSparkles className="w-3 h-3 text-yellow-400" />
                  </motion.div>
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <motion.div 
                    className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text drop-shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    Sonu Gupta
                  </motion.div>
                  <motion.div 
                    className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 -mt-1 font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Full Stack Developer
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.name} href={item.path}>
                    <motion.div
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 dark:opacity-30 rounded-2xl shadow-lg`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Content container */}
                      <div className="relative flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-300">
                        {/* Icon with enhanced styling */}
                        <motion.div
                          className={`relative p-1.5 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                              : "text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                          }`}
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Icon glow effect for active state */}
                          {isActive && (
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-30 blur-md rounded-xl`}
                              animate={{
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          )}
                          <span className="relative z-10 flex items-center">
                            {item.icon}
                          </span>
                        </motion.div>

                        {/* Text */}
                        <span className={`hidden xl:inline font-semibold transition-all duration-300 ${
                          isActive
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                        }`}>
                          {item.name}
                        </span>
                      </div>

                      {/* Bottom active indicator */}
                      {isActive && (
                        <motion.div
                          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}

              {/* Desktop Theme Toggle */}
              <motion.div
                className="relative ml-3 flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={toggleDarkMode}
                  className="relative w-12 h-7 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 transition-all duration-300 shadow-lg border border-white/20 dark:border-gray-600/20 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle dark mode"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
                    animate={{
                      opacity: darkMode ? 0.2 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Toggle bubble */}
                  <motion.div
                    className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center border border-gray-200 dark:border-gray-700"
                    animate={{
                      x: darkMode ? 20 : 0,
                      rotate: darkMode ? 180 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <AnimatePresence mode="wait">
                      {darkMode ? (
                        <motion.div
                          key="moon"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiMoon className="w-3 h-3 text-blue-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiSun className="w-3 h-3 text-yellow-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg border border-white/20 dark:border-gray-600/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0"
                animate={{
                  opacity: isOpen ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Mobile Backdrop */}
              <motion.div
                className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{ top: "4rem" }}
              />

              {/* Mobile Drawer Menu */}
              <motion.div
                className="fixed left-0 right-0 lg:hidden overflow-hidden"
                style={{ top: "4rem" }}
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl mx-4 mt-4 rounded-3xl overflow-hidden">
                  <motion.div 
                    className="p-4 border-b border-gray-200/50 dark:border-gray-700/50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">SG</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Navigation</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Choose a page</div>
                      </div>
                    </div>
                  </motion.div>

                  <nav className="p-4 space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.path;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                        >
                          <Link
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                          >
                            <motion.div
                              className={`group relative flex items-center gap-4 px-4 py-4 rounded-2xl font-medium transition-all duration-300 overflow-hidden cursor-pointer ${
                                isActive
                                  ? `bg-gradient-to-r ${item.color} text-white shadow-xl`
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
                              }`}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isActive && (
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-xl`}
                                  animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                              )}

                              <motion.div
                                className={`relative p-3 rounded-xl transition-all duration-300 ${
                                  isActive 
                                    ? "bg-white/20 text-white" 
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-white/10"
                                }`}
                                whileHover={{ 
                                  rotate: 360,
                                  scale: 1.1,
                                }}
                                transition={{ duration: 0.5 }}
                              >
                                <span className="relative z-10 flex items-center">
                                  {item.icon}
                                </span>
                              </motion.div>

                              <div className="flex-1">
                                <span className="text-base font-semibold">{item.name}</span>
                                {isActive && (
                                  <motion.div
                                    className="text-xs opacity-80 mt-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.8 }}
                                    transition={{ delay: 0.1 }}
                                  >
                                    Current page
                                  </motion.div>
                                )}
                              </div>

                              {isActive && (
                                <motion.div
                                  className="ml-auto"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                >
                                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          </Link>
                        </motion.div>
                      );
                    })}

                    {/* Mobile Theme Toggle inside Navigation Menu */}
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + navItems.length * 0.05 }}
                      className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                    >
                      <motion.button
                        onClick={() => {
                          toggleDarkMode();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg border border-white/20 dark:border-gray-600/20"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                            animate={{ rotate: darkMode ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {darkMode ? (
                              <HiMoon className="w-5 h-5" />
                            ) : (
                              <HiSun className="w-5 h-5" />
                            )}
                          </motion.div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-700 dark:text-gray-300">
                              {darkMode ? "Dark Mode" : "Light Mode"}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Toggle theme
                            </div>
                          </div>
                        </div>
                        <div className="w-12 h-7 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 relative shadow-inner">
                          <motion.div
                            className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                            animate={{
                              x: darkMode ? 20 : 0,
                              rotate: darkMode ? 180 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <AnimatePresence mode="wait">
                              {darkMode ? (
                                <motion.div
                                  key="moon"
                                  initial={{ rotate: -90, opacity: 0 }}
                                  animate={{ rotate: 0, opacity: 1 }}
                                  exit={{ rotate: 90, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <HiMoon className="w-3 h-3 text-blue-500" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="sun"
                                  initial={{ rotate: 90, opacity: 0 }}
                                  animate={{ rotate: 0, opacity: 1 }}
                                  exit={{ rotate: -90, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <HiSun className="w-3 h-3 text-yellow-500" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                      </motion.button>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
