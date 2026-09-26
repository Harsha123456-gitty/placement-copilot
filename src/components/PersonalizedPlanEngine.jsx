import React from 'react';
import { Sparkles, Play, Clock, CheckCircle2, RefreshCw, ArrowRight, Award } from 'lucide-react';

export default function PersonalizedPlanEngine({ assessmentData, onStartSanctuary }) {
  const recommendedTopic = assessmentData?.recommendedTopic || 'DSA Arrays — Two Pointer Technique';
  
  const dailyPlan = [
    { step: 1, duration: '5 min', title: 'Concept Revision', task: 'Review Two-Pointer Left/Right Inward Traversal Pattern', status: 'READY' },
    { step: 2, duration: '10 min', title: 'Easy Practice Problem', task: 'Two Sum II — Sorted Array (Optimized Space)', status: 'READY' },
    { step: 3, duration: '10 min', title: 'Medium Practice Problem', task: '3Sum Zero Triplet Detection', status: 'PENDING' },
    { step: 4, duration: '5 min', title: 'Mini Reassessment', task: 'Quick 2-question progress check', status: 'PENDING' },
  ];

  return (
    <div className="glass-panel p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white">Nova Personalized Daily Preparation Plan</h3>
        </div>
        <span className="badge badge-emerald flex items-center gap-1 text-[10px]">
          <RefreshCw className="w-3 h-3 text-emerald-400" /> Adaptive Difficulty Mode
        </span>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Primary Focus Topic:</span>
          <span className="text-xs font-bold text-indigo-300 font-heading">{recommendedTopic}</span>
        </div>
        <div className="text-right">
          <span className="text-[11px] text-slate-400 block">Total Session:</span>
          <span className="text-xs font-bold text-emerald-400 font-mono">30 Minutes</span>
        </div>
      </div>

      {/* Plan Steps */}
      <div className="space-y-2.5">
        {dailyPlan.map((item) => (
          <div key={item.step} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold font-mono text-xs flex items-center justify-center">
                #{item.step}
              </span>
              <div>
                <h4 className="text-xs font-bold text-white">{item.title}: <span className="font-normal text-slate-300">{item.task}</span></h4>
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-slate-500" /> {item.duration}
                </span>
              </div>
            </div>

            <span className="badge badge-indigo text-[10px]">{item.status}</span>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={() => onStartSanctuary(recommendedTopic)}
          className="btn-primary text-xs px-6 py-3 shadow-xl"
        >
          Launch Focus Sanctuary with Today's Plan <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
