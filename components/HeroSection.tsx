import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full text-slate-900 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content + Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                High-Performance Web Architectures
                <br className="hidden sm:inline" />
                <span className="text-[#7C3AED]">at European Market Rates</span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              We create innovative digital solutions that drive growth and elevate your 
              brand. From web development to digital marketing, we're your partners in 
              digital transformation.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button className="px-8 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-full shadow-lg shadow-purple-600/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="px-8 py-3 bg-[#26C6A2] hover:bg-[#26C6A2]/90 text-white font-bold rounded-full shadow-lg shadow-purple-600/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Our Work
              </button>
            </div>

            {/* Metrics Counter Grid */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#7C3AED]">150</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#26C6A2]">95</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-800">24</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Styled Brain Graphic */}
          <div className="lg:col-span-6 flex justify-center items-start">
            <img src="/images/hero.webp" alt="" className="max-w-full h-full" />
          </div>

        </div>
      </div>
    </section>
  );
}