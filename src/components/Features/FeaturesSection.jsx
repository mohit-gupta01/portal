import React, { useEffect, useState } from 'react';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import './FeaturesSection.css';
import { useStateContext } from '../../context/StateContext';
import { FaNewspaper } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import BackGroundGrid from './BackGroundGrid';
import Forensic from './Forensic/Forensic';

const FeaturesSection = () => {
    const { isChecked, istriggered, setTriggered, isGridTriggered, setGridTriggered } = useStateContext();
    const [isFinalGridState, setFinalGridState] = useState(false);
    const [isReverseAnimate, setReverseAnimate] = useState(false);
    const [isBottomReached, setBottomReached] = useState(false);
    const [scrollLock, setScrollLock] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById('trigger-features');
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight + 250;
        const windowHeight2 = window.innerHeight - 650;
        const bottomHeight = window.innerHeight;

        if (elementPosition.bottom <= windowHeight) {
            setTriggered(true);
        } else {
            setTriggered(false);
        }
        if (elementPosition.bottom <= windowHeight2) {
            setGridTriggered(true);
            setScrollLock(true);
            setBottomReached(false);
            setFinalGridState(false);
            setReverseAnimate(false);
            setTimeout(() => {
                setScrollLock(false);
            }, 3000);
        }
        if (elementPosition.bottom > windowHeight2 + 850) {
            setGridTriggered(false);
            setFinalGridState(false);
        }
        if (elementPosition.bottom > windowHeight2 + 700) {
            if (isBottomReached) {
                setReverseAnimate(true);
                setScrollLock(true);
                setFinalGridState(false);
                setTimeout(() => {
                    setGridTriggered(false);
                    setFinalGridState(false);
                    setScrollLock(false);
                }, 3500);
            }
        }
        if (elementPosition.bottom < bottomHeight - 400) {
            setBottomReached(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        if (isGridTriggered) {
            setTimeout(() => {
                setFinalGridState(true);
            }, 3000);
        }
        else {
            setFinalGridState(false);
        }
    }, [isGridTriggered, setFinalGridState]);

    return (
        <div>
            <div className='features-container' id='trigger-features'>
                <div className="features-animate" style={{ opacity: istriggered ? 1 : 0, overflow: scrollLock ? 'hidden' : 'unset' }}>
                    {!isGridTriggered && <div className='flex-row jcCenter appearIn'>
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
                                <div className='concall-section' style={{ height: isChecked ? '815px' : '609px' }}>
                                    <Concalls />
                                </div>
                            </div>
                            <div className="flex-row">
                                <div className='forensic-section'>
                                    <Forensic />
                                </div>
                            </div>
                        </div>
                    </div>}
                    {isFinalGridState && <BackGroundGrid />}
                    {isGridTriggered && <div className={`grid-container ${isFinalGridState ? ' grid-hide' : ' '} ${(isReverseAnimate && isBottomReached) ? ' grid-show' : " "}`}>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Supply</span>
                            <span>Chains</span>
                        </div>
                        <div className="blocks">Forex</div>
                        <div className="blocks">Trade</div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Alternate</span>
                            <span>Data</span>
                        </div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks">Valuation</div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>News</span>
                            <FaNewspaper style={{ scale: '1.3' }} />
                        </div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Con-Calls</span>
                            <BsFillTelephoneFill style={{ scale: '1' }} />
                        </div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Mutual</span>
                            <span>Funds</span>
                        </div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks">KPIs</div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Corporate</span>
                            <span>Filings</span>
                        </div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Forensic</span>
                            <span>Scurtiny</span>
                        </div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Govt.</span>
                            <span>Data</span>
                        </div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Annual</span>
                            <span>Report</span>
                        </div>
                        <div className="blocks" style={{ gap: '20px' }}>
                            <span>Raw</span>
                            <span>Materials</span>
                        </div>
                        <div className="blocks">Employees</div>
                        <div className="blocks">Sentiment</div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;