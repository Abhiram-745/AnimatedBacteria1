import { useEffect, useState } from 'react';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import SectionHeader from '@/components/SectionHeader';
import PathogenComparison from '@/components/PathogenComparison';
import PathogenTypes from '@/components/PathogenTypes';
import SalmonellaFacts from '@/components/SalmonellaFacts';
import SpreadTimeline from '@/components/SpreadTimeline';
import MechanismFlow from '@/components/MechanismFlow';
import SymptomsGrid from '@/components/SymptomsGrid';
import PreventionGrid from '@/components/PreventionGrid';
import AQASpecification from '@/components/AQASpecification';
import InfectOrProtectGame from '@/components/InfectOrProtectGame';
import GlobalImpact from '@/components/GlobalImpact';
import { Microscope, Leaf, Bug, Activity, TrendingUp, Syringe, Thermometer, Shield, BookOpen, Gamepad2, Globe } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxBackground isHero />
        <div className="relative z-10 text-center px-4 space-y-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text text-glow-lg leading-tight">
              Salmonella
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-glow animate-glow-pulse">
              How Bacteria Make You Sick
            </h2>
            <p className="text-xl md:text-2xl text-secondary font-medium">
              Group 4 — GCSE Biology Presentation
            </p>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Explore how Salmonella spreads, causes disease, and can be prevented. 
              An interactive journey through bacteria, symptoms, and food safety.
            </p>
          </div>
          <div className="animate-float">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      <div className="relative">
        <ParallaxBackground />
        
        <section id="section-2" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-2'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 2"
              title="From Plants to People"
              subtitle="Connecting TMV (viruses) to Salmonella (bacteria)"
              icon={Leaf}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-2'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <PathogenComparison />
            </div>
          </div>
        </section>

        <section id="section-3" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-3'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 3"
              title="What Are Pathogens?"
              subtitle="The four main types of disease-causing organisms"
              icon={Bug}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-3'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <PathogenTypes />
            </div>
          </div>
        </section>

        <section id="section-4" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-4'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 4"
              title="What is Salmonella?"
              subtitle="Meet the bacterium responsible for food poisoning"
              icon={Microscope}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-4'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <SalmonellaFacts />
            </div>
          </div>
        </section>

        <section id="section-5" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-5'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 5"
              title="How It Spreads"
              subtitle="From farm to table - the journey of contamination"
              icon={TrendingUp}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-5'] ? 'animate-slide-up' : 'opacity-0'}`}>
              <SpreadTimeline />
            </div>
          </div>
        </section>

        <section id="section-6" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-6'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 6"
              title="How It Causes Disease"
              subtitle="The mechanism of infection inside your body"
              icon={Syringe}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-6'] ? 'animate-slide-up' : 'opacity-0'}`}>
              <MechanismFlow />
            </div>
          </div>
        </section>

        <section id="section-7" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-7'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 7"
              title="Symptoms"
              subtitle="What happens when Salmonella infects you"
              icon={Thermometer}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-7'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <SymptomsGrid />
            </div>
          </div>
        </section>

        <section id="section-8" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-8'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 8"
              title="Prevention & Treatment"
              subtitle="How to avoid infection and what to do if infected"
              icon={Shield}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-8'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <PreventionGrid />
            </div>
          </div>
        </section>

        <section id="section-9" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-9'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 9"
              title="AQA Specification"
              subtitle="What you need to know for your GCSE exam"
              icon={BookOpen}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-9'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <AQASpecification />
            </div>
          </div>
        </section>

        <section id="section-10" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-10'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 10"
              title="Infect or Protect"
              subtitle="Test your knowledge with this interactive game"
              icon={Gamepad2}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-10'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <InfectOrProtectGame />
            </div>
          </div>
        </section>

        <section id="section-11" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-11'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 11"
              title="Global Impact"
              subtitle="The worldwide scale of Salmonella infections"
              icon={Globe}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-11'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <GlobalImpact />
            </div>
          </div>
        </section>

        <footer className="relative py-12 px-4 border-t border-primary/20">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Group 4 GCSE Biology Presentation
            </p>
            <p className="text-sm text-muted-foreground">
              Educational content about Salmonella bacteria and food poisoning prevention
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
