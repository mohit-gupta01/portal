import React, { useEffect, useState } from 'react';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import './FeaturesSection.css';
import { useStateContext } from '../../context/StateContext';
import { FaNewspaper } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FeaturesSection = () => {
    const { isChecked, istriggered, setTriggered } = useStateContext();
    const [isGridTriggered, setGridTriggered] = useState(false);
    const [isFinalGridState, setFinalGridState] = useState(false);
    
    const handleScroll = () => {
        const element = document.getElementById('trigger-features');
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight + 250;
        const windowHeight2 = window.innerHeight - 550;
        // console.log(windowHeight);
        // console.log(elementPosition.bottom);
        const triggerPoint = windowHeight;
        const gridtriggerPoint = windowHeight2;

        if (elementPosition.bottom <= triggerPoint) {
            setTriggered(true);
        } else {
            setTriggered(false);
        }
        if (elementPosition.bottom <= gridtriggerPoint) {
            setGridTriggered(true);
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
            }, 2000);
        }
    });

    return (
        <div>
            <div className='features-container' id='trigger-features'>
                <div className="features-animate" style={{ opacity: istriggered ? 1 : 0 }}>
                    {!isGridTriggered && <div className='flex-row jcCenter'>
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
                                <div className='forensic-section'></div>
                            </div>
                        </div>
                    </div>}
                    {isGridTriggered && <div className='grid-container jcCenter'>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks">Supply Chains</div>
                        <div className="blocks">Forex</div>
                        <div className="blocks">Trade</div>
                        <div className="blocks">Alternate Data</div>
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
                        <div className="blocks">Mutual Funds</div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks">KPIs</div>
                        <div className="blocks">Corporate Filings</div>
                        <div className="blocks">Forensic Scurtiny</div>
                        <div className="blocks">Govt. Data</div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks"><div className='skeleton-1'></div><div className='skeleton-2'></div></div>
                        <div className="blocks">Annual Report</div>
                        <div className="blocks">Raw Materials</div>
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