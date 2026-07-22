import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CostEstimator from "@/components/CostEstimator";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen dark:bg-black overflow-x-hidden"
      style={{
        backgroundImage: `
          linear-gradient(45deg, 
            rgba(240,253,250,1) 0%, 
            rgba(204,251,241,0.7) 30%, 
            rgba(153,246,228,0.5) 60%, 
            rgba(94,234,212,0.4) 100%
          ),
          radial-gradient(circle at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(167,243,208,0.5) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(209,250,229,0.6) 0%, transparent 45%)
        `,
      }}
    >
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <CostEstimator />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}