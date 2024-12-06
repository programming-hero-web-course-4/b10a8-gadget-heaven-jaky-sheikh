import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);

    const addToCart = () => {
        setCartCount((prev) => prev + 1);
    };

    const addToWishlist = () => {
        setLikeCount((prev) => prev + 1);
    };

    return (
        <GlobalStateContext.Provider value={{ cartCount, likeCount, addToCart, addToWishlist }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);