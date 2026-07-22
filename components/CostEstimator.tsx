'use client';

import React, { useState, useEffect } from 'react';

// Explicit TypeScript shape definition for your technological layers
interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  category: string;
}

export default function CostEstimator() {
  // Strict TypeScript union type definition for active currencies
  const [currency, setCurrency] = useState<'GBP' | 'EUR'>('GBP');
  const exchangeRate: number = 1.18; // 1 GBP = 1.18 EUR

  // Core application states type-inferred accurately
  const [selectedServices, setSelectedServices] = useState<string[]>(['nextjs', 'rails']);
  const [timeline, setTimeline] = useState<number>(4);
  const [totalCost, setTotalCost] = useState<number>(0);

  // Inbound Form Handling States
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Concrete data matrix reflecting your exact technical capabilities
  const servicesMatrix: ServiceOption[] = [
    { id: 'nextjs', name: 'Next.js & React Frontend UI Architecture', basePrice: 3500, category: 'Web Frontend' },
    { id: 'rails', name: 'Ruby on Rails Highly Secure API Engine', basePrice: 4500, category: 'Web Backend' },
    { id: 'flutter', name: 'Flutter Native Multiplatform Deployment', basePrice: 5000, category: 'Mobile App' },
    { id: 'seo', name: 'Technical SEO Optimization Pipeline', basePrice: 1500, category: 'Growth' },
    { id: 'aso', name: 'App Store Optimization (ASO) Local Strategy', basePrice: 1500, category: 'Growth' },
    { id: 'gdpr', name: 'GDPR Privacy Governance Security Shield', basePrice: 1200, category: 'Compliance' },
  ];

  useEffect(() => {
    const baseSum = servicesMatrix
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.basePrice, 0);

    let timelineMultiplier = 1;
    if (timeline <= 2) timelineMultiplier = 1.25;
    if (timeline >= 8) timelineMultiplier = 0.90;

    setTotalCost(Math.round(baseSum * timelineMultiplier));
  }, [selectedServices, timeline]);

  const toggleService = (id: string): void => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(item => item !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const formatPrice = (amount: number): string => {
    if (currency === 'EUR') {
      return `€${Math.round(amount * exchangeRate).toLocaleString()}`;
    }
    return `£${amount.toLocaleString()}`;
  };

  // Automated WhatsApp link payload compiling tool
  const generateWhatsAppLink = (): string => {
    const activeNames = servicesMatrix
      .filter(s => selectedServices.includes(s.id))
      .map(s => `• ${s.name}`)
      .join('%0A');
    
    const baseMessage = `Hello! I just scoped a project configuration using your digital estimator.%0A%0A` +
      `*Target Timeline:* ${timeline} Weeks%0A` +
      `*Estimated Scope Cost:* ${formatPrice(totalCost)}%0A%0A` +
      `*Selected Integrations:*%0A${activeNames}`;
    
    return `https://wa.me/923017393026?text=${baseMessage}`;
  };

  const handleEmailFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!clientEmail || !clientName) return;

    setIsSubmitting(true);
    
    // Simulating API background data capture securely
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setClientName('');
    setClientEmail('');
  };

  return (
    <section id="estimator" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-5xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-mint)/10 border border-(--brand-mint)/20">
          <span className="text-xs font-bold uppercase tracking-wider text-(--text-mint-dark)">
            Interactive Budget Blueprint
          </span>
        </div>
        <h2 className="main-heading">
          Scope System. Estimate Investment. Convert Instantly.
        </h2>
        <p className="text-base text-slate-600">
          Customize your architecture, then select whether you want to save a formal email brief or message us directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Input Configuration Workspace Panel */}
        <div className="lg:col-span-7 backdrop-blur-md shadow-(--shadow) rounded-2xl p-6 md:p-8 space-y-8">
          
          {/* Target Regional Currency Adjuster */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-900/10">
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-(--text-purple)">Target Localization</h3>
              <p className="text-sm text-slate-600">Select your regional processing currency baseline.</p>
            </div>
            <div className="inline-flex rounded-xl bg-slate-200/60 p-1 self-start sm:self-auto">
              <button
                onClick={() => setCurrency('GBP')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${currency === 'GBP' ? 'bg-white text-[#0f172a] shadow-sm' : 'text-[#475569] hover:text-[#0f172a]'}`}
              >
                🇬🇧 GBP (£)
              </button>
              <button
                onClick={() => setCurrency('EUR')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${currency === 'EUR' ? 'bg-white text-[#0f172a] shadow-sm' : 'text-[#475569] hover:text-[#0f172a]'}`}
              >
                🇪🇺 EUR (€)
              </button>
            </div>
          </div>

          {/* Scope Selectors */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-(--text-purple)">System Scope Matrix</h3>
              <p className="text-xs text-slate-600">Toggle the infrastructure layers needed for your custom build application.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesMatrix.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`group text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between min-h-27.5 ${
                      isSelected 
                        ? 'bg-white/60 border-(--brand-mint) shadow-md ring-2 ring-(--brand-mint)/90' 
                        : 'bg-white/40 border-white/80 hover:bg-white hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] bg-slate-100 px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                      {isSelected && (
                        <span className="h-4 w-4 rounded-full bg-[#0d9488] flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm font-semibold text-(--text-mint-dark) mt-1">
                        + {formatPrice(service.basePrice)}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sprints Slider Panel */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-slate-600">Target Velocity</h3>
                <p className="text-sm text-slate-600">Adjust target timeline milestones.</p>
              </div>
              <span className="text-sm font-black text-(--text-purple) bg-(--text-purple)/5 px-3 py-1 rounded-lg border border-(--text-purple)/10 font-mono">
                {timeline} {timeline === 1 ? 'Week' : 'Weeks'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              value={timeline}
              onChange={(e) => setTimeline(parseInt(e.target.value))}
              className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-(--text-purple)"
            />
          </div>

        </div>

        {/* Right Sticky Summary & Communication Gateway */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-(--shadow) text-(--text-purple) space-y-6">
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600">Live Architecture Valuation</h3>
            <div className="text-4xl font-black text-(--text-purple) tracking-tight font-mono mt-2 mb-1">
              {formatPrice(totalCost)}
            </div>
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-(--text-mint)" /> Estimated Base Investment Range
            </p>
          </div>

          {/* Action A: WhatsApp Routing */}
          <div className="pt-2">
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-(--brand-mint) hover:bg-(--text-mint-dark) text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all shadow-md transform active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.831.002-2.624-1.013-5.092-2.859-6.941C16.63 1.983 14.16 1.012 11.53 1.01c-5.44 0-9.866 4.415-9.869 9.835-.001 1.83.49 3.618 1.421 5.178L1.936 21.6l5.711-1.446z" />
              </svg>
              Message Instantly via WhatsApp
            </a>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-slate-800"></div>
            <span className="shrink mx-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">OR LOG ESTIMATE</span>
            <div className="grow border-t border-slate-800"></div>
          </div>

          {/* Action B: Inbound Form */}
          {submitSuccess ? (
            <div className="bg-(--brand-mint)/10 border border-(--brand-mint)/30 rounded-xl p-4 text-center space-y-2">
              <div className="text-base font-bold text-(--text-mint-dark)">Configuration Logged</div>
              <p className="text-xs text-slate-600">Your brief is securely processed. Expect a tailored solution review within 5 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleEmailFormSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full  border border-(--brand-mint)/60 text-sm rounded-xl px-4 py-3 text-slate-600 placeholder-slate-600 focus:outline-none focus:border-(--brand-mint) transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Corporate Email Address</label>
                <input 
                  type="email" 
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="alex@company.co.uk"
                  className="w-full  border border-(--brand-mint)/60 text-sm rounded-xl px-4 py-3 text-slate-600 placeholder-slate-600 focus:outline-none focus:border-(--brand-mint) transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-(--brand-mint) hover:bg-(--text-mint-dark) text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Logging Specification...' : 'Submit Architectural Brief'}
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}