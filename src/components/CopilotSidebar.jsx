import React, { useState } from 'react';
import { Bot, Send, Sparkles, AlertCircle, CheckCircle2, RotateCcw, MessageSquare, Mic } from 'lucide-react';

export default function CopilotSidebar({ 
  currentMood, 
  targetCompany, 
  onRecalibrateRoadmap, 
  onEnterFocusSanctuary 
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'nova',
      text: `Hi! I'm Nova, your Placement Co-Pilot. I'm here to make your prep hassle-free, pressure-free, and confident. How are you feeling today?`,
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Dynamic system response generator reflecting Nova's empathetic persona
  const handleSend = (userQuery) => {
    const textToSend = userQuery || input;
    if (!textToSend.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: textToSend, timestamp: 'Just now' };
    setMessages((prev) => [...prev, userMsg]);
    if (!userQuery) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      const queryLower = textToSend.toLowerCase();

      if (queryLower.includes('peer') || queryLower.includes('whatsapp') || queryLower.includes('offer')) {
        replyText = `I completely understand the noise! Comparing your prep to classmates distorts your real progress. Your target match for ${targetCompany} is currently at 76%. Let's filter out the WhatsApp hype and focus on 1 quick 5-min win sprint together.`;
      } else if (queryLower.includes('interview') || queryLower.includes('failed') || queryLower.includes('feedback')) {
        replyText = `Thank you for sharing your feedback! Recognizing failure points is 80% of victory. I've extracted the weakness tag [DP_SPACE_OPTIMIZATION] and automatically recalibrated your upcoming prep roadmap for tomorrow!`;
        onRecalibrateRoadmap('DP_SPACE_OPTIMIZATION');
      } else if (queryLower.includes('anxious') || queryLower.includes('stress') || queryLower.includes('scared')) {
        replyText = `Take a slow breath. Placement prep is a marathon, not a sprint. You don't need to master 100 problems today. Click 'Enter Focus Sanctuary' below and let's do 1 calm 15-minute lock-in block with lo-fi beats!`;
      } else {
        replyText = `I'm with you 100%! We are targeting ${targetCompany}. Your current prep trajectory is steady. Shall we do a quick mystery bug hunt or launch a distraction-free lock-in sprint?`;
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'nova', text: replyText, timestamp: 'Just now' }
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="glass-panel flex flex-col h-[750px] w-full lg:w-96 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
      {/* Co-Pilot Header */}
      <div className="p-4 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border-b border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center relative">
            <Bot className="w-6 h-6 text-indigo-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              Nova Co-Pilot
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 font-mono">Gemini 2.0</span>
            </h3>
            <p className="text-[11px] text-slate-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Emotion & Context Aware
            </p>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none shadow-md'
                  : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-bl-none shadow-md'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-800/90 p-3 rounded-2xl text-xs text-slate-400 flex items-center gap-2">
              <Bot className="w-4 h-4 text-indigo-400 animate-spin" /> Nova is reflecting...
            </div>
          </div>
        )}
      </div>

      {/* Suggested Prompt Chips */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/40 space-y-2">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
          <MessageSquare className="w-3 h-3 text-indigo-400" /> Quick Co-Pilot Actions:
        </p>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => handleSend("I'm feeling peer pressure after seeing classmate offers")}
            className="text-[11px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all text-left"
          >
            🛡️ Filter Peer Noise
          </button>
          <button
            onClick={() => handleSend("Log my interview feedback: choked on DP space optimization")}
            className="text-[11px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 transition-all text-left"
          >
            📝 Log Interview Feedback
          </button>
          <button
            onClick={onEnterFocusSanctuary}
            className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all text-left font-semibold"
          >
            🔒 Lock In (15-min Sprint)
          </button>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t border-slate-700/60 bg-slate-900/60 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Talk to Nova (e.g. 'I feel anxious', 'Log feedback')..."
          className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={() => handleSend()}
          className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all shadow-md"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
