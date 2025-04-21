import React from 'react';
export default function Testimonials() {
  const words = [
    { text: '“Qasim delivered our AI real-estate SaaS on time with flawless subscriptions.”', author: '— CTO, Convierge' },
    { text: '“The new mobile checkout boosted conversions by 35%. Exceptional!”', author: '— CEO, Gift Guide' }
  ];
  return (
    <section id="testimonials" className="py-24 bg-[#10163b]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#3f8cff]">Client Words</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {words.map((w,idx)=>(
            <blockquote key={idx} className="bg-[#151b3d] p-8 rounded-2xl">
              <p className="italic">{w.text}</p>
              <footer className="mt-4 text-sm font-semibold text-[#3f8cff]">{w.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}