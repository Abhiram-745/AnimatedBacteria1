import { Card } from '@/components/ui/card';
import { ArrowDown, UtensilsCrossed, Bug, Syringe, AlertTriangle, Clock } from 'lucide-react';

const steps = [
  {
    icon: UtensilsCrossed,
    title: 'Entry',
    description: 'Bacteria enter through contaminated food',
    color: 'text-secondary',
  },
  {
    icon: Bug,
    title: 'Attachment & Reproduction',
    description: 'Bacteria attach to gut walls and multiply',
    color: 'text-primary',
  },
  {
    icon: Syringe,
    title: 'Toxin Release',
    description: 'Bacteria release toxins that damage cells',
    color: 'text-chart-3',
  },
  {
    icon: AlertTriangle,
    title: 'Immune Response',
    description: 'Body responds with fever and inflammation',
    color: 'text-chart-4',
  },
];

export default function MechanismFlow() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-6 bg-primary/10 border-primary/30 flex items-center gap-4" data-testid="incubation-period">
        <Clock className="w-8 h-8 text-primary" />
        <div>
          <p className="font-bold text-lg text-primary">Incubation Period</p>
          <p className="text-base">8-72 hours from consumption to symptoms</p>
        </div>
      </Card>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="space-y-4">
            <Card
              data-testid={`mechanism-step-${index}`}
              className="p-8 glass-card hover-elevate active-elevate-2 group cursor-pointer animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 bg-accent/20 rounded-lg ${step.color} group-hover:scale-110 group-hover:animate-pulse-glow transition-all flex-shrink-0`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-4xl font-black ${step.color}`}>
                      {index + 1}
                    </span>
                    <h3 className={`text-2xl font-bold ${step.color}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg">{step.description}</p>
                </div>
              </div>
            </Card>
            {index < steps.length - 1 && (
              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-primary animate-bounce-slow" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
