"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { NavItem } from "@/data";

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn("inline-flex h-9 w-9 shrink-0 rounded-full", className)}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "p-2 rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-muted dark:bg-white/5 dark:hover:bg-white/10",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </motion.button>
  );
}

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

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleLinkClick = (link: string) => {
    setMobileMenuOpen(false);

    if (typeof window !== "undefined") {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const linkBase =
    "relative isolate inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";
  const linkActive =
    "text-foreground dark:text-white";
  const linkInactive =
    "text-muted-foreground hover:text-foreground hover:bg-muted/60 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5";

  const mobileLinkBase =
    "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300";
  const mobileLinkActive =
    "text-foreground bg-muted/90 border border-border dark:text-white dark:bg-white/10 dark:border-white/20";
  const mobileLinkInactive =
    "text-muted-foreground hover:text-foreground hover:bg-muted/50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5";

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
              "flex max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto border border-border dark:border-white/[0.08] rounded-full shadow-lg backdrop-blur-xl bg-white/80 dark:bg-black/80 z-[5000] px-4 py-2.5 sm:px-6 sm:py-3 items-center justify-center gap-2 sm:gap-4 font-sans",
              className
            )}
          >
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((navItem, idx) => {
                const isActive =
                  activeSection === navItem.link.replace("#", "");
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
                        linkBase,
                        isActive ? linkActive : linkInactive
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          aria-hidden
                          className="absolute inset-0 -z-10 rounded-full bg-muted border border-border dark:bg-white/10 dark:border-white/20"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span className="relative z-10 inline-flex items-center gap-2">
                        {navItem.icon && (
                          <span className="text-xs shrink-0">{navItem.icon}</span>
                        )}
                        <span>{navItem.name}</span>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <ThemeToggle className="hidden md:inline-flex" />

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground dark:text-white hover:opacity-80 transition-colors"
              >
                {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </motion.button>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="mailto:mangeshkrm123@gmail.com"
                className="relative flex items-center gap-1.5 sm:space-x-2 border border-border dark:border-white/20 text-foreground dark:text-white hover:bg-muted/80 dark:hover:bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 group"
              >
                <FaEnvelope size={12} />
                <span className="hidden sm:inline">Contact</span>
                <span className="sm:hidden">Email</span>
                <motion.span
                  className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent dark:via-white h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="contact-underline"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-[4999] md:hidden"
          >
            <div className="bg-background/95 dark:bg-black-100/95 backdrop-blur-lg border border-border dark:border-white/[0.1] rounded-2xl p-6 shadow-xl">
              <div className="space-y-4">
                {navItems.map((navItem, idx) => {
                  const isActive =
                    activeSection === navItem.link.replace("#", "");
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
                          mobileLinkBase,
                          isActive ? mobileLinkActive : mobileLinkInactive
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

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-border dark:border-white/[0.1]"
                >
                  <a
                    href="mailto:mangeshkrm123@gmail.com"
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-foreground dark:text-white hover:opacity-80 hover:bg-muted/50 dark:hover:bg-white/5 transition-all duration-300"
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-[4998] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
