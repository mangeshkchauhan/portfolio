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
    <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden bg-zinc-50 dark:bg-black">
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

      <div
        className="absolute inset-0 z-0 bg-dot-black/[0.06] dark:bg-dot-white/[0.15] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-0 bg-zinc-50 dark:bg-black [mask-image:radial-gradient(ellipse_600px_400px_at_50%_50%,transparent_30%,black)]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex min-h-0 flex-1 flex-col justify-center w-full max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-12"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/10 dark:bg-white/[0.05] dark:border-white/10 mb-2 mt-5 sm:mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/70 uppercase">
                Available for opportunities
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="m-0 p-0 font-normal max-w-[min(100%,42rem)]"
          >
            <TextGenerateEffect
              className="font-display font-bold text-[1.875rem] min-[400px]:text-[2.125rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] leading-[1.12] sm:leading-[1.1] tracking-tight text-foreground dark:text-white"
              words="Fast, Polished Web & Mobile Products"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 sm:mt-8 text-[0.9375rem] sm:text-base md:text-lg text-muted-foreground dark:text-white/60 max-w-lg mx-auto font-sans leading-relaxed"
          >
            Hi, I&apos;m{' '}
            <span className="text-foreground font-medium dark:text-white">
              Mangesh Kumar Chauhan
            </span>{' '}
            &mdash; a frontend engineer focused on React, TypeScript, and React
            Native: accessible UI, solid performance, and code that teams can
            extend.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2"
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
                className="px-3 py-1 text-xs font-mono text-muted-foreground bg-black/[0.04] border border-black/10 rounded-md hover:text-foreground hover:border-black/20 hover:bg-black/[0.06] dark:text-white/50 dark:bg-white/[0.04] dark:border-white/[0.08] dark:hover:text-white/80 dark:hover:border-white/20 dark:hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 sm:mt-12 w-full max-w-lg sm:max-w-none mx-auto flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-3 sm:justify-center items-stretch sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-7 py-3 text-sm font-medium text-foreground dark:text-white bg-gradient-to-b from-black/10 to-black/5 dark:from-white/15 dark:to-white/5 border border-black/15 dark:border-white/20 rounded-lg hover:from-black/15 hover:to-black/8 dark:hover:from-white/20 dark:hover:to-white/10 hover:border-black/25 dark:hover:border-white/30 transition-all duration-300"
            >
              View my work
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3 text-sm font-medium text-muted-foreground hover:text-foreground border border-black/10 hover:border-black/20 dark:text-white/60 dark:hover:text-white dark:border-white/10 dark:hover:border-white/25 rounded-lg transition-all duration-300"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3 text-sm font-medium text-brand-primary hover:opacity-90 transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="relative z-10 shrink-0 flex justify-center pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4"
      >
        <button
          type="button"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground dark:text-white/40 dark:hover:text-white/70 transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 border border-black/20 dark:border-white/25 rounded-full flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-1 rounded-full bg-foreground/50 dark:bg-white/60"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
