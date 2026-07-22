import React from 'react';

export default function Services() {
  const coreServices = [
    {
      icon: (
        <svg className="w-10 h-10 text-(--text-mint-dark)" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      badge: "Frontend Excellence",
      title: "Next.js & React App Engineering",
      description: "Building ultra-fast, dynamic, and state-driven web platforms using the Next.js App Router. Fully optimized for high-performance interaction, rendering, and complex state management.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-(--text-purple)" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      badge: "Robust Backend",
      title: "Ruby on Rails API Architectures",
      description: "Constructing highly secure, scalable relational database backends, RESTful/GraphQL APIs, and ironclad business logic utilizing the dependable Ruby on Rails framework.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-(--text-mint-dark)" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      badge: "Headless Strategy",
      title: "Sanity.io Content Management",
      description: "Decoupling content management from layout code. Designing tailored, real-time structured schema matrices that empower teams to update digital assets securely without touching code bases.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-(--text-purple)" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      badge: "Growth Engineering",
      title: "Technical SEO & Structural Optimization",
      description: "Optimizing technical assets for aggressive visibility in UK and European markets. Fine-tuning server response cycles, semantic JSON-LD injections, and guaranteeing sub-1s Core Web Vitals.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-(--text-mint-dark)" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      badge: "Monetization Gateway",
      title: "Payment Systems Integration",
      description: "Implementing completely safe transactional gateways utilizing Stripe, Paystack, and webhook-driven merchant protocols to safely process cross-border B2B or B2C checkouts.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-(--text-purple)" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      badge: "Native Ecosystems",
      title: "Mobile App Development",
      description: "Deploying fluid cross-platform applications with native performance across global storefronts. Single-codebase deployment for high-fidelity iOS & Android apps.",
    }
  ];

  return (
    <section id="services" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-mint)/10 border border-(--brand-mint)/20">
          <span className="text-sm font-bold uppercase tracking-wider text-(--text-mint-dark)">
            Capabilities Matrix
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text-purple) tracking-tight">
          Production Services Engineered For Growth.
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          Enterprise-grade code implementation engineered specifically to convert users, scale operations, and rank cleanly across target search landscapes.
        </p>
      </div>

      {/* Services Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreServices.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 rounded-3xl shadow-(--shadow)  transition-all duration-300 hover:bg-white/70 hover:border-white/90 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Ambient Purple/Mint glow effect on hover */}
            <div className="absolute -z-10 inset-0 rounded-2xl bg-linear-to-br from-[#0d9488]/5 to-[#9333ea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Top Row: Icon + Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-white/80 border border-(--brand-mint) shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-purple) bg-(--brand-purple)/10 px-2.5 py-1 rounded-md">
                {service.badge}
              </span>
            </div>

            {/* Content info */}
            <h3 className="text-lg font-bold text-(--text-purple) mb-3 group-hover:text-(--text-purple-hover) transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}