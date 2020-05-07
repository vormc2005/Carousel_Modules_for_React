import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoCarousel from "./components/carousel"
import BootstrapCarousel from "./components/bootstrapCarousel"
function App() {
  return (
    <div className="App">

      <BootstrapCarousel />
    
      {/* <DemoCarousel />  */}
    </div>
  );
}

export default App;
