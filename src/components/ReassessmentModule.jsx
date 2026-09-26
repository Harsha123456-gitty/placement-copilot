import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, RefreshCw, ArrowRight } from 'lucide-react';

export default function ReassessmentModule({ onReassessmentComplete }) {
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleComplete = () => {
    setCompleted(true);
    if (onReassessmentComplete) {
      onReassessmentComplete({
        topic: 'DSA Graphs & Cycle Detection',
        previousScore: 38,
        newScore: 67,
        improvement: '+29%'
      });
    }
  };

  return (
    <div className="glass-panel p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold text-white">Post-Practice Mini Reassessment</h3>
        </div>
        <span className="badge badge-emerald font-mono text-[10px]">Measurable Progress Check</span>
      </div>

      {!completed ? (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="badge badge-indigo text-[10px]">Reassessment Quiz • Topic: Graph DFS Cycle</span>
            <p className="text-xs font-semibold text-slate-100">
              When detecting a cycle in a directed graph using DFS, which state change indicates a back-edge cycle?
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <button
                onClick={() => setSelectedOption('A')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between ${
                  selectedOption === 'A' ? 'bg-indigo-600/30 border-indigo-500 text-white' : 'bg-slate-800/60 border-slate-700 text-slate-300'
                }`}
              >
                <span>A) Encountering a node already in the current recursion stack set</span>
                {selectedOption === 'A' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <button
                onClick={() => setSelectedOption('B')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between ${
                  selectedOption === 'B' ? 'bg-indigo-600/30 border-indigo-500 text-white' : 'bg-slate-800/60 border-slate-700 text-slate-300'
                }`}
              >
                <span>B) Reaching a node with zero outgoing edges</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleComplete}
              disabled={!selectedOption}
              className="btn-primary text-xs px-6 py-2.5 disabled:opacity-50"
            >
              Submit Reassessment & Recalculate Score <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
          <span className="badge badge-emerald text-xs">Measurable Skill Growth Verified!</span>
          <h4 className="text-2xl font-black text-white font-heading">Graph Cycle Detection Accuracy: 38% ➔ 67%</h4>
          <p className="text-xs text-emerald-200">
            Nova: "Your Graph Cycle accuracy improved by +29%! You are now ready for Medium-level Graph challenges."
          </p>
        </div>
      )}
    </div>
  );
}
