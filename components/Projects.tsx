"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Web Development",
  "Game Development",
  "Design",
  "AI Projects",
] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");

  const filtered: Project[] =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            subtitle="Selected work across web, game, design, and AI"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm transition-all",
                    activeFilter === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-secondary text-text-tertiary hover:text-text-primary border border-border"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
