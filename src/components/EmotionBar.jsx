import React from 'react';
import { Heart, Zap, ShieldAlert, Sparkles, Moon, Sun, AlertTriangle } from 'lucide-react';

export default function EmotionBar({ 
  currentMood, 
  setCurrentMood, 
  zenMode, 
  setZenMode, 
  onOpenPeerShield 
}) {
  const moods = [
    { id: 'PEER_PRESSURE', label: 'Peer Pressure Noise', icon: ShieldAlert, color: 'text-amber-400', bg: 'rgba(245, 158, 11, 0.15)' },
    { id: 'ANXIOUS', label: 'Anxious / Overwhelmed', icon: Heart, color: 'text-rose-400', bg: 'rgba(244, 63, 94, 0.15)' },
    { id: 'BURNED_OUT', label: 'Fatigued / Burned Out', icon: Moon, color: 'text-purple-400', bg: 'rgba(168, 85, 247, 0.15)' },
    { id: 'ENERGIZED', label: 'High Energy / Focus', icon: Zap, color: 'text-emerald-400', bg: 'rgba(16, 185, 129, 0.15)' },
  ];

  return (
    <div className="glass-panel p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
      {/* Mood Selector */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Current State:
        </span>
        {moods.map((m) => {
          const Icon = m.icon;
          const isActive = currentMood === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setCurrentMood(m.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 border ${
                isActive
                  ? 'border-indigo-400 text-white font-semibold shadow-lg'
                  : 'border-slate-700/60 text-slate-300 hover:border-slate-500'
              }`}
              style={{ backgroundColor: isActive ? m.bg : 'rgba(255, 255, 255, 0.03)' }}
            >
              <Icon className={`w-3.5 h-3.5 ${m.color}`} />
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Control Actions */}
      <div className="flex items-center gap-3">
        {/* Peer Pressure Shield Button */}
        <button
          onClick={onOpenPeerShield}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-all flex items-center gap-1.5"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          Anti-Comparison Shield
        </button>

        {/* Zen Mode Toggle */}
        <button
          onClick={() => setZenMode(!zenMode)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 border ${
            zenMode
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-lg'
              : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {zenMode ? (
            <>
              <Sun className="w-3.5 h-3.5 text-emerald-400" />
              Zen Mode Active
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              Enable Zen Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}
