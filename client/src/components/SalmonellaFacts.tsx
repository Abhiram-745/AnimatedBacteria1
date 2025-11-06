import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Eye, AlertTriangle } from 'lucide-react';

export default function SalmonellaFacts() {
  const facts = [
    { icon: Calendar, label: 'Discovered', value: '1885 by Dr Daniel Salmon' },
    { icon: MapPin, label: 'Found In', value: 'Raw meat, eggs, dairy products' },
    { icon: Eye, label: 'Appearance', value: 'Rod-shaped with flagella' },
    { icon: AlertTriangle, label: 'Serotypes', value: 'Over 2,500 different types' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="p-8 glass-card border-primary/30">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary text-glow-sm">
                Quick Facts
              </Badge>
              <h3 className="text-3xl font-bold text-primary text-glow">What is Salmonella?</h3>
              <p className="text-lg leading-relaxed">
                Salmonella is a type of <span className="text-primary font-semibold">bacterium</span> - a single-celled living organism. 
                It infects the intestines and releases <span className="text-primary font-semibold">toxins</span> that make you sick.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {facts.map((fact, index) => (
            <Card
              key={fact.label}
              data-testid={`fact-${fact.label.toLowerCase().replace(' ', '-')}`}
              className="p-4 glass-card hover-elevate active-elevate-2 group transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="text-base font-semibold">{fact.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
