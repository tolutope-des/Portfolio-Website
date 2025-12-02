import React from 'react';
import { motion } from 'framer-motion';
import { HERO_TEXT, AVATAR_IMAGE } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="min-h-[90svh] md:min-h-screen flex items-center justify-center px-5 md:px-12 pt-24 md:pt-0 relative overflow-hidden">
        {/* Ambient Background Animation */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <motion.div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-200/50 dark:bg-neutral-800/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay"
                animate={{ 
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-100/50 dark:bg-neutral-900/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay"
                animate={{ 
                    x: [0, -70, 70, 0],
                    y: [0, 70, -70, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
            />
        </div>

      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Metadata Row - Avatar & Name Only */}
        <motion.div
            className="mb-6 flex flex-col md:flex-row md:items-center justify-start gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
             {/* Avatar & Name */}
             <div className="flex items-center gap-4">
                <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-border transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                >
                  <img src={AVATAR_IMAGE} alt="Tolutope Adebayo" className="w-full h-full object-cover object-top" />
                </motion.div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Tolutope Adebayo
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">
                    Product Designer
                    </span>
                </div>
             </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold leading-[1.05] tracking-tight text-foreground"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {HERO_TEXT.split(" ").map((word, i) => (
            <motion.span 
                key={i} 
                className="inline-block mr-3 md:mr-6 last:mr-0" 
                variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Status Indicator - Moved Below Title */}
        <motion.div 
            className="mt-8 md:mt-12 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
            <div className="relative flex h-2.5 w-2.5">
            <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
            ></motion.span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <p className="text-xs font-medium text-foreground/80 uppercase tracking-widest">
            Working Globally
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;