import React, { useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full bg-[#0a0f2b]/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <span className="text-2xl font-extrabold text-[#3f8cff]">Qasim</span>
        <nav className={`${open ? 'block' : 'hidden'} md:flex gap-6 text-sm`}>
          {['home','services','stats','skills','industries','process','projects','testimonials','contact'].map(id => (
            <a key={id} href={`#${id}`} className="hover:text-[#3f8cff]">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          <span className="text-gray-200">☰</span>
        </button>
      </div>
    </header>
);
}