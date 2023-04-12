import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Content/>
      <Newsletter/>
    </div>
  );
}

export default App;
