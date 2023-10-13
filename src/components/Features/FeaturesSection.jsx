import React, { useEffect } from 'react';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import './FeaturesSection.css';
import { useStateContext } from '../../context/StateContext';


const FeaturesSection = () => {
    const { isChecked, istriggered, setTriggered } = useStateContext();

    const handleScroll = () => {
        const element = document.getElementById('trigger-features');
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight + 250;
        console.log(windowHeight);
        console.log(elementPosition.bottom);
        const triggerPoint = windowHeight;

        if (elementPosition.bottom <= triggerPoint) {
            setTriggered(true);
        } else {
            setTriggered(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div>
            <div className='features-container' id='trigger-features'>
                <div className="features-animate flex-row jcCenter" style={{opacity: istriggered?1:0}}>
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
                </div>

            </div>
        </div>
    )
}

export default FeaturesSection;