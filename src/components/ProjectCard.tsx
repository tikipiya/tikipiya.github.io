'use client';

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/10 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary/10 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-bold underline hover:text-cyan-300 transition"
          >
            PyPI
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-bold underline hover:text-cyan-300 transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 