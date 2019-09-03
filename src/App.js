import React from 'react';
import './App.css';
import Navigation from "./navigation/Navigation";
import RegularCalculator from "./RegularCalculator/RegularCalculator";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="screen">
        <RegularCalculator />
      </div>

    </div>
  );
}

export default App;
