"use client";

export default function CaseStudies() {
  // Concrete Fallback Data matches your regional market structure
const projects = [
  {
    title: "Premium Automotive Aggregator Infrastructure",
    clientLocation: "Dublin, IE",
    problem: "Legacy content management pipelines generated heavy runtime delays, impacting local search indexing parameters across key regional counties.",
    solution: "Engineered a headless framework mapping structured Sanity.io schemas down to dynamic Next.js App Router directories, resulting in instant server responses.",
    techStack: ["Next.js", "Sanity.io", "Tailwind CSS", "Vercel Edge API"],
    performanceMetric: "+42% Organic Pageviews",
    lighthouseScore: 99
  },
  {
    title: "B2B Fleet Operations Management Architecture",
    clientLocation: "London, UK",
    problem: "High transactional request drops during dynamic field scheduling due to poorly managed, non-relational concurrent database states.",
    solution: "Deployed an asynchronous Ruby on Rails engine backed by PostgreSQL optimization models to cleanly route secure structural webhooks.",
    techStack: ["Ruby on Rails", "React.js", "PostgreSQL", "Tailwind CSS"],
    performanceMetric: "0% Dropped Bookings",
    lighthouseScore: 96
  }
];

  return (
    <section id="case-studies" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9333ea]/10 border border-[#9333ea]/20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7e22ce]">
            Proven Implementations
          </span>
        </div>
        <h2 className="main-heading">
          Engineered for Results: Featured Case Studies
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          Explore real-world technical systems designed to maximize user conversion and clear Core Web Vitals targets.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative backdrop-blur-md shadow-(--shadow) rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white/60 hover:border-white/80 hover:shadow-md hover:-translate-y-1"
          >
            <div>
              {/* Card Meta Row */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-bold text-(--text-purple) group-hover:text-(--text-purple-hover) transition-colors">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs font-bold uppercase tracking-wider bg-(--brand-mint)/30 px-2.5 py-1 rounded-full text-(--text-mint-dark)">
                  {project.clientLocation}
                </span>
              </div>

              {/* Problem/Solution Technical Briefs */}
              <div className="space-y-3 my-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-600 font-semibold">The Challenge:</strong> {project.problem}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-600 font-semibold">The System:</strong> {project.solution}
                </p>
              </div>

              {/* Horizontal Pill Tech Stack List */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.techStack?.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-sm font-medium text-slate-600 bg-(--brand-mint)/20 px-2.5 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Performance Metrics Section */}
            <div className="border-t border-slate-900/10 pt-5 flex items-center justify-between mt-auto">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">Primary Impact</div>
                <div className="text-xl font-black text-(--text-mint-dark) tracking-tight">{project.performanceMetric}</div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">Lighthouse</div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                  {/* Small Performance Circle Icon */}
                  <div className="h-2 w-2 rounded-full bg-(--brand-mint)" />
                  <span className="text-sm font-black text-(--text-mint-dark) font-mono">
                    {project.lighthouseScore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

