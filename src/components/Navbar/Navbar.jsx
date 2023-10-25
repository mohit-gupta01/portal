import React, { useState, useEffect } from 'react';
import './Navbar.css';
import GiftSvg from './GiftSvg';
import { PiArrowElbowDownLeftBold } from 'react-icons/pi';
import { useStateContext } from '../../context/StateContext';

const Navbar = () => {
  const { isGridTriggered } = useStateContext();
  const [triggered, setTriggered] = useState(false);
  const [isNavbarEmailFocused, setNavbarEmailFocus] = useState(false);
  const [isEmailHover, setEmailHoverState] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('trigger-element');
    const elementPosition = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight;

    if (elementPosition.bottom <= triggerPoint) {
      setTriggered(true);
    } else {
      setTriggered(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleNavbarEmailFocus = () => {
    setNavbarEmailFocus(true);
  }

  return (
    <nav>
      <div className={`navbar ${triggered ? 'inactive' : "active"}`}>
        <div className="header">
          <div className="heading-container" style={{ paddingLeft: '28.5px' }}>
            <h1 className="underlined-heading">MARKETRACK</h1>
          </div>
          <div className='announcement-heading'>
            <span className="fade-text b1">Product Announcement</span>
            <span className="fade-text b2">Coming Soon</span>
          </div>
        </div>
      </div>
      <div className={`navbar-2 ${triggered ? 'active' : "inactive"}`}>
        <div className="navbar-mask"></div>
        <div className="header">
          <div className="heading-container" style={{ paddingLeft: '28.5px' }}>
            <h1 className="underlined-heading">MARKETRACK</h1>
          </div>
          <div className='announcement-heading'>
            <span className="fade-text b1">Product Announcement</span>
            <span className="fade-text b2">Coming Soon</span>
          </div>
          <div className='nav-email-form' onMouseEnter={() => { setEmailHoverState(true); }} onMouseLeave={() => { setEmailHoverState(false); setNavbarEmailFocus(false); }} style={{ opacity: isGridTriggered ? '0' : '1' }}>
            {isEmailHover ? <div className="email-hover-state">
              <input type="email" placeholder={isNavbarEmailFocused ? '' : 'Enter Your Email'} onFocus={handleNavbarEmailFocus} onBlur={() => { setNavbarEmailFocus(false) }} />
              <span className='email-arrow-button'>
                <PiArrowElbowDownLeftBold style={{ color: 'black', width: '15px' }} />
              </span>
            </div> : <div className="email-default-state">
              <span className='nav-email-text'>Get Exclusive Benefits</span>
              <div style={{ paddingLeft: '6px' }}>
                <GiftSvg />
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;