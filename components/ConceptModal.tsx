import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, Twitter, Linkedin, Instagram, Dribbble, Palette } from 'lucide-react';
import { Inspiration } from '../types';

interface ConceptModalProps {
  inspiration: Inspiration;
  onClose: () => void;
}

const ConceptModal: React.FC<ConceptModalProps> = ({ inspiration, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-xl p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors z-50 text-foreground"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl max-h-[90vh] flex flex-col md:flex-row bg-background border border-border/50 shadow-2xl rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4 md:p-12 overflow-hidden relative">
             {/* Background blur effect for filling space */}
            <div 
                className="absolute inset-0 opacity-20 blur-3xl scale-110"
                style={{ backgroundImage: `url(${inspiration.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            
            <img 
                src={inspiration.image} 
                alt={inspiration.title}
                className="relative max-w-full max-h-[50vh] md:max-h-[80vh] object-contain shadow-2xl"
            />
        </div>

        {/* Info Sidebar */}
        <div className="w-full md:w-96 bg-background p-6 md:p-10 flex flex-col border-t md:border-t-0 md:border-l border-border/50 justify-center">
            <div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                    {inspiration.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground leading-tight break-words">
                    {inspiration.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    A conceptual exploration of user interface patterns. This design focuses on minimalist aesthetics and functional density, stripping away the non-essential to reveal the core interaction model.
                </p>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConceptModal;