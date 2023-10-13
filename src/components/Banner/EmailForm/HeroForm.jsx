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
            <span className='hero-form-heading' style={{ display: isAlreadyRegistered ? 'none' : 'inherit' }}>Enjoy Early Exclusive Benefits, Absolutely Free!</span>
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
            {!isEmptyError && !isInvalidError &&<span className='error-message' style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '15px', textAlign: 'left', color: '#aaa' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15.141" height="11.595" viewBox="0 0 15.141 11.595">
                    <path id="Icon_ionic-ios-checkmark" data-name="Icon ionic-ios-checkmark" d="M25.5,13.563l-1.237-1.273a.266.266,0,0,0-.2-.084h0a.255.255,0,0,0-.2.084l-8.578,8.641L12.164,17.81a.272.272,0,0,0-.394,0l-1.252,1.252a.28.28,0,0,0,0,.4L14.456,23.4a1.245,1.245,0,0,0,.823.4,1.3,1.3,0,0,0,.816-.387H16.1l9.4-9.45A.3.3,0,0,0,25.5,13.563Z" transform="translate(-10.434 -12.206)" fill="#aaa" />
                </svg><span style={{paddingLeft: '6px'}}>No Spam Ever, Our Promise</span>
            </span>}
            {isEmptyError && <span className='error-message'>{emptyErrorMessages[Math.floor(Math.random() * emptyErrorMessages.length)]}</span>}
            {isInvalidError && <span className='error-message'>{invalidErrorMessages[Math.floor(Math.random() * invalidErrorMessages.length)]}</span>}
        </div>
    );
}

export default HeroForm;