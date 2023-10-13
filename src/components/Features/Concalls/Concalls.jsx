import React, { useState, useRef, useEffect } from 'react';
import './Concalls.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import infosys from './../../../assets/infosys-img.png';
import infosysOff from './../../../assets/infosys-off.png';
import Card from './Card';
import { useStateContext } from './../../../context/StateContext';
import Lottie from 'lottie-react';
import ConcallAnimation from './../../../lotties/ConcallAnimation.json';


const Concalls = () => {
    const { isChecked, istriggered, isCardChecked, setCardChecked } = useStateContext();
    const totalSlides = 3;
    const [currentIndex, setCurrentIndex] = useState(3);
    const concallRef = useRef(null);

    useEffect(() => {
        if (isChecked === false) {
            setCurrentIndex(3);
        }
        if (istriggered && !isChecked) {
            setTimeout(() => {
                concallRef.current.goToAndPlay(1, true);
            }, 500);
        }
    }, [isChecked, istriggered, setCurrentIndex]);

    const handleClick = (index) => {
        setCurrentIndex(index);
        document.getElementById('button0').classList.remove('button-active');
        document.getElementById('button1').classList.remove('button-active');
        document.getElementById('button2').classList.remove('button-active');
        const element = document.getElementById(`button${index}`);
        element.classList.add('button-active');
        setCardChecked(false);
    }

    return (
        <div className='concall'>
            <div className='concall-heading'>
                <h1 className='concall-heading-text'>Conference Calls <BsFillTelephoneFill style={{ height: '20px' }} /></h1>
            </div>
            <div className='concall-body'>
                {!isChecked &&
                    <div className='concall-body-off'>
                        <div className='infosys-header-off'>
                            <img src={infosysOff} alt="" height={'60px'} />
                            <div className="verticalRule"></div>
                            <span className='infosys-text'>Earnings Call Q1 2023</span>
                        </div>
                        <div className='concall-lottie'>
                            <Lottie
                                lottieRef={concallRef}
                                animationData={ConcallAnimation}
                                autoplay={false}
                                loop={false}
                            />
                        </div>
                        <div style={{ position: 'relative', paddingTop: '70px' }}>
                            <span style={{ fontSize: '34px' }}>25 Pages</span>
                        </div>
                    </div>
                }
                {isChecked && <div className='concall-body-on flex-col'>
                    <div className='concall-carousel' style={{ height: (currentIndex === 0) ? '530px' : ((currentIndex===1)&&!isCardChecked) ?'473px': ((currentIndex===1)&&isCardChecked) ?'608px' : '593px' }}>
                        <div className="headermask"></div>
                        <div className='infosys-header'>
                            <img src={infosys} alt="" height={'60px'} style={{ marginLeft: '108px' }} />
                            <div className="verticalRule"></div>
                            <span className='infosys-text'>Earnings Call Q1 2023</span>
                        </div>
                        <div className="carousel-buttons">
                            <button className='carousel-button' id='button0' onClick={() => handleClick(0)}>On Attrition</button>
                            <button className='carousel-button' id='button1' onClick={() => handleClick(1)}>On Guidance Cut</button>
                            <button className='carousel-button button-active' id='button2' onClick={() => handleClick(2)}>On Generative AI</button>
                        </div>

                        <div className="card-container">
                            <Card index={currentIndex} />
                        </div>

                        <div className="carousel-dots">
                            {Array(totalSlides).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className='dot'
                                    style={{backgroundColor: index===currentIndex?'#0090FF':'#555555'}}
                                    onClick={() => { handleClick(index); }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-col concall-footer'>
                        <span className='blurred-text' style={{ fontSize: '30px' }}>Eliminates Noise</span>
                        <span style={{ fontSize: '26.25px' }}>So You Can Focus on What Matters</span>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Concalls;