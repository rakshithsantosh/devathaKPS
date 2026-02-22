import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Sustainability from './components/Sustainability';
import AcademicExcellence from './components/AcademicExcellence';
import HolisticDevelopment from './components/HolisticDevelopment';
import FoundationYears from './components/FoundationYears';
import Community from './components/Community';
import Admissions from './components/Admissions';
import Footer from './components/Footer';

function App() {
  return (
    <main className="app-root bg-bg-offwhite flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Sustainability />
      <AcademicExcellence />
      <HolisticDevelopment />
      <FoundationYears />
      <Community />
      <Admissions />
      <Footer />
    </main>
  );
}

export default App;
