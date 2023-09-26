import React from 'react';
import './Concalls.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import infosys from './../../../assets/infosys-img.png';


const Concalls = () => {
    return (
        <div>
            <div className='concall-heading'>
                <h1 className='concall-heading-text'>Conference Calls <BsFillTelephoneFill style={{ height: '20px' }} /></h1>
            </div>
            <div className='concall-body'>
                <div className='concall-carousel'>
                    <div className="headermask"></div>
                    <div className='infosys-header'>
                        <img src={infosys} alt="" height={'60px'} style={{marginLeft: '108px'}}/>
                        <div className="verticalRule"></div>
                        <span className='infosys-text'>Earnings Call Q1 2023</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Concalls;