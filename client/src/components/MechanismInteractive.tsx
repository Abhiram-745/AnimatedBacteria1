import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, ArrowDown, Users, Flame, Shield, AlertTriangle } from 'lucide-react';
import digestiveImage from '@assets/generated_images/Digestive_system_with_bacteria_a552a5c5.png';

const steps = [
  {
    id: 'ingestion',
    title: 'Ingestion',
    icon: Utensils,
    description: 'Bacteria enter through contaminated food or water',
    color: 'text-primary',
    details: 'Salmonella bacteria are consumed in undercooked meat, raw eggs, or contaminated produce. As few as 10-100 bacteria can cause infection in vulnerable people.',
    timeframe: '0 hours',
  },
  {
    id: 'stomach',
    title: 'Stomach Survival',
    icon: Shield,
    description: 'Some bacteria survive stomach acid',
    color: 'text-chart-3',
    details: 'Stomach acid kills many bacteria, but Salmonella can survive. Bacteria that survive pass into the small intestine where pH is more neutral.',
    timeframe: '1-2 hours',
  },
  {
    id: 'invasion',
    title: 'Intestinal Invasion',
    icon: ArrowDown,
    description: 'Bacteria invade intestinal wall cells',
    color: 'text-secondary',
    details: 'Salmonella attaches to intestinal lining cells and invades them. Bacteria multiply inside cells, protected from immune system.',
    timeframe: '6-12 hours',
  },
  {
    id: 'multiplication',
    title: 'Rapid Multiplication',
    icon: Users,
    description: 'Bacteria reproduce every 20 minutes',
    color: 'text-chart-4',
    details: 'Inside intestinal cells, bacteria multiply through binary fission. One cell becomes two, two become four, exponential growth.',
    timeframe: '12-24 hours',
  },
  {
    id: 'toxins',
    title: 'Toxin Release',
    icon: AlertTriangle,
    description: 'Bacteria release harmful toxins',
    color: 'text-destructive',
    details: 'Bacteria secrete endotoxins (from cell walls) and exotoxins that damage intestinal cells, causing inflammation and triggering symptoms.',
    timeframe: '24-48 hours',
  },
  {
    id: 'immune',
    title: 'Immune Response',
    icon: Flame,
    description: 'Body fights back causing inflammation',
    color: 'text-primary',
    details: 'White blood cells attack bacteria. Inflammation causes fever, pain, and diarrhea. Body flushes out bacteria through vomiting and diarrhea.',
    timeframe: '48-72 hours',
  },
];

export default function MechanismInteractive() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
        <img 
          src={digestiveImage} 
          alt="Digestive System Infection" 
          className="w-full h-64 object-cover rounded-lg border-2 border-primary/30"
        />
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isSelected = selected === step.id;
          return (
            <div key={step.id} className="relative">
              <Card
                data-testid={`mechanism-step-${step.id}`}
                className={`p-6 glass-card hover-elevate active-elevate-2 cursor-pointer transition-all cursor-scale ${
                  isSelected ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelected(isSelected ? null : step.id)}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {index + 1}
                    </Badge>
                  </div>
                  <div className={`p-4 bg-accent/20 rounded-lg ${step.color} group-hover:scale-110 transition-all flex-shrink-0`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className={`text-2xl font-bold ${step.color} text-glow-sm`}>
                        {step.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {step.timeframe}
                      </Badge>
                    </div>
                    <p className="text-lg">{step.description}</p>
                    
                    {isSelected && (
                      <div className="pt-4 mt-4 border-t border-primary/20 animate-slide-up">
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {step.details}
                        </p>
                      </div>
                    )}
                    
                    {!isSelected && (
                      <p className="text-sm text-primary italic">Click to learn more</p>
                    )}
                  </div>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-6 h-6 text-primary animate-bounce-slow" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
