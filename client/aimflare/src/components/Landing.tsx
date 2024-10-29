import React from 'react';
import { Header } from './Header';
import { Features } from './Features';
import { About } from './About';
import { Community } from './Community';
import { Footer } from './Footer';
import Hero from './hero'

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <About />
      <Community />
      <Footer />
    </div>
  );
};

export default Landing;