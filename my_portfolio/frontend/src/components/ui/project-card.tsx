"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/40 backdrop-blur-xl" />
      
      {/* Animated gradient border */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-500 blur-sm" />
      
      {/* Content Container */}
      <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col h-full">
        {/* Image Container - Maintains aspect ratio without cutting */}
        {project.imageUrl && (
          <motion.div 
            className="relative mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-[4/3] sm:aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain bg-white dark:bg-gray-900"
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        )}

        {/* Title with improved typography */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
          {project.title}
        </h3>

        {/* Description with better line clamping */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2 sm:line-clamp-3 mb-4 sm:mb-6 flex-grow leading-relaxed">
          {project.shortDescription || project.description}
        </p>

        {/* Tech Stack Tags with improved layout */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Enhanced CTA Button */}
        <Link
          href={`/projects/${project._id}`}
          className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg transition-all duration-300"
        >
          <span className="relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-900 transition-all duration-300 dark:bg-gray-900 dark:text-white group-hover/btn:bg-transparent group-hover/btn:text-white">
            <span>View Details</span>
            <motion.svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
export interface ProjectWithCardImageUrl extends Project {
  cardImageUrl?: string;
}
