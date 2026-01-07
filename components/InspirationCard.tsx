import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inspiration } from '../types';
import { Instagram, Linkedin, Twitter, Dribbble, ArrowUpRight, Palette, Maximize2 } from 'lucide-react';

interface InspirationCardProps {
  inspiration: Inspiration;
  onClick: () => void;
}

const InspirationCard: React.FC<InspirationCardProps> = ({ inspiration, onClick }) => {
  const [imgError, setImgError] = useState(false);

  // Helper to get the correct icon based on platform
  const getIcon = () => {
    switch (inspiration.platform) {
      case 'twitter':
        return <Twitter className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />;
      case 'linkedin':
        return <Linkedin className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />;
      case 'instagram':
        return <Instagram className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />;
      case 'dribbble':
        return <Dribbble className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />;
      case 'behance':
        return <Palette className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />;
      default:
        return <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />;
    }
  };

  return (
    <motion.div 
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {!imgError ? (
        <motion.img 
            src={inspiration.image} 
            alt={inspiration.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center p-6">
            <span className="font-serif text-3xl italic text-white/20">Concept</span>
        </div>
      )}
      
      {/* Overlay - visible on hover (desktop) or always subtle on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
        <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex justify-between items-start mb-1">
                 <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/70 block">
                    {inspiration.category}
                </span>
                <Maximize2 className="text-white w-3 h-3 opacity-50" />
            </div>
           
            <div className="flex justify-between items-end">
                <h3 className="text-white text-sm md:text-lg font-medium leading-tight line-clamp-2 pr-4 flex-1">
                {inspiration.title}
                </h3>
                {getIcon()}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InspirationCard;