import React from 'react'
import HeroText from './HeroText'
import Capabilities from './Capabilities';

const Header = () => {
  return (
    <div className='header-text'>
      <HeroText />
      <Capabilities />
    </div>
  )
}

export default Header;