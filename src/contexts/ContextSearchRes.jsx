import React, { createContext, useState, useEffect } from 'react';


const SearchResultsContext = createContext();

const SearchResultsProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([])


    return (
        <SearchResultsContext.Provider value={{searchResults, setSearchResults}}>
            {children}
        </SearchResultsContext.Provider>
    );
};

export {  SearchResultsProvider, SearchResultsContext,};