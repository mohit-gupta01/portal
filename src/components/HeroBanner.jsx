import React, { useRef, useEffect } from 'react';

import background from "../videos/bg-video.mp4"
const HeroBanner = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }, 8000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div className="video-container">
                <video ref={videoRef} loop muted playsInline >
                    <source src={background} type="video/mp4" />Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default HeroBanner;
