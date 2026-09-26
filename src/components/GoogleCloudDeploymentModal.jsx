import React from 'react';
import { Cloud, Server, ShieldCheck, Terminal, X, ExternalLink } from 'lucide-react';

export default function GoogleCloudDeploymentModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 max-w-2xl w-full space-y-4 border border-cyan-500/30">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Google Cloud Deployment Blueprint</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>

        <p className="text-xs text-slate-300">
          PlacementOS Co-Pilot is engineered for seamless production deployment on <strong>Google Cloud Platform</strong> using <strong>Google Cloud Run</strong> or <strong>Firebase Hosting</strong>.
        </p>

        {/* Deploy Command Snippet */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Google Cloud Run One-Click Deployment Command:
          </span>
          <pre className="p-3 bg-slate-950 rounded-xl font-mono text-[11px] text-cyan-300 border border-slate-800 overflow-x-auto">
{`# Deploy directly to Google Cloud Run
gcloud run deploy placement-copilot \\
  --source . \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated`}
          </pre>
        </div>

        {/* Cloud Architecture Highlights */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-white flex items-center gap-1.5"><Server className="w-4 h-4 text-cyan-400" /> Multi-Stage Docker Build</span>
            <p className="text-[11px] text-slate-400">Optimized Nginx container image under 25MB for instant Cloud Run cold starts.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-white flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Firebase Security Integration</span>
            <p className="text-[11px] text-slate-400">Integrated Firestore Rules & App Check security headers.</p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button onClick={onClose} className="btn-primary text-xs px-5 py-2">
            Google Cloud Config Verified
          </button>
        </div>
      </div>
    </div>
  );
}
