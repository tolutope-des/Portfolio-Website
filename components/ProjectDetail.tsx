import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUp, Check, Minus, Layers, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-background min-h-screen"
        >
            {/* 1. PROGRESS BAR (Top) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-foreground z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Increased padding-top to avoid overlap with fixed Navigation on mobile (pt-32) */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pb-32 pt-32 md:pt-32">

                {/* 2. NAVIGATION (Inline) */}
                <div className="mb-8">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Work
                    </button>
                </div>

                {/* 3. HERO SECTION - Single Typeface, Left Aligned */}
                <header className="py-12 border-b border-foreground">
                    <div className="max-w-7xl">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Category: Grey, no border */}
                            <span className="inline-block mb-6 text-sm md:text-base font-medium text-muted-foreground">
                                {project.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground mb-8">
                                {project.title}
                            </h1>

                            {/* Description Left Aligned */}
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-normal">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                </header>

                {/* 4. HERO IMAGE & METADATA BAR */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mt-12"
                >
                    <div className="w-full aspect-video md:aspect-[2.4/1] bg-neutral-200 dark:bg-neutral-800 overflow-hidden mb-12 rounded-sm">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-1000 ease-out"
                        />
                    </div>

                    {project.caseStudy && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-border">
                            <div>
                                <h5 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-bold">Role</h5>
                                <p className="text-sm font-medium">{project.caseStudy.role}</p>
                            </div>
                            <div>
                                <h5 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-bold">Timeline</h5>
                                <p className="text-sm font-medium">{project.caseStudy.timeline}</p>
                            </div>
                            <div>
                                <h5 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-bold">Team</h5>
                                <p className="text-sm font-medium">{project.caseStudy.team}</p>
                            </div>
                            <div>
                                <h5 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-bold">Status</h5>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${project.caseStudy.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                                    <p className="text-sm font-medium">{project.caseStudy.status}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* 5. CONTENT BODY */}
                {project.caseStudy ? (
                    <div className="mt-24 md:mt-40 space-y-32 md:space-y-48">

                        {/* SECTION 01: THE CHALLENGE */}
                        <section className="grid md:grid-cols-12 gap-12">
                            {/* Sticky Header */}
                            <div className="md:col-span-3">
                                <div className="md:sticky md:top-32">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-bold">01</span>
                                    <h2 className="text-2xl font-bold">The Challenge</h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-8 md:col-start-5 space-y-16">
                                <div>
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-8 tracking-tight">
                                        {project.caseStudy.problem.statement}
                                    </h3>
                                    <div className="h-[1px] w-24 bg-foreground mb-12" />

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <h4 className="text-xs uppercase tracking-widest font-bold text-red-500 flex items-center gap-2">
                                                <Minus size={14} /> Friction
                                            </h4>
                                            <ul className="space-y-4">
                                                {project.caseStudy.problem.before.map((item, i) => (
                                                    <li key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-6">
                                            <h4 className="text-xs uppercase tracking-widest font-bold text-green-500 flex items-center gap-2">
                                                <Check size={14} /> Objective
                                            </h4>
                                            <ul className="space-y-4">
                                                {project.caseStudy.problem.needs.map((item, i) => (
                                                    <li key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 02: CONTEXT & ROLE */}
                        <section className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-3">
                                <div className="md:sticky md:top-32">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-bold">02</span>
                                    <h2 className="text-2xl font-bold">Context & Role</h2>
                                </div>
                            </div>

                            <div className="md:col-span-8 md:col-start-5 space-y-12">
                                <p className="text-xl md:text-2xl font-light leading-relaxed">
                                    {project.caseStudy.context.description}
                                </p>

                                <div className="bg-neutral-50 dark:bg-neutral-900 border-l-4 border-foreground p-6 md:p-8 rounded-r-lg">
                                    <h4 className="font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                                        <Layers size={16} /> Constraints
                                    </h4>
                                    <ul className="grid gap-4">
                                        {project.caseStudy.context.constraints.map((c, i) => (
                                            <li key={i} className="text-base text-foreground/80 font-medium leading-snug">
                                                • {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {project.caseStudy.myRole && (
                                    <div className="pt-12 border-t border-border">
                                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-muted-foreground">My Ownership</h4>
                                        <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8">
                                            {project.caseStudy.myRole.main.map((item, i) => (
                                                <li key={i} className="text-base md:text-lg text-foreground flex gap-4">
                                                    <span className="text-xs mt-1.5 font-bold opacity-30 shrink-0">0{i + 1}</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* SECTION 03: DECISIONS (Zig Zag Layout) */}
                        <section className="border-t border-foreground pt-24">
                            <div className="mb-24 md:text-center max-w-3xl mx-auto">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4 font-bold">03 Design Decisions</span>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Bridging the Gap</h2>
                            </div>

                            <div className="space-y-32">
                                {project.caseStudy.decisions.map((decision, idx) => (
                                    <div key={idx} className="grid md:grid-cols-12 gap-12 items-center">
                                        {/* Text Block */}
                                        <div className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-last md:col-start-8' : 'md:col-start-1'}`}>
                                            <div className="flex gap-4 md:gap-6 items-start">
                                                {/* Number - Aligned Start, but visually large */}
                                                <span className="text-3xl md:text-5xl text-muted-foreground/20 font-bold leading-none mt-1 shrink-0 select-none">
                                                    0{idx + 1}
                                                </span>

                                                {/* Content Group - Aligned underneath Title */}
                                                <div className="flex flex-col">
                                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                                                        {decision.problem}
                                                    </h3>
                                                    <p className="text-muted-foreground text-lg mb-8">
                                                        {decision.subProblem}
                                                    </p>

                                                    <div className="pt-8 border-t border-border w-full">
                                                        <h4 className="text-xs uppercase tracking-widest font-bold text-foreground mb-4">The Decision</h4>
                                                        <p className="text-xl font-bold mb-4">{decision.decision}</p>
                                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                                            {decision.why}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image Block */}
                                        <div className={`md:col-span-6 ${idx % 2 === 1 ? 'md:order-first md:col-start-1' : 'md:col-start-7'}`}>
                                            <div className="relative group overflow-hidden bg-neutral-100 dark:bg-neutral-800 aspect-[4/3] rounded-sm shadow-lg">
                                                <img
                                                    src={decision.image}
                                                    alt={decision.decision}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 border border-black/5 dark:border-white/5" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* SECTION 04: SOLUTIONS */}
                        <section className="bg-neutral-50 dark:bg-neutral-900 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-24 md:py-40">
                            <div className="grid md:grid-cols-12 gap-12 mb-20">
                                <div className="md:col-span-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-bold">04</span>
                                    <h2 className="text-4xl font-bold tracking-tight">The Solution</h2>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        A comprehensive system designed to scale. From the driver's pocket to the admin's command center.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-24">
                                {project.caseStudy.solutions.map((sol, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-4 border-b border-border">
                                            <div className="max-w-xl">
                                                <h3 className="text-3xl font-bold mb-2 tracking-tight">{sol.title}</h3>
                                                {sol.description && <p className="text-muted-foreground text-lg">{sol.description}</p>}
                                            </div>
                                            {/* Tags/Pills REMOVED entirely */}
                                        </div>
                                        <div className="w-full aspect-video bg-background shadow-2xl overflow-hidden rounded-sm">
                                            <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* SECTION 05: IMPACT & LEARNINGS */}
                        <section className="grid md:grid-cols-12 gap-12 pb-24">
                            <div className="md:col-span-3">
                                <div className="md:sticky md:top-32">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-bold">05</span>
                                    <h2 className="text-2xl font-bold">Outcomes</h2>
                                </div>
                            </div>

                            <div className="md:col-span-8 md:col-start-5">
                                <div className="mb-16">
                                    <h3 className="text-2xl md:text-4xl font-medium leading-tight mb-8 tracking-tight">
                                        {project.caseStudy.impact.description}
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        {project.caseStudy.impact.outcomes.map((outcome, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <span className="text-xs font-bold mt-1.5 opacity-30 shrink-0">0{i + 1}</span>
                                                <p className="text-lg opacity-90 font-medium">{outcome}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-border">
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-50">Successes</h4>
                                        <ul className="space-y-4">
                                            {project.caseStudy.learnings.good.map((item, i) => (
                                                <li key={i} className="text-muted-foreground flex gap-3 text-lg">
                                                    <Check className="w-5 h-5 mt-1 text-foreground shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-50">Reflections</h4>
                                        <ul className="space-y-4">
                                            {project.caseStudy.learnings.improve.map((item, i) => (
                                                <li key={i} className="text-muted-foreground flex gap-3 text-lg">
                                                    <Zap className="w-5 h-5 mt-1 text-foreground shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {project.caseStudy.summary && (
                                    <div className="mt-24 p-8 md:p-12 bg-foreground text-background text-center rounded-sm">
                                        <p className="text-xl md:text-3xl font-light italic leading-relaxed opacity-90">
                                            "{project.caseStudy.summary}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Back to Top */}
                        <div className="flex justify-center pb-20">
                            <button
                                onClick={scrollToTop}
                                className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                <div className="p-4 border border-border rounded-full group-hover:border-foreground transition-colors">
                                    <ArrowUp className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest">Back to Top</span>
                            </button>
                        </div>

                    </div>
                ) : (
                    <div className="mt-24 md:mt-32 max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                In Progress
                            </div>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Coming Soon</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            Building the future of {project.category.toLowerCase()}.
                        </h2>

                        <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mb-12">
                            {project.description}
                        </p>

                        <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-sm border-l-2 border-foreground">
                            <p className="text-base md:text-lg font-medium">
                                This project is currently active. A comprehensive case study detailing the problem space, UX architecture, and interface design will be available shortly after launch.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </motion.div>
    );
};

export default ProjectDetail;