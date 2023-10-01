import React from 'react';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import './FeaturesSection.css';
import { useStateContext } from '../../context/StateContext';

const FeaturesSection = () => {
    const { isChecked } = useStateContext();
    return (
        <div>
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
                            <div className='concall-section' style={{ height:isChecked?'815px':'609px' }}>
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

export default FeaturesSection
