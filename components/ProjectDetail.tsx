import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-28 pb-16 px-5 md:px-12 min-h-screen bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Work
        </button>

        {/* Title Section */}
        <div className="mb-12 md:mb-24">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-foreground"
          >
            {project.title}
          </motion.h1>
          
          <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-24 border-t border-border pt-6 md:pt-8">
            <div>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1 md:mb-2">Category</span>
              <span className="text-sm md:text-lg">{project.category}</span>
            </div>
            <div>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1 md:mb-2">Year</span>
              <span className="text-sm md:text-lg">{project.year}</span>
            </div>
             <div className="col-span-2 md:col-span-1">
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1 md:mb-2">Role</span>
              <span className="text-sm md:text-lg">Lead Product Designer</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div 
            className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 mb-16 md:mb-24 overflow-hidden rounded-sm"
        >
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-20 md:mb-32">
            <div className="md:col-span-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">The Challenge</h3>
            </div>
            <div className="md:col-span-2">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                    {project.description} This project required a deep dive into user behavior and market analysis. 
                    The primary goal was to simplify complex data structures into an intuitive interface that empowers users 
                    to make informed decisions without cognitive overload. We focused on stripping away the non-essential 
                    to reveal the core utility of the product.
                </p>
            </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-20 md:mb-32">
            <div className="md:col-span-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">The Solution</h3>
            </div>
            <div className="md:col-span-2">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                    By implementing a modular design system and utilizing subtle micro-interactions, we created a fluid 
                    user experience. The visual language relies on negative space and strong typography to guide attention. 
                    The result is a product that feels both robust and lightweight, achieving a 40% increase in user engagement 
                    within the first quarter of launch.
                </p>
            </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 md:mb-32">
            <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-sm">
                 <img src={`https://picsum.photos/800/1000?random=${project.id}1`} className="w-full h-full object-cover transition-all duration-700" alt="Detail 1" />
            </div>
            <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-sm mt-0 md:mt-24">
                 <img src={`https://picsum.photos/800/1000?random=${project.id}2`} className="w-full h-full object-cover transition-all duration-700" alt="Detail 2" />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;