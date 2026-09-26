import React, { useState, useEffect } from 'react';
import { Shield, Play, Pause, RotateCcw, Volume2, LifeBuoy, Sparkles, CheckCircle, ArrowLeft, Brain, Wind, HelpCircle, Video, FileText, Code2, AlertTriangle } from 'lucide-react';

export default function FocusSanctuary({ onClose }) {
  // Real live countdown timer state
  const [secondsLeft, setSecondsLeft] = useState(15 * 60); // 15:00
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [ambientAudio, setAmbientAudio] = useState('lofi');
  
  // Modals
  const [showRescueModal, setShowRescueModal] = useState(false);
  const [rescueActivePath, setRescueActivePath] = useState(null);
  const [recommendationTab, setRecommendationTab] = useState('lecture');

  // Real countdown timer effect (15:00 -> 14:59 -> 14:58...)
  useEffect(() => {
    let timerInterval = null;
    if (isTimerRunning && secondsLeft > 0) {
      timerInterval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(timerInterval);
  }, [isTimerRunning, secondsLeft]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030509] text-slate-100 flex flex-col items-center justify-between p-4 md:p-6 backdrop-blur-2xl overflow-y-auto">
      {/* Header */}
      <div className="w-full max-w-6xl flex items-center justify-between border-b border-cyan-500/40 pb-4 font-mono">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center gap-1 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> [X] Exit Sanctuary
          </button>
          <div className="h-4 w-px bg-slate-800" />
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500 px-3 py-1 rounded">
            <Shield className="w-3.5 h-3.5" /> 🔒 HOLO-DECK SANCTUARY ACTIVE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-slate-400 font-medium">Ambient Audio:</span>
          <select
            value={ambientAudio}
            onChange={(e) => setAmbientAudio(e.target.value)}
            className="bg-slate-900 border border-cyan-500 rounded px-2.5 py-1 text-xs text-cyan-300 focus:outline-none"
          >
            <option value="lofi">🎧 Deep Lo-Fi Beats</option>
            <option value="rain">🌧️ Calm Rain Noise</option>
            <option value="waves">🌊 Binaural Focus Waves</option>
          </select>
        </div>
      </div>

      {/* Main Workspace Split */}
      <div className="w-full max-w-6xl my-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Recommendation Deck */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-panel p-2 flex gap-2 text-xs font-heading uppercase">
            <button
              onClick={() => setRecommendationTab('lecture')}
              className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                recommendationTab === 'lecture' ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" /> 📺 5-Min Concept Lecture
            </button>

            <button
              onClick={() => setRecommendationTab('cheatsheet')}
              className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                recommendationTab === 'cheatsheet' ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" /> 🧠 Pattern Cheatsheet
            </button>

            <button
              onClick={() => setRecommendationTab('problem')}
              className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                recommendationTab === 'problem' ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" /> 💻 Target Practice Problem
            </button>

            <button
              onClick={() => setRecommendationTab('pitfalls')}
              className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                recommendationTab === 'pitfalls' ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50' : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" /> ⚠️ Key Pitfalls
            </button>
          </div>

          {/* Tab 1: Video Lecture */}
          {recommendationTab === 'lecture' && (
            <div className="glass-panel p-5 space-y-4 border border-cyan-500">
              <div className="flex justify-between items-center font-heading">
                <h3 className="text-sm font-bold text-yellow-400">// RECOMMENDED VIDEO: TWO POINTER TECHNIQUE</h3>
                <span className="text-[10px] px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-400">5 MIN DURATION</span>
              </div>
              
              <div className="w-full h-52 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center p-6 space-y-2 relative">
                <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-black shadow-xl cursor-pointer hover:scale-110 transition-all">
                  ▶
                </div>
                <p className="text-xs font-bold text-white font-heading">Visual Breakdown: Left & Right Inward Pointers</p>
                <p className="text-[11px] text-slate-400 font-mono">Recommended by Nova AI based on your DSA diagnostic score (50%)</p>
              </div>

              <div className="p-3 bg-cyan-950/40 border border-cyan-500 rounded-xl text-xs font-mono text-cyan-200">
                💡 <strong>Lecture Key Takeaway:</strong> Two Pointers optimizes $O(N^2)$ brute force loops down to $O(N)$ time by leveraging array sorting!
              </div>
            </div>
          )}

          {/* Tab 2: Pattern Cheatsheet */}
          {recommendationTab === 'cheatsheet' && (
            <div className="glass-panel p-5 space-y-3 border border-cyan-500 text-xs font-mono">
              <h3 className="text-sm font-bold text-cyan-400 font-heading">// CODE TEMPLATE: TWO POINTERS</h3>
              <pre className="p-4 bg-slate-950 rounded-2xl font-mono text-[11px] text-emerald-300 border border-slate-800 overflow-x-auto">
{`let left = 0;
let right = arr.length - 1;

while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) return [left + 1, right + 1];
    else if (currentSum < target) left++; // Move left pointer inward
    else right--; // Move right pointer inward
}`}
              </pre>
            </div>
          )}

          {/* Tab 3: Target Practice Problem */}
          {recommendationTab === 'problem' && (
            <div className="glass-panel p-5 space-y-3 text-xs font-mono border border-emerald-500">
              <div className="flex justify-between items-center font-heading">
                <h3 className="text-sm font-bold text-white">// PROBLEM: TWO SUM II — SORTED ARRAY</h3>
                <span className="text-[10px] px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500 font-bold">EASY</span>
              </div>
              <p className="text-slate-300 font-sans">
                Find two numbers in a 1-indexed sorted array that add up to the target number.
              </p>
              <textarea
                defaultValue="// Write your Two Pointer solution here..."
                className="w-full h-36 bg-slate-950 border border-cyan-500 rounded-xl p-3 font-mono text-xs text-cyan-300 focus:outline-none"
              />
              <button onClick={() => alert('Solution Submitted! Complexity: O(N) Time, O(1) Space')} className="btn-primary text-xs">
                SUBMIT SOLUTION
              </button>
            </div>
          )}

          {/* Tab 4: Key Pitfalls */}
          {recommendationTab === 'pitfalls' && (
            <div className="glass-panel p-5 space-y-3 text-xs font-mono border border-pink-500">
              <h3 className="text-sm font-bold text-pink-400 font-heading">⚠️ COMMON PITFALLS TO AVOID</h3>
              <div className="space-y-2 text-slate-300 font-sans">
                <div className="p-3 bg-pink-950/30 border border-pink-500 rounded-xl">
                  <strong>1. Index Offset:</strong> Amazon/LeetCode questions often require 1-based index conversion.
                </div>
                <div className="p-3 bg-pink-950/30 border border-pink-500 rounded-xl">
                  <strong>2. Infinite Loops:</strong> Always ensure pointer increments/decrements execute every iteration.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: REAL LIVE COUNTDOWN TIMER */}
        <div className="space-y-4 font-mono">
          <div className="glass-panel p-6 text-center space-y-4 border border-yellow-400">
            <span className="text-xs text-yellow-400 font-heading tracking-wider block">// LIVE COUNTDOWN TIMER</span>
            
            {/* Dynamic Countdown Text (15:00 -> 14:59 -> 14:58...) */}
            <div className="text-6xl font-black text-yellow-400 font-heading tracking-tighter drop-shadow-[0_0_20px_#fee500]">
              {formatTime(secondsLeft)}
            </div>

            <div className="flex justify-center gap-2">
              <button onClick={() => setIsTimerRunning(!isTimerRunning)} className="btn-secondary text-xs px-4 py-2 border border-yellow-400 text-yellow-300">
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isTimerRunning ? 'Pause' : 'Resume'}
              </button>
              <button onClick={() => { setSecondsLeft(15 * 60); setIsTimerRunning(true); }} className="btn-secondary text-xs px-3 py-2">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            <button
              onClick={() => setShowRescueModal(true)}
              className="rescue-pulse w-full py-4 rounded-2xl bg-pink-600 border border-pink-400 text-white font-black font-heading text-xs hover:bg-pink-500 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <LifeBuoy className="w-4 h-4" />
              🛟 ATTENTION RESCUE PROTOCOL
            </button>
          </div>
        </div>
      </div>

      {/* Rescue Modal */}
      {showRescueModal && (
        <div style={{ zIndex: 9999 }} className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 max-w-md w-full border-2 border-pink-500 space-y-4">
            <div className="flex items-center justify-between border-b border-pink-500/60 pb-2 font-heading">
              <h3 className="text-sm font-bold text-pink-400 flex items-center gap-2">
                <LifeBuoy className="w-4 h-4 text-pink-400" /> ATTENTION RESCUE STATION
              </h3>
              <button onClick={() => setShowRescueModal(false)} className="text-xs text-pink-400 font-mono">[X] CLOSE</button>
            </div>
            <p className="text-xs text-slate-300 font-mono">Select a recovery protocol to restore momentum:</p>

            <div className="space-y-2 text-xs font-mono">
              <button onClick={() => setRescueActivePath('microtask')} className="w-full p-3 bg-slate-950 border border-cyan-400 text-cyan-300 text-left hover:bg-cyan-400 hover:text-black transition-all">
                <strong className="block">OPTION 1: MICRO-SPLIT MCQ</strong>
                <span className="text-slate-400 text-[11px] font-sans">Break problem into 1 quick 30-sec diagnostic quiz.</span>
              </button>

              <button onClick={() => setRescueActivePath('hint')} className="w-full p-3 bg-slate-950 border border-yellow-400 text-yellow-300 text-left hover:bg-yellow-400 hover:text-black transition-all">
                <strong className="block">OPTION 2: SOCRATIC HINT</strong>
                <span className="text-slate-400 text-[11px] font-sans">Get 1 conceptual clue without giving away full code.</span>
              </button>

              <button onClick={() => setRescueActivePath('breath')} className="w-full p-3 bg-slate-950 border border-emerald-400 text-emerald-300 text-left hover:bg-emerald-400 hover:text-black transition-all">
                <strong className="block">OPTION 3: 60-SEC BREATHING RESET</strong>
                <span className="text-slate-400 text-[11px] font-sans">Clear mental fog with a visual breathing exercise.</span>
              </button>
            </div>

            {rescueActivePath === 'microtask' && (
              <div className="p-3 bg-cyan-950 border border-cyan-400 font-mono text-xs space-y-2">
                <p className="font-bold text-cyan-200">Micro-Task: Which data structure reduces lookup time to O(1)?</p>
                <button onClick={() => { alert('✅ Correct! Hash Map reduces lookup to O(1). Focus momentum restored!'); setRescueActivePath(null); setShowRescueModal(false); }} className="w-full p-2 bg-cyan-400 text-black font-bold font-heading">HASH MAP ✅</button>
              </div>
            )}

            {rescueActivePath === 'hint' && (
              <div className="p-3 bg-yellow-950 border border-yellow-400 font-mono text-xs text-yellow-200 space-y-2">
                <p>💡 <strong>SOCRATIC HINT:</strong> "Since array is sorted, moving left pointer rightward increases sum, and moving right pointer leftward decreases sum!"</p>
                <button onClick={() => { setShowRescueModal(false); setRescueActivePath(null); }} className="btn-primary text-xs w-full py-1.5">GOT IT! RETURN TO TASK</button>
              </div>
            )}

            {rescueActivePath === 'breath' && (
              <div className="p-4 bg-slate-950 border border-emerald-400 font-mono text-center space-y-2">
                <div className="breathing-circle" />
                <p className="text-xs text-emerald-200 font-heading">INHALE... EXHALE...</p>
                <button onClick={() => { setShowRescueModal(false); setRescueActivePath(null); }} className="btn-secondary text-xs w-full py-1.5">MIND CLEAR • RETURN TO TASK</button>
              </div>
            )}

            <button onClick={() => setShowRescueModal(false)} className="btn-primary text-xs w-full">CLOSE RESCUE STATION</button>
          </div>
        </div>
      )}
    </div>
  );
}
