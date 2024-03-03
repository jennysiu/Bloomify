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




function SearchBar() {
  /**
 * calling hooks from context file for storing dynamically changing user input
 * {Search} - ant design?
 * setCollapsed - ant design hook for  collapsible filter
 */

  const { searchResults, setSearchResults} = useContext(SearchResultsContext);
  const [name, setName] = useState('');
  const [watering, setWatering] = useState('');
  const [sunlight, setSunlight] = useState('');
  const [isIndoors, setIndoors] = useState('');
  const { Search } = Input;
  //const [searchResults, setSearchResults] = useState([])

  // const { nameVal, wateringVal, sunlightVal, isIndoorsVal } = useContext(searchResultsContext);
  // const [name, setName] = nameVal;
  // const [watering, setWatering] = wateringVal;
  // const [sunlight, setSunlight] = sunlightVal;
  // const [isIndoors, setIndoors] = isIndoorsVal;
  

  let navigate = useNavigate();

  const wateringOption = ['frequent', 'average', 'minimum', 'none']
  const sunlightOption = ['full_shade', 'part_shade', 'sun-part_shade', 'full_sun']

  // Function that prevent effects when user hasnt searched
  useEffect(() => {
    if (!name) {
      return;
    }
  });

  const onChange = (value) => {

    wateringOption.find((element) => element === value) ? setWatering(value) : setWatering('');
    sunlightOption.find((element) => element === value) ? setSunlight(value) : setSunlight('');

    try {
      checked.target.checked ? setIndoors(1) : setIndoors('')
    } catch (error) {
      return
    }

  }

  /**
   * Passes user search into getPerenualNameResults() function
   * and returns results as an object
   */
  const onSearch = (value, _e, info) => {
    if (value) {
      perenualFetch.getPerenualNameResults(value)
        .then((res) => {

           setSearchResults(res.data.data)
          //console.log(searchResults)
          navigate('/search-results')
        })
        .catch((err) => console.log(err));
    } else {
      console.log("enter a name first")
    }
  };

  /**
 * Passes user search and filters into getPerenualNameResults() function
 * and returns results as an object
 */
  const onClick = (value, _e, info) => {

    perenualFetch.getPerenualNameResults(name, watering, sunlight, isIndoors)
      .then((res) => {
         setSearchResults(res.data.data)
        //console.log(searchResults)

      })
      .catch((err) => console.log(err));
  }


  const handleInputChange = (event) => {
    setName(event.target.value)
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const selectSunlight =
    <Select
      showSearch
      placeholder="Sunlight"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={filterOption}
      options={[
        {
          value: sunlightOption[3],
          label: 'Full Sun',
        },
        {
          value: sunlightOption[2],
          label: 'Sun/Part Shade',
        },
        {
          value: sunlightOption[1],
          label: 'Part Shade',
        },
        {
          value: sunlightOption[0],
          label: 'Full Shade',
        },
      ]}
    />
  const selectWatering =
    <Select
      showSearch
      placeholder="Watering"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={filterOption}
      options={[
        {
          value: wateringOption[0],
          label: 'Often',
        },
        {
          value: wateringOption[1],
          label: 'Average',
        },
        {
          value: wateringOption[2],
          label: 'Barely',
        },
        {
          value: wateringOption[3],
          label: 'None',
        },
      ]}
    />

  const filterItems = [
    {
      key: '1',
      label: <><FilterOutlined /> More Filters  </>,
      children:
        <Space direction="vertical">
          <Checkbox name='indoorChk' onChange={onChange}>Indoor</Checkbox>
          <Space direction="horizontal">
            <p>Watering</p>
            {selectWatering}
          </Space>
          <Space direction="horizontal">
            <p>Sunlight</p>
            {selectSunlight}
          </Space>
          <Button type="primary" onClick={onClick} >Advanced Search</Button>
        </Space>,
    }
  ];

  //console.log(searchResults)

  return (
    <Space direction="vertical">

      <Search placeholder="Search for Plant" onSearch={onSearch} onChange={handleInputChange} />

      <Collapse items={filterItems} />


    </Space>
  )
};


export default SearchBar;
