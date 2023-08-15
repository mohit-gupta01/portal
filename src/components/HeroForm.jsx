import React from 'react'
import {BsArrowReturnLeft} from 'react-icons/bs';

const HeroForm = () => {
    return (
        <div className='hero-form'>
            <span className='hero-form-heading'>Enjoy Early Exclusive Benefits, Absolutely Free!</span>
            <div className='hero-form-input'>
                <input type="email" name='email' id='email' placeholder='Enter Your Email'/>
                <button>Get Exclusive Benefits<BsArrowReturnLeft style={{color: 'white', backgroundColor:'#1A1A1A', borderRadius: '50px', padding:'8px',marginLeft:'10px'}}/></button>
            </div>
        </div>
    )
}

export default HeroForm
