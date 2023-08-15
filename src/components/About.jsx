import React from 'react';
import { BiSolidPointer } from 'react-icons/bi';

const About = () => {
    return (
        <div className="gradient-background">
        <div className='about'>
            <div className='fade_rule'></div>
            <div className='p-10'>
                <div className="heading-container text">
                    With <h1 className="underlined-heading text">MARKETRACK</h1>
                </div>
                <div className='text about-text'>
                    <span className='pr-30'>Leave Complexity Behind with Just One Click</span><BiSolidPointer />
                </div>
            </div>
        </div>
        </div>
    );
}

export default About
