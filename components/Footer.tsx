import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full z-10 border-t border-white/40 bg-teal-100 shadow-2xl backdrop-blur-lg pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-full bg-liner-to-tr from-[#0d9488] to-[#9333ea]" />
              <span className="text-xl font-bold tracking-tight text-[#0f172a]">
                Mint<span className="text-[#0d9488]">Ops</span>
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed max-w-sm mb-6">
              Engineering ultra-performance full-stack web architectures for scale-ups and enterprises across the UK and Europe. Powered by Next.js, React, and Ruby on Rails.
            </p>
            {/* Server Status/Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-semibold text-[#047857]">All Systems Operational via Global CDN</span>
            </div>
          </div>

          {/* Capabilities Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">Core Systems</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-[#475569] hover:text-[#0d9488] transition-colors">Next.js & React Apps</a></li>
              <li><a href="#services" className="text-[#475569] hover:text-[#0d9488] transition-colors">Ruby on Rails Backend</a></li>
              <li><a href="#services" className="text-[#475569] hover:text-[#0d9488] transition-colors">Headless CMS Integration</a></li>
              <li><a href="#services" className="text-[#475569] hover:text-[#0d9488] transition-colors">B2B Lead Architecture</a></li>
            </ul>
          </div>

          {/* Optimization Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">Performance</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#case-studies" className="text-[#475569] hover:text-[#0d9488] transition-colors">Core Web Vitals Boost</a></li>
              <li><a href="#case-studies" className="text-[#475569] hover:text-[#0d9488] transition-colors">Technical SEO Strategy</a></li>
              <li><a href="#estimator" className="text-[#475569] hover:text-[#0d9488] transition-colors">Interactive Workspaces</a></li>
              <li><a href="#workflow" className="text-[#475569] hover:text-[#0d9488] transition-colors">Agile Sprints</a></li>
            </ul>
          </div>

          {/* Verification & Regional Trust Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">Regional Footprint</h4>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li className="flex items-center gap-1.5">
                <span className="text-xs">🇬🇧</span> London / Manchester
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-xs">🇮🇪</span> Dublin / Galway
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-xs">🇪🇺</span> Western Europe Markets
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Horizontal Compliance Layer */}
        <div className="border-t border-slate-900/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#64748b]">
            &copy; {currentYear} MintOps Digital. All rights reserved. Made for high-performance deployment.
          </div>
          
          {/* Security & GDPR Badges */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#64748b]">
            <a href="#privacy" className="hover:text-[#0f172a] transition-colors">Privacy Framework</a>
            <a href="#cookies" className="hover:text-[#0f172a] transition-colors">Cookie Configurations</a>
            <span className="inline-flex items-center gap-1 text-[#0d9488] font-medium bg-[#0d9488]/5 px-2 py-0.5 rounded">
              🔒 GDPR Fully Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}