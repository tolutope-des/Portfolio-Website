import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div 
      className="group w-full mb-20 md:mb-32 last:mb-0 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[16/10] md:aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="flex justify-between items-start mt-6 md:mt-8 px-1 md:px-2 border-t border-neutral-200 dark:border-neutral-800 pt-4 md:pt-6">
        <div>
          <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2">{project.title}</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base">{project.category} — {project.year}</p>
        </div>
        <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 transform md:translate-y-4 md:group-hover:translate-y-0">
            <span className="text-xs md:text-sm uppercase tracking-wider font-medium hidden sm:inline-block">View Case Study</span>
            <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;