import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Home, ChefHat, Utensils, UtensilsCrossed, User, ArrowRight } from 'lucide-react';

const steps = [
  { 
    icon: Home, 
    label: 'Farm', 
    color: 'text-chart-3',
    title: 'Contaminated Animals',
    description: 'Bacteria live in the intestines of farm animals without showing symptoms.',
  },
  { 
    icon: ChefHat, 
    label: 'Chicken', 
    color: 'text-primary',
    title: 'Infected Poultry',
    description: 'Bacteria contaminate meat during slaughter and processing.',
  },
  { 
    icon: Utensils, 
    label: 'Kitchen', 
    color: 'text-secondary',
    title: 'Food Preparation',
    description: 'Raw meat transfers bacteria to surfaces and utensils.',
  },
  { 
    icon: UtensilsCrossed, 
    label: 'Plate', 
    color: 'text-chart-4',
    title: 'Undercooked Food',
    description: 'Insufficient cooking fails to kill bacteria (needs 75°C).',
  },
  { 
    icon: User, 
    label: 'Person', 
    color: 'text-destructive',
    title: 'Infection',
    description: 'Bacteria enter digestive system causing illness after 8-72 hours.',
  },
];

export default function InfiniteSpreadScroll() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 p-8">
        <div className="animate-infinite-scroll flex gap-4">
          {[...steps, ...steps, ...steps].map((step, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-48 p-6 glass-card hover-elevate cursor-pointer transition-all cursor-scale ${
                selectedStep === index % steps.length ? 'ring-2 ring-primary scale-105' : ''
              }`}
              onClick={() => setSelectedStep(selectedStep === index % steps.length ? null : index % steps.length)}
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`p-4 bg-accent/20 rounded-lg ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className={`font-bold text-lg ${step.color}`}>{step.label}</h4>
                {selectedStep === index % steps.length && (
                  <div className="animate-slide-up space-y-2 border-t border-primary/20 pt-3">
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
        <ArrowRight className="w-4 h-4 animate-pulse" />
        <span>Scroll automatically shows the journey from farm to person</span>
        <ArrowRight className="w-4 h-4 animate-pulse" />
      </div>
    </div>
  );
}
