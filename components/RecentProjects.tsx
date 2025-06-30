"use client";
import { projects } from "@/data";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// Simplified Project Card Component
const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-black-100 border border-white/[0.1] hover:border-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple/10"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.images.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white-100 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack - simplified */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto">
          {project.techStack.slice(0, 3).map((tech: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={14}
                height={14}
                className="object-contain"
              />
            </div>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs text-white-100">+{project.techStack.length - 3}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-purple/20 hover:bg-purple/30 border border-purple/40 rounded-lg text-purple text-sm transition-all duration-200 hover:scale-105"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Live</span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-all duration-200 hover:scale-105"
            >
              <FaGithub className="text-xs" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="heading mb-4">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <p className="text-white-100 max-w-2xl mx-auto text-base">
          Here are some of the projects I&apos;ve worked on recently, showcasing different technologies and problem-solving approaches.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
