"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollTo } from "@/hooks/useScrollTo";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Dashboard", href: "hero" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const scrollTo = useScrollTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (id: string) => {
    setIsOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-primary/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("hero")}
          className="text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-text-primary/80"
          aria-label="Go to top"
        >
          Jacob Baddoo
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={cn(
                "relative rounded-lg px-4 py-2 text-sm transition-colors",
                activeSection === link.href
                  ? "text-text-primary"
                  : "text-text-tertiary hover:text-text-primary"
              )}
              aria-label={`Scroll to ${link.label}`}
            >
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-accent/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 rounded-lg p-2 text-text-primary transition-colors hover:bg-accent/10 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-md md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleClick(link.href)}
                  className={cn(
                    "px-8 py-3 text-lg transition-colors",
                    activeSection === link.href
                      ? "text-text-primary"
                      : "text-text-tertiary hover:text-text-primary"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
