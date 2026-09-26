import React, { useState } from 'react';
import { HelpCircle, Lock, Unlock, Search, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CuriosityMysteryLab() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [solved, setSolved] = useState(false);

  const mysteryCases = [
    {
      id: 1,
      title: '🕵️ Case #409: The 2 AM Production Bug',
      company: 'Amazon Payments Pipeline',
      difficulty: 'Medium',
      unlocked: true,
      scenario: 'A senior engineer pushed this Java multi-threaded queue code at 2 AM. During high black Friday traffic, 0.1% of transactions froze. Can you spot the hidden bug?',
      codeSnippet: `public synchronized void processQueue() {\n    if (queue.isEmpty()) {\n        wait(); // <-- BUG HERE: wait() without loop condition!\n    }\n    Transaction tx = queue.poll();\n    execute(tx);\n}`,
      hint: 'Think about spurious wakeups in Java multithreading!',
      solution: '`wait()` must always be called inside a `while (queue.isEmpty())` loop, not an `if` statement, because of spurious wakeups!'
    },
    {
      id: 2,
      title: '🔒 Case #812: Classified System Design Bottleneck',
      company: 'Google Global Cache',
      difficulty: 'Hard',
      unlocked: false,
      scenario: 'Complete 3 Focus Sprints to unlock this classified case file.',
      codeSnippet: '',
      hint: '',
      solution: ''
    }
  ];

  return (
    <div className="glass-panel p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white">Curiosity & Mystery Bug Hunt</h3>
        </div>
        <span className="badge badge-amber flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" /> High Dopamine Sprints
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Case Selector */}
        <div className="space-y-3">
          {mysteryCases.map((c) => (
            <div
              key={c.id}
              onClick={() => c.unlocked && setSelectedCase(c)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                c.unlocked
                  ? selectedCase?.id === c.id
                    ? 'bg-amber-950/40 border-amber-500/50 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-950/40 border-slate-900 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white flex items-center gap-2">
                  {c.unlocked ? <Unlock className="w-3.5 h-3.5 text-emerald-400" /> : <Lock className="w-3.5 h-3.5 text-slate-500" />}
                  {c.title}
                </h4>
                <span className="badge badge-indigo text-[10px]">{c.company}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{c.scenario.slice(0, 75)}...</p>
            </div>
          ))}
        </div>

        {/* Active Case Detective Space */}
        <div>
          {selectedCase ? (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-amber-300">{selectedCase.title}</h4>
              <p className="text-xs text-slate-300">{selectedCase.scenario}</p>

              <pre className="p-3 bg-slate-950 rounded-lg font-mono text-[11px] text-emerald-300 overflow-x-auto">
                {selectedCase.codeSnippet}
              </pre>

              <div className="space-y-2">
                <input
                  type="text"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  placeholder="Where is the bug? (e.g. 'wait in if statement')..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={() => setSolved(true)}
                  className="btn-primary text-xs w-full py-2 justify-center"
                >
                  Submit Detective Guess
                </button>
              </div>

              {solved && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 space-y-1">
                  <span className="font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mystery Bug Solved!</span>
                  <p className="text-[11px] text-emerald-200">{selectedCase.solution}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-64 bg-slate-900/40 border border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center text-center p-6 space-y-2">
              <Search className="w-8 h-8 text-slate-600" />
              <p className="text-xs font-semibold text-slate-400">Select an unlocked Mystery Case on the left to play detective.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
