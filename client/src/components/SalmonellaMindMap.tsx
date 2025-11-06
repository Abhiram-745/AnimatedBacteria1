
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Bug, FlaskConical, Dna, Target, Activity, Pill, Thermometer, AlertTriangle } from 'lucide-react';
import salmonellaImage from '@assets/generated_images/Salmonella_bacteria_glowing_microscopy_f48f55b0.png';

interface Node {
  id: string;
  label: string;
  icon: any;
  content: string;
  x: number;
  y: number;
  color: string;
  children?: Node[];
}

const mindMapData: Node = {
  id: 'root',
  label: 'Salmonella',
  icon: Bug,
  content: 'Salmonella Bacteria',
  x: 50,
  y: 50,
  color: 'text-primary',
  children: [
    {
      id: 'structure',
      label: 'Structure',
      icon: Bug,
      content: 'Living prokaryotic cell: 0.5-5 micrometers with cell wall, membrane, cytoplasm, DNA.',
      x: 20,
      y: 20,
      color: 'text-primary',
      children: [
        {
          id: 'flagella',
          label: 'Flagella',
          icon: Activity,
          content: 'Whip-like tails that spin like propellers for movement through liquids.',
          x: 10,
          y: 10,
          color: 'text-chart-3',
        }
      ]
    },
    {
      id: 'reproduction',
      label: 'Reproduction',
      icon: Dna,
      content: 'Binary fission - splits into two identical cells every 20 minutes!',
      x: 80,
      y: 20,
      color: 'text-secondary',
      children: [
        {
          id: 'growth',
          label: 'Rapid Growth',
          icon: Activity,
          content: 'One bacterium can become millions in just hours under ideal conditions.',
          x: 90,
          y: 10,
          color: 'text-chart-4',
        }
      ]
    },
    {
      id: 'toxins',
      label: 'Toxins',
      icon: FlaskConical,
      content: 'Releases endotoxins and exotoxins that damage intestinal cells.',
      x: 80,
      y: 80,
      color: 'text-destructive',
      children: [
        {
          id: 'inflammation',
          label: 'Inflammation',
          icon: AlertTriangle,
          content: 'Toxins trigger immune response causing inflammation and symptoms.',
          x: 90,
          y: 90,
          color: 'text-destructive',
        }
      ]
    },
    {
      id: 'target',
      label: 'Target',
      icon: Target,
      content: 'Invades intestinal lining and multiplies in the small intestine.',
      x: 20,
      y: 80,
      color: 'text-chart-4',
      children: [
        {
          id: 'symptoms',
          label: 'Symptoms',
          icon: Thermometer,
          content: 'Fever, cramps, diarrhea, vomiting after 8-72 hours.',
          x: 10,
          y: 90,
          color: 'text-destructive',
        }
      ]
    },
    {
      id: 'treatment',
      label: 'Treatment',
      icon: Pill,
      content: 'Most cases resolve naturally. Severe infections need antibiotics.',
      x: 50,
      y: 10,
      color: 'text-chart-3',
    }
  ]
};

export default function SalmonellaMindMap() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root']));
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
    setSelectedNode(nodeId);
  };

  const renderNode = (node: Node, parentX?: number, parentY?: number) => {
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNode === node.id;
    const Icon = node.icon;

    return (
      <div key={node.id}>
        {parentX !== undefined && parentY !== undefined && (
          <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <line
              x1={`${parentX}%`}
              y1={`${parentY}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-all duration-500 ${node.color} opacity-30`}
              strokeDasharray={isExpanded ? "0" : "5,5"}
            />
          </svg>
        )}
        
        <div
          className={`absolute cursor-pointer transition-all duration-500 cursor-scale ${
            isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
          onClick={() => toggleNode(node.id)}
        >
          <Card className={`p-4 glass-card hover-elevate ${
            isSelected ? 'ring-2 ring-primary' : ''
          } ${node.id === 'root' ? 'w-32 h-32' : 'w-24 h-24'}`}>
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <div className={`p-2 bg-accent/20 rounded-lg ${node.color}`}>
                <Icon className={node.id === 'root' ? 'w-8 h-8' : 'w-6 h-6'} />
              </div>
              <p className={`text-xs font-bold text-center ${node.color}`}>
                {node.label}
              </p>
            </div>
          </Card>
          
          {isSelected && node.id !== 'root' && (
            <Card className="absolute top-full mt-2 p-3 glass-card max-w-xs animate-slide-up z-20 left-1/2 -translate-x-1/2">
              <p className="text-sm">{node.content}</p>
            </Card>
          )}
        </div>

        {node.children && isExpanded && node.children.map(child => renderNode(child, node.x, node.y))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-center mb-8">
        <div className="relative group">
          <img 
            src={salmonellaImage} 
            alt="Salmonella Bacteria" 
            className="w-64 h-64 rounded-lg object-cover border-2 border-primary/30 group-hover:border-primary transition-all animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-primary text-glow-sm">Salmonella Bacterium</h3>
            <p className="text-sm text-muted-foreground">Rod-shaped bacteria with flagella</p>
          </div>
        </div>
      </div>

      <Card className="relative h-[600px] glass-card overflow-hidden">
        <div className="absolute inset-0">
          {renderNode(mindMapData)}
        </div>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        Click on circles to expand and explore. Click again to collapse.
      </p>
    </div>
  );
}
