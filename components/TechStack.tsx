'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechCategory {
  id: string;
  label: string;
  tools: { name: string; tag: string; description: string }[];
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      id: "backend",
      label: "Backend & APIs",
      tools: [
        { name: "Ruby on Rails", tag: "Core Framework", description: "Scalable MVC architecture, ActiveRecord, & API backends" },
        { name: "PostgreSQL", tag: "Database", description: "Relational schema design & optimized complex queries" },
        { name: "RESTful & GraphQL APIs", tag: "Integration", description: "High-throughput API contracts & multi-gateway sync" },
        { name: "Redis", tag: "Caching / Queues", description: "Asynchronous job worker tasking & fast in-memory caching" }
      ]
    },
    {
      id: "frontend",
      label: "Frontend & UI",
      tools: [
        { name: "Next.js & React", tag: "Framework", description: "Server-side rendering, App Router, & fluid interactive views" },
        { name: "TypeScript", tag: "Language", description: "Strict type safety ensuring production codebase resilience" },
        { name: "Tailwind CSS", tag: "Styling", description: "Responsive micro-layouts & custom component theme systems" },
        { name: "Sanity.io", tag: "Headless CMS", description: "Structured content models & real-time live preview studios" }
      ]
    },
    {
      id: "devops",
      label: "DevOps & Optimization",
      tools: [
        { name: "Vercel & Hostinger", tag: "Deployment", description: "Zero-downtime CI/CD deployment pipelines & domain DNS routing" },
        { name: "Technical SEO", tag: "Performance", description: "JSON-LD schema, canonical routing, & Core Web Vitals optimization" },
        { name: "Git & GitHub Actions", tag: "Version Control", description: "Automated testing, continuous deployment, & code review workflows" },
        { name: "Docker", tag: "Containerization", description: "Consistent environment orchestration across dev and production" }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("backend");
  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section id="tech-stack" className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto my-12">
      {/* Header Block */}
      <div className="text-center max-w-5xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-purple)/20 border border-(--brand-purple)/50">
          <span className="text-xs font-bold uppercase tracking-wider text-(--text-purple)">
            Engineering Core
          </span>
        </div>
        <h2 className="main-heading">
          Tools & Infrastructure
        </h2>
        <p className="text-base text-slate-600 font-medium">
          A modern, high-performance technology stack engineered for speed, scalability, and long-term stability.
        </p>
      </div>

      {/* Interactive Category Selector Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto scrollbar-none py-2 px-1">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 whitespace-nowrap cursor-pointer outline-none ${
                isSelected ? 'text-white' : 'text-slate-600 hover:text-(--text-purple) bg-white/60 border border-white/80'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeTechTab"
                  className="absolute inset-0 bg-(--brand-purple) rounded-xl shadow-md shadow-indigo-200"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid Display with Framer Motion AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {activeData.tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="w-full backdrop-blur-md shadow-(--shadow) rounded-2xl p-5 sm:p-6 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-(--text-purple) tracking-tight">{tool.name}</h3>
                <span className="text-xs font-black uppercase tracking-wider text-(--text-mint-dark) bg-(--brand-mint)/20 px-2 py-0.5 rounded-full">
                  {tool.tag}
                </span>
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}