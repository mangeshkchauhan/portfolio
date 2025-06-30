"use client";
import { FaLocationArrow, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { socialMedia, navItems } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "React Native", "Tailwind CSS"
  ];

  return (
    <footer className="w-full relative overflow-hidden" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 top-0 min-h-full opacity-20">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/50 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 pt-20 pb-10"
      >
        {/* Main CTA Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-20">
          <motion.h1 
            variants={itemVariants}
            className="heading lg:max-w-[45vw] mb-6"
          >
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white-200 text-lg max-w-2xl leading-relaxed mb-8"
          >
            Let&apos;s collaborate to bring your ideas to life. I&apos;m available for freelance projects, 
            full-time opportunities, and exciting collaborations.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a href="mailto:mangeshkrm123@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* About Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Full-stack developer passionate about creating innovative solutions 
                that make a difference. Specialized in React, React Native, and modern web technologies.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple">4+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple">15+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-white font-medium mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple/10 border border-purple/20 rounded-full text-purple text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="text-gray-300 hover:text-purple transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      Resume
                    </span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-purple mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:mangeshkrm123@gmail.com"
                      className="text-white hover:text-purple transition-colors"
                    >
                      mangeshkrm123@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-purple mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white">India (Remote Available)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-300 text-sm">Status</p>
                    <p className="text-green-400">Available for work</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-white font-medium mb-3">Follow Me</h4>
                <div className="flex gap-3">
                  {socialMedia.map((social) => (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple/20 border border-white/10 hover:border-purple/30 rounded-lg transition-all duration-300 group"
                    >
                      <Image
                        src={social.img}
                        alt="social"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants} 
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Mangesh Kumar Chauhan. All rights reserved.
              </p>
              {/* <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Terms of Service
                </a>
              </div> */}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-purple/10 hover:bg-purple/20 border border-purple/30 rounded-lg text-purple text-sm font-medium transition-all duration-300"
            >
              <FaArrowUp size={12} />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-60"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;
