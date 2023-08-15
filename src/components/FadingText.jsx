// FadingText.js
import React from 'react';

const FadingText = ({ text, isVisible }) => {
    return <p className={`fade-text ${isVisible ? 'visible' : ''}`}>{text}</p>;
};

export default FadingText;
