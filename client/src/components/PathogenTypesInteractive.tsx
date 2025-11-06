import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bug, Dna, Flower, Droplet, X, Info } from 'lucide-react';

const pathogens = [
  {
    type: 'Bacteria',
    icon: Bug,
    example: 'Salmonella',
    description: 'Single-celled living organisms',
    color: 'text-primary',
    details: {
      characteristics: 'Living prokaryotic cells that can reproduce independently',
      size: '0.5-5 micrometers',
      diseases: 'Food poisoning, tuberculosis, cholera, pneumonia',
      treatment: 'Antibiotics (when necessary)',
      prevention: 'Hygiene, vaccination, proper food handling',
    }
  },
  {
    type: 'Viruses',
    icon: Dna,
    example: 'Measles',
    description: 'Non-living genetic material',
    color: 'text-secondary',
    details: {
      characteristics: 'Non-living particles requiring host cells to reproduce',
      size: '20-400 nanometers',
      diseases: 'Measles, flu, COVID-19, HIV, common cold',
      treatment: 'Antivirals (limited), mainly supportive care',
      prevention: 'Vaccination, hygiene, avoiding infected individuals',
    }
  },
  {
    type: 'Fungi',
    icon: Flower,
    example: 'Rose Black Spot',
    description: 'Multi-cellular organisms',
    color: 'text-chart-3',
    details: {
      characteristics: 'Eukaryotic organisms, can be single or multi-celled',
      size: 'Varies widely (microscopic to meters)',
      diseases: 'Athlete\'s foot, ringworm, rose black spot, thrush',
      treatment: 'Antifungal medications',
      prevention: 'Keeping areas dry, good hygiene, plant care',
    }
  },
  {
    type: 'Protists',
    icon: Droplet,
    example: 'Malaria',
    description: 'Single-celled eukaryotes',
    color: 'text-chart-4',
    details: {
      characteristics: 'Diverse group of eukaryotic microorganisms',
      size: '10-100 micrometers',
      diseases: 'Malaria, sleeping sickness, dysentery',
      treatment: 'Antimalarial drugs, antiprotozoal medications',
      prevention: 'Mosquito nets, insect repellent, clean water',
    }
  },
];

export default function PathogenTypesInteractive() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pathogens.map((pathogen, index) => (
        <Card
          key={pathogen.type}
          data-testid={`card-pathogen-${pathogen.type.toLowerCase()}`}
          className={`glass-card hover-elevate active-elevate-2 group cursor-pointer transition-all ${
            expanded === pathogen.type ? 'md:col-span-2 lg:col-span-4' : 'p-6'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {expanded === pathogen.type ? (
            <div className="p-8 space-y-6 animate-scale-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`${pathogen.color} p-4 rounded-lg bg-accent/20`}>
                    <pathogen.icon className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold ${pathogen.color}`}>{pathogen.type}</h3>
                    <p className="text-muted-foreground">Example: {pathogen.example}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setExpanded(null)}
                  data-testid={`button-close-${pathogen.type.toLowerCase()}`}
                  className="cursor-scale"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-accent/20">
                    <p className="font-bold text-sm text-muted-foreground mb-1">Characteristics</p>
                    <p>{pathogen.details.characteristics}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/20">
                    <p className="font-bold text-sm text-muted-foreground mb-1">Size</p>
                    <p>{pathogen.details.size}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/20">
                    <p className="font-bold text-sm text-muted-foreground mb-1">Common Diseases</p>
                    <p>{pathogen.details.diseases}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-accent/20">
                    <p className="font-bold text-sm text-muted-foreground mb-1">Treatment</p>
                    <p>{pathogen.details.treatment}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/20">
                    <p className="font-bold text-sm text-muted-foreground mb-1">Prevention</p>
                    <p>{pathogen.details.prevention}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setExpanded(pathogen.type)}
              data-testid={`button-expand-${pathogen.type.toLowerCase()}`}
              className="w-full cursor-scale"
            >
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <div className={`${pathogen.color} p-4 rounded-lg bg-accent/20 group-hover:scale-110 transition-transform`}>
                    <pathogen.icon className="w-12 h-12" />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${pathogen.color}`}>
                  {pathogen.type}
                </h3>
                <p className="text-sm text-muted-foreground">{pathogen.description}</p>
                <p className="text-base font-medium">
                  Example: <span className={pathogen.color}>{pathogen.example}</span>
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                  <Info className="w-4 h-4" />
                  <span>Click for details</span>
                </div>
              </div>
            </button>
          )}
        </Card>
      ))}
    </div>
  );
}
