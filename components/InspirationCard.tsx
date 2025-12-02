import React from 'react';
import { motion } from 'framer-motion';
import { Inspiration } from '../types';
import { Instagram } from 'lucide-react';

interface InspirationCardProps {
  inspiration: Inspiration;
}

const InspirationCard: React.FC<InspirationCardProps> = ({ inspiration }) => {
  return (
    <motion.a 
      href={inspiration.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.img 
        src={inspiration.image} 
        alt={inspiration.title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Mobile: Gradient background, always visible. Desktop: Black overlay, visible on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
        <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1 block">
                {inspiration.category}
            </span>
            <div className="flex justify-between items-end">
                <h3 className="text-white text-sm md:text-lg font-medium leading-tight line-clamp-2 md:line-clamp-none">
                {inspiration.title}
                </h3>
                <Instagram className="text-white w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0 ml-2" />
            </div>
        </div>
      </div>
    </motion.a>
  );
};

export default InspirationCard;