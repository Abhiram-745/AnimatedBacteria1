
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Leaf, AlertCircle, Shield, TrendingUp, Info, Dna, Microscope, Bug } from 'lucide-react';
import tmvImage from '@assets/generated_images/TMV_virus_glowing_illustration_b522f6b3.png';

interface Node {
  id: string;
  label: string;
  icon: any;
  content: string;
  angle: number;
  color: string;
  children?: Node[];
}

const mindMapNodes: Node[] = [
  {
    id: 'what',
    label: 'What is TMV?',
    icon: Info,
    content: 'Rod-shaped virus that infects plants, especially tobacco. One of the most studied viruses in biology.',
    angle: 0,
    color: 'text-primary',
    children: [
      {
        id: 'discovery',
        label: 'First Virus',
        icon: TrendingUp,
        content: 'TMV was the first virus ever discovered in 1892 by Dmitri Ivanovsky.',
        angle: 0,
        color: 'text-chart-3',
      }
    ]
  },
  {
    id: 'structure',
    label: 'Structure',
    icon: Dna,
    content: 'Cylindrical structure: 300nm long, 18nm wide. RNA wrapped in protein coat.',
    angle: 60,
    color: 'text-chart-3',
    children: [
      {
        id: 'rna',
        label: 'RNA Genome',
        icon: Microscope,
        content: 'Contains single-stranded RNA that codes for viral proteins.',
        angle: 60,
        color: 'text-chart-4',
      }
    ]
  },
  {
    id: 'symptoms',
    label: 'Plant Symptoms',
    icon: AlertCircle,
    content: 'Mosaic pattern on leaves, stunted growth, reduced crop yield.',
    angle: 120,
    color: 'text-destructive',
  },
  {
    id: 'spread',
    label: 'Spread',
    icon: TrendingUp,
    content: 'Contact with infected plants, contaminated tools, or insects. Very stable.',
    angle: 180,
    color: 'text-primary',
    children: [
      {
        id: 'prevention',
        label: 'Prevention',
        icon: Shield,
        content: 'Use disease-free seeds, sterilize tools, remove infected plants, control aphids.',
        angle: 180,
        color: 'text-chart-4',
      }
    ]
  },
  {
    id: 'impact',
    label: 'Crop Impact',
    icon: Bug,
    content: 'Causes significant agricultural losses worldwide, especially in tobacco farming.',
    angle: 240,
    color: 'text-secondary',
  },
  {
    id: 'research',
    label: 'Research Value',
    icon: Leaf,
    content: 'Model organism for studying virus structure and plant-virus interactions.',
    angle: 300,
    color: 'text-chart-3',
  }
];

export default function TMVMindMap() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
      setSelectedNode(null);
    } else {
      newExpanded.add(nodeId);
      setSelectedNode(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const calculatePosition = (angle: number, radius: number, isChild = false) => {
    const rad = (angle * Math.PI) / 180;
    const actualRadius = isChild ? radius + 120 : radius;
    return {
      x: 50 + actualRadius * Math.cos(rad - Math.PI / 2),
      y: 50 + actualRadius * Math.sin(rad - Math.PI / 2),
    };
  };

  const renderNode = (node: Node, isChild = false) => {
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNode === node.id;
    const Icon = node.icon;
    const radius = isChild ? 25 : 35;
    const pos = calculatePosition(node.angle, radius, isChild);

    return (
      <div key={node.id}>
        <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <line
            x1="50%"
            y1="50%"
            x2={`${pos.x}%`}
            y2={`${pos.y}%`}
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-all duration-500 ${node.color} opacity-30`}
            strokeDasharray={isExpanded ? "0" : "5,5"}
          />
        </svg>
        
        <div
          className={`absolute cursor-pointer transition-all duration-500 cursor-scale animate-scale-in`}
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
          onClick={() => toggleNode(node.id)}
        >
          <Card className={`p-3 glass-card hover-elevate ${
            isSelected ? 'ring-2 ring-secondary scale-110' : ''
          } ${isChild ? 'w-20 h-20' : 'w-24 h-24'} transition-all duration-300`}>
            <div className="flex flex-col items-center justify-center h-full space-y-1">
              <div className={`p-2 bg-accent/20 rounded-lg ${node.color}`}>
                <Icon className={isChild ? 'w-5 h-5' : 'w-6 h-6'} />
              </div>
              <p className={`${isChild ? 'text-[10px]' : 'text-xs'} font-bold text-center ${node.color}`}>
                {node.label}
              </p>
            </div>
          </Card>
          
          {isSelected && (
            <Card className="absolute top-full mt-2 p-3 glass-card max-w-xs animate-slide-up z-20 left-1/2 -translate-x-1/2">
              <p className="text-sm">{node.content}</p>
            </Card>
          )}
        </div>

        {node.children && isExpanded && node.children.map(child => renderNode(child, true))}
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
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse" />
              <img 
                src={tmvImage} 
                alt="TMV Virus Structure" 
                className="w-48 h-48 rounded-full object-cover border-4 border-secondary/50 group-hover:border-secondary transition-all animate-float relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-full" />
              <div className="absolute bottom-2 left-0 right-0 text-center z-10">
                <h3 className="text-lg font-bold text-secondary text-glow-sm">TMV</h3>
              </div>
            </div>
          </div>

          {/* All nodes arranged in circle */}
          {mindMapNodes.map(node => renderNode(node))}
        </div>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        Click on circles to expand and see details. Click again to collapse.
      </p>
    </div>
  );
}
