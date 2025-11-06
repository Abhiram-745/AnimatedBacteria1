import { Card } from '@/components/ui/card';
import { Check, X, Flame, Hand, Refrigerator, Scissors } from 'lucide-react';

const doList = [
  { icon: Flame, text: 'Cook food thoroughly (above 75°C)', color: 'text-primary' },
  { icon: Hand, text: 'Wash hands before and after handling food', color: 'text-primary' },
  { icon: Refrigerator, text: 'Refrigerate leftovers within 2 hours', color: 'text-primary' },
  { icon: Scissors, text: 'Use separate cutting boards for raw meat', color: 'text-primary' },
];

const dontList = [
  { text: 'Eat raw or undercooked eggs', color: 'text-destructive' },
  { text: 'Leave food at room temperature', color: 'text-destructive' },
  { text: 'Reuse unwashed utensils or plates', color: 'text-destructive' },
  { text: 'Cross-contaminate raw and cooked foods', color: 'text-destructive' },
];

export default function PreventionGrid() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <Card className="p-8 glass-card border-primary/30" data-testid="prevention-do-card">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Check className="w-8 h-8 text-primary text-glow-sm" />
            </div>
            <h3 className="text-3xl font-bold text-primary text-glow">DO</h3>
          </div>
          <div className="space-y-4">
            {doList.map((item, index) => (
              <div
                key={index}
                data-testid={`prevention-do-${index}`}
                className="flex items-start gap-4 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
              >
                <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 mt-1`} />
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-8 glass-card border-destructive/30" data-testid="prevention-dont-card">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-destructive/10 rounded-lg">
              <X className="w-8 h-8 text-destructive text-glow-sm" />
            </div>
            <h3 className="text-3xl font-bold text-destructive text-glow">DON'T</h3>
          </div>
          <div className="space-y-4">
            {dontList.map((item, index) => (
              <div
                key={index}
                data-testid={`prevention-dont-${index}`}
                className="flex items-start gap-4 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
              >
                <X className={`w-6 h-6 ${item.color} flex-shrink-0 mt-1`} />
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="md:col-span-2">
        <Card className="p-6 bg-primary/10 border-primary/30">
          <p className="text-center text-lg">
            <span className="font-bold text-primary">Treatment: </span>
            Most recover naturally within a week. Antibiotics only for severe cases.
          </p>
        </Card>
      </div>
    </div>
  );
}
