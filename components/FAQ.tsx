'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  category: string;
  number: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'tech', label: 'Tech & Architecture' },
    { id: 'process', label: 'Delivery & IP' },
    { id: 'pricing', label: 'Pricing & Support' },
  ];

  const faqs: FAQItem[] = [
    {
      id: '1',
      category: 'tech',
      number: '01',
      question: 'What core technology stacks do you specialize in?',
      answer: 'We specialize in modern full-stack web architectures utilizing Ruby on Rails for robust backend REST APIs and background job queues, Next.js (React) for high-performance frontends, TypeScript, Tailwind CSS, PostgreSQL databases, and Sanity.io for headless content management.'
    },
    {
      id: '2',
      category: 'process',
      number: '02',
      question: 'Will I have complete ownership of the codebase and assets?',
      answer: 'Yes, 100%. Upon project completion, full repository rights, IP ownership, deployment keys, and database configurations are transferred directly to your organization with zero lock-in.'
    },
    {
      id: '3',
      category: 'tech',
      number: '03',
      question: 'How do you handle site performance and technical SEO?',
      answer: 'Every web application is optimized for Core Web Vitals out of the box. We configure server-side caching, dynamic image compression, structured JSON-LD schema data, canonical tag routing, and automated sitemap generation for maximum search index performance.'
    },
    {
      id: '4',
      category: 'pricing',
      number: '04',
      question: 'What is the typical timeline and payment milestone structure?',
      answer: 'Timeline ranges from 2–4 weeks for core MVPs and 6–10 weeks for enterprise full-stack systems. Payments are milestone-driven (e.g., 30% Blueprint, 40% Mid-Build Preview, 30% Final Launch & Handover).'
    },
    {
      id: '5',
      category: 'process',
      number: '05',
      question: 'How do we communicate during active sprint development cycles?',
      answer: 'We maintain direct async channels via private Slack/Discord rooms, weekly preview staging builds on Vercel/Fly.io, and structured milestone reviews so you always have full visibility into engineering progress.'
    },
    {
      id: '6',
      category: 'pricing',
      number: '06',
      question: 'Do you offer ongoing technical maintenance after launch?',
      answer: 'Yes. We offer continuous assurance retainers covering zero-downtime server updates, database indexing, emergency bug fixes, and feature expansion sprints.'
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('1');

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative z-10 py-20 px-4 sm:px-6 max-w-7xl mx-auto my-12">      
      {/* Header Block */}
      <div className="text-center max-w-5xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-purple)/20 border border-(--brand-purple)/50">
          <span className="text-xs font-bold uppercase tracking-wider text-(--text-purple)">
            Clarification Matrix
          </span>
        </div>
        <h2 className="main-heading">
          Everything You Need to Know
        </h2>
        <p className="text-sm text-slate-600 font-medium">
          Clear, direct insights into our engineering standards, project delivery model, and post-launch guarantees.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto scrollbar-none py-1 px-2">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap outline-none cursor-pointer ${
                isSelected ? 'text-white' : 'text-slate-600 hover:text-(--text-purple) bg-white/60 border border-white/80'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeFaqTab"
                  className="absolute inset-0 bg-(--brand-purple) rounded-xl shadow-md shadow-indigo-200"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Accordion List with AnimatePresence */}
      <motion.div layout className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`relative overflow-hidden rounded-2xl shadow-(--shadow) backdrop-blur-md transition-all duration-300 `}
              >
                {/* Active Accent Border Indicator */}
                {isOpen && (
                  <motion.div 
                    layoutId="activeFaqLine" 
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-(--brand-purple) to-(--brand-mint)" 
                  />
                )}

                {/* Question Trigger Bar */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg transition-colors ${
                      isOpen 
                        ? 'bg-(--brand-purple) text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      {faq.number}
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-slate-900 tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Dynamic +/- Toggle Button */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-base transition-colors ${
                      isOpen ? 'bg-(--brand-purple) text-white' : 'bg-(--brand-purple)/20 text-(--text-purple)'
                    }`}
                  >
                    +
                  </motion.div>
                </button>

                {/* Animated Expanding Answer Container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100/80 ml-2 sm:ml-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}