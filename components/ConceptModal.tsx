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
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl overflow-hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute inset-0 w-full h-full bg-background overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 left-0 right-0 z-[110] flex justify-between items-center px-4 pt-20 pb-4 md:px-6 md:pt-24 md:pb-6 bg-background/80 backdrop-blur-lg border-b border-border/10">
          <div className="pl-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {inspiration.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors mt-2 shadow-sm"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Container - Centered and Bold */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-20">

          {/* Header Text */}
          <div className="w-full pt-10 pb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight tracking-tight">
              {inspiration.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {inspiration.description}
            </p>

            {/* {inspiration.link && (
              <a
                href={inspiration.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                View Project <ArrowUpRight size={18} />
              </a>
            )} */}
          </div>

          {/* Large Bold Images */}
          <div className="flex flex-col gap-8 md:gap-16 w-full">
            {inspiration.gallery && inspiration.gallery.length > 0 ? (
              inspiration.gallery.map((img, idx) => (
                <div key={idx} className="w-full rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900 border border-border/40">
                  <img
                    src={img}
                    alt={`${inspiration.title} - ${idx + 1}`}
                    className="w-full h-auto object-cover block"
                  />
                </div>
              ))
            ) : (
              <div className="w-full rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900 border border-border/40">
                <img
                  src={inspiration.image}
                  alt={inspiration.title}
                  className="w-full h-auto object-cover block"
                />
              </div>
            )}
          </div>

          {/* Footer Navigation (Optional - connects to next/prev in future) */}
          <div className="flex justify-center mt-24 pb-12">
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wide uppercase text-sm"
            >
              Back to Concepts
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConceptModal;
