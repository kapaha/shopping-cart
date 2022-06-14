import React, { createContext, useContext } from 'react';
import { useUI } from 'hooks';

const MobileNavContext = createContext();

const MobileNavContextProvider = ({ children }) => {
    return (
        <MobileNavContext.Provider value={useUI()}>
            {children}
        </MobileNavContext.Provider>
    );
};

const useMobileNavContext = () => {
    const context = useContext(MobileNavContext);

    if (context === undefined) {
        throw new Error(
            'useMobileNavContext was used outside of its Provider.'
        );
    }

    return context;
};

export { MobileNavContextProvider, useMobileNavContext };
