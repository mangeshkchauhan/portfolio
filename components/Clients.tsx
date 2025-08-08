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
        className="heading mb-6 md:mb-10"
      >
        Kind words from <span className="text-white">peers and clients</span>
      </motion.h1>

      <div className="flex flex-col items-center">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading mt-6 md:mt-10 text-2xl md:text-3xl lg:text-4xl"
        >
          Contributed <span className="text-white">for</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-4 md:mt-6 px-4 pb-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {companies.map(({ id, name, img, nameImg }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
              aria-label={name}
              className="group relative flex items-center gap-2 sm:gap-3 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <div className="relative">
                <Image
                  src={img}
                  alt={name}
                  width={40}
                  height={40}
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-0 ring-white/0 transition-all duration-300 group-hover:ring-4 group-hover:ring-white/10" />
              </div>
              <Image
                src={nameImg}
                alt={name}
                width={120}
                height={28}
                className="w-20 sm:w-24 md:w-28 h-5 sm:h-6 md:h-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute -z-10 inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
