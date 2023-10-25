import React, { useRef, useEffect } from 'react';
import './Forensic.css';
import forensicScrutiny from './../../../assets/ForensicScrutiny.mp4';
import { useStateContext } from '../../../context/StateContext';

const Forensic = () => {
    const forensicRef = useRef(null);
    const { istriggered, isGridTriggered } = useStateContext();
    useEffect(() => {
        if (istriggered && !isGridTriggered) {
            forensicRef.current.play();
        }
        if (isGridTriggered) {
            forensicRef.current.pause();
        }
    });
    return (
        <div>
            <div className="forensic">
                <div className="forensic-heading">
                    <span>Forensic Scrutiny</span>
                </div>
                <div className="forensic-video flex-col">
                    <video ref={forensicRef} width={'80%'} height={'80%'}>
                        <source src={forensicScrutiny} />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Forensic;