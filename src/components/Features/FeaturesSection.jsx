import './FeaturesSection.css';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import HeroForm from './../Banner/EmailForm/HeroForm';
import Forensic from './Forensic/Forensic';
import { useStateContext } from '../../context/StateContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FeaturesSection = () => {

    const { isChecked } = useStateContext();
    const scrolling = {
        enabled: true,
        events: "scroll,wheel,touchmove,pointermove".split(","),
        prevent: e => e.preventDefault(),
        disable() {
            if (scrolling.enabled) {
                scrolling.enabled = false;
                window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
                scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false }));
            }
        },
        enable() {
            if (!scrolling.enabled) {
                scrolling.enabled = true;
                window.removeEventListener("scroll", gsap.ticker.tick);
                scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
            }
        }
    };

    function goToSection(yValue) {
        // if (scrolling.enabled) { // skip if a scroll tween is in progress
        // scrolling.disable();
        gsap.set("body", { overflow: "hidden" });
        gsap.to(window, {
            // scrollTo: {y: window.scrollY + yValue, autoKill: false},
            onComplete: () => {
                // scrolling.enable();
                gsap.set("body", { overflow: "auto" });
            },
            duration: 5,
            ease: "power2"
        });

    }


    useEffect(() => {
        const tl1 = gsap.timeline();
        const tl2 = gsap.timeline();

        tl1.to('.news-lottie', {
            scale: 0,
        })
            .to('.forensic-video', {
                scale: 0,
            }, "<")
            .to('.corporate-lottie', {
                scale: 0,
            }, "<")
            .to('.concall-body', {
                scale: 0,
            }, "<")
            .to('.news-section', {
                height: 550,
                width: 625,
            }, "<")
            .to('.concall-section', {
                height: 550,
                width: 625,
            }, "<")
            .to('.corporate-section', {
                height: 550,
                width: 625,
                top: 0
            }, "<")
            .to('.forensic-section', {
                height: 550,
                width: 625,
            }, "<")
            .to('.grid-item', {
                opacity: 1,
            }, ">")
            .fromTo('.grid-container',{
                scale: 1
            }, {
                scale: 0.3,
                yPercent: 7.5,
                ease: "power1.inOut",
                label: "label1",
            }, "<");

        tl2.fromTo('.grid-container',{
            scale: 0.3,
        }, {
            scale: 0.1,
            yPercent: 7,
            ease: "power1.inOut",
            label: "label1",
        },)
            .to('.hide-everything', {
                opacity: 0
            }, "<50%")
            .to(".complexity-text", {
                opacity: 1,
                scale: 1,
                y: 450
            }, ">")
            .to(".grid-email", {
                opacity: 1,
                scale: 1,
                y: 450
            }, "<");



        // Use ScrollTrigger to scrub the timeline when the "forensic-section" div's bottom hits the bottom of the viewport.
        ScrollTrigger.create({
            trigger: '.center-mask', // The element you want to trigger the first part of the animation
            start: 'bottom center', // Start when the bottom of the trigger element hits the bottom of the viewport
            animation: tl1, // Use the first created GSAP timeline (tl1)
            markers: false,
            scrub: 2,
            end: "+=60%",
            snap: {
                snapTo:[0,1],
                duration: 2,
                ease: 'power1.in'
            },
            onEnter: () => {
                goToSection(50);
            },
            onEnterBack: () => {
                goToSection(-50);
            }
        });

        ScrollTrigger.create({
            trigger: '.center-mask2', // The element you want to trigger the first part of the animation
            start: '60% center', // Start when the bottom of the trigger element hits the bottom of the viewport
            animation: tl2, // Use the first created GSAP timeline (tl1)
            markers: false,
            scrub: 2,
            end: "+=10%",
            snap: {
                snapTo:[0,1],
                duration: 2,
                ease: 'none'
            },
            onEnter: () => {
                goToSection(50);
            },
            onEnterBack: () => {
                goToSection(-50);
            }
        });
        ScrollTrigger.create({
            trigger: '.exclusive-brand-heading',
            start: 'bottom bottom',
            onEnter: ()=>{gsap.to('.grid-container',{
                scale: 1,
            })}
        });

    }, []);
    return (
        <>
        <div className="center-mask" style={{ paddingTop: isChecked ? '300px' : '250px' }}>
            <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item"><span className='hide-everything'>Valuation</span></div>
                <div className="grid-item">
                    <div className='flex-col alignItems-center hide-everything'>
                        <span>Mutual</span>
                        <span>Funds</span>
                    </div>
                </div>
                <div className="grid-item">
                    <div className='flex-col alignItems-center hide-everything'>
                        <span>Supply</span>
                        <span>Chains</span>
                    </div>
                </div>
                <div className="grid-item"><span className='hide-everything'>Forex</span></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item"><span className='hide-everything'>Trade</span></div>
                <div className="news-section"><News /></div>
                <div className="concall-section" style={{ height: isChecked ? '815px' : '609px' }}><Concalls /></div>
                <div className="grid-item">
                    <div className='flex-col alignItems-center hide-everything'>
                        <span>Alternate</span>
                        <span>Data</span>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className='flex-col alignItems-center hide-everything'>
                        <span>Govt.</span>
                        <span>Data</span>
                    </div>
                </div>
                <div className="corporate-section" style={{ top: isChecked ? '-310px' : '-105px' }}><CorporateFillings /></div>
                <div className="forensic-section"><Forensic /></div>
                <div className="grid-item"><span className=' hide-everything'>KPIs</span></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className='flex-col alignItems-center hide-everything'>
                        <span>Annual</span>
                        <span>Report</span>
                    </div>
                </div>
                <div className="grid-item">
                    <div className='flex-col alignItems-center hide-everything'>
                        <span>Raw</span>
                        <span>Materials</span>
                    </div>
                </div>
                <div className="grid-item triggerClass"><span className='hide-everything'>Employees</span></div>
                <div className="grid-item"><span className='hide-everything'>Sentiment</span></div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="skeleton-block hide-everything">
                        <div className='skeleton-1'></div>
                        <div className='skeleton-2'></div>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

            </div>
            <div className="complexity-text">
                <span>Leave Complexity Behind.</span>
            </div>
            <div className='grid-email'>
                <HeroForm fontSize={'22.5px'} textColor={'#A5FF95'} animationTime={'2.5s'} />
            </div>
        </div>
        <div className="center-mask2"></div>
        </>
    );
};

export default FeaturesSection;