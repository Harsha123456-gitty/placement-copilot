import React from 'react';
import { BarChart3, TrendingUp, Target, Award, AlertCircle, CheckCircle2, Clock, HelpCircle, Activity } from 'lucide-react';

export default function PlacementDashboard({ assessmentData, improvementData }) {
  const score = assessmentData?.overall || 64;
  const dsa = assessmentData?.dsa || 58;
  const sql = assessmentData?.sql || 72;
  const aptitude = assessmentData?.aptitude || 64;
  const comm = assessmentData?.communication || 46;

  return (
    <div className="glass-panel p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2 font-heading">
            <BarChart3 className="w-5 h-5 text-indigo-400" /> Placement Readiness Central Dashboard
          </h2>
          <p className="text-xs text-slate-400">
            Real-time skill metrics calculated from assessment & practice performance.
          </p>
        </div>

        <div className="text-right">
          <span className="text-2xl font-black text-white font-heading">{score}%</span>
          <span className="text-[10px] text-emerald-400 font-medium block">Overall Readiness Score</span>
        </div>
      </div>

      {/* Main Readiness Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Breakdown Card */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h3 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-indigo-400" /> Skill Category Breakdown
          </h3>

          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">DSA / Coding</span>
                <span className="font-mono font-bold text-indigo-400">{dsa}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${dsa}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">SQL / Databases</span>
                <span className="font-mono font-bold text-cyan-400">{sql}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${sql}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Aptitude</span>
                <span className="font-mono font-bold text-emerald-400">{aptitude}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${aptitude}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Communication</span>
                <span className="font-mono font-bold text-amber-400">{comm}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${comm}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses Card */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h3 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-emerald-400" /> Sub-Topic Analytics
          </h3>

          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex justify-between items-center">
              <span className="text-emerald-300">SQL Joins & Grouping</span>
              <span className="badge badge-emerald text-[10px]">Strength (82%)</span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex justify-between items-center">
              <span className="text-emerald-300">DSA Arrays Two-Pointers</span>
              <span className="badge badge-emerald text-[10px]">Strength (75%)</span>
            </div>
            <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/30 flex justify-between items-center">
              <span className="text-rose-300">DSA Graph DFS Cycle Detection</span>
              <span className="badge badge-rose text-[10px]">Weakness (38%)</span>
            </div>
            <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/30 flex justify-between items-center">
              <span className="text-rose-300">STAR Behavioral Format</span>
              <span className="badge badge-rose text-[10px]">Weakness (46%)</span>
            </div>
          </div>
        </div>

        {/* Recent Improvement & Focus Stats */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h3 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-amber-400" /> Focus & Improvement Metrics
          </h3>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
              <span className="text-indigo-200">Recent Accuracy Gain</span>
              <span className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1">
                +24% <TrendingUp className="w-3 h-3 text-emerald-400" />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center pt-1">
              <div className="p-2 rounded-lg bg-slate-800/80">
                <span className="text-[10px] text-slate-400 block">Questions Solved</span>
                <span className="text-sm font-bold text-white font-mono">14</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-800/80">
                <span className="text-[10px] text-slate-400 block">Hints Used</span>
                <span className="text-sm font-bold text-amber-400 font-mono">2</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-slate-800/80 text-center">
              <span className="text-[10px] text-slate-400 block">Total Focus Sprint Time</span>
              <span className="text-xs font-bold text-cyan-400 font-mono">1 hr 45 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
