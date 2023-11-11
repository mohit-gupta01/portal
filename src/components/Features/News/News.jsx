import React, { useEffect, useRef } from 'react';
import './News.css';
import { useStateContext } from '../../../context/StateContext';
import NewsAnimation from './../../../lotties/NewsAnimation.json';
import { FaNewspaper } from 'react-icons/fa';
import Lottie from "lottie-react";

const News = () => {
    const { isChecked } = useStateContext();
    const newsRef = useRef(null);
    useEffect(() => {
        if (!isChecked) {
            setTimeout(() => {
                newsRef.current.setSpeed(0.8);
                newsRef.current.playSegments([1, 200], true);
            }, 100);
        }
        else if (isChecked) {
            newsRef.current.setSpeed(1);
            newsRef.current.playSegments([200, 700], true);
        }
    });
    return (
        <div className='news hide-everything'>
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
                    autoplay={false}
                    loop={false}
                />
            </div>
        </div>
    )
}

export default News;