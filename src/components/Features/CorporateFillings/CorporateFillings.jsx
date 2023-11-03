import React, { useEffect, useRef } from 'react';
import './CorporateFillings.css';
import NSE from './../../../assets/NSE.png';
import { useStateContext } from '../../../context/StateContext';
import Lottie from "lottie-react";
import CorporateAnimation from './../../../lotties/CorporateAnimation.json';

const CorporateFillings = () => {
    const { isChecked } = useStateContext();
    const corporateRef = useRef(null);
    useEffect(() => {
        if (isChecked) {
            corporateRef.current.setDirection(1);
            corporateRef.current.setSpeed(1);
            corporateRef.current.goToAndPlay(0, false);
        }
        else if (isChecked === false) {
            corporateRef.current.pause();
            corporateRef.current.setDirection(-1);
            corporateRef.current.setSpeed(2);
            corporateRef.current.play();
        }
    })
    return (
        <div className='corporate hide-everything'>
            <div className='corporate-heading'>
                <h1 className='corporate-heading-text'>Corporate Filings</h1>
                <img src={NSE} alt="" height={'30px'} style={{ marginTop: '5px' }} />
            </div>
            <div className="corporate-lottie">
                <Lottie
                    lottieRef={corporateRef}
                    animationData={CorporateAnimation}
                    autoplay={false}
                    loop={false}
                />
            </div>
        </div>
    )
}

export default CorporateFillings;