import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Newsletter from './components/Newsletter';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Content/>
      <Newsletter/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
