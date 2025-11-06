
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Pill, Droplet, Activity, Flame, AlertCircle } from 'lucide-react';
import digestiveImage from '@assets/generated_images/Digestive_system_with_bacteria_a552a5c5.png';
import bacteriaImage from '@assets/generated_images/Salmonella_bacteria_microscopy_hero_background_65e8d3b6.png';
import glowingBacteriaImage from '@assets/generated_images/Salmonella_bacteria_glowing_microscopy_f48f55b0.png';
import globalImpactImage from '@assets/generated_images/Global_impact_infection_map_069c936d.png';
import foodSafetyImage from '@assets/generated_images/Food_safety_glowing_icons_9cc2dce0.png';

const steps = [
  {
    id: 'ingestion',
    icon: Pill,
    title: 'Ingestion',
    description: 'Bacteria enter through contaminated food or water',
    details: 'Salmonella survives stomach acid and travels to the intestines.',
    color: 'text-primary',
    image: digestiveImage,
    timeframe: '0 hours',
  },
  {
    id: 'invasion',
    icon: Activity,
    title: 'Invasion',
    description: 'Bacteria invade intestinal lining cells',
    details: 'Using flagella, bacteria attach to and penetrate the intestinal wall.',
    color: 'text-secondary',
    image: bacteriaImage,
    timeframe: '6-12 hours',
  },
  {
    id: 'multiplication',
    icon: Droplet,
    title: 'Multiplication',
    description: 'Rapid reproduction through binary fission',
    details: 'One bacterium becomes millions in just hours inside your gut.',
    color: 'text-chart-3',
    image: glowingBacteriaImage,
    timeframe: '12-24 hours',
  },
  {
    id: 'toxins',
    icon: Flame,
    title: 'Toxin Release',
    description: 'Bacteria release harmful endotoxins and exotoxins',
    details: 'Toxins damage intestinal cells and trigger immune response.',
    color: 'text-destructive',
    image: globalImpactImage,
    timeframe: '24-48 hours',
  },
  {
    id: 'symptoms',
    icon: AlertCircle,
    title: 'Symptoms Appear',
    description: 'Body fights back causing inflammation',
    details: 'Fever, cramps, diarrhea, and vomiting begin after 8-72 hours.',
    color: 'text-chart-4',
    image: foodSafetyImage,
    timeframe: '48-72 hours',
  },
];

export default function ScrollTimelineMechanism() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the container
      const progress = Math.max(0, Math.min(1, -containerTop / (windowHeight * 2)));
      setScrollProgress(progress);
      
      // Determine active step based on scroll progress
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length * 1.2)
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto relative" style={{ minHeight: '300vh' }}>
      {/* Fixed viewport container for stacked cards */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-3xl h-[600px]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;
            const isFuture = index > activeStep;
            
            // Calculate card position based on progress
            const cardProgress = Math.max(0, Math.min(1, (scrollProgress * steps.length) - index));
            const scale = isPast ? 0.85 : isActive ? 1 : 0.95;
            const translateY = isFuture ? 100 : isPast ? -20 * (activeStep - index) : 0;
            const opacity = isFuture ? 0 : isPast ? 0.3 : 1;
            const zIndex = steps.length - Math.abs(activeStep - index);
            
            return (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${translateY}%) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <Card
                  className={`h-full glass-card transition-all duration-700 ${
                    isActive
                      ? 'ring-2 ring-primary shadow-2xl shadow-primary/20'
                      : ''
                  }`}
                >
                  <div className="h-full flex flex-col">
                    {/* Image section */}
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={step.image}
                        alt={step.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      
                      {/* Timeframe badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-4 py-2 rounded-full font-bold text-sm ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-background/80 text-primary'
                        }`}>
                          {step.timeframe}
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1 p-8 space-y-6">
                      {/* Icon and title */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-4 bg-accent/20 rounded-lg ${step.color} transition-all ${
                            isActive ? 'animate-pulse' : ''
                          }`}
                        >
                          <Icon className="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold text-3xl ${step.color} mb-2`}>
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                        {/* Step number */}
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl ${
                            isActive
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-primary/20 text-primary/60'
                          }`}
                        >
                          {index + 1}
                        </div>
                      </div>

                      {/* Details - shown when active */}
                      {isActive && (
                        <div className="pt-6 border-t border-primary/20 animate-slide-up">
                          <p className="text-xl italic leading-relaxed">{step.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex items-center gap-2"
            >
              <span
                className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 px-2 py-1 rounded whitespace-nowrap ${
                  index === activeStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {step.title}
              </span>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? 'w-4 h-4 bg-primary shadow-lg shadow-primary/50'
                    : index < activeStep
                    ? 'bg-primary/50'
                    : 'bg-primary/20'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-muted-foreground animate-pulse z-50">
        <p>Scroll down to progress through the infection stages</p>
        <p className="text-xs mt-1">({activeStep + 1} of {steps.length})</p>
      </div>
    </div>
  );
}
