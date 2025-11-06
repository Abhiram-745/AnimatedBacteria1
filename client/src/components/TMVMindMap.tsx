
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Leaf, AlertCircle, Shield, TrendingUp, Info, Dna } from 'lucide-react';
import tmvImage from '@assets/generated_images/TMV_virus_glowing_illustration_b522f6b3.png';

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
  label: 'TMV',
  icon: Leaf,
  content: 'Tobacco Mosaic Virus',
  x: 50,
  y: 50,
  color: 'text-secondary',
  children: [
    {
      id: 'what',
      label: 'What is TMV?',
      icon: Info,
      content: 'Rod-shaped virus that infects plants, especially tobacco. One of the most studied viruses in biology.',
      x: 20,
      y: 20,
      color: 'text-primary',
      children: [
        {
          id: 'discovery',
          label: 'First Virus Discovered',
          icon: TrendingUp,
          content: 'TMV was the first virus ever discovered in 1892 by Dmitri Ivanovsky.',
          x: 10,
          y: 10,
          color: 'text-chart-3',
        }
      ]
    },
    {
      id: 'structure',
      label: 'Structure',
      icon: Dna,
      content: 'Cylindrical structure: 300nm long, 18nm wide. RNA wrapped in protein coat.',
      x: 80,
      y: 20,
      color: 'text-chart-3',
      children: [
        {
          id: 'rna',
          label: 'RNA Genome',
          icon: Dna,
          content: 'Contains single-stranded RNA that codes for viral proteins.',
          x: 90,
          y: 10,
          color: 'text-chart-4',
        }
      ]
    },
    {
      id: 'symptoms',
      label: 'Plant Symptoms',
      icon: AlertCircle,
      content: 'Mosaic pattern on leaves, stunted growth, reduced crop yield.',
      x: 80,
      y: 80,
      color: 'text-destructive',
    },
    {
      id: 'spread',
      label: 'Spread',
      icon: TrendingUp,
      content: 'Contact with infected plants, contaminated tools, or insects. Very stable.',
      x: 20,
      y: 80,
      color: 'text-primary',
      children: [
        {
          id: 'prevention',
          label: 'Prevention',
          icon: Shield,
          content: 'Use disease-free seeds, sterilize tools, remove infected plants, control aphids.',
          x: 10,
          y: 90,
          color: 'text-chart-4',
        }
      ]
    }
  ]
};

export default function TMVMindMap() {
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
            src={tmvImage} 
            alt="TMV Virus Structure" 
            className="w-64 h-64 rounded-lg object-cover border-2 border-secondary/30 group-hover:border-secondary transition-all animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-secondary text-glow-sm">TMV Structure</h3>
            <p className="text-sm text-muted-foreground">Rod-shaped RNA virus</p>
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
