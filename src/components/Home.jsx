import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import HeroBanner from './Banner/HeroBanner';
import Features from './Features/Features';
// import Lenis from '@studio-freight/lenis';

const Home = () => {
    
    // useEffect(()=>{
    //     // Smooth scroll
	// 		const lenis = new Lenis();
	// 		lenis.on("scroll", (e) => {
	// 			console.log(e);
	// 		});

	// 		function raf(time) {
	// 			lenis.raf(time);
	// 			requestAnimationFrame(raf);
	// 		}

	// 		requestAnimationFrame(raf);
    // })
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