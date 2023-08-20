import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="header">
        <div className="heading-container">
          <h1 className="underlined-heading">MARKETRACK</h1>
        </div>
        <div className='announcement-heading'>
          <span className="fade-text b1">Product Announcement</span>
          <span className="fade-text b2">Coming Soon</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
