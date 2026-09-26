import React, { useState } from 'react';
import { Target, CheckCircle2, ArrowRight, Award, HelpCircle, AlertCircle, BarChart3, RefreshCw } from 'lucide-react';

export default function PlacementAssessment({ onAssessmentComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState(null);

  // Real diagnostic assessment questions across 4 core placement categories
  const questions = [
    {
      id: 1,
      category: 'DSA',
      topic: 'Arrays / Two Pointers',
      question: 'Which technique allows finding a pair with a target sum in a sorted array in O(N) time and O(1) extra space?',
      options: [
        { id: 'A', text: 'Nested Loops', isCorrect: false },
        { id: 'B', text: 'Two Pointers (Left and Right pointers moving inward)', isCorrect: true },
        { id: 'C', text: 'Binary Search Tree insertion', isCorrect: false },
        { id: 'D', text: 'Matrix Transposition', isCorrect: false }
      ]
    },
    {
      id: 2,
      category: 'DSA',
      topic: 'Graphs / DFS Cycle Detection',
      question: 'In a directed graph, why is a simple visited boolean array insufficient to detect cycles during DFS?',
      options: [
        { id: 'A', text: 'Because directed graphs cannot have cycles', isCorrect: false },
        { id: 'B', text: 'Because a visited node in a cross-edge does not imply a cycle in the current path; a recursion stack set is required', isCorrect: true },
        { id: 'C', text: 'Because DFS cannot traverse directed graphs', isCorrect: false },
        { id: 'D', text: 'Because BFS must always be used for directed graphs', isCorrect: false }
      ]
    },
    {
      id: 3,
      category: 'SQL',
      topic: 'Joins & Aggregations',
      question: 'Which SQL clause is used to filter records AFTER an aggregation function (e.g., GROUP BY COUNT(*) > 5)?',
      options: [
        { id: 'A', text: 'WHERE', isCorrect: false },
        { id: 'B', text: 'HAVING', isCorrect: true },
        { id: 'C', text: 'ORDER BY', isCorrect: false },
        { id: 'D', text: 'LIMIT', isCorrect: false }
      ]
    },
    {
      id: 4,
      category: 'Aptitude',
      topic: 'Quantitative Reasoning',
      question: 'If a train traveling at 60 km/h crosses a 200m platform in 24 seconds, what is the length of the train?',
      options: [
        { id: 'A', text: '150 meters', isCorrect: false },
        { id: 'B', text: '200 meters', isCorrect: true },
        { id: 'C', text: '250 meters', isCorrect: false },
        { id: 'D', text: '300 meters', isCorrect: false }
      ]
    },
    {
      id: 5,
      category: 'Communication',
      topic: 'HR & Behavioral STAR Method',
      question: 'In the STAR interview response framework, what does the "R" stand for?',
      options: [
        { id: 'A', text: 'Review', isCorrect: false },
        { id: 'B', text: 'Result (quantifiable impact of your actions)', isCorrect: true },
        { id: 'C', text: 'Reaction', isCorrect: false },
        { id: 'D', text: 'Responsibility', isCorrect: false }
      ]
    }
  ];

  const handleSelectOption = (questionId, optionId) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateRealResults();
    }
  };

  const calculateRealResults = () => {
    let dsaScore = 0;
    let sqlScore = 0;
    let aptitudeScore = 0;
    let commScore = 0;

    questions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      const correctOption = q.options.find((o) => o.isCorrect)?.id;
      const isCorrect = selected === correctOption;

      if (q.category === 'DSA') dsaScore += isCorrect ? 50 : 0;
      if (q.category === 'SQL') sqlScore += isCorrect ? 100 : 0;
      if (q.category === 'Aptitude') aptitudeScore += isCorrect ? 100 : 0;
      if (q.category === 'Communication') commScore += isCorrect ? 100 : 0;
    });

    const result = {
      dsa: dsaScore,
      sql: sqlScore,
      aptitude: aptitudeScore,
      communication: commScore,
      overall: Math.round((dsaScore + sqlScore + aptitudeScore + commScore) / 4),
      weaknesses: [
        dsaScore < 70 ? 'DSA: Arrays & Graph DFS' : null,
        sqlScore < 70 ? 'SQL: Group By & HAVING' : null,
        aptitudeScore < 70 ? 'Aptitude: Speed & Distance' : null,
        commScore < 70 ? 'Communication: STAR Behavioral' : null
      ].filter(Boolean),
      recommendedTopic: dsaScore <= sqlScore ? 'DSA Arrays — Two Pointer Technique' : 'SQL Aggregations & Joins'
    };

    setCalculatedResult(result);
    setIsCompleted(true);
    if (onAssessmentComplete) {
      onAssessmentComplete(result);
    }
  };

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="glass-panel p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2 font-heading">
            <Target className="w-5 h-5 text-indigo-400" /> Placement Readiness Diagnostic Assessment
          </h2>
          <p className="text-xs text-slate-400">
            Real performance evaluation across DSA, SQL, Aptitude, and Communication.
          </p>
        </div>
        {!isCompleted && (
          <span className="badge badge-indigo font-mono text-xs">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        )}
      </div>

      {!isCompleted ? (
        <div className="space-y-5">
          {/* Question Card */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="badge badge-emerald text-[10px]">{currentQ.category} • {currentQ.topic}</span>
              <span className="text-[11px] text-slate-400">Select 1 correct option</span>
            </div>
            <p className="text-sm font-semibold text-slate-100 leading-relaxed">{currentQ.question}</p>

            {/* Options Grid */}
            <div className="space-y-2 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(currentQ.id, opt.id)}
                    className={`w-full p-3.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold font-mono text-xs ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300'
                      }`}>
                        {opt.id}
                      </span>
                      {opt.text}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQ.id]}
              className="btn-primary text-xs px-6 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestionIndex < questions.length - 1 ? (
                <>Next Question <ArrowRight className="w-4 h-4" /></>
              ) : (
                <>Calculate Assessment Score <Award className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/40 text-center space-y-2">
            <span className="badge badge-emerald text-xs">Diagnostic Assessment Complete</span>
            <h3 className="text-3xl font-black text-white font-heading">{calculatedResult.overall}% Placement Readiness Score</h3>
            <p className="text-xs text-slate-300">Generated strictly from your diagnostic answers.</p>
          </div>

          {/* Category Scores Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">DSA / Coding</span>
              <span className="text-lg font-bold font-mono text-indigo-400">{calculatedResult.dsa}%</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">SQL / Databases</span>
              <span className="text-lg font-bold font-mono text-cyan-400">{calculatedResult.sql}%</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Aptitude</span>
              <span className="text-lg font-bold font-mono text-emerald-400">{calculatedResult.aptitude}%</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Communication</span>
              <span className="text-lg font-bold font-mono text-amber-400">{calculatedResult.communication}%</span>
            </div>
          </div>

          {/* Identified Weaknesses */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
            <h4 className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-400" /> Identified Weak Points for Target Remediation:
            </h4>
            <div className="flex flex-wrap gap-2">
              {calculatedResult.weaknesses.map((w, i) => (
                <span key={i} className="badge badge-rose text-xs font-mono">{w}</span>
              ))}
            </div>
          </div>

          {/* Nova Recommendation */}
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 space-y-2">
            <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Nova's Recommended Focus:
            </span>
            <p className="text-xs text-slate-200">
              "Your assessment indicates strength in SQL while <strong>{calculatedResult.recommendedTopic}</strong> requires targeted practice. Let's launch today's personalized 30-minute plan!"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
