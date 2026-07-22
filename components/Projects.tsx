'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Compass, 
  Cpu, 
  TrendingUp, 
  ChevronRight,
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  ShieldCheck,
  Award
} from 'lucide-react';

interface Project {
  title: string;
  categories: string[];
  market: string;
  description: string;
  tags: string[];
  metrics: string;
  url: string;
  image: string;
}

const projectsMatrix: Project[] = [
  {
    title: "Ruma Nest Platform",
    categories: ["web"],
    market: "UAE (Dubai Market)",
    description: "An integrated property listing and shared commute platform. Engineered complex localized dynamic data filters to match user listings with real-time car lift options seamlessly.",
    tags: ["Next.js", "TypeScript", "Sanity.io", "Tailwind CSS", "SEO Optimization"],
    metrics: "Real-time Property & Commute Filtering",
    url: "https://rumanest.com",
    image: "/images/projects/ruma-nest-logo.svg"
  },
  {
    title: "ShahMotors Marketplace",
    categories: ["web"],
    market: "Ireland Market",
    description: "A fast, modern automotive classifieds ecosystem built on a headless infrastructure. Engineered to satisfy strict Core Web Vitals criteria alongside semantic markup optimization to maximize local lookup traffic.",
    tags: ["Next.js", "TypeScript", "Sanity.io", "Tailwind CSS", "SEO Strategy"],
    metrics: "Optimized Core Web Vitals & Search Engine Visibility",
    url: "https://shahmotors.ie",
    image: "/images/projects/shahmotots-logo.png"
  },
  {
    title: "ChoreHustler Platform",
    categories: ["web", "mobile"],
    market: "Ireland Market",
    description: "An on-demand service workforce engine where I built out both the client-facing responsive web application interface and engineered the core RESTful backend APIs powering the mobile app ecosystem.",
    tags: ["Ruby on Rails", "Mobile API", "Stripe API", "Sidekiq"],
    metrics: "Full Web Delivery + Unified Mobile API Node",
    url: "https://chorehustler.com",
    image: "/images/projects/ch-logo.png"
  },
  {
    title: "RiskTrack Tracker",
    categories: ["web", "mobile"],
    market: "Nigeria & Ireland",
    description: "A highly secure asset protection and milestone tracking tool. Fully architected the web application layout while simultaneously designing the relational API architecture providing high-speed cross-border data delivery.",
    tags: ["Ruby on Rails", "Stimulus.js", "RESTful APIs", "Paystack", "Stripe API"],
    metrics: "Web Architecture + Multi-Gateway Mobile Backend",
    url: "https://www.risktrack.co",
    image: "/images/projects/risk-track-logo.webp"
  },
  {
    title: "Shifts Track Software",
    categories: ["enterprise", "web", "mobile"],
    market: "United Kingdom",
    description: "An enterprise SaaS human resource suite built to process personnel shifts and workforce scheduling data. Engineered the full-scale corporate web dashboard interface alongside robust system APIs.",
    tags: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Mobile REST API", "Bootstrap UI"],
    metrics: "Enterprise Web Panels & Dynamic Mobile Sync",
    url: "https://shiftstrack.com",
    image: "/images/projects/shift-track-logo.png"
  },
  {
    title: "EasyBids Real-Time Auction",
    categories: ["web", "mobile"],
    market: "United States",
    description: "An online auction software system integrating transactional escrow pipelines and background countdown timers. Successfully delivered the front-end web portal integration with sub-second API updates.",
    tags: ["Ruby on Rails", "Sidekiq", "Mobile API Systems", "Stripe API", "Stimulus.js"],
    metrics: "Interactive Web Portal & Mobile Real-time Sync",
    url: "https://easybids.com",
    image: "/images/projects/easy-bids-logo.svg"
  },
  {
    title: "Protected Shops Engine",
    categories: ["enterprise"],
    market: "E-Commerce Security",
    description: "A secure e-commerce support system utilizing modern reactive backend workflows to manage store compliance, automated documentation updates, and background generation tools.",
    tags: ["Ruby on Rails", "Stimulus.js", "Turbo", "Sidekiq", "Tailwind CSS"],
    metrics: "Real-time Compliance Document Pipelines",
    url: "https://www.protectedshops.de/",
    image: "/images/projects/protected-shope-logo.png"
  },
  {
    title: "Auxilium Services Website",
    categories: ["marketing"],
    market: "UK & Ireland",
    description: "A professional corporate web presence optimized for local service marketing. Focused on clean semantic markup, fast load vectors, and structured data execution to bolster client capture rates.",
    tags: ["HTML5", "CSS3", "JavaScript", "Technical SEO"],
    metrics: "Enhanced Regional Organic Search Rank",
    url: "https://www.auxl.co.uk",
    image: "/images/projects/aux-logo.webp"
  },
  {
    title: "Travolyo Security",
    categories: ["marketing"],
    market: "UAE (Dubai Market)",
    description: "A high-visibility corporate presentation engine tailored for a digital protection suite in the Dubai market, featuring optimized modern styling and localized asset delivery paths.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "SEO Optimization"],
    metrics: "High-Performance Regional Funnel Architecture",
    url: "https://www.travolyosecurities.com/",
    image: "/images/projects/trevolyo-logo.svg"
  },
  {
    title: "Scarlet Roofing Portal",
    categories: ["marketing"],
    market: "Canada / USA",
    description: "A clean, component-driven client service portal engineered with modern UI rendering modules to streamline customer interaction channels and estimation processing.",
    tags: ["React.js", "JavaScript (ES6+)", "CSS Modules"],
    metrics: "Componentized Modular User Interface",
    url: "https://scarletconstruction.ca",
    image: "/images/projects/scarlet-logo.avif"
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  useEffect(() => {
    const updated = projectsMatrix.filter(project => {
      if (selectedCategory === "all") return true;
      return project.categories.includes(selectedCategory);
    });
    setFilteredProjects(updated);
    setActiveProjectIndex(0); // Safely reset active index
  }, [selectedCategory]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProjectIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProjectIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="w-full relative z-10 py-24 px-6 max-w-7xl mx-auto">      
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--brand-mint)/20 border border-(--brand-mint) backdrop-blur-xs">
          <Sparkles className="w-4 h-4 text-(--text-mint-dark) animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-(--text-mint-dark)">
            Core Portfolio
          </span>
        </div>
        <h2 className="main-heading">
          EXPLORE OUR PROJECTS
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
         A selective grid of digital engineering architectures built to deliver performance, scalability, and clean UI/UX interfaces.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 bg-white/80 p-2 mb-10 rounded-2xl border border-slate-200/60 shadow-md backdrop-blur-md">
        {["all", "web", "mobile", "enterprise", "marketing"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? "bg-(--text-purple) text-white shadow-lg shadow-indigo-600/25"
                : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <main className="max-w-7xl mx-auto w-full grow flex items-center justify-center relative z-10 mb-8">
        <LayoutGroup>
          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-150 lg:h-132 select-none">
            {filteredProjects.map((project, idx) => {
              const isActive = activeProjectIndex === idx;

              return (
                <motion.div
                  key={project.title}
                  layout="position"
                  onClick={() => !isActive && setActiveProjectIndex(idx)}
                  className={`
                    relative overflow-hidden cursor-pointer border ease-out transition-all duration-500 group
                    
                    /* 1. Global / Mobile First Settings */
                    rounded-3xl sm:rounded-4xl
                    
                    ${isActive 
                      ? `
                        flex-none h-auto min-h-[400px] md:min-h-[500px] 
                        lg:flex-9 lg:h-full 
                        bg-white border-indigo-200/70 shadow-2xl shadow-indigo-900/10
                      ` 
                      : `
                        flex-none h-20 md:h-24 
                        lg:flex-[1.2] lg:h-full lg:min-h-22 
                        bg-white/70 hover:bg-white border-slate-200/60 hover:border-indigo-100 shadow-sm
                      `
                    }
                  `}
                >                  
                  
                  <div className="absolute inset-0 z-0">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ 
                        scale: isActive ? 1.02 : 1.1, 
                        filter: isActive ? 'brightness(0.97) contrast(95%) blur(0px)' : 'brightness(0.6) grayscale(30%) blur(1px)' 
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all"
                    />
                    {/* Dark gradient overlay layers ensuring contrast on collapsed slats, soft overlay on expanded */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive 
                        ? 'bg-linear-to-r from-white via-white/95 to-white/70 lg:from-white lg:via-white/55 lg:to-transparent' 
                        : 'bg-black/40 hover:bg-black/35'
                    }`} />
                  </div>

                  
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-10 flex lg:flex-col items-center justify-between py-4 px-6 lg:py-8 lg:px-4"
                      >
                        {/* Circle Arrow Trigger Button */}
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md border border-slate-100 transition-all"
                        >
                          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                        </motion.div>

                        {/* Collapsed Text - Rotates only on desktop views, standard horizontal text on mobile */}
                        <div className="w-auto lg:h-[70%] flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-black tracking-[0.2em] uppercase whitespace-nowrap lg:-rotate-90 origin-center select-none block">
                            {project.title}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ type: "spring", stiffness: 110, damping: 15 }}
                        className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-y-auto lg:overflow-hidden bg-white/95 backdrop-blur-sm lg:bg-transparent"
                      >
                        
                        {/* Upper Control Row with Slide Navigators */}
                        <div className="flex items-center justify-between w-full border-b border-slate-100 pb-5">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] tracking-[0.25em] font-extrabold text-(--text-purple) uppercase flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5" /> Project {idx + 1} of {filteredProjects.length}
                            </span>
                            <div className="w-14 h-1 bg-(--text-purple) rounded-full mt-1" />
                          </div>

                          {/* Navigation circles mapping exactly to the Screenshot from 2026-07-17 12-10-53_2.jpg */}
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={handlePrev}
                              className="w-9 h-9 rounded-full bg-white hover:bg-(--brand-purple) text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 shadow-sm"
                              aria-label="Previous Slide"
                            >
                              <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={handleNext}
                              className="w-9 h-9 rounded-full bg-white hover:bg-(--brand-purple) text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 shadow-sm"
                              aria-label="Next Slide"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Mid-level main description */}
                        <div className="my-auto max-w-2xl space-y-2 xl:space-y-6 lg:py-0">
                          
                          {/* Title */}
                          <motion.h2 
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl md:text-xl xl:text-4xl font-black text-(--text-purple) tracking-tight leading-none uppercase"
                          >
                            {project.title}
                          </motion.h2>

                          {/* Description */}
                          <motion.p 
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-900 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
                          >
                            {project.description}
                          </motion.p>

                          {/* Dynamic Action Button & Tech Tags */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-3 pt-2"
                          >
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noreferrer"
                              className="bg-(--brand-purple) hover:bg-(--brand-purple-hover) text-white font-extrabold tracking-widest text-xs py-3 lg:py-2 xl:py-3.5 px-8 rounded-full uppercase inline-flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all"
                            >
                              Launch Site <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            {/* Horizontal pill list of technical stacks */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-(--brand-mint)/30 border border-(--text-mint-dark) rounded-full text-[10px] uppercase font-bold tracking-wider text-slate-900">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        
                        <div className="grid gap-4 border-t border-slate-100 pt-6 lg:mt-0">
                          
                          {/* Metric Item 1: Target Market */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-(--text-purple) shrink-0">
                              <Compass className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs text-slate-600 font-bold uppercase tracking-wider block">Target Market</span>
                              <span className="text-sm sm:text-base font-bold text-slate-800 block">{project.market}</span>
                            </div>
                          </div>

                          {/* Metric Item 2: Core Performance Stat */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/50 flex items-center justify-center text-(--text-purple) shrink-0">
                              <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Key Metrics</span>
                              <span className="text-sm sm:text-base font-bold text-(--text-purple) block line-clamp-1">{project.metrics}</span>
                            </div>
                          </div>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </main>
    </section>
  );
}