import React from 'react';
import { useStateContext } from '../../context/StateContext';

const ToggleButton = () => {
    const { isChecked, setChecked } = useStateContext();
    const handleClick = () => {
        setChecked(document.querySelector("input[type=checkbox]").checked);
        console.log(isChecked);
    }
    return (
        <div className="wrapper">
            <input type="checkbox" id="toggle-button-css" className='toggle-input' onChange={handleClick} />
            <label htmlFor="toggle-button-css" className="toggle-button toggle-button-css toggle-label">
                <div className="slider"></div>
            </label>
        </div>
    )
}

export default ToggleButton
