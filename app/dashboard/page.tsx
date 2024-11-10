'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Music4,
  Settings,
  Code2,
  ExternalLink
} from 'lucide-react';

const apps = [
  {
    name: "Analytics Pro",
    description: "Advanced data visualization and analytics platform",
    icon: BarChart3,
    color: "bg-blue-500",
    status: "Popular"
  },
  {
    name: "Schedule Master",
    description: "Intelligent calendar and scheduling solution",
    icon: Calendar,
    color: "bg-green-500",
    status: "New"
  },
  {
    name: "Chat Connect",
    description: "Real-time messaging and collaboration tool",
    icon: MessageSquare,
    color: "bg-purple-500",
    status: "Featured"
  },
  {
    name: "Music Studio",
    description: "Professional audio editing and production suite",
    icon: Music4,
    color: "bg-red-500",
    status: "Beta"
  },
  {
    name: "System Tools",
    description: "Complete system optimization and management",
    icon: Settings,
    color: "bg-orange-500",
    status: "Stable"
  },
  {
    name: "Code Editor",
    description: "Professional IDE with advanced development features",
    icon: Code2,
    color: "bg-indigo-500",
    status: "Premium"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Featured Applications
          </h1>
          <p className="text-zinc-400">
            Discover and launch your favorite applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Card key={app.name} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-xl hover:border-zinc-700 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${app.color}`}>
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                    {app.status}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{app.name}</h3>
                  <p className="text-zinc-400 mt-1">{app.description}</p>
                </div>
                <Button className="w-full gap-2">
                  Launch App <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}