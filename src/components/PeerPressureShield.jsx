import React from 'react';
import { ShieldAlert, CheckCircle2, Info, X, Sparkles, Filter } from 'lucide-react';

export default function PeerPressureShield({ onClose }) {
  const noiseFilters = [
    {
      myth: 'Classmates posting 24 LPA offer letters on LinkedIn/WhatsApp.',
      reality: 'Campus hiring happens in waves across 4-6 months. Your target matching curve for Product Startups & Amazon is progressing steadily at 76%. Comparison distorts real skill acquisition.',
      action: 'Nova Protocol: Ignore WhatsApp group flex noise for 48 hours.'
    },
    {
      myth: 'Everyone is doing 5 different problem sheets simultaneously (Striver, NeetCode, Blind75).',
      reality: 'Doing 5 sheets causes cognitive overload and surface learning. Nova builds your single Minimal Effective Dose covering 100% of high-yield interview patterns.',
      action: 'Nova Protocol: Stick strictly to your single auto-updating roadmap.'
    },
    {
      myth: 'Rumor: Company X only hires candidates with 9.0+ CGPA.',
      reality: 'Fact-Check: 68% of past off-campus and campus selections at Target Companies weighted project artifacts & DSA problem-solving over raw CGPA cutoffs.',
      action: 'Nova Protocol: Demystified & Verified.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 max-w-2xl w-full space-y-4 border border-amber-500/30">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Peer Pressure & Anti-Comparison Shield</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>

        <p className="text-xs text-slate-300">
          Placement season generates extreme social noise. This shield filters out toxic peer comparisons and keeps you grounded in your personal growth trajectory.
        </p>

        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
          {noiseFilters.map((f, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Filter className="w-3.5 h-3.5 text-amber-400" /> WhatsApp / Campus Noise #{i + 1}
              </div>
              <p className="text-xs text-slate-300 italic">"{f.myth}"</p>
              
              <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-300">Nova Reality Check:</strong> {f.reality}
                </div>
              </div>

              <div className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> {f.action}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button onClick={onClose} className="btn-primary text-xs px-5 py-2">
            Shield Active • Stay Grounded
          </button>
        </div>
      </div>
    </div>
  );
}
