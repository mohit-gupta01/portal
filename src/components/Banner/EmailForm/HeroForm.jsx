import React, { useState } from 'react';
import { BsArrowReturnLeft, BsFillCheckCircleFill, BsFillHeartFill } from 'react-icons/bs';
import './HeroForm.css';
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { v4 as uuidv4 } from 'uuid';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const HeroForm = () => {
    const [isInputFocused, setInputFocused] = useState(false);
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [isEmptyError, setEmptyError] = useState(false);
    const [isInvalidError, setInvalidError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isAlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [email, setEmail] = useState("");
    const emptyErrorMessages = ['Email Field is Feeling Rather Empty :(', 'The Email Field Misses Your Input Already!'];
    const invalidErrorMessages = [
        'Invalid email? No worries, second chances here!',
        'Oops! Email Typing Error? We\'ve all been there!',
        'Invalid Email! Just a tiny typing error? Retry Please!',
        'Invalid email, Let\'s double-check that?',
        'Oops! Invalid Email, Let\'s Fix That!',
        'Oops! Benefits Denied? A Valid Email fixes that!',
        'Valid Email = Exclusive Benefits!',
        'Hint: Valid Email = Exclusive Benefits!',
        'Oops! Invalid Email, Let\'s try again.'
    ];
    const alreadyRegisteredMessage1 = [
        'No need, we remember you!',
        'No need to double up!',
        'Guess What?',
        'Hello again, email!',
        'Email\'s a Familiar Face!'
    ];
    const alreadyRegisteredMessage2 = [
        'Email\'s in.',
        'Email\'s already in!',
        'You\'re Already in!',
        'You\'re already in!',
        'Already Exists!'
    ];
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const handleInputFocus = () => {
        setInputFocused(true);
        setInvalidError(false);
        setEmptyError(false);
        setFormSubmitted(false);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    const handleButtonClick = async () => {
        setFormSubmitted(!isFormSubmitted);
        if (email === '') {
            setEmptyError(!isEmptyError);
            return;
        } else if (!emailRegex.test(email)) {
            setInvalidError(true);
            return;
        }
        try {
            const usersCollection = firebase.firestore().collection('users');
            const existingUserQuery = await usersCollection.where('email', '==', email).get();

            if (!existingUserQuery.empty) {
                console.log('User with this email already exists');
                setAlreadyRegistered(true);
                return;
            }

            const userId = uuidv4();
            const userData = {
                email,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                isEmailSent: false,
            };

            await usersCollection.doc(userId).set(userData);
            console.log('User data stored in Firebase Firestore');
            setSuccess(true);
            setEmail(''); // Clear input field
        } catch (error) {
            console.error('Error storing user data:', error);
        }
    };

    const getPlaceholderText = () => {
        return isInputFocused ? '' : isFormSubmitted ? 'Please Enter your Email' : 'Enter Your Email';
    };

    const invalidEmailClass = isInvalidError ? 'red-text' : '';
    const animateWidth = isEmptyError ? 'input-width-change' : '';


    return (
        <div className={`hero-form ${(isAlreadyRegistered || isSuccess) && 'height-after'}`}>
            <span className='hero-form-heading' style={{display: isAlreadyRegistered?'none':'inherit'}}>Enjoy Early Exclusive Benefits, Absolutely Free!</span>
            {!(isAlreadyRegistered || isSuccess) && <div className={`hero-form-input ${invalidEmailClass} ${animateWidth}`}>
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
            </div>}
            {isAlreadyRegistered && <div className='already-registered'>
                <div className='tick'>
                    <div className='registered-message'>
                        <span className='registered-message-text'>{alreadyRegisteredMessage1[Math.floor(Math.random() * alreadyRegisteredMessage1.length)]}</span>
                        <span className='registered-message-text'>{alreadyRegisteredMessage2[Math.floor(Math.random() * alreadyRegisteredMessage2.length)]} Thank You <BsFillHeartFill style={{ height: '15px' }} /></span>
                    </div>
                    <BsFillCheckCircleFill className='registered-check' />
                </div>
            </div>}
            {isSuccess && <div className='success'>
                <div className='tick'>
                    <div className='success-message'>
                        <span className='success-message-text'>Thank You for Being First <BsFillHeartFill style={{ height: '15px' }} /></span>
                        <span className='success-message-text'>Exciting updates await, un-complicating your investing journey</span>
                    </div>
                    <BsFillCheckCircleFill className='success-check' />
                </div>
            </div>}
            {isEmptyError && <span className='error-message'>{emptyErrorMessages[Math.floor(Math.random() * emptyErrorMessages.length)]}</span>}
            {isInvalidError && <span className='error-message'>{invalidErrorMessages[Math.floor(Math.random() * invalidErrorMessages.length)]}</span>}
        </div>
    );
}

export default HeroForm;