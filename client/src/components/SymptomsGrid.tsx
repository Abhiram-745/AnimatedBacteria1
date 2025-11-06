import { Card } from '@/components/ui/card';
import { Thermometer, ActivitySquare, Droplet, AlertCircle } from 'lucide-react';

const symptoms = [
  {
    icon: Thermometer,
    name: 'Fever',
    description: 'Immune system fighting infection',
    duration: '1-3 days',
    color: 'text-chart-3',
  },
  {
    icon: ActivitySquare,
    name: 'Stomach Cramps',
    description: 'Intestinal inflammation',
    duration: '2-7 days',
    color: 'text-primary',
  },
  {
    icon: Droplet,
    name: 'Vomiting',
    description: 'Body expelling toxins',
    duration: '1-2 days',
    color: 'text-secondary',
  },
  {
    icon: AlertCircle,
    name: 'Diarrhoea',
    description: 'Intestinal damage from toxins',
    duration: '2-7 days',
    color: 'text-chart-4',
  },
];

export default function SymptomsGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {symptoms.map((symptom, index) => (
          <Card
            key={symptom.name}
            data-testid={`symptom-${symptom.name.toLowerCase().replace(' ', '-')}`}
            className="p-8 glass-card hover-elevate active-elevate-2 group cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-6">
              <div className={`p-4 bg-accent/20 rounded-lg ${symptom.color} group-hover:scale-110 group-hover:animate-pulse-glow transition-all`}>
                <symptom.icon className="w-10 h-10" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className={`text-2xl font-bold ${symptom.color} text-glow-sm`}>
                  {symptom.name}
                </h3>
                <p className="text-base text-foreground/90">{symptom.description}</p>
                <p className="text-sm text-muted-foreground">
                  Duration: <span className="font-semibold">{symptom.duration}</span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-destructive/10 border-destructive/30">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-lg text-destructive mb-2">Risk Groups</p>
            <p className="text-base">
              Children, elderly, and immunocompromised individuals are at higher risk of severe dehydration
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
