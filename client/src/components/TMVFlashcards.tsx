import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Leaf, AlertCircle, Shield, TrendingUp, Info } from 'lucide-react';
import tmvImage from '@assets/generated_images/TMV_virus_glowing_illustration_b522f6b3.png';

const flashcards = [
  {
    id: 'what',
    icon: Info,
    front: 'What is TMV?',
    back: 'Tobacco Mosaic Virus is a rod-shaped virus that infects plants, especially tobacco. It\'s one of the most studied viruses in biology.',
    color: 'text-secondary',
  },
  {
    id: 'structure',
    icon: TrendingUp,
    front: 'Virus Structure',
    back: 'TMV has a cylindrical structure made of RNA wrapped in protein coat. It\'s about 300nm long and 18nm wide.',
    color: 'text-chart-3',
  },
  {
    id: 'symptoms',
    icon: AlertCircle,
    front: 'Plant Symptoms',
    back: 'Causes mosaic pattern on leaves (light and dark patches), stunted growth, and reduced crop yield. Leaves become discolored.',
    color: 'text-destructive',
  },
  {
    id: 'spread',
    icon: Leaf,
    front: 'How It Spreads',
    back: 'Spreads through contact with infected plants, contaminated tools, or insects. Very stable and can survive for years.',
    color: 'text-primary',
  },
  {
    id: 'prevention',
    icon: Shield,
    front: 'Prevention Methods',
    back: 'Use disease-free seeds, sterilize tools, remove infected plants immediately, and control insect vectors like aphids.',
    color: 'text-chart-4',
  },
  {
    id: 'comparison',
    icon: Info,
    front: 'Virus vs Bacteria',
    back: 'Unlike bacteria, viruses like TMV are NOT living. They need host cells to reproduce and are much smaller (nanometers).',
    color: 'text-secondary',
  },
];

export default function TMVFlashcards() {
  const [flipped, setFlipped] = useState<string[]>([]);

  const toggleFlip = (id: string) => {
    setFlipped(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-center mb-8">
        <div className="relative group">
          <img 
            src={tmvImage} 
            alt="TMV Virus Structure" 
            className="w-64 h-64 rounded-lg object-cover border-2 border-secondary/30 group-hover:border-secondary transition-all"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-secondary text-glow-sm">TMV Structure</h3>
            <p className="text-sm text-muted-foreground">Rod-shaped RNA virus</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.map((card) => {
          const isFlipped = flipped.includes(card.id);
          return (
            <div
              key={card.id}
              data-testid={`flashcard-${card.id}`}
              className="perspective-1000 h-64 cursor-scale"
              onClick={() => toggleFlip(card.id)}
            >
              <Card className={`relative h-full transition-all duration-500 transform-style-3d cursor-pointer hover-elevate ${
                isFlipped ? 'rotate-y-180' : ''
              }`}>
                <div className={`absolute inset-0 backface-hidden p-6 flex flex-col items-center justify-center text-center space-y-4 glass-card rounded-lg ${
                  isFlipped ? 'invisible' : 'visible'
                }`}>
                  <div className={`p-4 bg-accent/20 rounded-lg ${card.color}`}>
                    <card.icon className="w-12 h-12" />
                  </div>
                  <h3 className={`text-2xl font-bold ${card.color}`}>
                    {card.front}
                  </h3>
                  <p className="text-sm text-muted-foreground">Click to reveal</p>
                </div>
                
                <div className={`absolute inset-0 backface-hidden p-6 flex items-center justify-center text-center rotate-y-180 glass-card rounded-lg ${
                  isFlipped ? 'visible' : 'invisible'
                }`}>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">{card.back}</p>
                    <p className="text-sm text-primary">Click to flip back</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
