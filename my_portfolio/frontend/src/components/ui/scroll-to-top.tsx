"use client";

import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const { resolvedTheme } = useTheme();
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create rotation based on scroll progress
  const rotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const darkMode = resolvedTheme === "dark";

  // Enhanced gradient colors with more sophisticated transitions
  const gradientClasses = darkMode
    ? "from-blue-600 via-purple-600 to-blue-600"
    : "from-blue-400 via-purple-400 to-blue-400";

  const glowClasses = darkMode
    ? "from-blue-600 via-purple-600 to-blue-600 opacity-30"
    : "from-blue-400 via-purple-400 to-blue-400 opacity-30";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Animated ring */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientClasses}`}
              initial={false}
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.8 : 0
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Main button */}
            <motion.button
              onClick={scrollUp}
              className={`
                relative flex items-center justify-center
                w-12 h-12 rounded-full
                bg-gradient-to-r ${gradientClasses}
                text-white shadow-lg backdrop-blur-sm
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                transform transition-shadow duration-300
                hover:shadow-xl hover:shadow-purple-500/20
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              {/* Glowing background */}
              <motion.span
                className={`absolute -inset-3 rounded-full bg-gradient-to-r ${glowClasses} blur-xl`}
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Arrow icon with rotation */}
              <motion.div 
                style={{ rotate: rotation }} 
                className="relative"
              >
                <HiArrowUp className="w-6 h-6" />
              </motion.div>

              {/* Tooltip */}
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded backdrop-blur-sm whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
              >
                Scroll to top
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
