
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Pill, Droplet, Activity, Flame, AlertCircle } from 'lucide-react';
import digestiveImage from '@assets/generated_images/Digestive_system_with_bacteria_a552a5c5.png';

const steps = [
  {
    id: 'ingestion',
    icon: Pill,
    title: 'Ingestion',
    description: 'Bacteria enter through contaminated food or water',
    details: 'Salmonella survives stomach acid and travels to the intestines.',
    color: 'text-primary',
  },
  {
    id: 'invasion',
    icon: Activity,
    title: 'Invasion',
    description: 'Bacteria invade intestinal lining cells',
    details: 'Using flagella, bacteria attach to and penetrate the intestinal wall.',
    color: 'text-secondary',
  },
  {
    id: 'multiplication',
    icon: Droplet,
    title: 'Multiplication',
    description: 'Rapid reproduction through binary fission',
    details: 'One bacterium becomes millions in just hours inside your gut.',
    color: 'text-chart-3',
  },
  {
    id: 'toxins',
    icon: Flame,
    title: 'Toxin Release',
    description: 'Bacteria release harmful endotoxins and exotoxins',
    details: 'Toxins damage intestinal cells and trigger immune response.',
    color: 'text-destructive',
  },
  {
    id: 'symptoms',
    icon: AlertCircle,
    title: 'Symptoms Appear',
    description: 'Body fights back causing inflammation',
    details: 'Fever, cramps, diarrhea, and vomiting begin after 8-72 hours.',
    color: 'text-chart-4',
  },
];

export default function ScrollTimelineMechanism() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));
      
      const stepIndex = Math.floor(scrollProgress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto space-y-8 min-h-[200vh]">
      <div className="sticky top-20 space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src={digestiveImage} 
              alt="Digestive system" 
              className="w-full max-w-md h-auto rounded-lg border-2 border-primary/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;
            
            return (
              <Card
                key={step.id}
                className={`p-6 glass-card transition-all duration-500 ${
                  isActive ? 'ring-2 ring-primary scale-105 hover-elevate-2' : isPast ? 'opacity-60' : 'opacity-30'
                }`}
              >
                <div className="space-y-3 text-center">
                  <div className={`mx-auto p-3 bg-accent/20 rounded-lg w-fit ${step.color} transition-all ${
                    isActive ? 'animate-pulse' : ''
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className={`font-bold text-lg ${step.color}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  {isActive && (
                    <div className="pt-3 border-t border-primary/20 animate-slide-up">
                      <p className="text-xs italic">{step.details}</p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeStep ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
