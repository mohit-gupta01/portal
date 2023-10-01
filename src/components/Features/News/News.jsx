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
        if (isChecked) {
            newsRef.current.setDirection(1);
            newsRef.current.setSpeed(1);
            newsRef.current.goToAndPlay(0, false);
        }
        else if (isChecked === false) {
            newsRef.current.pause();
            newsRef.current.setDirection(-1);
            newsRef.current.setSpeed(2);
            newsRef.current.play();
        }
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
                    autoplay={false}
                    loop={false}
                />
            </div>
        </div>
    )
}

export default News;