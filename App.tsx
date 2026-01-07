import React, { useState, useRef, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import AiAssistant from './components/AiAssistant';
import InspirationCard from './components/InspirationCard';
import ConceptModal from './components/ConceptModal';
import { PROJECTS, ABOUT_PARAGRAPHS, SOCIALS, INSPIRATIONS, EMAIL_ADDRESS, RESUME_URL } from './constants';
import { Project, Inspiration } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollRestorer: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, scrollY);
  }, [scrollY]);
  return null;
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedInspiration, setSelectedInspiration] = useState<Inspiration | null>(null);
  
  // Store the scroll position to restore it when returning from a case study
  const scrollPosition = useRef(0);

  const handleNavClick = (sectionId: string) => {
    setSelectedProject(null);
    setSelectedInspiration(null);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Allow state to update and DOM to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleProjectClick = (project: Project) => {
    scrollPosition.current = window.scrollY;
    setSelectedProject(project);
  };

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navigation onNavClick={handleNavClick} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
             <ProjectDetail 
                key="project-detail"
                project={selectedProject} 
                onBack={() => setSelectedProject(null)} 
             />
          ) : (
            <motion.div
                key="home-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <ScrollRestorer scrollY={scrollPosition.current} />
                <Hero />

                {/* WORK SECTION */}
                <section id="work" className="py-24 md:py-32 px-5 md:px-12">
                  <div className="max-w-6xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-12 md:mb-32 flex items-baseline justify-between border-b border-border pb-4 md:pb-6"
                    >
                      <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase">Selected Work</h2>
                      <span className="text-xs md:text-sm text-muted-foreground">(04)</span>
                    </motion.div>
                    
                    <div className="flex flex-col gap-8 md:gap-12">
                      {PROJECTS.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                            onClick={() => handleProjectClick(project)}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* CONCEPTS / INSPIRATIONS SECTION */}
                <section id="concepts" className="py-24 md:py-32 px-5 md:px-12">
                  <div className="max-w-6xl mx-auto">
                     <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-12 md:mb-24 flex items-baseline justify-between border-b border-border pb-4 md:pb-6"
                    >
                      <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase">Concept Lab</h2>
                      <span className="text-xs md:text-sm text-muted-foreground">Inspirations</span>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                      {INSPIRATIONS.map((inspiration) => (
                        <InspirationCard 
                            key={inspiration.id} 
                            inspiration={inspiration} 
                            onClick={() => setSelectedInspiration(inspiration)}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* ABOUT SECTION */}
                <section id="about" className="py-24 md:py-32 px-5 md:px-12">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-12 md:mb-24 flex items-baseline justify-between border-b border-border pb-4 md:pb-6">
                            <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase">About</h2>
                        </div>
                        
                        <div className="space-y-8 md:space-y-12">
                          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                            <p 
                              key={index} 
                              className={`font-serif leading-relaxed tracking-wide ${
                                index === ABOUT_PARAGRAPHS.length - 1 
                                  ? 'text-xl md:text-3xl font-bold italic text-foreground' 
                                  : 'text-lg md:text-3xl text-foreground/90 font-light'
                              }`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        
                        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 text-muted-foreground">Services</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>Product Strategy</li>
                                    <li>UI/UX Design</li>
                                    <li>Design Systems</li>
                                    <li>Prototyping</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 text-muted-foreground">Recognition</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>Awwwards SOTD</li>
                                    <li>FWA Site of the Month</li>
                                    <li>CSS Design Awards</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 text-muted-foreground">AI Workflow</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>Generative Ideation</li>
                                    <li>Rapid Prototyping</li>
                                    <li>Research Synthesis</li>
                                    <li>Workflow Enhancement</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                  </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="py-24 md:py-32 px-5 md:px-12">
                    <div className="max-w-6xl mx-auto flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full text-left"
                        >
                            <h2 className="text-4xl md:text-9xl font-bold tracking-tighter mb-8 md:mb-8">
                                Let's Talk.
                            </h2>
                            <a 
                                href={`mailto:${EMAIL_ADDRESS}`}
                                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl border-b-2 border-foreground pb-1 inline-block hover:text-muted-foreground hover:border-muted-foreground transition-all break-all sm:break-normal"
                            >
                                {EMAIL_ADDRESS}
                            </a>
                        </motion.div>

                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-20 md:mt-32 pt-8 md:pt-12 border-t border-border gap-8 md:gap-0">
                            <p className="text-xs md:text-sm text-muted-foreground">
                                &copy; {new Date().getFullYear()} Tolutope Adebayo. All rights reserved.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <a 
                                    href={RESUME_URL}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs md:text-sm font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors"
                                >
                                    Resume
                                </a>
                                {SOCIALS.map(social => (
                                    <a 
                                        key={social.name} 
                                        href={social.url} 
                                        className="text-xs md:text-sm font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Concept/Inspiration Modal */}
        <AnimatePresence>
            {selectedInspiration && (
                <ConceptModal 
                    inspiration={selectedInspiration} 
                    onClose={() => setSelectedInspiration(null)} 
                />
            )}
        </AnimatePresence>
      </main>

      {/* Interactive Agent */}
      <AiAssistant />
    </div>
  );
};

export default App;