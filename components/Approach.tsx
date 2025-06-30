"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRocket, FaUsers, FaProjectDiagram, FaCheckCircle } from "react-icons/fa";
import { MdDesignServices, MdSpeed, MdSecurity } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

const Approach = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const approaches = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      description: "We start by diving deep into your project requirements, target audience, and business goals. I analyze your needs, research the market, and create a comprehensive strategy that aligns with your objectives.",
      icon: <FaLightbulb className="text-2xl" />,
      features: [
        "Requirement Analysis",
        "Market Research", 
        "User Persona Development",
        "Technical Planning"
      ],
      color: "from-purple/20 to-blue-500/20",
      borderColor: "border-purple/30",
      iconBg: "bg-purple/20"
    },
    {
      phase: "02", 
      title: "Design & Development",
      subtitle: "Bringing Ideas to Life",
      description: "Using modern technologies and best practices, I transform your vision into reality. Clean code, responsive design, and user-centric approach ensure your project stands out in the digital landscape.",
      icon: <FaCode className="text-2xl" />,
      features: [
        "Modern UI/UX Design",
        "Clean Code Architecture",
        "Responsive Development",
        "Performance Optimization"
      ],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20"
    },
    {
      phase: "03",
      title: "Testing & Launch", 
      subtitle: "Delivering Excellence",
      description: "Rigorous testing, optimization, and seamless deployment ensure your project launches flawlessly. I provide ongoing support and maintenance to keep your application running smoothly.",
      icon: <FaRocket className="text-2xl" />,
      features: [
        "Quality Assurance",
        "Performance Testing",
        "Deployment & Launch",
        "Ongoing Support"
      ],
      color: "from-orange-500/20 to-red-500/20", 
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-500/20"
    }
  ];

  const principles = [
    {
      icon: <FaUsers className="text-xl" />,
      title: "User-Centric",
      description: "Every decision prioritizes user experience and satisfaction"
    },
    {
      icon: <MdSpeed className="text-xl" />,
      title: "Performance First",
      description: "Optimized for speed and efficient resource utilization"
    },
    {
      icon: <MdSecurity className="text-xl" />,
      title: "Security Focused",
      description: "Built with security best practices from the ground up"
    },
    {
      icon: <BiTargetLock className="text-xl" />,
      title: "Goal Oriented",
      description: "Aligned with your business objectives and KPIs"
    }
  ];

  return (
    <section className="w-full py-20" id="approach">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="heading mb-4">
            My <span className="text-purple">approach</span> to development
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A systematic methodology that ensures every project is delivered with precision, 
            quality, and attention to detail.
          </p>
        </motion.div>

        {/* Development Phases */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.phase}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${approach.color} border ${approach.borderColor} backdrop-blur-sm p-8 hover:shadow-2xl hover:shadow-purple/10 transition-all duration-500`}
            >
              {/* Phase Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                {approach.phase}
              </div>

              {/* Icon */}
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 ${approach.iconBg} border ${approach.borderColor} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                {approach.icon}
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-purple/80 font-medium text-sm uppercase tracking-wider">
                    {approach.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
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
                      className="flex items-center gap-3 text-sm text-gray-400"
                    >
                      <FaCheckCircle className="text-purple text-xs flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Development Principles */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Core <span className="text-purple">Principles</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
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
                  transition: { duration: 0.2 }
                }}
                className="group p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 rounded-xl backdrop-blur-sm hover:border-purple/30 transition-all duration-300"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 bg-purple/20 border border-purple/30 rounded-lg mb-4 text-purple group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  {principle.icon}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple transition-colors duration-300">
                  {principle.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple/10 to-blue-500/10 border border-purple/20 rounded-2xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
                     <p className="text-gray-300 mb-6 max-w-md mx-auto">
             Let&apos;s discuss how we can bring your vision to life with this proven approach.
           </p>
           <motion.a
             href="#contact"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="inline-flex items-center gap-2 px-8 py-3 bg-purple hover:bg-purple/80 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple/25"
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
