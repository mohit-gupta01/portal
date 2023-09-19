import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import HeroBanner from './Banner/HeroBanner';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HeroBanner />
            <Features/>
        </div>
    );
}

export default Home;