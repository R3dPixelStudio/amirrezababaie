import React from 'react';
import { resumeData } from './ResumeData';

export default function ResumePDF() {
  return (
    <div className="print-only bg-white text-black min-h-screen p-8 max-w-4xl mx-auto font-sans leading-normal">
      {/* Header */}
      <header className="border-b-2 border-indigo-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.name}</h1>
        <h2 className="text-xl text-indigo-700 font-medium mb-4">{resumeData.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">✉ {resumeData.email}</span>
          <span className="flex items-center gap-1">✆ {resumeData.phone}</span>
          <span className="flex items-center gap-1">⚲ {resumeData.location}</span>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wider">Profile Summary</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              {resumeData.summary}
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wider">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wider">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="font-semibold text-gray-900 text-sm">{edu.degree}</div>
                <div className="text-xs text-indigo-600 mb-1">{edu.branch}</div>
                <div className="text-xs text-gray-600">{edu.school} | {edu.location}</div>
                <div className="text-xs text-gray-500">{edu.date}</div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wider">Work Experience</h3>
            <div className="space-y-5">
              {resumeData.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900">{exp.title}</h4>
                    <span className="text-xs font-semibold text-indigo-600">{exp.date}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-2">{exp.company} | {exp.location}</div>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-gray-700 pl-1 leading-snug">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wider">Projects</h3>
            <div className="space-y-4">
              {resumeData.projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 text-sm">{project.name}</h4>
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
