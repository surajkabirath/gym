import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import About from "./components/About/About";
const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Programs />
      <Plans />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
