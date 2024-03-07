import React, { createContext, useContext, useState, useEffect } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import { Button, Flex, Space, Select, Input, Collapse, Checkbox, Card } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchResultsContext } from '../../contexts/ContextSearchRes.jsx';
/**
 * DAVOU
 * import_perenualFetch: Imports the js file for fetching data from the perenual API 
 * import_{_useState,_useEffect_}: Allows us to manage state
 */
import perenualFetch from '../../utils/perenualFetch'

import './style.css'

function DashSearchBar({ name, setName }) {
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
          const data = res.data.data

          //If plant ID is more than 3000, remove it from array
          const filteredResults = data.filter(function (i) {
            return i.id < 3000
          })
          console.log(filteredResults)
          setSearchResults(filteredResults)

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
    <Card
      className="dashSearchCard"
      bordered={false}
      title="Plant Finder"
    >
      <div className="dashSearch">
        <Search
          placeholder="Search for Plant"
          onSearch={onSearch}
          onChange={handleInputChange}
          className="dashSearchInput"
        />
      </div>
    </Card>
  )
};

export default DashSearchBar