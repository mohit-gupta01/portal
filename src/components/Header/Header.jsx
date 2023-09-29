import React from 'react'
import HeroText from './HeroText'
import Capabilities from './Capabilities';

const Header = () => {
  return (
    <div className='header-text' style={{height: '200px'}}>
      <HeroText />
      <Capabilities />
    </div>
  )
}

export default Header;