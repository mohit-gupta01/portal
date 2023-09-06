import React, { useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import './HeroForm.css';

const HeroForm = () => {
    const [isInputFocused, setInputFocused] = useState(false);
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [isEmptyError, setEmptyError] = useState(false);
    const [isInvalidError, setInvalidError] = useState(false);
    const [email, setEmail] = useState("");
    const emptyErrorMessages = ['Email Field is Feeling Rather Empty :(', 'The Email Field Misses Your Input Already!'];
    const invalidErrorMessages = ['Invalid email? No worries, second chances here!', 'Oops! Email Typing Error? We\'ve all been there!', 'Invalid Email! Just a tiny typing error? Retry Please!', 'Invalid email, Let\'s double-check that?', 'Oops! Invalid Email, Let\'s Fix That!', 'Oops! Benefits Denied? A Valid Email fixes that!', 'Valid Email = Exclusive Benefits!', 'Hint: Valid Email = Exclusive Benefits!', 'Oops! Invalid Email, Let\'s try again.'];
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    const handleButtonClick = () => {
        setFormSubmitted(!isFormSubmitted);
        if (email === '') {
            setEmptyError(!isEmptyError);
        }
        else {
            setInvalidError(!emailRegex.test(email));
        }
    };

    const getPlaceholderText = () => {
        return isInputFocused ? '' : isFormSubmitted ? 'Please Enter your Email' : 'Enter Your Email';
    };

    // const getPlaceholderColor = () => {
    //     return isFormSubmitted && !isInputFocused ? 'white' : '#BBBBBB';
    // };

    return (
        <div className='hero-form'>
            <span className='hero-form-heading'>Enjoy Early Exclusive Benefits, Absolutely Free!</span>
            <div className='hero-form-input'>

                <input
                    type="email"
                    name='email'
                    id='email'
                    placeholder={getPlaceholderText()}
                    autoCapitalize='off'
                    autoCorrect='off'
                    spellCheck='false'
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmptyError(false); setInvalidError(false); }}
                />
                <button className='hero-form-button' onClick={handleButtonClick}>
                    <span className='button-text'>Get Exclusive Benefits</span>
                    <BsArrowReturnLeft className='arrow-icon' />
                </button>

            </div>
            {isEmptyError && <span className='error-message'>{emptyErrorMessages[Math.floor(Math.random() * emptyErrorMessages.length)]}</span>}
            {isInvalidError && <span className='error-message'>{invalidErrorMessages[Math.floor(Math.random() * invalidErrorMessages.length)]}</span>}
        </div>
    );
}

export default HeroForm;