import { Card } from '@/components/ui/card';
import { Bug, Worm, Flower, Droplet } from 'lucide-react';

const pathogens = [
  {
    type: 'Bacteria',
    icon: Bug,
    example: 'Salmonella',
    description: 'Single-celled living organisms',
    color: 'text-primary',
  },
  {
    type: 'Viruses',
    icon: Worm,
    example: 'Measles',
    description: 'Non-living genetic material',
    color: 'text-secondary',
  },
  {
    type: 'Fungi',
    icon: Flower,
    example: 'Rose Black Spot',
    description: 'Multi-cellular organisms',
    color: 'text-chart-3',
  },
  {
    type: 'Protists',
    icon: Droplet,
    example: 'Malaria',
    description: 'Single-celled eukaryotes',
    color: 'text-chart-4',
  },
];

export default function PathogenTypes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pathogens.map((pathogen, index) => (
        <Card
          key={pathogen.type}
          data-testid={`card-pathogen-${pathogen.type.toLowerCase()}`}
          className="p-6 glass-card hover-elevate active-elevate-2 group cursor-pointer transition-all"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className={`${pathogen.color} p-4 rounded-lg bg-accent/20 group-hover:scale-110 transition-transform`}>
                <pathogen.icon className="w-12 h-12 text-glow-sm" />
              </div>
            </div>
            <h3 className={`text-2xl font-bold ${pathogen.color} text-glow-sm`}>
              {pathogen.type}
            </h3>
            <p className="text-sm text-muted-foreground">{pathogen.description}</p>
            <p className="text-base font-medium">
              Example: <span className={pathogen.color}>{pathogen.example}</span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
