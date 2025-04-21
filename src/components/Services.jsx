import React from 'react';
export default function Services() {
  const items = [
    'SaaS Platforms',
    'AI-Powered Apps',
    'E-Commerce Solutions',
    'Real-Estate Platforms',
    'Fintech & Subscription',
    'Social & Real-Time Apps'
  ];
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3f8cff] mb-12">How I Deliver Value</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx)=>(
            <div key={idx} className="bg-[#151b3d] p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-xl mb-2">{item}</h3>
              <p className="text-gray-400 text-sm">Description of {item}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}