"use client";
import { motion, Variants } from 'framer-motion';

// Interface defining the structural type of each capability item
interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

// Framer motion variants for clean staggered entrance animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function About() {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Website Development",
      subtitle: "Front/Back End",
      icon: (
        <svg 
          viewBox="0 0 64 64" 
          className="w-25 h-25 stroke-(--text-purple) fill-none stroke-2 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {/* Main window browser wireframe */}
          <rect x="6" y="10" width="52" height="44" rx="3" />
          {/* Top layout divider line */}
          <line x1="6" y1="22" x2="58" y2="22" />
          {/* Window action control points */}
          <circle cx="14" cy="16" r="1.5" className="fill-[#8A1538]" />
          <circle cx="20" cy="16" r="1.5" className="fill-[#8A1538]" />
          <circle cx="26" cy="16" r="1.5" className="fill-[#8A1538]" />
          {/* Coding bracket symbols */}
          <path d="M22 32 L14 38 L22 44" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 32 L50 38 L42 44" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="35" y1="30" x2="29" y2="46" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Mobile Apps Development",
      subtitle: "iOS and Android",
      icon: (
        <svg 
          viewBox="0 0 64 64" 
          className="w-25 h-25 stroke-(--text-purple) fill-none stroke-2 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {/* Smartphone wireframe silhouette */}
          <rect x="18" y="6" width="28" height="52" rx="4" />
          {/* Phone speaker mesh */}
          <line x1="28" y1="12" x2="36" y2="12" strokeLinecap="round" />
          {/* Layout elements matching screenshot wireframe */}
          <rect x="23" y="18" width="18" height="8" rx="1" />
          <line x1="23" y1="32" x2="41" y2="32" strokeLinecap="round" />
          <line x1="23" y1="38" x2="35" y2="38" strokeLinecap="round" />
          <line x1="23" y1="44" x2="38" y2="44" strokeLinecap="round" />
          {/* Dynamic wireframe screen connections */}
          <path d="M46 22 H54 V28 H46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 38 H52 V42 H46" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Designing Services",
      subtitle: "UI/UX",
      icon: (
        <svg 
          viewBox="0 0 64 64" 
          className="w-25 h-25 stroke-(--text-purple) fill-none stroke-2 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {/* Crossed technical drawing pencil and architectural ruler */}
          <line x1="12" y1="52" x2="52" y2="12" strokeLinecap="round" strokeWidth="3" />
          <path d="M12 52 L8 56 L12 52 Z" strokeLinecap="round" />
          {/* Pencil body structure */}
          <path d="M20 40 L44 16 M24 44 L48 20" strokeLinecap="round" />
          {/* Ruler wireframe details */}
          <path d="M16 34 L46 4" strokeLinecap="round" />
          <path d="M30 48 L60 18" strokeLinecap="round" />
          {/* Measurement notches on the ruler */}
          <line x1="24" y1="26" x2="28" y2="30" />
          <line x1="30" y1="20" x2="34" y2="24" />
          <line x1="36" y1="14" x2="40" y2="18" />
          <line x1="42" y1="8" x2="46" y2="12" />
        </svg>
      )
    },
    {
      id: 4,
      title: "CRM Systems",
      subtitle: "Data Management",
      icon: (
        <svg 
          viewBox="0 0 64 64" 
          className="w-25 h-25 stroke-(--text-purple) fill-none stroke-2 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {/* Main system screen boundary */}
          <rect x="6" y="10" width="52" height="36" rx="3" />
          {/* Base of CRM monitor stand */}
          <path d="M22 46 L18 54 H46 L42 46" strokeLinecap="round" strokeLinejoin="round" />
          {/* Statistical column bars inside system */}
          <line x1="14" y1="36" x2="14" y2="24" strokeLinecap="round" strokeWidth="2" />
          <line x1="22" y1="36" x2="22" y2="18" strokeLinecap="round" strokeWidth="2" />
          <line x1="30" y1="36" x2="30" y2="28" strokeLinecap="round" strokeWidth="2" />
          <line x1="38" y1="36" x2="38" y2="22" strokeLinecap="round" strokeWidth="2" />
          {/* Analysis Magnifying glass icon overlay */}
          <circle cx="46" cy="32" r="6" />
          <line x1="50.5" y1="36.5" x2="56" y2="42" strokeLinecap="round" strokeWidth="2" />
        </svg>
      )
    }
  ];
  const checkmarkPoints = [
    "Excepteur sint occaecat cupidatat non proident.",
    "Nemo enim ipsam voluptatem quia voluptas sit.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
  ];

  const stats = [
    { value: "20+", label: "Years of Expertise" },
    { value: "500+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="relative z-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto pb-16 md:pb-24 pt-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden shadow-(--shadow)"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                backgroundColor: "#FAF9FB",
                transition: { duration: 0.2 } 
              }}
              className={`group flex flex-col items-center p-8 lg:p-10 transition-colors relative cursor-default
                ${index !== 0 ? 'lg:border-l lg:border-t-0' : ''}
                ${index % 2 !== 0 ? 'md:border-l-0 lg:md:border-l' : 'md:border-l-0'}
                border-t border-slate-100 md:border-t lg:border-t-0
              `}
            >
              {/* Top Highlight Hover Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-(--brand-purple-hover) transition-colors duration-300" />

              {/* Icon Container with offset layout matching design */}
              <div className="mb-6 flex items-center justify-center text-(--text-purple)">
                {service.icon}
              </div>

              {/* Text content elements */}
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-(--text-purple) tracking-tight transition-colors duration-200 group-hover:text-(--text-purple-hover)">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content Text */}
        <div className="md:col-span-6 space-y-6 md:space-y-8">
          <div>
            {/* <span className="text-sm font-bold uppercase tracking-widest text-(--text-mint)">
              DISCOVER OUR STORY
            </span> */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-mint)/10 border border-(--brand-mint)/20">
              <span className="text-sm font-bold uppercase tracking-wider text-(--text-mint-dark)">
                DISCOVER OUR STORY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text-purple) tracking-tight mt-4 leading-tight">
              Innovative Solutions for a Digital-First World
            </h2>
          </div>
          
          <p className="text-base text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Icon Points with Gradient Accents */}
          <ul className="space-y-4 pt-2">
            {checkmarkPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br from-(--brand-mint) to-(--brand-purple)">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600">{point}</span>
              </li>
            ))}
          </ul>

          <button className="inline-block bg-(--brand-purple) hover:bg-(--brand-purple-hover) text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors duration-300">
            Discover More
          </button>
        </div>

        {/* Right Side: Responsive Image & Stat Card Grid */}
        <div className="md:col-span-6 mt-12 md:mt-0 relative">
          <div className="grid grid-cols-12 gap-4 items-center">
            
            {/* Top Right Main Image Placeholder */}
            <div className="col-span-12 md:col-span-10 col-start-1 md:col-start-3 relative aspect-4/3 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Digital-First Solutions" 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Embedded Group Meeting Image Placeholder */}
            <div className="col-span-8 md:col-span-9 col-start-3 md:col-start-1 -mt-16 md:-mt-32 relative z-20 aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Glassmorphic Stats Card */}
            <div className="col-span-10 md:col-span-5 col-start-2 md:col-start-8 mt-4 md:mt-0 absolute -top-16 md:-top-8 right-0 md:-right-2.5 z-30 bg-(--brand-mint)/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl md:text-4xl font-black text-(--brand-purple) bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}