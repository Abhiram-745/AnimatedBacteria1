
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Pill, Droplet, Activity, Flame, AlertCircle } from 'lucide-react';
import digestiveImage from '@assets/generated_images/Digestive_system_with_bacteria_a552a5c5.png';
import bacteriaImage from '@assets/generated_images/Salmonella_bacteria_microscopy_hero_background_65e8d3b6.png';

const steps = [
  {
    id: 'ingestion',
    icon: Pill,
    title: 'Ingestion',
    description: 'Bacteria enter through contaminated food or water',
    details: 'Salmonella survives stomach acid and travels to the intestines.',
    color: 'text-primary',
    image: digestiveImage,
  },
  {
    id: 'invasion',
    icon: Activity,
    title: 'Invasion',
    description: 'Bacteria invade intestinal lining cells',
    details: 'Using flagella, bacteria attach to and penetrate the intestinal wall.',
    color: 'text-secondary',
    image: bacteriaImage,
  },
  {
    id: 'multiplication',
    icon: Droplet,
    title: 'Multiplication',
    description: 'Rapid reproduction through binary fission',
    details: 'One bacterium becomes millions in just hours inside your gut.',
    color: 'text-chart-3',
    image: bacteriaImage,
  },
  {
    id: 'toxins',
    icon: Flame,
    title: 'Toxin Release',
    description: 'Bacteria release harmful endotoxins and exotoxins',
    details: 'Toxins damage intestinal cells and trigger immune response.',
    color: 'text-destructive',
    image: bacteriaImage,
  },
  {
    id: 'symptoms',
    icon: AlertCircle,
    title: 'Symptoms Appear',
    description: 'Body fights back causing inflammation',
    details: 'Fever, cramps, diarrhea, and vomiting begin after 8-72 hours.',
    color: 'text-chart-4',
    image: digestiveImage,
  },
];

export default function ScrollTimelineMechanism() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = window.scrollY - containerTop + window.innerHeight / 2;
      
      // Find which step is currently in view
      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const stepTop = stepRef.offsetTop;
          const stepBottom = stepTop + stepRef.offsetHeight;
          
          if (scrollPosition >= stepTop && scrollPosition < stepBottom) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto space-y-12 py-12">
      {/* Vertical timeline connector */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 transform -translate-x-1/2" />
        
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              className="relative mb-96 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                    isActive
                      ? 'bg-primary border-primary scale-150 shadow-lg shadow-primary/50'
                      : isPast
                      ? 'bg-primary/50 border-primary/50'
                      : 'bg-background border-primary/30'
                  }`}
                />
              </div>

              {/* Content card - alternating left/right */}
              <div
                className={`relative ${
                  index % 2 === 0 ? 'pr-1/2 mr-8' : 'pl-1/2 ml-8'
                }`}
              >
                <Card
                  className={`p-8 glass-card transition-all duration-700 ${
                    isActive
                      ? 'ring-2 ring-primary scale-105 hover-elevate-2 opacity-100'
                      : isPast
                      ? 'opacity-70'
                      : 'opacity-40'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={step.image}
                        alt={step.title}
                        className={`w-full h-48 object-cover transition-all duration-700 ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Icon and title */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 bg-accent/20 rounded-lg ${step.color} transition-all ${
                          isActive ? 'animate-pulse' : ''
                        }`}
                      >
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-2xl ${step.color}`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Details - shown when active */}
                    {isActive && (
                      <div className="pt-4 border-t border-primary/20 animate-slide-up">
                        <p className="text-base italic leading-relaxed">{step.details}</p>
                      </div>
                    )}

                    {/* Step number */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/20 text-primary/60'
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex items-center gap-2"
            onClick={() => {
              stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            <span
              className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 px-2 py-1 rounded ${
                index === activeStep ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {step.title}
            </span>
            <div
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
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

      {/* Scroll hint */}
      <div className="text-center text-sm text-muted-foreground animate-pulse">
        Scroll down to progress through the infection stages
      </div>
    </div>
  );
}
