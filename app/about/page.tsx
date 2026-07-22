"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Play, 
  X, 
  Check, 
  Users, 
  Award, 
  Target, 
  ChevronRight, 
  Globe, 
  Compass, 
  Cpu, 
  Heart 
} from 'lucide-react';

// TypeScript interfaces for our state and subcomponents
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 16 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const blobAnimation = {
  animate: {
    borderRadius: [
      "42% 58% 70% 30% / 45% 45% 55% 55%",
      "70% 30% 52% 48% / 60% 40% 60% 40%",
      "42% 58% 70% 30% / 45% 45% 55% 55%"
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AboutUs() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'history'>('mission');

  // Interactive content mock data matching style guidelines
  const team: TeamMember[] = [
    {
      name: "Marcus Vance",
      role: "Chief Executive Officer & Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Over 15 years leading award-winning digital transformations across native and hybrid systems."
    },
    {
      name: "Serena Lin",
      role: "Head of Product Design",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Believes usability and aesthetic harmony are the foundation of modern high-performance platforms."
    },
    {
      name: "Darian Vance",
      role: "Principal Architecture Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Mastering performance optimization, high concurrency systems, and clean modular code structures."
    }
  ];

  const values: ValueCard[] = [
    {
      icon: <Cpu className="w-6 h-6 text-[#8A1538]" />,
      title: "Cutting-Edge Performance",
      description: "Harnessing native, feature-packed architectural frameworks tailored for cross-platform robustness."
    },
    {
      icon: <Award className="w-6 h-6 text-[#8A1538]" />,
      title: "Award-Winning Strategy",
      description: "Our in-house design veterans sync client requirements with delightful user paths that convert."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#8A1538]" />,
      title: "Human-Centric Focus",
      description: "Usability and accessibility are integrated into the core foundations from day one, not treated as an afterthought."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      
      {/* Dynamic Header / Breadcrumbs */}
      <div className="w-full bg-slate-50 border-b border-slate-100 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#8A1538]">About Patron</span>
          </div>
          <div className="text-xs text-slate-500">Established 2018</div>
        </div>
      </div>

      {}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Tagline matching Screenshot from 2026-07-17 11-49-51.jpg */}
            <motion.span 
              variants={fadeInUp}
              className="text-[#8A1538] font-bold text-sm tracking-wider uppercase mb-3 block"
            >
              Our Mission, About Patron
            </motion.span>

            {/* Headline matching Screenshot from 2026-07-17 11-49-51.jpg */}
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            >
              We believe the best <br className="hidden sm:inline" />
              <span className="text-[#8A1538]">experience always wins</span>
            </motion.h1>

            {/* Small decorative line match */}
            <motion.div 
              variants={fadeInUp}
              className="w-12 h-[3px] bg-[#8A1538] mb-8"
            />

            {/* Paragraph 1 matching Screenshot from 2026-07-17 11-49-51.jpg */}
            <motion.p 
              variants={fadeInUp}
              className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal"
            >
              As a leading mobile application development company, EasyWeb has extensive experience in 
              creating high performance, feature-packed native mobile applications for all the major 
              mobile platforms including iOS, Android, BlackBerry OS and Windows Mobile. EasyWeb 
              mobile app developers can create the right app that will meet your business, industry 
              and/or vertical needs.
            </motion.p>

            {/* Paragraph 2 matching Screenshot from 2026-07-17 11-49-51.jpg */}
            <motion.p 
              variants={fadeInUp}
              className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal"
            >
              With our in-house award winning designers, we recognize the fact that usability, functionality 
              and visualization are three of the most important factors when designing interfaces or web 
              sites. Using this strategy, we work with you to ensure that your messaging and marketing goals 
              are realized with the designs we create. We will work with you and bring your idea to life.
            </motion.p>

            {/* Checklists matching Screenshot from 2026-07-17 11-49-51.jpg */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                "Software Requirements Specifications",
                "Software Design Documentation",
                "Development Group",
                "Design Group"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center text-[#8A1538] transition-colors duration-200 group-hover:bg-[#8A1538] group-hover:text-white">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold hover:text-[#8A1538] transition-colors cursor-default">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {}
          {/* Right Column Visual Section */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
            
            {/* Organic Soft Shape Background Blob */}
            <div className="absolute inset-0 bg-rose-50/50 rounded-full filter blur-3xl -z-10 w-full h-full scale-105" />

            {/* Blob Image Mask Container matching layout shape from Screenshot from 2026-07-17 11-49-51.jpg */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, damping: 20 }}
              // variants={blobAnimation}
              animate="animate"
              className="relative w-[320px] h-[360px] sm:w-[420px] sm:h-[480px] bg-slate-100 overflow-hidden shadow-2xl border border-slate-100/50 cursor-pointer group"
              style={{
                borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
              }}
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Interactive Hover Scale Overlay */}
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="EasyWeb Professional Team Collaboration" 
                className="w-full h-full object-cover object-center grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Pulsing play button overlay from screenshot */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                <motion.button 
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-[#8A1538] hover:bg-[#a11b43] text-white rounded-full flex items-center justify-center shadow-2xl relative transition-all duration-300"
                  aria-label="Play Introduction Video"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoOpen(true);
                  }}
                >
                  {/* Rippling pulse animation */}
                  <span className="absolute -inset-2 rounded-full border border-[#8A1538]/40 animate-ping" />
                  <Play className="w-6 h-6 fill-current text-white translate-x-0.5" />
                </motion.button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {}
      
      {/* Tabs Section: Interactive Exploration */}
      <section className="bg-slate-50 border-y border-slate-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 border-b border-slate-200 pb-4">
            {(['mission', 'vision', 'history'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold capitalize tracking-wide transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#8A1538] text-white shadow-lg shadow-[#8A1538]/20' 
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {tab === 'history' ? 'Our History' : `Our ${tab}`}
              </button>
            ))}
          </div>

          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'mission' && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Empowering Innovation Globally</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    To deliver exceptionally polished experiences across Android, iOS, and responsive web platforms. We eliminate the barriers between ideas and fully-optimized live execution.
                  </p>
                </motion.div>
              )}
              {activeTab === 'vision' && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Shaping Future Interfaces</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    To set global benchmarks in performance and responsiveness, making sure accessibility standards and user-centric design remain universally integrated.
                  </p>
                </motion.div>
              )}
              {activeTab === 'history' && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Since 2018</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    Beginning as a small specialized interface agency, EasyWeb has scaled into a global development squad crafting software architectures for startups and fortune-scale businesses.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8A1538] font-bold text-xs uppercase tracking-widest block mb-2">Our Foundation</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Why Companies Partner With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xl shadow-slate-100/50 hover:border-rose-100 hover:shadow-2xl hover:shadow-rose-50/40 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-6 group-hover:bg-[#8A1538] group-hover:text-white transition-colors duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#8A1538] transition-colors">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {}
      <section className="bg-slate-50 border-t border-slate-100 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#8A1538] font-bold text-xs uppercase tracking-widest block mb-2">Creative Minds</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Meet Our Visionaries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 group-hover:border-rose-100 transition-colors duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#8A1538] transition-colors">{member.name}</h3>
                <span className="text-xs font-semibold text-[#8A1538] uppercase tracking-wider mb-4 block">{member.role}</span>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {}
      {/* Framer Motion Video Lightbox Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 bg-slate-950/90 flex items-center justify-center p-4 z-50 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl aspect-video border border-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-[#8A1538] text-white p-2.5 rounded-full transition-colors z-10 hover:rotate-90 duration-300"
                aria-label="Close Player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Demo Showcase Video Player or custom graphic */}
              <div className="w-full h-full relative flex items-center justify-center">
                {/* Visual Video Placeholder using CSS & animation to simulate video feed */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2d0712] via-slate-950 to-slate-900 flex flex-col justify-center items-center text-center p-6 sm:p-12">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-[#8A1538]/20 flex items-center justify-center mb-6"
                  >
                    <Play className="w-8 h-8 text-[#8A1538] fill-current" />
                  </motion.div>
                  <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight mb-2">EasyWeb Showcase Reel</h3>
                  <p className="text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
                    Experiencing our high fidelity, native application frameworks and state-of-the-art interactive visualization systems.
                  </p>
                  <button 
                    onClick={() => setIsVideoOpen(false)}
                    className="bg-white hover:bg-[#8A1538] text-slate-900 hover:text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    Return to Page
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}