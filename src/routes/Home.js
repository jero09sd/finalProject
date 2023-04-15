import React from "react";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Newsletter from "./components/Newsletter";
import Info from "./components/Info";

function Home() {
  return (
    <div>
      <Hero />
      <Content/>
      <Newsletter/>
      <Info/>
    </div>
  );
}

export default Home;
