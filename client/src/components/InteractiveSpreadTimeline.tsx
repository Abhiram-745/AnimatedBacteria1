import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import timelineImage from '@assets/image_1762466143738.png';

const steps = [
  {
    id: 'farm',
    label: 'Farm',
    title: 'Contaminated Animals',
    description: 'Salmonella bacteria live in the intestines of many farm animals, especially chickens, turkeys, and cattle.',
    details: 'Animals can carry Salmonella without showing symptoms. The bacteria spread through fecal matter in the farm environment.',
  },
  {
    id: 'chicken',
    label: 'Chicken',
    title: 'Infected Poultry',
    description: 'Bacteria contaminate the meat during slaughter and processing.',
    details: 'Cross-contamination occurs when bacteria from intestines contact the meat surface. This is why proper handling is critical.',
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    title: 'Food Preparation',
    description: 'Raw meat transfers bacteria to surfaces, utensils, and other foods.',
    details: 'Bacteria multiply rapidly at room temperature. Cutting boards, knives, and countertops can all become contaminated.',
  },
  {
    id: 'plate',
    label: 'Plate',
    title: 'Undercooked Food',
    description: 'Insufficient cooking fails to kill the bacteria.',
    details: 'Salmonella dies at 75°C (165°F). Undercooked meat, eggs with runny yolks, or reheated food can contain live bacteria.',
  },
  {
    id: 'person',
    label: 'Person',
    title: 'Infection',
    description: 'Bacteria enter the digestive system and cause illness.',
    details: 'After 8-72 hours, symptoms begin: fever, cramps, diarrhea, vomiting. The immune system fights back causing inflammation.',
  },
];

export default function InteractiveSpreadTimeline() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate progress as section scrolls through viewport
      const progress = Math.max(0, Math.min(1, 1 - (sectionTop / (sectionHeight - windowHeight))));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto space-y-8">
      <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-card/50 p-8">
        <div 
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-scrollProgress * 20}%)` }}
        >
          <img 
            src={timelineImage} 
            alt="Spread timeline from farm to person" 
            className="w-full h-auto"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/20 via-transparent to-background/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step) => (
          <Card
            key={step.id}
            data-testid={`timeline-step-${step.id}`}
            className={`p-6 glass-card hover-elevate active-elevate-2 cursor-pointer transition-all cursor-scale ${
              activeStep === step.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
          >
            <div className="space-y-3 text-center">
              <h4 className="font-bold text-lg text-primary">{step.label}</h4>
              <p className="text-sm text-muted-foreground">{step.title}</p>
              {activeStep === step.id && (
                <div className="pt-3 border-t border-primary/20 space-y-2 animate-slide-up">
                  <p className="text-sm">{step.description}</p>
                  <p className="text-xs text-muted-foreground italic">{step.details}</p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-primary/10 border-primary/30">
        <p className="text-center text-lg">
          <span className="font-bold text-primary">UK Prevention: </span>
          Poultry vaccinated to reduce spread. Click each step to learn more!
        </p>
      </Card>
    </div>
  );
}
