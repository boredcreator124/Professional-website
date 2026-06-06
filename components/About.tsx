"use client";

import { Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="A quick overview of who I am and what I do"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-text-tertiary sm:text-lg">
              I am a Software Engineer with a passion for building things
              that live at the intersection of code and creativity. Whether it
              is crafting responsive web applications, designing game mechanics,
              or experimenting with generative AI, I thrive on turning ideas
              into interactive reality.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with"
          />
        </ScrollReveal>

        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0.1 + i * 0.08}>
              <div className="group rounded-xl border border-border bg-primary-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:border-text-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                <h3 className="mb-4 font-semibold text-text-primary">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-primary-tertiary px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="#"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-text-primary transition-all hover:bg-accent/10"
              aria-label="Download CV"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
