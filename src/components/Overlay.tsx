import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Terminal, Server, Shield, Cloud } from 'lucide-react';
import { resumeData } from './ResumeData';

gsap.registerPlugin(ScrollTrigger);

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        '.hero-element',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );

      // Section scroll animations
      gsap.utils.toArray('.scroll-section').forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div ref={containerRef} className="relative z-10 w-full min-h-screen text-slate-200 no-scrollbar overflow-y-auto print-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5 z-50">
        <div className="text-xl font-bold tracking-tighter text-indigo-400">AB.SYS_ADMIN</div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-all font-medium text-sm"
        >
          <Download size={16} />
          Download PDF CV
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 max-w-7xl mx-auto pt-20">
        <div className="max-w-3xl">
          <h2 className="hero-element text-indigo-400 font-mono tracking-widest text-sm mb-4 uppercase">System Identity Initialized</h2>
          <h1 className="hero-element text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            {resumeData.name}
          </h1>
          <h3 className="hero-element text-2xl md:text-3xl font-light text-slate-300 mb-8 border-l-2 border-indigo-500 pl-4">
            {resumeData.title}
          </h3>
          <p className="hero-element text-lg leading-relaxed text-slate-400 mb-10 max-w-2xl">
            {resumeData.summary}
          </p>
          
          <div className="hero-element flex flex-wrap gap-4 font-mono text-sm">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Server size={16} className="text-indigo-400" /> Infrastructure
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Shield size={16} className="text-emerald-400" /> Cybersecurity
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Cloud size={16} className="text-cyan-400" /> Cloud
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen py-24 px-8 md:px-24 max-w-7xl mx-auto flex flex-col justify-center border-t border-white/5 bg-black/20 backdrop-blur-md">
        <div className="scroll-section">
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="text-indigo-500" size={32} />
            <h2 className="text-3xl font-bold text-white tracking-tight">Core Competencies</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 rounded-lg transition-colors text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-24 px-8 md:px-24 max-w-7xl mx-auto flex flex-col justify-center">
        <div className="scroll-section">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-12">Professional Experience</h2>
          
          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[1.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                  <span className="text-indigo-400 font-mono text-sm">{exp.date}</span>
                </div>
                <div className="text-slate-400 mb-4">{exp.company} | {exp.location}</div>
                <ul className="space-y-3">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-indigo-500 mt-1">▹</span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>Terminal output complete. End of transmission.</p>
        <p className="mt-2 text-indigo-400/50">{resumeData.email}</p>
      </footer>
    </div>
  );
}
