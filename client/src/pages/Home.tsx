import { useEffect, useState } from 'react';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import SectionHeader from '@/components/SectionHeader';
import PathogenTypesInteractive from '@/components/PathogenTypesInteractive';
import TMVFlashcards from '@/components/TMVFlashcards';
import SalmonellaInfoBoxes from '@/components/SalmonellaInfoBoxes';
import InfiniteSpreadScroll from '@/components/InfiniteSpreadScroll';
import MechanismInteractive from '@/components/MechanismInteractive';
import SymptomsInteractive from '@/components/SymptomsInteractive';
import PreventionInteractive from '@/components/PreventionInteractive';
import AQASpecification from '@/components/AQASpecification';
import InfectOrProtectGame from '@/components/InfectOrProtectGame';
import InteractiveGlobalMap from '@/components/InteractiveGlobalMap';
import CustomCursor from '@/components/CustomCursor';
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
    <div className="relative" style={{ cursor: 'none' }}>
      <CustomCursor />
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxBackground isHero />
        <div className="relative z-10 text-center px-4 space-y-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text text-glow leading-tight">
              Salmonella
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-primary animate-glow-pulse">
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
              number="Section 2A"
              title="TMV Virus"
              subtitle="Click flashcards to learn about tobacco mosaic virus"
              icon={Leaf}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-2'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <TMVFlashcards />
            </div>
          </div>
        </section>

        <section id="section-2b" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-2b'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 2B"
              title="Salmonella Bacterium"
              subtitle="Click info boxes to explore bacterial characteristics"
              icon={Bug}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-2b'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <SalmonellaInfoBoxes />
            </div>
          </div>
        </section>

        <section id="section-3" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-3'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 3"
              title="What Are Pathogens?"
              subtitle="Click each pathogen to learn more details"
              icon={Bug}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-3'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <PathogenTypesInteractive />
            </div>
          </div>
        </section>


        <section id="section-4" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-4'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 4"
              title="How It Spreads"
              subtitle="Auto-scrolling journey from farm to person"
              icon={TrendingUp}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-4'] ? 'animate-slide-up' : 'opacity-0'}`}>
              <InfiniteSpreadScroll />
            </div>
          </div>
        </section>

        <section id="section-5" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-5'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 5"
              title="How It Causes Disease"
              subtitle="Click each step to explore the infection process"
              icon={Syringe}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-5'] ? 'animate-slide-up' : 'opacity-0'}`}>
              <MechanismInteractive />
            </div>
          </div>
        </section>

        <section id="section-6" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-6'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 6"
              title="Symptoms"
              subtitle="Click symptoms to explore details and severity"
              icon={Thermometer}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-6'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <SymptomsInteractive />
            </div>
          </div>
        </section>

        <section id="section-7" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-7'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 7"
              title="Prevention & Treatment"
              subtitle="Click each guideline for detailed information"
              icon={Shield}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-7'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <PreventionInteractive />
            </div>
          </div>
        </section>

        <section id="section-8" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-8'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 8"
              title="AQA Specification"
              subtitle="What you need to know for your GCSE exam"
              icon={BookOpen}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-8'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <AQASpecification />
            </div>
          </div>
        </section>

        <section id="section-9" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-9'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 9"
              title="Infect or Protect"
              subtitle="Test your knowledge with this interactive game"
              icon={Gamepad2}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-9'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <InfectOrProtectGame />
            </div>
          </div>
        </section>

        <section id="section-10" className={`relative min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isVisible['section-10'] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              number="Section 10"
              title="Global Impact"
              subtitle="Click regions on the map to explore infection rates"
              icon={Globe}
            />
            <div className={`transition-all duration-700 delay-200 ${isVisible['section-10'] ? 'animate-scale-in' : 'opacity-0'}`}>
              <InteractiveGlobalMap />
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
