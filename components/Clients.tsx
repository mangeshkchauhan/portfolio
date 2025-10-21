"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";

const Clients = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as const;

  return (
    <section id="clients" className="relative py-10 md:py-20">
      {/* Decorative subtle glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-10 right-8 w-56 h-56 bg-white/5 rounded-full blur-3xl opacity-10" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-display-md font-serif font-bold text-center mb-6 md:mb-10 text-text-primary"
      >
        Kind words from <span className="text-brand-primary">peers and clients</span>
      </motion.h1>

      <div className="flex flex-col items-center">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mt-6 md:mt-10 text-text-primary"
        >
          Contributed <span className="text-brand-primary">for</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 md:mt-12 px-4 pb-4 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {companies.map(({ id, name, img, nameImg }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                whileHover={{ 
                  y: -4, 
                  scale: 1.03,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.97 }}
                tabIndex={0}
                aria-label={name}
                className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-primary/5 rounded-2xl" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
                </div>
                
                {/* Company logo */}
                <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src={img}
                      alt={name}
                      fill
                      className="rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-0 ring-brand-primary/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-primary/40 group-hover:ring-offset-2 group-hover:ring-offset-black/20" />
                  </div>
                  
                  {/* Logo shine effect */}
                  <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
                </div>
                
                {/* Company name */}
                <div className="relative z-10 text-center">
                  <Image
                    src={nameImg}
                    alt={name}
                    width={120}
                    height={32}
                    className="w-20 md:w-24 h-5 md:h-6 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 mx-auto"
                  />
                </div>
                
                {/* Subtle particle effect */}
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
