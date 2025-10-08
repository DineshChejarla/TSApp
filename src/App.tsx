import React from "react";
import StateCounter from "./StateCounter";
import ReducerCounter from "./ReducerCounter";
import Home from "./home/Home";
import Footer from "./footer/Footer"; // ✅ import Footer
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Home Component */}
      <Home />


      {/* Counters Section */}
      <section className="counters-section">
        <div className="container">
          <h2 className="counters-title">Interactive Counters</h2>
          <p className="counters-subtitle">
            Explore React state management with these counters
          </p>
          <div className="counters-grid">
            <StateCounter />
            <ReducerCounter />
          </div>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
