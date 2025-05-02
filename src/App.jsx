import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import Process from './components/Process';
import ProjectsCarousel from './components/ProjectsCarousel';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <TechStack />
      <Process />
      <ProjectsCarousel />
      <CaseStudies />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="scroll-smooth bg-[#0a0f2b] text-[#e5ecff]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}