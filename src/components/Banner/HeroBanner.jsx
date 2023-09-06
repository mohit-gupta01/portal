import React, { useRef } from 'react';
import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';
// import '@dotlottie/react-player/dist/index.css'; 
import './HeroBanner.css';
import HeroForm from './EmailForm/HeroForm';

const HeroBanner = () => {
    const lottieRef = useRef();
    return (
        <div className='banner'>
            <HeroForm />
            <div className="animation-container  ease-in-out">
                <DotLottiePlayer
                    lottieRef={lottieRef}
                    src = {process.env.PUBLIC_URL + '/lotties/HeroAnimationCompressed.lottie'}
                    autoplay={false}
                    loop
                    onEvent={(event = PlayerEvents) => {
                        if(event === PlayerEvents.Ready){
                            setTimeout(()=>{
                                lottieRef.current.play();
                            }, 500);
                        }
                    }}
                />
            </div>
            
        </div>
    );
}

export default HeroBanner;