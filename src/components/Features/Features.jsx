import React, { useEffect } from 'react';
import { BiSolidPointer } from 'react-icons/bi';
import './Features.css';
import { useStateContext } from '../../context/StateContext';
import FeaturesSection from './FeaturesSection';
import ArrowSvg from './ArrowSvg';
import ToggleButton from './ToggleButton';
const Features = () => {
    const { isVisible, setIsVisible, isBannerVisible } = useStateContext();

    useEffect(() => {
        // Function to check if the element is in the viewport
        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const handleScroll = () => {
            const element = document.querySelector('.about-text');
            if (element && isInViewport(element)) {
                setIsVisible(true);
            }
        };

        // Add the event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsVisible]);




    return (
        <div className={`gradient-background ${isBannerVisible ? 'fade-in' : ''}`}>
            <div className='about'>
                <div className='fade_rule'></div>
                <div className="heading-container text">
                    With <h1 className="brand-heading text">MARKETRACK</h1>
                </div>
                <div className='text about-text'>
                    <span className={`pr-20 ${isVisible ? 'typewriter' : 'invisible'}`}>Leave Complexity Behind with Just One Click</span><BiSolidPointer
                        className={`${isVisible ? 'pointer' : 'invisible'}`} />
                </div>
                <div className={`vertical-line ${isVisible ? 'vertical-line-after' : ""}`}></div>
                <div className='exclusive flex-col'>
                    <div className='flex-row'>
                        <p className='feel-text'>Get a Feel. Try it Out Now</p>
                        <ArrowSvg />
                    </div>
                    <div className='flex-row' style={{ alignItems: "center", paddingRight: '20px', paddingBottom: '5px' }}>
                        <span className="exclusive-brand-heading">MARKETRACK</span>
                        <ToggleButton />
                    </div>
                </div>
            </div>
            <FeaturesSection />
        </div>
    );
}

export default Features;
