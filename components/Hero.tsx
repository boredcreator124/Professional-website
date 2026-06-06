"use client";

import { motion } from "framer-motion";
import { FolderKanban, Mail, Download } from "lucide-react";
import StatsCard from "./StatsCard";
import { Code, Gamepad2, Clock } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import GridBackground from "./GridBackground";

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24"
    >
      <GridBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 inline-block rounded-full border border-border bg-primary-secondary px-4 py-1.5 text-xs text-text-tertiary">
            Creative Technologist & Developer
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary/80 to-text-primary/60">
            experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-tertiary"
        >
          Software engineer, game developer, and web craftsman.
          I turn complex problems into elegant, interactive solutions with the use of storytelling to make them easier to understand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent-hover"
          >
            <FolderKanban className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-text-primary transition-all hover:bg-accent/10"
          >
            <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Contact Me
          </button>
          <a
            href="/Jacob_Baddoo_CV.pdf"
            download="Jacob_Baddoo_CV.pdf"
            className="group inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-text-primary transition-all hover:bg-accent/10"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 mx-auto mt-20 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <StatsCard
          icon={<Code className="h-5 w-5" />}
          value="5+"
          label="Projects Completed"
          delay={0.5}
        />
        <StatsCard
          icon={<Gamepad2 className="h-5 w-5" />}
          value="10+"
          label="Technologies Used"
          delay={0.6}
        />
        <StatsCard
          icon={<Clock className="h-5 w-5" />}
          value="3+"
          label="Years Learning"
          delay={0.7}
        />
      </motion.div>
    </section>
  );
}
