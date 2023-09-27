import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isBannerVisible, setBannerVisible] = useState(false);


    return (
        <Context.Provider value={{
            isVisible, isChecked, isBannerVisible, setIsVisible, setChecked, setBannerVisible
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
