import React, { useEffect, useRef } from 'react';
import './CorporateFillings.css';
import corporateFillings from './../../../assets/corporate-fillings.mp4';
import NSE from './../../../assets/NSE.png';
import { useStateContext } from '../../../context/StateContext';


const CorporateFillings = () => {
    const { isChecked } = useStateContext();
    const videoRef = useRef(null);
    useEffect(() => {
        if (isChecked) {
            videoRef.current.play();
            console.log(videoRef.current.currentTime);
        }
        else if (isChecked === false) {
            // if (videoRef.current.currentTime > 0) {
            //     videoRef.current.playbackRate = -1;
            //     videoRef.current.play();
            // }
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
        }
    });
    return (
        <div className='corporate'>
            <div className='corporate-heading'>
                <h1 className='corporate-heading-text'>Corporate Filings</h1>
                <img src={NSE} alt="" height={'30px'} style={{ marginTop: '5px' }} />
            </div>
            <div className="corporate-video">
                <video ref={videoRef} width={'100%'} height={'100%'}>
                    <source src={corporateFillings} />
                </video>
            </div>
        </div>
    )
}

export default CorporateFillings