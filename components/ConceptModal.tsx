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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-xl p-0 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full md:h-[90vh] md:max-w-[95vw] flex flex-col md:flex-row bg-background md:border border-border/50 shadow-2xl md:rounded-xl rounded-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed on mobile to ensure it's always visible above the scrollable content */}
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-[70] p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-background transition-colors shadow-sm"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Mobile: Scrollable Vertical Stack. Desktop: Horizontal Split. */}
        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto md:overflow-hidden">

          {/* Image Section - Main Content */}
          <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 relative order-1 md:h-full md:overflow-y-auto no-scrollbar">
            {/* Background blur effect */}
            <div
              className="fixed inset-0 opacity-20 blur-3xl scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${inspiration.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            <div className="relative z-10 p-0 md:p-12 flex flex-col gap-0 md:gap-8 min-h-[40vh]">
              {inspiration.gallery && inspiration.gallery.length > 0 ? (
                inspiration.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${inspiration.title} - ${idx + 1}`}
                    className="w-full h-auto object-contain shadow-none md:shadow-2xl md:rounded-lg"
                  />
                ))
              ) : (
                <div className="flex items-center justify-center min-h-full p-4 md:p-0">
                  <img
                    src={inspiration.image}
                    alt={inspiration.title}
                    className="w-full h-auto max-h-full object-contain shadow-2xl rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-[400px] bg-background p-6 md:p-10 shrink-0 border-t md:border-t-0 md:border-l border-border/50 order-2 overflow-y-auto flex flex-col md:justify-center">
            {/* Content */}
            <div className="md:mt-0 pb-10 md:pb-0">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                {inspiration.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground leading-tight break-words pr-8">
                {inspiration.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {inspiration.description || "A conceptual exploration of user interface patterns. This design focuses on minimalist aesthetics and functional density, stripping away the non-essential to reveal the core interaction model."}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConceptModal;