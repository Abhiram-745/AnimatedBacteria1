import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, TrendingDown, Shield, MapPin, AlertTriangle } from 'lucide-react';
import mapImage from '@assets/generated_images/Global_impact_infection_map_069c936d.png';

const regions = [
  {
    name: 'Africa',
    infections: '~20 million/year',
    severity: 'High',
    factors: 'Limited refrigeration, water quality issues, lack of healthcare access',
    color: 'text-chart-3',
    position: { top: '45%', left: '50%' },
  },
  {
    name: 'South Asia',
    infections: '~15 million/year',
    severity: 'High',
    factors: 'High population density, food safety challenges, climate factors',
    color: 'text-chart-3',
    position: { top: '40%', left: '70%' },
  },
  {
    name: 'Southeast Asia',
    infections: '~12 million/year',
    severity: 'Medium-High',
    factors: 'Street food culture, tropical climate, varied food safety standards',
    color: 'text-destructive',
    position: { top: '50%', left: '75%' },
  },
  {
    name: 'Latin America',
    infections: '~8 million/year',
    severity: 'Medium',
    factors: 'Variable food safety regulations, climate, healthcare access',
    color: 'text-destructive',
    position: { top: '55%', left: '25%' },
  },
  {
    name: 'Europe',
    infections: '~5 million/year',
    severity: 'Low-Medium',
    factors: 'Strong food safety laws, good refrigeration, healthcare access',
    color: 'text-primary',
    position: { top: '30%', left: '48%' },
  },
  {
    name: 'North America',
    infections: '~4 million/year',
    severity: 'Low-Medium',
    factors: 'Strict regulations, good infrastructure, vaccination programs',
    color: 'text-primary',
    position: { top: '25%', left: '18%' },
  },
];

interface Stat {
  icon: any;
  label: string;
  value: string;
  color: string;
  details: string;
  subPoints?: { label: string; description: string }[];
}

const stats: Stat[] = [
  {
    icon: Users,
    label: 'Annual Infections',
    value: '~90 Million',
    color: 'text-chart-3',
    details: 'Mostly occurs in regions with limited refrigeration and unsafe water.',
    subPoints: [
      { label: 'Africa', description: 'Highest burden due to water quality issues' },
      { label: 'South Asia', description: 'High population density increases spread' },
      { label: 'Latin America', description: 'Variable food safety regulations' }
    ]
  },
  {
    icon: Globe,
    label: 'Most Affected',
    value: 'Areas with poor sanitation',
    color: 'text-secondary',
    details: 'Higher risk due to poor sewage systems and lack of clean water.',
    subPoints: [
      { label: 'Sanitation', description: 'Inadequate sewage treatment' },
      { label: 'Water Supply', description: 'Contaminated drinking water sources' },
      { label: 'Healthcare', description: 'Limited access to treatment' }
    ]
  },
  {
    icon: TrendingDown,
    label: 'Outbreaks',
    value: 'Often from contaminated eggs',
    color: 'text-chart-4',
    details: 'Several major outbreaks have been linked to egg distribution chains.',
    subPoints: [
      { label: 'Processing', description: 'Contamination during egg handling' },
      { label: 'Storage', description: 'Improper temperature control' },
      { label: 'Distribution', description: 'Long supply chains increase risk' }
    ]
  },
  {
    icon: Shield,
    label: 'Solution',
    value: 'Better food safety laws',
    color: 'text-primary',
    details: 'Vaccinated poultry and strict hygiene checks dramatically reduce cases.',
    subPoints: [
      { label: 'Vaccination', description: 'UK poultry vaccination programs' },
      { label: 'Regulations', description: 'Mandatory food safety standards' },
      { label: 'Inspections', description: 'Regular health and safety audits' }
    ]
  },
];

export default function InteractiveGlobalMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [expandedStat, setExpandedStat] = useState<string | null>(null);

  const activeRegion = regions.find(r => r.name === selectedRegion);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Card className="p-8 glass-card overflow-hidden relative group" data-testid="global-map-card">
        <div className="relative z-10 space-y-6">
          <h3 className="text-3xl font-bold text-primary text-center">
            Worldwide Impact - Click Regions
          </h3>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={mapImage} 
              alt="Global infection map" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0">
              {regions.map((region) => (
                <button
                  key={region.name}
                  data-testid={`region-${region.name.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
                  className="absolute cursor-scale group/pin"
                  style={region.position}
                >
                  <div className={`relative ${selectedRegion === region.name ? 'scale-150' : 'scale-100'} transition-transform`}>
                    <MapPin className={`w-8 h-8 ${region.color} animate-bounce-slow drop-shadow-lg`} />
                    {selectedRegion === region.name && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>

          {activeRegion && (
            <Card className="p-6 bg-accent/40 border-primary/30 animate-slide-up" data-testid="region-details">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-6 h-6 ${activeRegion.color}`} />
                  <h4 className="text-2xl font-bold">{activeRegion.name}</h4>
                  <Badge variant="outline" className={`${activeRegion.color}`}>
                    {activeRegion.severity} Risk
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50">
                    <p className="text-sm text-muted-foreground mb-1">Annual Infections</p>
                    <p className="text-xl font-bold">{activeRegion.infections}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50">
                    <p className="text-sm text-muted-foreground mb-1">Key Factors</p>
                    <p className="text-sm">{activeRegion.factors}</p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const isExpanded = expandedStat === stat.label;
          return (
            <div key={stat.label} className={`${
              isExpanded ? 'md:col-span-2 lg:col-span-4' : ''
            } transition-all duration-300`}>
              <Card
                data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
                onClick={() => setExpandedStat(isExpanded ? null : stat.label)}
                className={`p-6 glass-card hover-elevate active-elevate-2 group cursor-pointer animate-scale-in cursor-scale transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-primary animate-pulse-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {!isExpanded ? (
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
                    <p className="text-xs text-primary">Click to expand</p>
                  </div>
                ) : (
                  <div className="space-y-6 animate-scale-in">
                    <div className="flex items-start gap-4">
                      <div className={`p-4 bg-accent/20 rounded-lg ${stat.color} flex-shrink-0`}>
                        <stat.icon className="w-10 h-10" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</h4>
                        <p className="text-base font-semibold mb-2">{stat.label}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{stat.details}</p>
                      </div>
                    </div>

                    {stat.subPoints && stat.subPoints.length > 0 && (
                      <div className="relative">
                        <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                          {stat.subPoints.map((_, idx) => {
                            const angle = (idx * 360) / stat.subPoints!.length;
                            const rad = (angle * Math.PI) / 180;
                            const startX = 15;
                            const startY = 50;
                            const endX = 50 + 35 * Math.cos(rad - Math.PI / 2);
                            const endY = 50 + 35 * Math.sin(rad - Math.PI / 2);
                            return (
                              <line
                                key={idx}
                                x1={`${startX}%`}
                                y1={`${startY}%`}
                                x2={`${endX}%`}
                                y2={`${endY}%`}
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`${stat.color} opacity-40 animate-scale-in`}
                                style={{ animationDelay: `${idx * 0.1}s` }}
                              />
                            );
                          })}
                        </svg>

                        <div className="grid md:grid-cols-3 gap-4 mt-4 relative z-10">
                          {stat.subPoints.map((point, idx) => (
                            <Card
                              key={idx}
                              className="p-4 bg-accent/30 border-primary/20 animate-slide-up"
                              style={{ animationDelay: `${idx * 0.15}s` }}
                            >
                              <p className={`font-bold text-sm mb-2 ${stat.color}`}>{point.label}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-center text-primary">Click again to collapse</p>
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
