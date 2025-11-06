import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bug, FlaskConical, Dna, Target, Activity, Pill, ChevronDown } from 'lucide-react';
import salmonellaImage from '@assets/generated_images/Salmonella_bacteria_glowing_microscopy_f48f55b0.png';

const infoBoxes = [
  {
    id: 'structure',
    icon: Bug,
    title: 'Bacterial Structure',
    summary: 'Living prokaryotic cell',
    details: 'Salmonella is a single-celled bacterium (0.5-5 micrometers). It has a cell wall, cell membrane, cytoplasm, and genetic material (DNA). Unlike viruses, bacteria are LIVING organisms.',
    color: 'text-primary',
  },
  {
    id: 'flagella',
    icon: Activity,
    title: 'Flagella Movement',
    summary: 'Whip-like tails for mobility',
    details: 'Salmonella has flagella - long protein structures that spin like propellers. This allows bacteria to move through liquids and navigate toward food sources.',
    color: 'text-chart-3',
  },
  {
    id: 'reproduction',
    icon: Dna,
    title: 'Binary Fission',
    summary: 'Reproduces by splitting',
    details: 'Bacteria reproduce independently through binary fission - one cell splits into two identical cells. In ideal conditions, this happens every 20 minutes!',
    color: 'text-secondary',
  },
  {
    id: 'toxins',
    icon: FlaskConical,
    title: 'Toxin Production',
    summary: 'Releases harmful chemicals',
    details: 'Salmonella releases endotoxins and exotoxins that damage intestinal cells. These toxins cause inflammation, trigger immune response, and lead to symptoms.',
    color: 'text-destructive',
  },
  {
    id: 'target',
    icon: Target,
    title: 'Targets Intestines',
    summary: 'Invades digestive system',
    details: 'After ingestion, bacteria survive stomach acid and invade the intestinal lining. They multiply rapidly in the small intestine, causing infection.',
    color: 'text-chart-4',
  },
  {
    id: 'antibiotics',
    icon: Pill,
    title: 'Antibiotic Treatment',
    summary: 'When needed, antibiotics work',
    details: 'Most cases resolve without antibiotics. Severe infections are treated with antibiotics that target bacterial cell walls or protein synthesis. NOT effective against viruses!',
    color: 'text-primary',
  },
];

export default function SalmonellaInfoBoxes() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpanded(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-center mb-8">
        <div className="relative group">
          <img 
            src={salmonellaImage} 
            alt="Salmonella Bacteria" 
            className="w-full max-w-md h-64 rounded-lg object-cover border-2 border-primary/30 group-hover:border-primary transition-all"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-primary text-glow">Salmonella Under Microscope</h3>
            <p className="text-sm text-muted-foreground">Rod-shaped bacteria with flagella</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoBoxes.map((box) => {
          const isExpanded = expanded.includes(box.id);
          return (
            <Card
              key={box.id}
              data-testid={`info-box-${box.id}`}
              className={`p-6 glass-card hover-elevate active-elevate-2 cursor-pointer transition-all cursor-scale ${
                isExpanded ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => toggleExpand(box.id)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 bg-accent/20 rounded-lg ${box.color} flex-shrink-0`}>
                      <box.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${box.color} mb-1`}>
                        {box.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {box.summary}
                      </Badge>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {isExpanded && (
                  <div className="pt-4 border-t border-primary/20 animate-slide-up">
                    <p className="text-base leading-relaxed">{box.details}</p>
                  </div>
                )}

                {!isExpanded && (
                  <p className="text-sm text-muted-foreground italic">
                    Click to learn more
                  </p>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
