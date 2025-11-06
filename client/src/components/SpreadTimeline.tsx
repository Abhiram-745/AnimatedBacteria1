import { Card } from '@/components/ui/card';
import { ArrowRight, Home, Beef, UtensilsCrossed, User } from 'lucide-react';

const steps = [
  { icon: Home, label: 'Farm', description: 'Contaminated animals' },
  { icon: Beef, label: 'Chicken', description: 'Infected poultry' },
  { icon: UtensilsCrossed, label: 'Kitchen', description: 'Food preparation' },
  { icon: UtensilsCrossed, label: 'Plate', description: 'Undercooked food' },
  { icon: User, label: 'Person', description: 'Infection' },
];

export default function SpreadTimeline() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hidden md:flex items-center justify-between gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4 flex-1">
            <Card 
              data-testid={`timeline-step-${step.label.toLowerCase()}`}
              className="p-6 glass-card hover-elevate active-elevate-2 group cursor-pointer flex-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg text-primary">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
            {index < steps.length - 1 && (
              <ArrowRight className="w-8 h-8 text-primary animate-pulse flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden space-y-4">
        {steps.map((step, index) => (
          <Card 
            key={index}
            data-testid={`timeline-step-mobile-${step.label.toLowerCase()}`}
            className="p-6 glass-card hover-elevate active-elevate-2"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg text-primary">{step.label}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8 p-6 bg-primary/10 border-primary/30">
        <p className="text-center text-lg">
          <span className="font-bold text-primary">UK Prevention: </span>
          Poultry vaccinated to reduce spread
        </p>
      </Card>
    </div>
  );
}
