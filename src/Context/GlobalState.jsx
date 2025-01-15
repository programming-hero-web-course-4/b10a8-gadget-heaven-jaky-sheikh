import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    // console.log(cart);
    // const addToCart = () => {
    //     setCartCount((prev) => prev + 1);
    // };

    const addToCart = (product) => {
        setCart((prevCart) => {
            // if (!prevCart.some((item) => item.id === product.id)) {
            //     return [...prevCart, product];
            // }
            return [...prevCart, product];
        });
    };

    const addToWishlist = () => {
        setLikeCount((prev) => prev + 1);
    };

    return (
        <GlobalStateContext.Provider value={{ cart, likeCount, cartCount: cart.length, addToCart, addToWishlist }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);