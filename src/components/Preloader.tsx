import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Preloader() {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-indigo-500 print-hidden">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 border-t-2 border-indigo-500 border-solid rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-r-2 border-cyan-400 border-solid rounded-full animate-[spin_1.5s_reverse_infinite]"></div>
        <Loader2 className="animate-spin text-indigo-400" size={32} />
      </div>
      <div className="mt-8 font-mono text-sm tracking-widest text-slate-300 uppercase animate-pulse">
        Initializing System Environment...
      </div>
      <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-500 rounded-full animate-[progress_2s_ease-in-out_infinite] origin-left" style={{ animationName: 'pulse-width' }}></div>
      </div>
      <style>{`
        @keyframes pulse-width {
          0% { width: 0%; opacity: 1; }
          50% { width: 100%; opacity: 0.5; }
          100% { width: 0%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
