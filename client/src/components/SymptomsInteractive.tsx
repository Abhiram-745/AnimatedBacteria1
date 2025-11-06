import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Thermometer, Activity, Waves, AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const symptoms = [
  {
    id: 'fever',
    name: 'Fever',
    icon: Thermometer,
    description: 'High temperature as immune system fights infection',
    duration: '2-7 days',
    color: 'text-destructive',
    details: 'Body temperature rises to 38-40°C (100-104°F). This is your immune system raising temperature to kill bacteria. Stay hydrated and rest.',
    severity: 'Moderate',
  },
  {
    id: 'cramps',
    name: 'Stomach Cramps',
    icon: Activity,
    description: 'Intense abdominal pain and cramping',
    duration: '4-7 days',
    color: 'text-chart-3',
    details: 'Caused by intestinal inflammation and muscle contractions. Bacteria damage intestinal lining, triggering pain signals. Can be very severe.',
    severity: 'Severe',
  },
  {
    id: 'diarrhea',
    name: 'Diarrhea',
    icon: Waves,
    description: 'Frequent loose or watery stools',
    duration: '4-7 days',
    color: 'text-primary',
    details: 'Intestines flush out bacteria rapidly. Can lead to dehydration - drink plenty of fluids. May contain blood in severe cases.',
    severity: 'Severe',
  },
  {
    id: 'nausea',
    name: 'Nausea & Vomiting',
    icon: AlertTriangle,
    description: 'Feeling sick and being sick',
    duration: '1-3 days',
    color: 'text-chart-4',
    details: 'Body tries to expel bacteria through vomiting. Usually occurs early in infection. Increases risk of dehydration.',
    severity: 'Moderate',
  },
  {
    id: 'onset',
    name: 'Incubation Period',
    icon: Clock,
    description: 'Time before symptoms appear',
    duration: '8-72 hours',
    color: 'text-secondary',
    details: 'Bacteria multiply in intestines before symptoms start. You can be contagious during this period without knowing you\'re infected.',
    severity: 'N/A',
  },
  {
    id: 'recovery',
    name: 'Recovery Time',
    icon: TrendingDown,
    description: 'Full recovery period',
    duration: '4-7 days',
    color: 'text-primary',
    details: 'Most people recover without treatment. Immune system clears infection naturally. Severe cases may need hospitalization and IV fluids.',
    severity: 'Varies',
  },
];

export default function SymptomsInteractive() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {symptoms.map((symptom, index) => {
          const isSelected = selected === symptom.id;
          return (
            <Card
              key={symptom.id}
              data-testid={`symptom-${symptom.id}`}
              className={`p-6 glass-card hover-elevate active-elevate-2 group cursor-pointer transition-all cursor-scale animate-scale-in ${
                isSelected ? 'md:col-span-2 lg:col-span-3 ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelected(isSelected ? null : symptom.id)}
            >
              {isSelected ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 bg-accent/20 rounded-lg ${symptom.color}`}>
                      <symptom.icon className="w-12 h-12" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-3xl font-bold ${symptom.color} text-glow-sm`}>
                          {symptom.name}
                        </h3>
                        <Badge variant="outline" className={symptom.color}>
                          {symptom.severity}
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">{symptom.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-accent/20">
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="text-xl font-bold">{symptom.duration}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/20">
                      <p className="text-sm text-muted-foreground mb-1">Detailed Information</p>
                      <p className="text-sm">{symptom.details}</p>
                    </div>
                  </div>

                  <p className="text-sm text-center text-primary italic">Click again to close</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 bg-accent/20 rounded-lg ${symptom.color} group-hover:scale-110 group-hover:animate-pulse-glow transition-all`}>
                      <symptom.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className={`text-2xl font-bold ${symptom.color}`}>
                        {symptom.name}
                      </h3>
                      <p className="text-base text-foreground/90">{symptom.description}</p>
                      <p className="text-sm text-muted-foreground">
                        Duration: <span className="font-semibold">{symptom.duration}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-primary">Click for more details</p>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
