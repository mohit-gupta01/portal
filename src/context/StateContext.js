import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isBannerVisible, setBannerVisible] = useState(false);
    const [istriggered, setTriggered] = useState(false);
    const [isCardChecked, setCardChecked] = useState(false);

    return (
        <Context.Provider value={{
            isVisible, isChecked, isBannerVisible, istriggered, isCardChecked, setCardChecked, setTriggered, setIsVisible, setChecked, setBannerVisible
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
