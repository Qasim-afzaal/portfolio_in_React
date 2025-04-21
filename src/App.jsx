import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import Process from './components/Process';
import ProjectsCarousel from './components/ProjectsCarousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="scroll-smooth bg-[#0a0f2b] text-[#e5ecff]">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <TechStack />
      <Process />
      <ProjectsCarousel />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}