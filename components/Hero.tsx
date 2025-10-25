"use client";
import React, { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaDownload } from "react-icons/fa";

const Hero = () => {

  // Enhanced animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        ease: "easeOut"
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }), []);



  return (
    <header 
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Enhanced Spotlight Effects */}
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block">
          <Spotlight
            className="-top-40 -left-32 h-screen"
            fill="#4C9EFF"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="#7C3AED"
          />
          <Spotlight
            className="top-1/2 right-10 h-[60vh] w-[40vw]"
            fill="#06B6D4"
          />
        </div>
        
        {/* Dynamic mobile lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Enhanced Grid Background with Gradient Overlay */}
      <div className="absolute inset-0 w-full bg-black bg-grid-white/[0.02] z-0">
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-b from-black via-black/95 to-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Minimal ambient lighting */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 pt-20 sm:pt-24"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Simple Greeting */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20">
              <span className="text-sm sm:text-base text-white/90">
                👋 Hi, I&apos;m Mangesh Kumar Chauhan
              </span>
            </div>
          </motion.div>



          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <TextGenerateEffect
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              words="Full-Stack Developer & React Specialist"
            />
          </motion.div>

          {/* Simple Description */}
          <motion.div variants={itemVariants}>
            <p className="text-center text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Building scalable applications with modern technologies and clean, efficient code
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "React Native", "Python"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm bg-white/5 border border-white/20 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:flex-1">
              <a href="#projects">
                <MagicButton
                  title="View Projects"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:flex-1">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <MagicButton
                  title="Resume"
                  icon={<FaDownload />}
                  position="right"
                  variant="secondary"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 hover:text-white transition-colors p-4"
            onClick={useCallback(() => {
              const nextSection = document.querySelector('#about') || document.querySelector('[id]:not([id=""])');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, [])}
            aria-label="Scroll to next section"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-center justify-center">
              <motion.div 
                animate={{ y: [-4, 8, -4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>


    </header>
  );
};

export default Hero;
