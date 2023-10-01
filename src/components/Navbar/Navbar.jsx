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
    // <div className='navbar-2'>
    //   <div className='navbar-mask'></div>
    //   <div className="header">
    //     <div className="heading-container">
    //       <h1 className="underlined-heading">MARKETRACK</h1>
    //     </div>
    //     <div className='announcement-heading'>
    //       <span className="fade-text b1">Product Announcement</span>
    //       <span className="fade-text b2">Coming Soon</span>
    //     </div>
    //     <div className='nav-email-form'>
    //       <span className='nav-email-text'>Get Exclusive Benifits</span>
    //       <div style={{paddingLeft: '6px'}}>
    //         <svg id="Gift" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20.5" height="18.75" viewBox="0 0 27.373 29.979">
    //           <defs>
    //             <linearGradient id="linear-gradient" x2="1" y2="1" gradientUnits="objectBoundingBox">
    //               <stop offset="0.07" stop-color="#f2ff81" />
    //               <stop offset="0.96" stop-color="#e7bd00" />
    //             </linearGradient>
    //           </defs>
    //           <path id="Right_Box" data-name="Right Box" d="M30.17,15.328H18.984v17.24h9.607A2.112,2.112,0,0,0,30.7,30.462V15.855A.528.528,0,0,0,30.17,15.328Z" transform="translate(-4.377 -3.09)" opacity="0.9" fill="url(#linear-gradient)" />
    //           <path id="Left_Box" data-name="Left Box" d="M4.5,15.855V30.462a2.112,2.112,0,0,0,2.106,2.106h9.607V15.328H5.026A.528.528,0,0,0,4.5,15.855Z" transform="translate(-3.447 -3.09)" opacity="0.9" fill="url(#linear-gradient)" />
    //           <rect id="Vertical_Ribbon" data-name="Vertical Ribbon" width="3" height="20" transform="translate(12.5 9.979)" fill="red" />
    //           <path id="Ribbon" d="M28.642,9.093H23.1a3.866,3.866,0,0,0,1.336-2.9A4.058,4.058,0,0,0,20.279,2.25a3.671,3.671,0,0,0-3.218,1.8,3.671,3.671,0,0,0-3.218-1.8A4.058,4.058,0,0,0,9.692,6.2a3.843,3.843,0,0,0,1.336,2.9H5.481A2.1,2.1,0,0,0,3.375,11.2v1.316a.264.264,0,0,0,.263.263H30.485a.264.264,0,0,0,.263-.263V11.2A2.1,2.1,0,0,0,28.642,9.093Zm-8.363-5A2.163,2.163,0,0,1,22.5,6.2,2.163,2.163,0,0,1,20.279,8.3H18.062C18.062,5.145,19.055,4.092,20.279,4.092Zm-6.435,0c1.224,0,2.217,1.053,2.217,4.211H13.844A2.163,2.163,0,0,1,11.626,6.2,2.163,2.163,0,0,1,13.844,4.092Z" transform="translate(-3.375 -2.25)" fill="red" opacity="0.9" />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Navbar;
