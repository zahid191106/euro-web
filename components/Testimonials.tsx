'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 0,
      name: "Jack Winger",
      role: "FOUNDER & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      quote: "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to transform complex software constraints into reliable, high-performance web products.",
      rating: 5
    },
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "PRODUCT DIRECTOR",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      quote: "The full-stack architecture delivered for our platform exceeded all benchmarks. Database queries were streamlined, leading to an immediate 45% reduction in latency across all user flows.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "HEAD OF ENGINEERING",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      quote: "Exceptional speed and technical clarity. From API contracts down to custom UI components, every milestone was executed with surgical precision and zero post-launch downtime.",
      rating: 5
    },
    {
      id: 3,
      name: "David Ross",
      role: "OPERATIONS MANAGER",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      quote: "Working together felt like having a dedicated senior team in-house. Their transparent communication and agile delivery pipelines made our entire launch effortless.",
      rating: 5
    },
    {
      id: 4,
      name: "Zahid",
      role: "WEB developer  ",
      avatar: "/images/logo-1.webp",
      quote: "Working together felt like having a dedicated senior team in-house. Their transparent communication and agile delivery pipelines made our entire launch effortless.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[currentIndex];

  // Helper to get satellite avatar positions relative to active index
  const getAvatar = (offset: number) => {
    const idx = (currentIndex + offset + testimonials.length) % testimonials.length;
    return testimonials[idx];
  };

  return (
    <section id="testimonials" className="relative z-10 py-20 px-4 sm:px-6 max-w-7xl mx-auto my-12">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9333ea]/10 border border-[#9333ea]/20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7e22ce]">
            Our Testimonials
          </span>
        </div>
        <h2 className="main-heading">
          What they're talking about us
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          Explore real-world technical systems designed to maximize user conversion and clear Core Web Vitals targets.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Avatar Collage Cluster (Matching Screenshot from 2026-07-04 14-54-17.jpg) */}
        <div className="lg:col-span-4 flex justify-center relative py-8">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            
            {/* Outer Accent Ring Graphic */}
            <div className="absolute inset-0 rounded-full border-4 border-rose-500/20 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-rose-500/10 via-indigo-500/5 to-transparent blur-2xl" />

            {/* Main Center Active Avatar with Red Accent Halo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-20 w-44 h-44 sm:w-55 sm:h-55 rounded-full p-1.5 bg-linear-to-tr from-rose-500 via-pink-500 to-indigo-500 shadow-2xl"
              >
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </motion.div>
            </AnimatePresence>

            {/* Top-Left Satellite Avatar */}
            <motion.button
              onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              className="absolute -top-2 left-2 z-30 w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 cursor-pointer bg-white shadow-lg border border-slate-100"
            >
              <img
                src={getAvatar(-1).avatar}
                alt="Previous testimonial"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.button>

            {/* Top-Right Satellite Avatar */}
            <motion.button
              onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              className="absolute top-0 right-0 z-30 w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 cursor-pointer bg-white shadow-lg border border-slate-100"
            >
              <img
                src={getAvatar(1).avatar}
                alt="Next testimonial"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.button>

            {/* Bottom-Left Satellite Avatar */}
            <motion.button
              onClick={() => setCurrentIndex((currentIndex + 2) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-2 left-4 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 cursor-pointer bg-white shadow-lg border border-slate-100"
            >
              <img
                src={getAvatar(2).avatar}
                alt="Alternate testimonial"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.button>

            {/* Bottom-Right Satellite Avatar */}
            <motion.button
              onClick={() => setCurrentIndex((currentIndex - 2 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-2 right-4 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 cursor-pointer bg-white shadow-lg border border-slate-100"
            >
              <img
                src={getAvatar(-2).avatar}
                alt="Alternate testimonial"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.button>

          </div>
        </div>

        {/* Right Side: Headline + Testimonial Slide Card */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Testimonial Quote Card with Fade-In Animation */}
          <div className="relative pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-(--shadow)"
              >
                {/* Quote Text */}
                <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
                  "{activeTestimonial.quote}"
                </p>

                {/* Card Footer: Metadata & Quote Icon */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{activeTestimonial.name}</h3>
                    <p className="text-xs font-black tracking-wider text-rose-500 uppercase mt-0.5">
                      {activeTestimonial.role}
                    </p>
                  </div>

                  {/* Decorative Double Quote Symbol */}
                  <div className="text-slate-600 font-serif text-4xl leading-none select-none">
                    ””
                  </div>
                </div>

                {/* Rating Badge (Matching Crimson Red Box from Screenshot) */}
                <div className="absolute -bottom-3 right-6 bg-rose-500 text-white text-base px-4 py-1.5 rounded-lg shadow-md flex items-center gap-1">
                  {"★".repeat(activeTestimonial.rating)}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots Navigation */}
            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-7 bg-rose-500' 
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}