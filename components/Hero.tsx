'use client';

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaArrowRight } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const scrollToNext = useCallback(() => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Spotlight ambient lighting */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 h-screen"
          fill="#4C9EFF"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#7C3AED"
        />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 bg-dot-white/[0.15] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"
        aria-hidden="true"
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-0 bg-black [mask-image:radial-gradient(ellipse_600px_400px_at_50%_50%,transparent_30%,black)]"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8"
      >
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase">
                Available for opportunities
              </span>
            </span>
          </motion.div>

          {/* Display heading */}
          <motion.div variants={item}>
            <TextGenerateEffect
              className="font-season text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] leading-[1.1] tracking-tight text-white"
              words="Building Polished Web & Mobile Experiences"
            />
          </motion.div>

          {/* Name and description */}
          <motion.p
            variants={item}
            className="mt-6 text-base sm:text-lg text-white/60 max-w-lg mx-auto font-sans leading-relaxed"
          >
            Hi, I&apos;m{' '}
            <span className="text-white font-medium">
              Mangesh Kumar Chauhan
            </span>{' '}
            &mdash; a frontend developer specializing in React, TypeScript, and
            crafting seamless user experiences.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {[
              'React',
              'Next.js',
              'TypeScript',
              'React Native',
              'Node.js',
              'Tailwind CSS',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-md hover:text-white/80 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 text-sm font-medium text-white bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-lg hover:from-white/20 hover:to-white/10 hover:border-white/30 transition-all duration-300"
            >
              View My Work
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/25 rounded-lg transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-1 rounded-full bg-white/60"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
