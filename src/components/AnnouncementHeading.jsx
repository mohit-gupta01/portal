import React, { useState, useEffect } from 'react';
import FadingText from './FadingText';

const FadingTextContainer = () => {
    const [isFaded, setIsFaded] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsFaded(!isFaded);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [isFaded]);

    return (
        <div>
            <FadingText text="Product Announcement" isVisible={!isFaded} />
            <FadingText text="Coming Soon" isVisible={isFaded} />
        </div>
    );
};

export default FadingTextContainer;
