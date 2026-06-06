"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / centerY * -6);
    setRotateY((x - centerX) / centerX * 6);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group perspective"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease-out" : "transform 0.08s ease-out",
        }}
        className="relative overflow-hidden rounded-xl border border-border bg-primary-secondary transition-all duration-300 hover:-translate-y-1 hover:border-text-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
      >
        <div className="relative flex aspect-video items-center justify-center bg-primary-tertiary transition-colors group-hover:bg-primary-secondary/80 overflow-hidden">
{project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
              </div>
            </>
          ) : (
            <span className="select-none text-4xl font-bold tracking-tighter text-text-tertiary">
              {project.imagePlaceholder}
            </span>
          )}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="p-5">
          <div className="mb-2">
            <span className="inline-block rounded-full border border-border bg-primary-tertiary px-3 py-0.5 text-xs text-text-tertiary">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-tertiary line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-primary-tertiary px-2 py-0.5 text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md bg-primary-tertiary px-2 py-0.5 text-xs text-text-tertiary">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-primary"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-primary"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
