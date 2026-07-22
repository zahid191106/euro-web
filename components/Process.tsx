'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, LayoutGrid } from 'lucide-react';

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
}

export default function Process() {
  const workflowSteps: ProcessStep[] = [
    {
      phase: "Phase 01",
      title: "Discovery & Architecture Blueprinting",
      description: "We deep-dive into your application parameters, identifying infrastructure bottlenecks, target user traffic models, and cross-platform mobile api needs.",
      deliverables: ["Technical Scope Outline", "Relational DB Schema Proposal", "API Contract Routing Map"],
      image: "/images/phase-1.webp"
    },
    {
      phase: "Phase 02",
      title: "Agile Development & Core Engineering",
      description: "Building out your ecosystem utilizing modern stacks like Ruby on Rails backends, dynamic API engines, and high-performance frontend interfaces.",
      deliverables: ["Weekly Alpha Component Previews", "CI/CD Deployment Pipelines", "Asynchronous Job Tasking Setup"],
      image: "/images/phase-2.webp"
    },
    {
      phase: "Phase 03",
      title: "Core Web Vitals & Multi-Device Optimization",
      description: "Tuning performance parameters to achieve instant interaction feedback, asset compression strategies, and optimizing server layers for dynamic data caching.",
      deliverables: ["Performance Latency Benchmarks", "Mobile API Response Audit", "Technical SEO Verification"],
      image: "/images/phase-3.webp"
    },
    {
      phase: "Phase 04",
      title: "Scalable Launch & Continuous Assurance",
      description: "Smooth environment migration with zero-downtime execution rails, followed by rigorous monitoring of background queues and data integrity states.",
      deliverables: ["Production Infrastructure Handover", "Automated Error Logging Channels", "Seamless Growth Roadmap"],
      image: "/images/phase-4.webp"
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("Phase 01");
  const activeStep = workflowSteps.find(step => step.phase === activeTab) || workflowSteps[0];

  return (
    <section id="process" className="w-full relative z-10 py-24 px-6 max-w-7xl mx-auto">      
      {/* Theme Matched Header */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--brand-mint)/20 border border-(--brand-mint) backdrop-blur-xs">
          <Sparkles className="w-4 h-4 text-(--text-mint-dark) animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-(--text-mint-dark)">
            Engineered Methodology
          </span>
        </div>
        <h2 className="main-heading">
          Our Strategic Execution Workflow
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          A milestone-driven delivery blueprint configured to move complex systems smoothly into production.
        </p>
      </div>

      {/* Tabs Selector Navigation Row */}
      <div className="relative z-10 flex items-center justify-start md:justify-center gap-10 border-b border-(--text-mint-dark) pb-px mb-10 overflow-x-auto scrollbar-none max-w-4xl mx-auto">
        {workflowSteps.map((step) => {
          const isSelected = activeTab === step.phase;
          return (
            <button
              key={step.phase}
              onClick={() => setActiveTab(step.phase)}
              className={`relative pb-4 px-4 text-sm sm:text-base font-semibold tracking-tight cursor-pointer transition-colors duration-300 outline-none whitespace-nowrap flex items-center gap-2 ${
                isSelected ? 'text-(--text-purple)' : 'text-slate-500 hover:text-(--text-purple)'
              }`}
            >
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded transition-colors ${
                isSelected ? 'bg-(--brand-purple)/20 text-(--text-purple)' : 'bg-slate-50 text-slate-500'
              }`}>
                {step.phase.split(' ')[1]}
              </span>
              <span>{step.title.split(' & ')[0]}</span>
              
              {/* Layout-linked Animated Bottom Tracker */}
              {isSelected && (
                <motion.span 
                  layoutId="activeUnderline"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-(--brand-purple) rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Card Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch backdrop-blur-xl shadow-(--shadow) rounded-4xl p-6 sm:p-8 lg:p-10 min-h-110">
        
        {/* Left Side Graphic View */}
        <div className="lg:col-span-5 flex items-center justify-center relative rounded-2xl overflow-hidden min-h-65 lg:min-h-full">
          {/* Subtle Structural Tech Grid Overlay */}
          {/* <div className="absolute inset-0 opacity-25 bg-[linear-linear(to_right,#e2e8f0_1px,transparent_1px),linear-linear(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[20px_20px]" /> */}
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.phase}
              initial={{ scale: 0.93, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10 w-full aspect-square flex flex-col items-center justify-center text-center group"
            >
              <img src={activeStep.image} alt={activeStep.title} className='w-full h-full object-cover rounded-2xl' />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Info Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.phase}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold tracking-widest text-(--text-mint-dark) bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-md uppercase">
                  {activeStep.phase} Milestones
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-(--text-purple) tracking-tight pt-0.5">
                  {activeStep.title}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                {activeStep.description}
              </p>

              {/* Verification Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 max-w-xl">
                {activeStep.deliverables.map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-start gap-3 rounded-xl p-3.5 transition-all duration-200 group shadow-(--shadow)"
                  >
                    <div className="shrink-0 text-(--text-purple) bg-emerald-50 group-hover:bg-emerald-100/80 w-5 h-5 rounded-md flex items-center justify-center transition-colors">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-base font-semibold text-(--text-purple) leading-tight">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}