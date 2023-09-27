import React, {useEffect, useRef} from 'react';
import './News.css';
import { useStateContext } from '../../../context/StateContext';
import newsVideo from './../../../assets/news-video.mp4';
import {FaNewspaper} from 'react-icons/fa';

const News = () => {
    const { isChecked } = useStateContext();
    const videoRef = useRef(null);
    useEffect(() => {
        if (isChecked) {
            videoRef.current.play();
            console.log(videoRef.current.currentTime);
        }
        else if (isChecked === false) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
        }
    });
    return (
        <div className='news'>
            <div className='news-heading'>
                <h1 className='news-heading-text'>
                    <span>News</span>
                    <FaNewspaper style={{paddingLeft: '12px'}}/>
                </h1>
                
            </div>
            <div className="news-video">
                <video ref={videoRef} width={'100%'} height={'100%'}>
                    <source src={newsVideo} />
                </video>
            </div>
        </div>
    )
}

export default News
