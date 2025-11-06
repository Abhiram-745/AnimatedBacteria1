import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, ChevronRight } from 'lucide-react';
import foodSafetyImage from '@assets/generated_images/Food_safety_glowing_icons_9cc2dce0.png';

const doList = [
  { 
    text: 'Cook poultry to 75°C (165°F)',
    details: 'Use a food thermometer. Bacteria die at this temperature. Check the thickest part of the meat.',
    importance: 'Critical',
  },
  { 
    text: 'Wash hands with soap for 20 seconds',
    details: 'Before and after handling food. Soap destroys bacterial cell membranes. Dry with clean towel.',
    importance: 'Essential',
  },
  { 
    text: 'Use separate chopping boards',
    details: 'One for raw meat, one for vegetables. Prevents cross-contamination of bacteria to ready-to-eat foods.',
    importance: 'Critical',
  },
  { 
    text: 'Refrigerate food below 5°C',
    details: 'Cold temperatures slow bacterial reproduction. Don\'t leave food at room temperature for >2 hours.',
    importance: 'Essential',
  },
];

const dontList = [
  { 
    text: 'Don\'t wash raw chicken',
    details: 'Washing spreads bacteria around kitchen via water droplets. Cooking kills bacteria effectively.',
    risk: 'High',
  },
  { 
    text: 'Don\'t eat raw or undercooked eggs',
    details: 'Eggs can contain Salmonella inside. Runny yolks may harbor live bacteria. Cook until firm.',
    risk: 'High',
  },
  { 
    text: 'Don\'t use same utensils for raw/cooked',
    details: 'Bacteria transfer from raw meat to cooked food. Always use clean utensils or wash between uses.',
    risk: 'Critical',
  },
  { 
    text: 'Don\'t leave food out overnight',
    details: 'Room temperature allows rapid bacterial growth. Refrigerate within 2 hours of cooking.',
    risk: 'High',
  },
];

export default function PreventionInteractive() {
  const [expandedDo, setExpandedDo] = useState<number | null>(null);
  const [expandedDont, setExpandedDont] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
        <img 
          src={foodSafetyImage} 
          alt="Food Safety Guidelines" 
          className="w-full h-48 object-cover rounded-lg border-2 border-primary/30"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 glass-card border-primary/30" data-testid="prevention-do-card">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary text-glow-sm">DO</h3>
            </div>
            <div className="space-y-3">
              {doList.map((item, index) => (
                <Card
                  key={index}
                  data-testid={`do-item-${index}`}
                  className={`p-4 bg-accent/20 hover-elevate active-elevate-2 cursor-pointer transition-all cursor-scale ${
                    expandedDo === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setExpandedDo(expandedDo === index ? null : index)}
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-base">{item.text}</p>
                      {expandedDo === index && (
                        <div className="mt-3 pt-3 border-t border-primary/20 space-y-2 animate-slide-up">
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                          <Badge variant="outline" className="text-primary">
                            {item.importance}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <ChevronRight className={`w-4 h-4 text-primary transition-transform ${
                      expandedDo === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-8 glass-card border-destructive/30" data-testid="prevention-dont-card">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <X className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-3xl font-bold text-destructive text-glow-sm">DON'T</h3>
            </div>
            <div className="space-y-3">
              {dontList.map((item, index) => (
                <Card
                  key={index}
                  data-testid={`dont-item-${index}`}
                  className={`p-4 bg-accent/20 hover-elevate active-elevate-2 cursor-pointer transition-all cursor-scale ${
                    expandedDont === index ? 'ring-2 ring-destructive' : ''
                  }`}
                  onClick={() => setExpandedDont(expandedDont === index ? null : index)}
                >
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-base">{item.text}</p>
                      {expandedDont === index && (
                        <div className="mt-3 pt-3 border-t border-destructive/20 space-y-2 animate-slide-up">
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                          <Badge variant="outline" className="text-destructive">
                            Risk: {item.risk}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <ChevronRight className={`w-4 h-4 text-destructive transition-transform ${
                      expandedDont === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
