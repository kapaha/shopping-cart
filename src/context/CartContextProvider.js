import React, { createContext, useContext } from 'react';
import { useCart } from 'hooks';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    return (
        <CartContext.Provider value={useCart()}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCartContext was used outside of its Provider.');
    }

    return context;
};

export { useCartContext, CartContextProvider };
