import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/components/Navbar";
import Content from "./routes/components/Content";
import Newsletter from "./routes/components/Newsletter";
import Info from "./routes/components/Info";
import Footer from "./routes/components/Footer";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
