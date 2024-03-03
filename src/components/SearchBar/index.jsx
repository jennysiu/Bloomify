import React, { createContext, useContext, useState, useEffect } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import { Button, Flex, Space, Select, Input, Collapse, Checkbox } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchResultsContext } from '../../contexts/ContextSearchRes.jsx';
/**
 * DAVOU
 * import_perenualFetch: Imports the js file for fetching data from the perenual API 
 * import_{_useState,_useEffect_}: Allows us to manage state
 */
import perenualFetch from '../../utils/perenualFetch'

import './style.css'

function SearchBar({name, setName}) {
  /**
 * calling hooks from context file for storing dynamically changing user input
 * {Search} - ant design?
 * setCollapsed - ant design hook for  collapsible filter
 */

  const { searchResults, setSearchResults } = useContext(SearchResultsContext);
  
  const { Search } = Input;
  let navigate = useNavigate();


  // Function that prevent effects when user hasnt searched
  useEffect(() => {
    if (!name) {
      return;
    }
  });


  /**
   * Passes user search into getPerenualNameResults() function
   * and returns results as an object
   */
  const onSearch = (value, _e, info) => {
    if (value) {
      perenualFetch.getPerenualNameResults(value)
        .then((res) => {

          setSearchResults(res.data)
          navigate('/search-results')
        })
        .catch((err) => console.log(err));
    } else {
      console.log("enter a name first")
    }
  };


  const handleInputChange = (event) => {
    setName(event.target.value)
  };



  return (
    <Space direction="vertical">

      <Search placeholder="Search for Plant" onSearch={onSearch} onChange={handleInputChange} className="search" />
      
    </Space>
  )
};


export default SearchBar