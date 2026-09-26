import React, { useState, useEffect } from 'react';
import PlacementAssessment from './components/PlacementAssessment';
import PlacementDashboard from './components/PlacementDashboard';
import PersonalizedPlanEngine from './components/PersonalizedPlanEngine';
import ReassessmentModule from './components/ReassessmentModule';
import FocusSanctuary from './components/FocusSanctuary';
import CodeEfficiencyLab from './components/CodeEfficiencyLab';
import CopilotSidebar from './components/CopilotSidebar';
import EmotionBar from './components/EmotionBar';
import PeerPressureShield from './components/PeerPressureShield';
import CuriosityMysteryLab from './components/CuriosityMysteryLab';
import GoogleCloudDeploymentModal from './components/GoogleCloudDeploymentModal';
import { Shield, Target, BarChart3, Sparkles, Lock, Code, Calendar, Award, Cloud, RefreshCw } from 'lucide-react';

export default function App() {
  const [assessmentData, setAssessmentData] = useState(null);
  const [activeTab, setActiveTab] = useState('assessment');
  const [currentMood, setCurrentMood] = useState('PEER_PRESSURE');
  const [zenMode, setZenMode] = useState(false);
  const [targetCompany, setTargetCompany] = useState('AMAZON_SDE1');
  const [recalibratedTag, setRecalibratedTag] = useState(null);
  
  // Active Sprint Topic in Focus Sanctuary
  const [activeSprintTopic, setActiveSprintTopic] = useState('DSA Arrays — Two Pointer Technique');

  // Modals
  const [showPeerShield, setShowPeerShield] = useState(false);
  const [showFocusSanctuary, setShowFocusSanctuary] = useState(false);
  const [showGcpModal, setShowGcpModal] = useState(false);

  useEffect(() => {
    if (zenMode) {
      document.body.classList.add('zen-mode');
    } else {
      document.body.classList.remove('zen-mode');
    }
  }, [zenMode]);

  const handleAssessmentComplete = (results) => {
    setAssessmentData(results);
    setActiveTab('dashboard');
  };

  const handleStartSanctuary = (topic) => {
    if (topic) setActiveSprintTopic(topic);
    setShowFocusSanctuary(true);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6 space-y-4 max-w-7xl mx-auto">
      {/* Header */}
      <header className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black text-white flex items-center gap-2 font-heading">
              PlacementOS Co-Pilot
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-normal">
                Adaptive Preparation Engine
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Assess → Identify Weakness → Targeted Practice → Attention Rescue → Reassess → Placement Ready
            </p>
          </div>
        </div>

        {/* Action Header Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFocusSanctuary(true)}
            className="btn-primary text-xs px-4 py-2"
          >
            <Lock className="w-3.5 h-3.5" /> Launch Focus Sanctuary
          </button>

          <button
            onClick={() => setShowGcpModal(true)}
            className="px-3 py-2 rounded-xl bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-slate-700 transition-all flex items-center gap-1.5"
          >
            <Cloud className="w-4 h-4 text-cyan-400" /> Google Cloud Deployment
          </button>
        </div>
      </header>

      {/* Emotion Bar */}
      <EmotionBar
        currentMood={currentMood}
        setCurrentMood={setCurrentMood}
        zenMode={zenMode}
        setZenMode={setZenMode}
        onOpenPeerShield={() => setShowPeerShield(true)}
      />

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Nova AI Co-Pilot Sidebar */}
        <CopilotSidebar
          currentMood={currentMood}
          targetCompany={targetCompany}
          onRecalibrateRoadmap={(tag) => setRecalibratedTag(tag)}
          onEnterFocusSanctuary={() => setShowFocusSanctuary(true)}
        />

        {/* Active Workspace */}
        <main className="flex-1 w-full space-y-4">
          {/* Workflow Step Navigation Tabs */}
          <div className="glass-panel p-2 flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'assessment'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Target className="w-4 h-4 text-indigo-400" /> Step 1: Readiness Assessment
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-cyan-400" /> Step 2: Placement Dashboard
            </button>

            <button
              onClick={() => setActiveTab('plan')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'plan'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> Step 3: Personalized Plan
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'code'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Code className="w-4 h-4 text-emerald-400" /> Step 4: Code Efficiency Lab
            </button>

            <button
              onClick={() => setActiveTab('reassessment')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'reassessment'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Award className="w-4 h-4 text-purple-400" /> Step 5: Reassessment Loop
            </button>
          </div>

          {/* Active Tab View Rendering */}
          {activeTab === 'assessment' && (
            <PlacementAssessment onAssessmentComplete={handleAssessmentComplete} />
          )}

          {activeTab === 'dashboard' && (
            <PlacementDashboard assessmentData={assessmentData} />
          )}

          {activeTab === 'plan' && (
            <PersonalizedPlanEngine
              assessmentData={assessmentData}
              onStartSanctuary={handleStartSanctuary}
            />
          )}

          {activeTab === 'code' && <CodeEfficiencyLab />}

          {activeTab === 'reassessment' && (
            <ReassessmentModule onReassessmentComplete={() => setActiveTab('dashboard')} />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="glass-panel p-4 text-center text-xs text-slate-400 flex items-center justify-between">
        <span>PlacementOS Co-Pilot • Placement Preparation Engine</span>
        <span className="text-emerald-400 font-medium">ASSESS → IDENTIFY WEAKNESS → PRACTICE → RESCUE → REASSESS</span>
      </footer>

      {/* Modals */}
      {showPeerShield && <PeerPressureShield onClose={() => setShowPeerShield(false)} />}
      {showFocusSanctuary && <FocusSanctuary onClose={() => setShowFocusSanctuary(false)} />}
      {showGcpModal && <GoogleCloudDeploymentModal onClose={() => setShowGcpModal(false)} />}
    </div>
  );
}
