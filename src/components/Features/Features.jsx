import React, { useEffect } from 'react';
import { BiSolidPointer } from 'react-icons/bi';
import './Features.css';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import { useStateContext } from '../../context/StateContext';
import News from './News/News';

const Features = () => {

    const { isVisible, setIsVisible, isChecked, setChecked, isBannerVisible } = useStateContext();

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

    const handleClick = () => {
        setChecked(document.querySelector("input[type=checkbox]").checked);
        console.log(isChecked);
    }


    return (
        <div className={`gradient-background ${isBannerVisible ? 'fade-in' : ''}`}>
            <div className='about'>
                <div className='fade_rule'></div>
                <div className='p-10'>
                    <div className="heading-container text">
                        With <h1 className="brand-heading text">MARKETRACK</h1>
                    </div>
                    <div className='text about-text'>
                        <span className={`pr-20 ${isVisible ? 'typewriter' : ''}`}>Leave Complexity Behind with Just One Click</span><BiSolidPointer />
                    </div>
                </div>
                <div className={`vertical-line ${isVisible ? 'vertical-line-after' : ""}`}></div>
                <div className='exclusive flex-col'>
                    <div className='flex-row' >
                        <p className='feel-text'>Get a Feel. Try it Out Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36.528" height="45" viewBox="0 0 36.528 62.299" style={{ paddingTop: '14px', paddingLeft: '6px' }}>
                            <path id="Path_376" data-name="Path 376" d="M4,17.049s14.8-2.162,28.472,11.6C50.8,47.1,18.582,72.492,18.582,72.492m0,0,17.8,2.708m-19.034-.91,3.937-19.638" transform="translate(-3.711 -14.879)" fill="none" stroke="#fff" strokeWidth="4" />
                        </svg>


                    </div>

                    <div className='flex-row' style={{ alignItems: "center", paddingRight: '20px', paddingBottom: '5px' }}>
                        <span className="exclusive-brand-heading">MARKETRACK</span>
                        <div className="wrapper">
                            <input type="checkbox" id="toggle-button-css" className='toggle-input' onChange={handleClick} />
                            <label htmlFor="toggle-button-css" className="toggle-button toggle-button-css toggle-label">
                                <div className="slider"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='features-container'>
                <div className="flex-row jcCenter">
                    <div className="flex-col" style={{ gap: '22px' }}>
                        <div className="flex-row">
                            <div className='news-section'><News /></div>
                        </div>
                        <div className="flex-row">
                            <div className='corporate-section'><CorporateFillings /></div>
                        </div>
                    </div>
                    <div className="flex-col" style={{ gap: '22px' }}>
                        <div className="flex-row">
                            <div className='concall-section'><Concalls /></div>
                        </div>
                        <div className="flex-row">
                            <div className='forensic-section'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Features;
