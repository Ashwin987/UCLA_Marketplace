import React, { createContext, useState } from 'react';

// Create the context
export const ListingsContext = createContext();

// Create a provider component
export const ListingsProvider = ({ children }) => {
    const [listings, setListings] = useState([]);

    const addListing = (newListing) => {
        setListings([...listings, newListing]);
    };

    return (
        <ListingsContext.Provider value={{ listings, addListing }}>
            {children}
        </ListingsContext.Provider>
    );
};
