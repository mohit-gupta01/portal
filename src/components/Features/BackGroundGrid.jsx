import React from 'react';
import './BackGroundGrid.css';
import HeroForm from './../Banner/EmailForm/HeroForm';

const BackGroundGrid = () => {
    const componentsToRender = Array(800).fill(null);
    let randomNo = [];
    function calcRandom() {
        for(let i=1;i<=8;i++){
            randomNo[i] = Math.floor(Math.random()*100*i);
        }
    }
    setInterval(() => {
        calcRandom();
    }, 1000);
    function bulb(index){
        if(index in randomNo){
            return true;
        }
        else return false;
    }
    return (
        <div className='bg-grid-container'>
            <div className='bgblock-grid'>
                {componentsToRender.map((_, index) => (
                    <div className="bgblock" key={index} style={{backgroundColor: bulb(index)?'#333333':'#151515'}}></div>
                ))}
            </div>
            <div className="complexity-text">
                <span>Leave Complexity Behind.</span>
            </div>
            <div className='grid-email'>
                <HeroForm fontSize={'22.5px'} textColor={'#A5FF95'} animationTime={'2.5s'}/>
            </div>
        </div>
    );
};

export default BackGroundGrid;