import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export default function SectionHeader({ number, title, subtitle, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 space-y-6" data-testid={`section-header-${number}`}>
      <Badge 
        variant="outline" 
        className="text-primary border-primary text-lg px-6 py-2"
      >
        {number}
      </Badge>
      
      <div className="space-y-3">
        <h2 className="text-4xl md:text-6xl font-black gradient-text">
          {Icon && <Icon className="inline-block w-12 h-12 mr-4 mb-2" />}
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
