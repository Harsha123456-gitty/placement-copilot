import React from 'react';
import { Calendar, CheckCircle2, Clock, Sparkles, RefreshCw, Zap } from 'lucide-react';

export default function AdaptiveRoadmap({ recalibratedTag, currentMood }) {
  const roadmapItems = [
    {
      id: 1,
      title: 'Graph Cycle Detection & Traversal',
      type: 'Target Sprint',
      duration: '15 mins',
      status: 'IN_PROGRESS',
      isRecalibrated: false,
      desc: 'Master DFS cycle detection in directed & undirected graphs.'
    },
    {
      id: 2,
      title: 'DP Space Optimization (O(N) -> O(1))',
      type: 'Interview Recalibrated',
      duration: '15 mins',
      status: recalibratedTag ? 'HIGH_PRIORITY' : 'PENDING',
      isRecalibrated: true,
      desc: 'Recalibrated priority after recent mock interview feedback!'
    },
    {
      id: 3,
      title: 'System Design: Load Balancer & Caching',
      type: 'Core Concept',
      duration: '20 mins',
      status: 'PENDING',
      isRecalibrated: false,
      desc: 'Consistent hashing and Redis eviction strategies.'
    },
    {
      id: 4,
      title: 'STAR Method Behavioral Prep',
      type: 'Soft Skills',
      duration: '10 mins',
      status: 'PENDING',
      isRecalibrated: false,
      desc: 'Structure past project conflict resolution scenarios.'
    }
  ];

  return (
    <div className="glass-panel p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">Adaptive Preparation Roadmap</h3>
        </div>
        <span className="badge badge-indigo flex items-center gap-1">
          <RefreshCw className="w-3 h-3 text-indigo-400 animate-spin" /> Auto-Updating
        </span>
      </div>

      <div className="space-y-3">
        {roadmapItems.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-xl border transition-all ${
              item.isRecalibrated && recalibratedTag
                ? 'bg-purple-950/40 border-purple-500/50 shadow-lg shadow-purple-500/10'
                : item.status === 'IN_PROGRESS'
                ? 'bg-slate-800/80 border-indigo-500/40'
                : 'bg-slate-900/40 border-slate-800/80'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white">{item.title}</h4>
                  {item.isRecalibrated && (
                    <span className="badge badge-rose flex items-center gap-1 text-[10px]">
                      <Sparkles className="w-3 h-3 text-rose-400" /> Interview Learning Loop Tag
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" /> {item.duration}
                </span>
                {item.status === 'IN_PROGRESS' && (
                  <span className="badge badge-amber text-[10px]">Active Sprint</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
