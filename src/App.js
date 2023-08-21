import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HeroBanner from './components/Banner/HeroBanner';

const App = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 1500);
    };
  }, []);

  return (
    <div>
      {!isPageLoaded ? (
        <div></div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <HeroBanner />
        </div>
      )}
    </div>
  );
};

export default App;
