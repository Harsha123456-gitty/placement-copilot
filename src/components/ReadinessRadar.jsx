import React, { useState } from 'react';
import { Target, Award, BarChart3, Building2, TrendingUp } from 'lucide-react';

export default function ReadinessRadar({ targetCompany, setTargetCompany }) {
  const companyProfiles = {
    'AMAZON_SDE1': { name: 'Amazon SDE-1', score: 76, dsa: 84, sys: 65, cs: 78, resume: 85, beh: 72 },
    'GOOGLE_STEP': { name: 'Google Software Eng', score: 71, dsa: 90, sys: 60, cs: 82, resume: 88, beh: 68 },
    'FINTECH_STARTUP': { name: 'FinTech Startup', score: 84, dsa: 80, sys: 78, cs: 85, resume: 92, beh: 80 },
    'TCS_DIGITAL': { name: 'TCS Digital / Core', score: 92, dsa: 75, sys: 70, cs: 90, resume: 95, beh: 90 },
  };

  const currentProfile = companyProfiles[targetCompany] || companyProfiles['AMAZON_SDE1'];

  return (
    <div className="glass-panel p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold text-white">Predictive Placement Readiness Index</h3>
        </div>

        {/* Target Switcher */}
        <div className="flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={targetCompany}
            onChange={(e) => setTargetCompany(e.target.value)}
            className="bg-slate-800/80 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none"
          >
            <option value="AMAZON_SDE1">Amazon SDE-1 Benchmark</option>
            <option value="GOOGLE_STEP">Google SWE Benchmark</option>
            <option value="FINTECH_STARTUP">FinTech Product Startup</option>
            <option value="TCS_DIGITAL">TCS Digital / Core</option>
          </select>
        </div>
      </div>

      {/* Main Score Header */}
      <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div>
          <span className="text-[11px] font-medium text-slate-400 block">Overall Target Hiring Bar Match</span>
          <span className="text-2xl font-black text-white flex items-center gap-2 font-heading">
            {currentProfile.score}% Match <TrendingUp className="w-5 h-5 text-emerald-400" />
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-indigo-300 block">{currentProfile.name}</span>
          <span className="text-[10px] text-emerald-400 font-medium">On Track for Placement Season</span>
        </div>
      </div>

      {/* Skill Dimensions Breakdown */}
      <div className="space-y-2.5">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Dimension Breakdown vs Target Bar:</span>

        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">Data Structures & Algorithms</span>
              <span className="text-indigo-400 font-mono font-bold">{currentProfile.dsa}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${currentProfile.dsa}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">System Design & OOP</span>
              <span className="text-cyan-400 font-mono font-bold">{currentProfile.sys}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${currentProfile.sys}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">CS Fundamentals (OS, DBMS, CN)</span>
              <span className="text-emerald-400 font-mono font-bold">{currentProfile.cs}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: `${currentProfile.cs}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">Resume & Project Proof-of-Skill</span>
              <span className="text-amber-400 font-mono font-bold">{currentProfile.resume}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: `${currentProfile.resume}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
