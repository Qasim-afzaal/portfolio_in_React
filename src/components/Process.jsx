import React from 'react';
export default function Process() {
  const steps = [
    { title: 'Discovery', desc: 'Define goals, users & KPIs.' },
    { title: 'Prototype', desc: 'Clickable Figma & architecture plans.' },
    { title: 'Build', desc: 'Weekly sprints & MVP shipping.' },
    { title: 'Scale', desc: 'Launch, monitor & optimise.' }
  ];
  return (
    <section id="process" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3f8cff] mb-12">My 4-Step Process</h2>
        <div className="grid gap-10 md:grid-cols-4 text-left">
          {steps.map((s,idx)=>(
            <div key={idx} className="flex flex-col gap-2">
              <div className="text-4xl font-extrabold text-[#3f8cff]">{idx+1}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}