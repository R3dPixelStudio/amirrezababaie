import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Terminal, Server, Shield, Cloud, Network, BarChart, Code, Database, Headphones, GitMerge, Brain, Monitor } from 'lucide-react';
import { resumeData } from './ResumeData';

gsap.registerPlugin(ScrollTrigger);

const getSkillIcon = (skillName: string) => {
  switch (skillName) {
    case "Cloud Computing": return <Cloud size={24} />;
    case "Networking": return <Network size={24} />;
    case "Cybersecurity": return <Shield size={24} />;
    case "Data Analysis": return <BarChart size={24} />;
    case "Software Development": return <Code size={24} />;
    case "Database Management": return <Database size={24} />;
    case "IT Support": return <Headphones size={24} />;
    case "DevOps": return <GitMerge size={24} />;
    case "Machine Learning": return <Brain size={24} />;
    case "Virtualization": return <Monitor size={24} />;
    default: return <Terminal size={24} />;
  }
};

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

      // Skill cards stagger animation
      gsap.utils.toArray('.skill-card').forEach((card: any, i) => {
        gsap.fromTo(card, { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.5, delay: (i % 5) * 0.1,
          scrollTrigger: { trigger: '.skills-container', start: 'top 85%' }
        });
      });

      // Progress bars animation
      gsap.utils.toArray('.progress-fill').forEach((bar: any) => {
        const targetWidth = bar.getAttribute('data-width');
        gsap.fromTo(bar, { width: '0%' }, {
          width: `${targetWidth}%`, duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 90%' }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div ref={containerRef} className="relative z-10 w-full min-h-screen text-slate-200 pointer-events-none print-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5 z-50 pointer-events-auto">
        <div className="text-xl font-bold tracking-tighter text-indigo-400">AB.SYS_ADMIN</div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-all font-medium text-xs md:text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Download PDF CV</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto pt-24 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <h2 className="hero-element text-indigo-400 font-mono tracking-widest text-xs md:text-sm mb-4 uppercase">System Identity Initialized</h2>
          <h1 className="hero-element text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white">
            {resumeData.name}
          </h1>
          <h3 className="hero-element text-xl md:text-3xl font-light text-slate-300 mb-6 md:mb-8 border-l-2 border-indigo-500 pl-4">
            {resumeData.title}
          </h3>
          <p className="hero-element text-base md:text-lg leading-relaxed text-slate-400 mb-8 md:mb-10 max-w-2xl">
            {resumeData.summary}
          </p>
          
          <div className="hero-element flex flex-wrap gap-3 md:gap-4 font-mono text-xs md:text-sm">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 md:px-4 rounded-full border border-white/10">
              <Server size={16} className="text-indigo-400" /> Infrastructure
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 md:px-4 rounded-full border border-white/10">
              <Shield size={16} className="text-emerald-400" /> Cybersecurity
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 md:px-4 rounded-full border border-white/10">
              <Cloud size={16} className="text-cyan-400" /> Cloud
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Languages Section */}
      <section className="min-h-screen py-20 px-6 md:px-24 max-w-7xl mx-auto flex flex-col justify-center border-t border-white/5 bg-black/20 backdrop-blur-md pointer-events-auto">
        <div className="scroll-section w-full">
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <Terminal className="text-indigo-500" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Core Competencies</h2>
          </div>
          
          <div className="skills-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="skill-card flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl transition-all group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] cursor-default">
                <div className="text-slate-400 group-hover:text-indigo-400 transition-colors mb-2 md:mb-3">
                  {getSkillIcon(skill)}
                </div>
                <span className="text-slate-200 text-xs md:text-sm font-medium text-center group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6 md:mb-8">Languages</h2>
            <div className="space-y-6 md:space-y-8">
              {resumeData.languages.map((lang, idx) => (
                <div key={idx} className="w-full">
                  <div className="flex justify-between items-end mb-2 md:mb-3">
                    <span className="text-slate-200 font-semibold text-base md:text-lg">{lang.name}</span>
                    <span className="text-indigo-400 font-mono text-xs md:text-sm tracking-wide bg-indigo-500/10 px-2 py-1 md:px-3 md:py-1 rounded-full border border-indigo-500/20">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 md:h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <div
                      className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full relative shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                      data-width={lang.progress}
                      style={{ width: '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-20 px-6 md:px-24 max-w-7xl mx-auto flex flex-col justify-center pointer-events-none">
        <div className="scroll-section pointer-events-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8 md:mb-12">Professional Experience</h2>
          
          <div className="space-y-8 md:space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 md:pl-8 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[1.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">{exp.title}</h3>
                  <span className="text-indigo-400 font-mono text-xs md:text-sm mt-1 md:mt-0">{exp.date}</span>
                </div>
                <div className="text-slate-400 text-sm md:text-base mb-3 md:mb-4">{exp.company} | {exp.location}</div>
                <ul className="space-y-2 md:space-y-3">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
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
      <footer className="py-8 md:py-12 border-t border-white/10 text-center text-slate-500 text-xs md:text-sm pointer-events-auto">
        <p>Terminal output complete. End of transmission.</p>
        <p className="mt-2 text-indigo-400/50">{resumeData.email}</p>
      </footer>
    </div>
  );
}
