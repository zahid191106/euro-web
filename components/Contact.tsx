"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  // Linkedin, 
  // Github, 
  Check, 
  Copy, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const leftCardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

const rightContentVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 }
  }
};

const errorTransition = {
  initial: { opacity: 0, height: 0, y: -5 },
  animate: { opacity: 1, height: 'auto', y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, height: 0, y: -5, transition: { duration: 0.15 } }
};

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string>('');

  const handleCopy = (text: string, label: string): void => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(''), 2000);
    }
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Your name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Please write a message';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate database post delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <motion.div 
      initial="hidden"
      id="contact"
      animate="visible"
      variants={pageTransition}
      className="min-h-screen text-slate-800 antialiased font-sans relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header matching Screenshot from 2026-07-17 11-30-46.png layout but in crisp light mode */}
      <motion.div variants={headerVariants} className="max-w-6xl mx-auto text-center mb-12 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--brand-mint)/20 border border-(--text-mint-dark) text-(--text-mint-dark) text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 animate-pulse" />
          Contact
        </div>
        <h1 className="main-heading">
          Contact
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </p>
      </motion.div>

      {}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Let's Start a Conversation Card */}
        <motion.div 
          variants={leftCardVariants}
          className="lg:col-span-5 rounded-3xl p-6 sm:p-8 shadow-(--shadow)  relative group transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-3 bg-(--brand-purple) rounded-t-3xl" />
          
          <div className="flex flex-col items-center text-center mb-8">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-(--brand-purple) rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 mb-4 cursor-pointer"
            >
              <MessageSquare className="w-7 h-7" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900">Let's Start a Conversation</h2>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.
            </p>
          </div>

          {/* Contact Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                  className={`w-full shadow-(--shadow) border ${formErrors.name ? 'border-red-600 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100 focus:border-(--text-purple)'} text-slate-800 rounded-xl px-4 py-3 text-sm transition-all outline-none focus:ring-4`}
                />
                <AnimatePresence>
                  {formErrors.name && (
                    <motion.p {...errorTransition} className="text-xs text-red-500 font-medium">
                      {formErrors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                  className={`w-full shadow-(--shadow) border ${formErrors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100 focus:border-(--text-purple)'} text-slate-800 rounded-xl px-4 py-3 text-sm transition-all outline-none focus:ring-4`}
                />
                <AnimatePresence>
                  {formErrors.email && (
                    <motion.p {...errorTransition} className="text-xs text-red-500 font-medium">
                      {formErrors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">What's this about?</label>
              <input 
                type="text" 
                placeholder="What's this about?" 
                value={formData.subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, subject: e.target.value})}
                className={`w-full shadow-(--shadow) border ${formErrors.subject ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100 focus:border-(--text-purple)'} text-slate-800 rounded-xl px-4 py-3 text-sm transition-all outline-none focus:ring-4`}
              />
              <AnimatePresence>
                {formErrors.subject && (
                  <motion.p {...errorTransition} className="text-xs text-red-500 font-medium">
                    {formErrors.subject}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Tell us more</label>
              <textarea 
                rows={4} 
                placeholder="Tell us more about your project..." 
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                className={`w-full shadow-(--shadow) border ${formErrors.message ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100 focus:border-(--text-purple)'} text-slate-800 rounded-xl px-4 py-3 text-sm transition-all outline-none focus:ring-4 resize-none`}
              ></textarea>
              <AnimatePresence>
                {formErrors.message && (
                  <motion.p {...errorTransition} className="text-xs text-red-500 font-medium">
                    {formErrors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {}
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-(--brand-purple) hover:bg-(--brand-purple-hover) active:scale-[0.98] disabled:opacity-70 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {/* Success Notification */}
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center gap-3 mt-3"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-600 mt-0.5">We will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {}
        <motion.div 
          variants={rightContentVariants}
          className="lg:col-span-7 flex flex-col justify-between h-full space-y-8"
        >
          {/* Main Copywriting */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-(--text-purple) tracking-tight">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.
            </p>
          </div>

          {/* Stacked Details Cards */}
          <div className="space-y-4">
            {/* Email Us */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.995 }}
              onClick={() => handleCopy('hello@productdemo.com', 'Email')}
              className="group rounded-2xl p-5 shadow-(--shadow) hover:shadow-indigo-50/40 transition-all duration-300 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-(--brand-purple)/20 group-hover:bg-(--brand-purple) group-hover:text-white text-(--text-purple) rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-(--text-purple) tracking-wider uppercase block">Email Us</span>
                  <span className="font-semibold text-slate-600 text-base block mt-0.5 group-hover:text-(--text-purple) transition-colors">
                    hello@productdemo.com
                  </span>
                  <span className="text-xs text-slate-600 block mt-0.5">Response in 2-4 hours</span>
                </div>
              </div>
              <div className="text-slate-600 group-hover:text-(--text-purple) transition-colors pr-2">
                <AnimatePresence mode="wait">
                  {copiedText === 'Email' ? (
                    <motion.span 
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-xs font-semibold text-(--text-mint-dark) flex items-center gap-1"
                    >
                      <Check className="w-4 h-4" /> Copied!
                    </motion.span>
                  ) : (
                    <motion.div
                      key="copy-icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Call Us */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.995 }}
              onClick={() => handleCopy('+1 (555) 987-6543', 'Phone')}
              className="group rounded-2xl p-5 shadow-(--shadow) hover:shadow-indigo-50/40 transition-all duration-300 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-(--brand-purple)/20 group-hover:bg-(--brand-purple) group-hover:text-white text-(--text-purple) rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-(--text-purple) tracking-wider uppercase block">Call Us</span>
                  <span className="font-semibold text-slate-600 text-base block mt-0.5 group-hover:text-(--text-purple) transition-colors">
                    +1 (555) 987-6543
                  </span>
                  <span className="text-xs text-slate-600 block mt-0.5">Available 9AM - 6PM EST</span>
                </div>
              </div>
              <div className="text-slate-600 group-hover:text-(--text-purple) transition-colors pr-2">
                <AnimatePresence mode="wait">
                  {copiedText === 'Phone' ? (
                    <motion.span 
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-xs font-semibold text-(--text-mint-dark) flex items-center gap-1"
                    >
                      <Check className="w-4 h-4" /> Copied!
                    </motion.span>
                  ) : (
                    <motion.div
                      key="copy-icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Visit Office */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              className="group rounded-2xl p-5 shadow-(--shadow) hover:shadow-indigo-50/40 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-(--brand-purple)/20 group-hover:bg-(--brand-purple) group-hover:text-white text-(--text-purple) rounded-xl flex items-center justify-center transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-(--text-purple) tracking-wider uppercase block">Visit Our Office</span>
                  <span className="font-semibold text-slate-600 text-base block mt-0.5">
                    4821 Broadway Street, New York, NY 10013
                  </span>
                  <span className="text-xs text-slate-600 block mt-0.5">Open Monday - Friday</span>
                </div>
              </div>
              <motion.a 
                whileHover={{ x: 3 }}
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-(--text-purple) hover:text-(--text-purple-hover) hover:underline text-xs font-bold flex items-center gap-1 pr-2 cursor-pointer"
              >
                Maps <ChevronRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          </div>

          {}
          <motion.div 
            variants={itemVariants}
            className="bg-(--brand-purple)/20 border border-indigo-100/30 rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4 text-center shadow-inner"
          >
            <motion.div whileHover={{ y: -3 }} className="space-y-1">
              <h3 className="text-3xl font-extrabold text-(--text-purple)">24h</h3>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600 uppercase tracking-wider">Average Response</p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="space-y-1 border-x border-slate-200">
              <h3 className="text-3xl font-extrabold text-(--text-purple)">98%</h3>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600 uppercase tracking-wider">Client Satisfaction</p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="space-y-1">
              <h3 className="text-3xl font-extrabold text-(--text-purple)">150+</h3>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600 uppercase tracking-wider">Projects Delivered</p>
            </motion.div>
          </motion.div>

          {/* Social Links matching Screenshot from 2026-07-17 11-30-46.png footer */}
          <div className="flex flex-col items-center justify-center py-4 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-600 tracking-widest uppercase mb-4">Connect With Us</h4>
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#linkedin" 
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-(--text-purple) hover:border-indigo-200 shadow-(--shadow) transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                {/* <Linkedin className="w-4 h-4" /> */}
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#twitter" 
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-(--text-purple) hover:border-indigo-200 shadow-(--shadow) transition-all duration-300"
                aria-label="Twitter X Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#github" 
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-(--text-purple) hover:border-indigo-200 shadow-(--shadow) transition-all duration-300"
                aria-label="GitHub Profile"
              >
                {/* <Github className="w-4 h-4" /> */}
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#discord" 
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-(--text-purple) hover:border-indigo-200 shadow-(--shadow) transition-all duration-300"
                aria-label="Discord Server Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 127.14 96.36">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.87-.64,1.71-1.32,2.51-2a75.64,75.64,0,0,0,72.71,0c.8.71,1.64,1.39,2.51,2a68.18,68.18,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,123.48,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
                </svg>
              </motion.a>
            </div>
          </div>

        </motion.div>

      </div>
    </motion.div>
  );
}