"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for mobile dropdown toggles
  const [activeDropdowns, setActiveDropdowns] = useState<{ [key: string]: boolean }>({});

  // Monitor window scroll to apply styling changes dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset dropdowns when root menu shifts status
    setActiveDropdowns({});
  };

  const toggleDropdown = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdowns({});
  };

  return (
    <>
      <header
        id="header"
        className={`sticky top-0 z-997 w-full py-5 transition-all duration-500 bg-transparent ${
          isScrolled ? "body-scrolled" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl">
          {/* Header pill container matching .header-container */}
          <div className="flex items-center justify-between bg-white rounded-[50px] py-1.5 px-6 shadow-[0px_2px_15px_rgba(0,0,0,0.1)] max-xl:py-2.5">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center me-auto xl:me-0 max-xl:order-1 select-none"
            >
              <img src="/images/logo-1.webp" alt="" className="w-30 h-15" />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav id="navmenu" className="hidden xl:block xl:p-0">
              <ul className="flex items-center p-0 m-0 list-none gap-x-10">
                <li>
                  <Link href="#hero" className="relative text-lg font-normal text-slate-900 hover:text-(--text-purple) hover:font-bold px-0.5 py-3.75 block transition-colors duration-300 group active-nav-link">
                    Home
                    <span className="absolute bottom-3 left-0 w-full h-0.5 bg-(--brand-purple) transition-all duration-300 origin-left scale-x-100"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="relative text-lg font-normal text-slate-900 hover:text-(--text-purple) hover:font-bold px-0.5 py-3.75 block transition-colors duration-300 group">
                    About
                    <span className="absolute bottom-3 left-0 w-none h-0.5 bg-(--brand-purple) transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="relative text-lg font-normal text-slate-900 hover:text-(--text-purple) px-0.5 py-3.75 block transition-colors duration-300 group">
                    Services
                    <span className="absolute bottom-3 left-0 w-none h-0.5 bg-(--brand-purple) transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="relative text-lg font-normal text-slate-900 hover:text-(--text-purple) px-0.5 py-3.75 block transition-colors duration-300 group">
                    Portfolio
                    <span className="absolute bottom-3 left-0 w-none h-0.5 bg-(--brand-purple) transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="relative text-lg font-normal text-slate-900 hover:text-(--text-purple) px-0.5 py-3.75 block transition-colors duration-300 group">
                    Tech Stack
                    <span className="absolute bottom-3 left-0 w-none h-0.5 bg-(--brand-purple) transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                </li>

                <li>
                  <Link href="#estimator" className="relative text-lg font-normal text-slate-900 hover:text-(--text-purple) px-0.5 py-3.75 block transition-colors duration-300 group">
                    Cost Estimate
                    <span className="absolute bottom-3 left-0 w-none h-0.5 bg-(--brand-purple) transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Action Trigger Buttons */}
            <div className="flex items-center gap-4 max-xl:order-2">
              <Link
                href="#contact"
                className="bg-(--brand-purple) hover:bg-(--brand-purple-hover) text-white text-lg font-bold py-2 px-5 ml-0 xl:ml-7 rounded-[50px] transition-all duration-300 whitespace-nowrap"
              >
                Contact
              </Link>

              {/* Mobile Menu Icon Trigger */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="xl:hidden text-slate-800 hover:text-white cursor-pointer transition-colors duration-300 p-1 order-3"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7 fixed top-6 right-6 z-99" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Fullscreen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0  backdrop-blur-sm z-9997 xl:hidden transition-all duration-300">
            <button
                type="button"
                onClick={toggleMobileMenu}
                className="xl:hidden text-slate-900  cursor-pointer transition-colors duration-300 p-1 order-3"
                aria-label="Toggle navigation menu"
            >
                {isMobileMenuOpen ? <X className="w-7 h-7 fixed top-6 right-6 z-99" /> : <Menu className="w-7 h-7" />}
            </button>
            <div className="absolute inset-y-0 inset-x-5 my-18.75 p-6 bg-purple-800 rounded-xl border border-slate-800 overflow-y-auto shadow-2xl">
                <ul className="flex flex-col gap-y-1 list-none p-0 m-0">
                <li>
                    <Link onClick={closeAllMenus} href="#hero" className="block py-2.5 px-5 text-lg font-bold text-(--brand-mint) rounded-md bg-white/5">
                    Home
                    </Link>
                </li>
                <li>
                    <Link onClick={closeAllMenus} href="#about" className="block py-2.5 px-5 text-lg font-bold text-slate-300 hover:text-(--brand-mint) transition-all">
                    About
                    </Link>
                </li>
                <li>
                    <Link onClick={closeAllMenus} href="#services" className="block py-2.5 px-5 text-lg font-bold text-slate-300 hover:text-(--brand-mint) transition-all">
                    Services
                    </Link>
                </li>
                <li>
                    <Link onClick={closeAllMenus} href="#portfolio" className="block py-2.5 px-5 text-lg font-bold text-slate-300 hover:text-(--brand-mint) transition-all">
                    Portfolio
                    </Link>
                </li>
                <li>
                    <Link onClick={closeAllMenus} href="#team" className="block py-2.5 px-5 text-lg font-bold text-slate-300 hover:text-(--brand-mint) transition-all">
                    Team
                    </Link>
                </li>              
                <li>
                    <Link onClick={closeAllMenus} href="#contact" className="block py-2.5 px-5 text-lg font-bold text-slate-300 hover:text-(--brand-mint) transition-all">
                    Contact
                    </Link>
                </li>
                </ul>
            </div>
        </div>
      )}
    </>
  );
}