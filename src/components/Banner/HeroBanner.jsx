import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import HeroAnimation from "../../lotties/HeroAnimationCompressed.json";
import './HeroBanner.css';
import HeroForm from './EmailForm/HeroForm';

const HeroBanner = () => {
    const lottieRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            lottieRef.current.play();
        }, 2500);
    }, []);
    return (
        <div className='banner'>
            <HeroForm />
            <div className="animation-container  ease-in-out">
                <Lottie
                    lottieRef={lottieRef}
                    animationData={HeroAnimation}
                    autoplay={false}
                    loop={true}
                />
            </div>
        </div>
    );
}

export default HeroBanner;