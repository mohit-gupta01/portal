import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import HeroBanner from './Banner/HeroBanner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HeroBanner />
        </div>
    );
}

export default Home;