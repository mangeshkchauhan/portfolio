"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

import { NavItem } from "@/data";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll visibility
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Track active section
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const sections = navItems.map(item => item.link.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleLinkClick = (link: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    if (typeof window !== 'undefined') {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 rounded-full shadow-lg backdrop-blur-lg bg-black/70 z-[5000] px-6 py-3 items-center justify-center space-x-4",
              className
            )}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((navItem, idx) => {
                const isActive = activeSection === navItem.link.replace('#', '');
                return (
                  <motion.div
                    key={`nav-${idx}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={navItem.link}
                      onClick={() => handleLinkClick(navItem.link)}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2",
                        isActive
                          ? "text-white bg-white/10 border border-white/20"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {navItem.icon && (
                        <span className="text-xs">{navItem.icon}</span>
                      )}
                      <span>{navItem.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-white/80 transition-colors"
              >
                {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </motion.button>
            </div>

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:mangeshkrm123@gmail.com"
                className="relative flex items-center space-x-2 border border-white/20 text-white hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group"
              >
                <FaEnvelope size={12} />
                <span className="hidden sm:inline">Contact</span>
                <span className="sm:hidden">Email</span>
                <motion.span
                  className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="contact-underline"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-[4999] md:hidden"
          >
            <div className="bg-black-100/95 backdrop-blur-lg border border-white/[0.1] rounded-2xl p-6 shadow-xl">
              <div className="space-y-4">
                {navItems.map((navItem, idx) => {
                  const isActive = activeSection === navItem.link.replace('#', '');
                  return (
                    <motion.div
                      key={`mobile-nav-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        href={navItem.link}
                        onClick={() => handleLinkClick(navItem.link)}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                          isActive
                            ? "text-white bg-white/10 border border-white/20"
                            : "text-neutral-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {navItem.icon && (
                          <span className="text-lg">{navItem.icon}</span>
                        )}
                        <span>{navItem.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-white/[0.1]"
                >
                  <a
                    href="mailto:mangeshkrm123@gmail.com"
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-white hover:text-white/80 hover:bg-white/5 transition-all duration-300"
                  >
                    <FaEnvelope />
                    <span>Contact Me</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[4998] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
