'use client';
import { projects, type Project } from '@/data';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const categoryLabel: Record<Project['category'], string> = {
  web: 'Web',
  mobile: 'Mobile',
  fullstack: 'Full stack',
  ai: 'AI / ML',
  tools: 'Tools',
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border hover:border-foreground/15 dark:bg-black/80 dark:border-white/[0.08] dark:hover:border-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/40 h-full flex flex-col">
      <div className="relative h-44 md:h-48 overflow-hidden">
        <Image
          src={project.images.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent dark:from-black/70 dark:via-black/20" />
        {project.featured && (
          <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-brand-primary/90 text-primary-foreground shadow-lg">
            Featured
          </span>
        )}
        <span className="absolute bottom-3 left-3 px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/85 border border-black/10 text-foreground backdrop-blur-sm dark:bg-black/50 dark:border-white/10 dark:text-white/90">
          {categoryLabel[project.category]}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-[11px] text-text-muted font-sans uppercase tracking-wider mb-1.5">
          {project.timeline}
        </p>
        <h3 className="text-lg font-semibold text-text-primary mb-2 font-display line-clamp-2 tracking-tight">
          {project.title}
        </h3>

        <p className="text-text-secondary text-body-sm mb-4 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-0.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <div
              key={tech.name}
              className="flex-shrink-0 w-6 h-6 rounded-full bg-black/8 dark:bg-white/10 flex items-center justify-center"
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
            <span className="text-xs text-text-muted whitespace-nowrap">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-auto">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-muted/80 hover:bg-muted border border-border rounded-lg text-foreground text-sm transition-all duration-200 hover:scale-105 flex-1 justify-center dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white"
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
              className="flex items-center gap-2 px-3 py-1.5 bg-muted hover:bg-muted/90 border border-border rounded-lg text-foreground text-sm transition-all duration-200 hover:scale-105 flex-1 justify-center dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20 dark:text-white"
            >
              <FaGithub className="text-xs" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  return (
    <div id="projects" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55 }}
        className="text-center mb-20"
      >
        <p className="text-caption text-brand-primary/90 mb-4 tracking-widest">
          Selected work
        </p>
        <h2 className="text-display-md font-display font-normal text-center mb-6 text-text-primary">
          A small selection of{' '}
          <span className="text-brand-primary">recent projects</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-body-lg font-sans leading-relaxed">
          Production apps and experiments across web, mobile, and AI-assisted
          tooling—each with a clear problem, stack, and outcome.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
