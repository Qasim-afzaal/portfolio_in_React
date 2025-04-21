import React from 'react';
export default function Stats() {
  const items = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Delivered', value: '15+' },
    { label: 'AI-Powered Apps', value: '✔' },
    { label: 'Client-First Approach', value: '✔' }
  ];
  return (
    <section id="stats" className="py-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((i,idx)=>(
          <div key={idx} className="bg-[#151b3d] p-6 rounded-2xl shadow">
            <span className="text-3xl font-extrabold text-[#3f8cff]">{i.value}</span>
            <p className="mt-1 text-sm text-gray-300">{i.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}