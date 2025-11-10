
import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Check, X, ChefHat, Thermometer, Scissors, Refrigerator } from 'lucide-react';
import preventionImage from '@assets/generated_images/Food_safety_glowing_icons_9cc2dce0.png';

interface Node {
  id: string;
  label: string;
  icon: any;
  content: string;
  angle: number;
  color: string;
  isDo: boolean;
}

const mindMapNodes: Node[] = [
  {
    id: 'do-cook',
    label: 'Cook Properly',
    icon: ChefHat,
    content: "Cook poultry to 75°C (165°F) to kill bacteria",
    angle: 45,
    color: 'text-primary',
    isDo: true,
  },
  {
    id: 'do-wash',
    label: 'Wash Hands',
    icon: Check,
    content: 'Wash hands with soap for 20 seconds before and after handling food',
    angle: 90,
    color: 'text-chart-3',
    isDo: true,
  },
  {
    id: 'do-separate',
    label: 'Separate Boards',
    icon: Scissors,
    content: 'Use separate chopping boards for raw meat and vegetables',
    angle: 135,
    color: 'text-primary',
    isDo: true,
  },
  {
    id: 'do-refrigerate',
    label: 'Refrigerate',
    icon: Refrigerator,
    content: 'Refrigerate food below 5°C to slow bacterial growth',
    angle: 180,
    color: 'text-chart-3',
    isDo: true,
  },
  {
    id: 'dont-wash-chicken',
    label: "Don't Wash Chicken",
    icon: X,
    content: "Don't wash raw chicken - it splashes bacteria around your kitchen",
    angle: 225,
    color: 'text-destructive',
    isDo: false,
  },
  {
    id: 'dont-raw-eggs',
    label: 'No Raw Eggs',
    icon: X,
    content: "Don't eat raw or undercooked eggs - they can harbor Salmonella",
    angle: 270,
    color: 'text-destructive',
    isDo: false,
  },
  {
    id: 'dont-cross-contaminate',
    label: 'No Cross-Contamination',
    icon: X,
    content: "Don't use same utensils for raw and cooked food without washing",
    angle: 315,
    color: 'text-destructive',
    isDo: false,
  },
  {
    id: 'dont-leave-out',
    label: "Don't Leave Out",
    icon: X,
    content: "Don't leave food out overnight - bacteria multiply rapidly at room temperature",
    angle: 0,
    color: 'text-destructive',
    isDo: false,
  },
];

export default function PreventionDosDontsMindMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const calculatePosition = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(rad - Math.PI / 2),
      y: 50 + radius * Math.sin(rad - Math.PI / 2),
    };
  };

  const renderNode = (node: Node) => {
    const isHovered = hoveredNode === node.id;
    const Icon = node.icon;
    const radius = 35;
    const pos = calculatePosition(node.angle, radius);

    // Smart positioning for info panel to avoid overlap
    const getInfoPosition = () => {
      const angle = node.angle;
      if (angle >= 315 || angle < 45) return 'top-full mt-4 left-1/2 -translate-x-1/2';
      if (angle >= 45 && angle < 135) return 'left-full ml-4 top-1/2 -translate-y-1/2';
      if (angle >= 135 && angle < 225) return 'bottom-full mb-4 left-1/2 -translate-x-1/2';
      return 'right-full mr-4 top-1/2 -translate-y-1/2';
    };

    return (
      <div key={node.id}>
        <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <line
            x1="50%"
            y1="50%"
            x2={`${pos.x}%`}
            y2={`${pos.y}%`}
            stroke="currentColor"
            strokeWidth={isHovered ? "3" : "2"}
            className={`transition-all duration-300 ${node.color} ${isHovered ? 'opacity-80' : 'opacity-40'}`}
            style={{
              filter: isHovered ? 'drop-shadow(0 0 8px currentColor)' : 'none'
            }}
          />
        </svg>

        <div
          className={`absolute cursor-pointer transition-all duration-300 cursor-scale animate-scale-in`}
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
          }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <Card className={`p-3 glass-card hover-elevate ${
            isHovered ? `ring-2 ${node.isDo ? 'ring-primary' : 'ring-destructive'} scale-110` : ''
          } w-24 h-24 transition-all duration-300`}>
            <div className="flex flex-col items-center justify-center h-full space-y-1">
              <div className={`p-2 bg-accent/20 rounded-lg ${node.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className={`text-xs font-bold text-center ${node.color} z-30 relative`}>
                {node.label}
              </p>
            </div>
          </Card>

          {isHovered && (
            <Card className={`absolute ${getInfoPosition()} p-4 glass-card max-w-xs animate-scale-in z-50 border-2 ${
              node.isDo ? 'border-primary/50' : 'border-destructive/50'
            }`}>
              <p className="text-sm leading-relaxed text-foreground">{node.content}</p>
            </Card>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Card className="relative h-[700px] glass-card overflow-hidden">
        <div className="absolute inset-0">
          {/* Central Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <img 
                src={preventionImage} 
                alt="Food Safety Prevention" 
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/50 group-hover:border-primary transition-all animate-float relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-full" />
              <div className="absolute bottom-2 left-0 right-0 text-center z-10">
                <h3 className="text-lg font-bold text-primary text-glow-sm">Prevention</h3>
              </div>
            </div>
          </div>

          {/* All nodes arranged in circle */}
          {mindMapNodes.map(node => renderNode(node))}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 glass-card border-primary/50">
          <div className="flex items-center gap-2 mb-2">
            <Check className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-primary">DO's</h4>
          </div>
          <p className="text-sm text-muted-foreground">Hover over green circles to see safe food handling practices</p>
        </Card>
        <Card className="p-4 glass-card border-destructive/50">
          <div className="flex items-center gap-2 mb-2">
            <X className="w-5 h-5 text-destructive" />
            <h4 className="font-bold text-destructive">DON'Ts</h4>
          </div>
          <p className="text-sm text-muted-foreground">Hover over red circles to see what to avoid</p>
        </Card>
      </div>
    </div>
  );
}
