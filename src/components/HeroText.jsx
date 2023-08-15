import React from 'react'
import Capabilities from './Capabilities';

const HeroText = () => {
  return (
    <div className='hero-text'>
      <span className='hero-text-content' data-text="Investing is Complex,">Investing is Complex,</span>
      
      <span className='hero-text-content' data-text="But what if you had a tool that">But what if you had a tool that</span>
      <div>
        <Capabilities/>
      </div>
    </div>
  )
}

export default HeroText;