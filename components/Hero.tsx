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
      {/* Enhanced Spotlight Effects */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight 
          className="top-28 left-80 h-[80vh] w-[50vw]" 
          fill="blue" 
        />
        
        {/* Additional ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 w-full bg-black-100 bg-grid-white/[0.03] z-0">
        <div className="absolute pointer-events-none inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto px-4"
      >
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Animated Name Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple/20 to-blue-500/20 border border-purple/30 backdrop-blur-sm"
            >
              <span className="uppercase tracking-widest text-sm font-medium text-blue-100">
                👋 Hi, I&apos;m Mangesh Kumar Chauhan
              </span>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <TextGenerateEffect
              className="text-center text-[32px] md:text-5xl lg:text-6xl leading-tight"
              words="Crafting Concepts into Effortless User Experiences"
            />
          </motion.div>

          {/* Enhanced Description */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-center md:tracking-wider text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Full-stack developer specializing in{" "}
              <span className="text-purple font-semibold">React</span> and{" "}
              <span className="text-purple font-semibold">React Native</span>.
              I build scalable applications with modern technologies and clean, efficient code.
            </p>
          </motion.div>

          {/* Skills Preview */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8 opacity-80"
          >
            {[
              "React", "Next.js", "TypeScript", "Node.js", "React Native", "AI/ML"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#CBACF9" }}
                className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-purple transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#projects">
                <MagicButton
                  title="Explore My Work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-purple/50 text-purple hover:bg-purple/10 rounded-lg font-medium transition-all duration-300 hover:border-purple"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Fixed positioning at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 2, duration: 0.8 }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
            className="w-6 h-10 border-2 border-gray-400/60 rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div 
              animate={{ y: [-8, 16, -8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-10 w-20 h-20 bg-purple/10 rounded-full blur-xl opacity-60 hidden lg:block z-0"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl opacity-60 hidden lg:block z-0"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default Hero;
