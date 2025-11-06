import { Home, ChefHat, Utensils, UtensilsCrossed, User } from 'lucide-react';
import timelineImage from '@assets/image_1762466143738.png';

const steps = [
  { icon: Home, label: 'Farm', color: 'text-chart-3' },
  { icon: ChefHat, label: 'Chicken', color: 'text-primary' },
  { icon: Utensils, label: 'Kitchen', color: 'text-secondary' },
  { icon: UtensilsCrossed, label: 'Plate', color: 'text-chart-4' },
  { icon: User, label: 'Person', color: 'text-destructive' },
];

export default function InfiniteSpreadScroll() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 p-8">
        <div className="animate-infinite-scroll flex gap-8">
          <img 
            src={timelineImage} 
            alt="Spread timeline" 
            className="h-32 w-auto flex-shrink-0"
          />
          <img 
            src={timelineImage} 
            alt="Spread timeline" 
            className="h-32 w-auto flex-shrink-0"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="flex items-center gap-3 p-4 glass-card rounded-lg animate-bounce-slow"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`p-3 bg-accent/20 rounded-lg ${step.color}`}>
              <step.icon className="w-6 h-6" />
            </div>
            <span className={`font-bold ${step.color}`}>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
