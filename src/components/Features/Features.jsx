import React, { useLayoutEffect, useRef } from 'react';
import { BiSolidPointer } from 'react-icons/bi';
import './Features.css';
import { useStateContext } from '../../context/StateContext';
import FeaturesSection from './FeaturesSection';
import ArrowSvg from './ArrowSvg';
import ToggleButton from './ToggleButton';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const { isBannerVisible } = useStateContext();
    const el = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    scrub: true,
                    start: "40% 90%",
                    end: "bottom 60%",
                }
            })
                .to(".box1", {
                    opacity: 1,
                    ease: 'power2.in',
                })
                .to(".box2", {
                    opacity: 1,
                    ease: 'power2.in',
                })
                .to(".vertical-line", {
                    height: '150px',
                    ease: 'power1.in'
                })
                .to(".box4", {
                    opacity: 1,
                    ease: 'power1.in',
                })
        }, el);
        return () => ctx.revert();
    }, []);



    return (
        <div className={`gradient-background ${isBannerVisible ? 'fade-in' : ''}`}>
            <div className='features-section'>
                <div className='fade_rule'></div>
                <div className='features-body'>
                    <div className='about' ref={el}>
                        <div className="heading-container text box1">
                            With <h1 className="brand-heading text">MARKETRACK</h1>
                        </div>
                        <div className='text about-text box2'>
                            <span className='pr-20 typewriter'>Leave Complexity Behind with Just One Click</span><BiSolidPointer
                                className='pointer' />
                        </div>
                        <div className='vertical-line'></div>
                        <div className='exclusive flex-col box4'>
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
            </div>
        </div>
    );
}

export default Features;