import React from 'react';
export default function TechStack() {
  const techs = ['Flutter','React Native','Swift','Kotlin','Firebase','Node.js','GraphQL','Docker','Kubernetes','Stripe','WebRTC','OpenAI API'];
  return (
    <section id="skills" className="py-24 bg-[#0d1440]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3f8cff] mb-12">Core Tech Stack</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {techs.map((t,idx)=>(
            <div key={idx} className="flex flex-col items-center justify-center gap-3 bg-[#151b3d] rounded-2xl p-6 shadow hover:-translate-y-1 transition">
              <span className="text-lg">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}