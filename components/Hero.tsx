"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaDownload } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Subtle Spotlight Effects (desaturated) */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#ffffff"
        />
        <Spotlight
          className="top-10 left-full md:left-full h-[80vh] w-[70vw] md:w-[50vw]"
          fill="#ffffff"
        />
        <Spotlight 
          className="top-28 left-40 md:left-80 h-[80vh] w-[60vw] md:w-[50vw]" 
          fill="#ffffff" 
        />
        
        {/* Minimal ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[520px] lg:h-[520px] bg-white/5 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 w-full bg-black bg-grid-white/[0.02] z-0">
        <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] mx-auto px-3 sm:px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Animated Name Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-3 py-2 sm:px-6 sm:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm font-medium text-white/60">
                <span className="hidden sm:inline">👋 Hi, I&apos;m </span>
                <span className="sm:hidden">👋 </span>
                Mangesh Kumar Chauhan
              </span>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Title */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <TextGenerateEffect
              className="text-center text-2xl sm:text-[32px] md:text-5xl lg:text-6xl leading-tight sm:leading-tight font-courier"
              words="Crafting Concepts into Effortless User Experiences"
            />
          </motion.div>

          {/* Enhanced Description */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <p className="text-center md:tracking-wider text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-lg md:max-w-2xl leading-relaxed px-2 sm:px-0">
              Full-stack developer specializing in{" "}
              <span className="text-white font-semibold">React</span> and{" "}
              <span className="text-white font-semibold">React Native</span>.
              I build scalable applications with modern technologies and clean, efficient code.
            </p>
          </motion.div>

          {/* Skills Preview */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 opacity-80 px-2"
          >
            {[
              "React", "Next.js", "TypeScript", "Node.js", "React Native", "AI/ML"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full px-2 sm:px-0 items-center justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <a href="#projects" className="block w-full sm:w-auto">
                <MagicButton
                  title="Explore My Work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-transparent border-2 border-white/20 text-white hover:bg-white/5 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <FaDownload className="text-sm" />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Fixed positioning at bottom */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 2, duration: 0.8 }
          }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('#about') || document.querySelector('[id]:not([id=""])');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-xs mb-2 uppercase tracking-wide">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400/60 rounded-full flex items-center justify-center relative overflow-hidden"
            >
              <motion.div 
                animate={{ y: [-8, 16, -8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl opacity-10 hidden lg:block z-0"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-white/5 rounded-full blur-xl opacity-10 hidden lg:block z-0"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default Hero;
