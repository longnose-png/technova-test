import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CategorySection from './components/CategorySection';
import MissionSection from './components/MissionSection';
import ProductGrid from './components/ProductGrid';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <CategorySection />
        <MissionSection />
        <ProductGrid />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;