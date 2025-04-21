import React from 'react';
export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[#3f8cff] font-medium mb-2">— Hello</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            I’m <span className="text-[#3f8cff]">Muhammad Qasim</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Mobile App Expert | WebRTC, Fintech, AI Apps, Digital Signage, Real Estate & E‑Commerce
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#3f8cff] text-[#02152f] font-semibold"
          >
            Let’s Talk
          </a>
        </div>
        <div className="flex-1 blob relative max-w-xs md:max-w-sm">
          <img src="assets/images/profile.png" alt="Profile" className="rounded-3xl w-full object-cover" />
        </div>
      </div>
    </section>
  );
}