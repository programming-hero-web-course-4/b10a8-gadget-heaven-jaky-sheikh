import React, { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success(`${product.name} added to cart!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const addToWishlist = (product) => {
        setLikeCount((prev) => prev + 1);
        toast.info(`${product.name} added to wishlist!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <GlobalStateContext.Provider value={{ cart, likeCount, cartCount: cart.length, addToCart, addToWishlist }}>
            {children}
            <ToastContainer />
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);