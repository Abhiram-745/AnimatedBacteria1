import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function PathogenComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <Card className="p-8 glass-card hover-elevate active-elevate-2 transition-all" data-testid="card-tmv">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-secondary text-glow-sm">TMV (Virus)</h3>
          <div className="space-y-3 text-base">
            <p className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Affects plants (especially tobacco)</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Damages leaves and stops photosynthesis</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Not a living organism</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Cannot reproduce on its own</span>
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8 glass-card hover-elevate active-elevate-2 transition-all relative" data-testid="card-salmonella">
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-primary text-glow-sm">Salmonella (Bacterium)</h3>
          <div className="space-y-3 text-base">
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Affects humans and animals</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Causes intestinal infection</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Living single-celled organism</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Can reproduce independently</span>
            </p>
          </div>
        </div>
      </Card>

      <div className="md:col-span-2 mt-8">
        <Card className="p-6 bg-accent/30 border-primary/20">
          <p className="text-center text-lg">
            <span className="font-bold text-primary">Transition: </span>
            Moving from <span className="text-secondary">plant viruses</span> to <span className="text-primary">human bacteria</span>
          </p>
        </Card>
      </div>
    </div>
  );
}
