import React, { useEffect, useRef } from 'react';
import './News.css';
// import { useStateContext } from '../../../context/StateContext';
import NewsAnimation from './../../../lotties/NewsAnimation.json';
import { FaNewspaper } from 'react-icons/fa';
import Lottie from "lottie-react";

const News = () => {
    // const { isChecked, istriggered } = useStateContext();
    const newsRef = useRef(null);
    useEffect(() => {
        // if (istriggered && !isChecked) {
        //     setTimeout(() => {
        //         newsRef.current.setSpeed(0.7);
        //         newsRef.current.playSegments([1, 200], true);
        //     }, 100);
        // }
        // else if (isChecked) {
        //     newsRef.current.setSpeed(1);
        //     newsRef.current.playSegments([200, 700], true);
        // }
    });
    return (
        <div className='news'>
            <div className='news-heading'>
                <h1 className='news-heading-text'>
                    <span>News</span>
                    <FaNewspaper style={{ paddingLeft: '12px' }} />
                </h1>
            </div>
            <div className="news-lottie">
                <Lottie
                    lottieRef={newsRef}
                    animationData={NewsAnimation}
                    autoplay={true}
                    loop={true}
                />
            </div>
        </div>
    )
}

export default News;