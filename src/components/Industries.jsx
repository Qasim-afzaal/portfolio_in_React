import React from 'react';
export default function Industries() {
  const left = [
    'Fintech – Secure & scalable financial applications',
    'Real Estate – Property listing & management platforms',
    'Social Media – Engaging social networking apps',
    'Beauty & Wellness – Mobile solutions for brands',
    'Sports – Fitness tracking & engagement apps',
    'Sustainable Solutions – Eco-friendly & green-tech apps'
  ];
  const right = [
    'Marketplace – E-commerce & product listings',
    'Game Companion – Apps enhancing gaming experiences',
    'Healthcare & Wellness – Telemedicine & health tracking',
    'Digital Signage – Interactive media-rich solutions',
    'SaaS Solutions – Scalable cloud-based platforms',
    'Web Scraping – Automated data extraction & analysis'
  ];
  return (
    <section id="industries" className="py-24 bg-[#10163b]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#3f8cff] text-center mb-12">Industries I’ve Served</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-sm">
          <ul className="list-disc list-inside space-y-2">{left.map((i,idx)=><li key={idx}>{i}</li>)}</ul>
          <ul className="list-disc list-inside space-y-2">{right.map((i,idx)=><li key={idx}>{i}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}