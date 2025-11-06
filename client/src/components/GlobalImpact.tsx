import { Card } from '@/components/ui/card';
import { Globe, Users, TrendingDown, Shield } from 'lucide-react';
import mapImage from '@assets/generated_images/Global_impact_infection_map_069c936d.png';

const stats = [
  { icon: Users, label: 'Annual Infections', value: '~90 Million', color: 'text-chart-3' },
  { icon: Globe, label: 'Most Affected', value: 'Areas with poor sanitation', color: 'text-secondary' },
  { icon: TrendingDown, label: 'Outbreaks', value: 'Often from contaminated eggs', color: 'text-chart-4' },
  { icon: Shield, label: 'Solution', value: 'Better food safety laws', color: 'text-primary' },
];

export default function GlobalImpact() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Card className="p-8 glass-card overflow-hidden relative group" data-testid="global-map-card">
        <div className="relative z-10 space-y-6">
          <h3 className="text-3xl font-bold text-primary text-center">
            Worldwide Impact
          </h3>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={mapImage} 
              alt="Global infection map" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
            className="p-6 glass-card hover-elevate active-elevate-2 group cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <div className={`p-4 bg-accent/20 rounded-lg ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>
              <div>
                <p className={`text-3xl font-black ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
