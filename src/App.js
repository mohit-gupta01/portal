import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
// import About from './components/About';
import Header from './components/Header';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <HeroBanner/>
    {/* <About/> */}
    </div>
  )
}

export default App;