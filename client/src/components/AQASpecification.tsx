import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Check } from 'lucide-react';

const learningPoints = [
  'Salmonella bacteria cause food poisoning',
  'Symptoms are caused by toxins produced by the bacteria',
  'Spread through eating contaminated food',
  'Prevention through vaccination of poultry and hygiene practices',
];

export default function AQASpecification() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 glass-card border-primary/30" data-testid="aqa-spec-card">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary text-glow">AQA GCSE Biology</h3>
              <p className="text-lg text-muted-foreground">Official Specification Summary</p>
            </div>
          </div>

          <div className="space-y-4">
            <Badge variant="outline" className="text-secondary border-secondary">
              Key Learning Points
            </Badge>
            <div className="space-y-3">
              {learningPoints.map((point, index) => (
                <div
                  key={index}
                  data-testid={`learning-point-${index}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6 bg-accent/30 border-primary/20">
            <p className="font-bold text-lg mb-3 text-primary">Example Exam Question:</p>
            <p className="text-base mb-4">
              "Explain how Salmonella bacteria cause symptoms of food poisoning in humans."
            </p>
            <p className="text-sm text-muted-foreground italic">
              Answer should include: bacteria reproduce, release toxins, toxins damage intestinal cells, 
              immune response causes fever and inflammation
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
