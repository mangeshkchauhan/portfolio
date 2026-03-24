'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaCode,
  FaRocket,
  FaUsers,
  FaProjectDiagram,
  FaCheckCircle,
} from 'react-icons/fa';
import { MdSpeed, MdSecurity } from 'react-icons/md';
import { BiTargetLock } from 'react-icons/bi';

const Approach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const approaches = [
    {
      phase: '01',
      title: 'Discovery & Strategy',
      subtitle: 'Understanding your vision',
      description:
        'I dig into requirements, audience, and goals up front—researching the landscape, clarifying constraints, and outlining a technical plan so we build the right thing the first time.',
      icon: <FaLightbulb className="text-2xl" />,
      features: [
        'Requirement analysis',
        'Market & competitor research',
        'User-focused framing',
        'Technical planning',
      ],
      borderColor: 'border-brand-primary/25 hover:border-brand-primary/40',
      iconBg: 'bg-brand-primary/10 border-brand-primary/20',
      iconClass: 'text-brand-primary',
    },
    {
      phase: '02',
      title: 'Design & Development',
      subtitle: 'Shipping the product',
      description:
        'I implement with React, TypeScript, and modern tooling—clean architecture, responsive layouts, and performance in mind so the experience feels fast and intentional on every device.',
      icon: <FaCode className="text-2xl" />,
      features: [
        'UI polish & accessibility',
        'Maintainable code structure',
        'Responsive layouts',
        'Performance tuning',
      ],
      borderColor:
        'border-black/10 hover:border-black/20 dark:border-white/[0.12] dark:hover:border-white/25',
      iconBg:
        'bg-black/[0.04] border-black/10 dark:bg-white/[0.06] dark:border-white/15',
      iconClass: 'text-foreground dark:text-white',
    },
    {
      phase: '03',
      title: 'Testing & Launch',
      subtitle: 'Confident releases',
      description:
        'I test flows, fix edge cases, and deploy with care—then stay available for tweaks and maintenance so what ships stays reliable as usage grows.',
      icon: <FaRocket className="text-2xl" />,
      features: [
        'QA & regression checks',
        'Performance validation',
        'Deployment & handoff',
        'Ongoing support',
      ],
      borderColor: 'border-emerald-500/20 hover:border-emerald-400/35',
      iconBg: 'bg-emerald-500/10 border-emerald-500/25',
      iconClass: 'text-emerald-300',
    },
  ];

  const principles = [
    {
      icon: <FaUsers className="text-xl" />,
      title: 'User-Centric',
      description:
        'Every decision prioritizes user experience and satisfaction',
    },
    {
      icon: <MdSpeed className="text-xl" />,
      title: 'Performance First',
      description: 'Optimized for speed and efficient resource utilization',
    },
    {
      icon: <MdSecurity className="text-xl" />,
      title: 'Security Focused',
      description: 'Built with security best practices from the ground up',
    },
    {
      icon: <BiTargetLock className="text-xl" />,
      title: 'Goal Oriented',
      description: 'Aligned with your business objectives and KPIs',
    },
  ];

  return (
    <section className="w-full py-24 md:py-32" id="approach">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <p className="text-caption text-brand-primary/90 mb-4 tracking-widest">
            Methodology
          </p>
          <h2 className="text-display-md font-display font-normal mb-6 text-text-primary">
            My <span className="text-brand-primary">approach</span> to
            development
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-body-lg leading-relaxed font-sans">
            A systematic methodology that ensures every project is delivered
            with precision, quality, and attention to detail.
          </p>
        </motion.div>

        {/* Development Phases */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.phase}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`group relative overflow-hidden rounded-2xl glass border ${approach.borderColor} p-8 transition-all duration-500`}
            >
              {/* Phase Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-black/[0.04] group-hover:text-black/[0.07] dark:text-white/5 dark:group-hover:text-white/10 transition-colors duration-500">
                {approach.phase}
              </div>

              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 ${approach.iconBg} border rounded-2xl mb-6 ${approach.iconClass}`}
                whileHover={{ rotate: 5 }}
              >
                {approach.icon}
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-2 font-display">
                    {approach.title}
                  </h3>
                  <p className="text-brand-primary font-medium text-caption">
                    {approach.subtitle}
                  </p>
                </div>

                <p className="text-text-secondary leading-relaxed text-body-md font-sans">
                  {approach.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4">
                  {approach.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-body-sm text-text-muted"
                    >
                      <FaCheckCircle className="text-muted-foreground dark:text-white/70 text-xs flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0" />
            </motion.div>
          ))}
        </motion.div>

        {/* Development Principles */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 font-display">
              Core <span className="text-brand-primary">Principles</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-body-md">
              The fundamental values that guide every line of code I write
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group p-6 glass border-border dark:border-white/10 rounded-xl transition-all duration-300"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-black/[0.04] border border-black/10 rounded-lg mb-4 text-foreground/80 dark:bg-white/5 dark:border-white/10 dark:text-white/80"
                  whileHover={{ rotate: 10 }}
                >
                  {principle.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-text-primary mb-2 font-display">
                  {principle.title}
                </h3>

                <p className="text-text-secondary text-body-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20 p-8 md:p-10 bg-black/[0.03] border border-black/10 rounded-2xl backdrop-blur-sm dark:bg-white/[0.04] dark:border-white/[0.08]"
        >
          <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">
            Ready to start your project?
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto text-body-md leading-relaxed">
            Tell me what you&apos;re building—I&apos;ll map how this approach
            fits your timeline and goals.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-foreground dark:text-white bg-gradient-to-b from-black/10 to-black/5 dark:from-white/15 dark:to-white/5 border border-black/15 dark:border-white/20 rounded-lg hover:from-black/15 hover:to-black/8 dark:hover:from-white/20 dark:hover:to-white/10 hover:border-black/25 dark:hover:border-white/30 transition-all duration-300"
          >
            <FaProjectDiagram />
            Let&apos;s Collaborate
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Approach;
