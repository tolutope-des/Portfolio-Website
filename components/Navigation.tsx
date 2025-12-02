import React, { useState, useEffect } from 'react';
import { RESUME_URL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onNavClick: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Concepts', id: 'concepts' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  // Ultra-smooth spring configuration for "Million Dollar" feel
  const transitionSpring = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8
  };

  return (
    <>
      {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
      <nav 
        className={`hidden md:flex fixed top-0 left-0 w-full px-12 py-6 justify-between items-center z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-foreground/5' : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <div 
          className="text-lg font-bold tracking-tighter uppercase cursor-pointer text-foreground mix-blend-exclusion active:scale-95 transition-transform"
          onClick={() => handleNavClick('home')}
        >
          TA( )
        </div>

        {/* Desktop Menu */}
        <ul className="flex items-center space-x-8 text-sm font-medium text-foreground mix-blend-exclusion">
          {navLinks.map((item) => (
            <li key={item.name} className="flex items-center">
               <button
                  onClick={() => handleNavClick(item.id)}
                  className="relative group cursor-pointer uppercase tracking-wide opacity-70 hover:opacity-100 transition-opacity p-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
                </button>
            </li>
          ))}
          
          {/* Resume Link */}
          <li className="flex items-center h-full">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer uppercase tracking-wide opacity-70 hover:opacity-100 transition-opacity p-1 flex items-center gap-1"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>
      </nav>

      {/* MOBILE NAVIGATION SYSTEM */}
      
      {/* 1. Mobile Logo (Fixed Top Left) */}
      <div 
        className="md:hidden fixed top-6 left-5 z-50 text-base font-bold tracking-tighter uppercase text-foreground mix-blend-exclusion pointer-events-auto"
        onClick={() => handleNavClick('home')}
      >
        TA( )
      </div>

      {/* 2. Floating Dock Trigger / Menu */}
      <div className="md:hidden fixed bottom-8 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
        <div className="pointer-events-auto">
            <AnimatePresence mode="wait">
                {!isMobileMenuOpen ? (
                    <motion.button
                        key="menu-trigger"
                        layoutId="nav-pill"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.05 } }}
                        transition={transitionSpring}
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="h-14 px-8 bg-foreground/90 text-background backdrop-blur-md rounded-full shadow-2xl flex items-center gap-3 active:scale-95"
                    >
                        <Menu size={18} />
                        <span className="text-sm font-bold uppercase tracking-widest">Menu</span>
                    </motion.button>
                ) : (
                    <motion.div
                        key="menu-content"
                        layoutId="nav-pill"
                        transition={transitionSpring}
                        className="bg-background/95 backdrop-blur-3xl border border-white/10 dark:border-white/5 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden w-[90vw] max-w-sm"
                    >
                        <motion.div 
                            className="p-6 flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }} // Instant exit to prevent shape distortion
                        >
                             <div className="flex justify-between items-center mb-6 pb-4 border-b border-border/10">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Navigation</span>
                                <button 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                             </div>

                             <nav className="flex flex-col gap-2">
                                {navLinks.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                        onClick={() => handleNavClick(item.id)}
                                        className="text-left text-3xl font-light tracking-tight hover:pl-4 transition-all duration-300 py-2 active:text-muted-foreground"
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-6 mt-4 border-t border-border/10"
                                >
                                    <a
                                        href={RESUME_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-foreground transition-colors group"
                                    >
                                        <span>Resume</span>
                                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </motion.div>
                             </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navigation;