import React from 'react';
import { FilterOutlined, } from '@ant-design/icons';
import { Button, Flex, Space, Select, Input, Collapse, Checkbox } from 'antd';
/**
 * DAVOU
 * import_perenualFetch: Imports the js file for fetching data from the perenual API 
 * import_{_useState,_useEffect_}: Allows us to manage state
 */
import perenualFetch from '../../utils/perenualFetch'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';




function SearchBar({ onSearch }) {
  /**
 * setName hooks for storing dynamically changing user input
 * {Search} - ant design?
 * setCollapsed - ant design hook for  collapsible filter
 */
  const [name, setName] = useState('');
  const [watering, setWatering] = useState('');
  const [sunlight, setSunlight] = useState('');
  const [isIndoors, setIndoors] = useState('');
  const [isOutdoors, setOutdoors] = useState('');
  const [data, setData] = useState('');


  const { Search } = Input;
  const [collapsed, setCollapsed] = useState(false);

  const wateringOption = ['frequent', 'average', 'minimum', 'none']
  const sunlightOption = ['full_shade', 'part_shade', 'sun-part_shade', 'full_sun']

  // Function that prevent effects when user hasnt searched
  useEffect(() => {
    if (!name) {
      return;
    }
  });

  let navigate = useNavigate();

  const onChange = (value) => {
    console.log(value)
    wateringOption.find((element) => element === value) ? setWatering(value) : setWatering('');
    sunlightOption.find((element) => element === value) ? setSunlight(value) : setSunlight('');
    wateringOption.find((element) => element === value) ? setWatering(value) : setWatering('');
    sunlightOption.find((element) => element === value) ? setSunlight(value) : setSunlight('');

    // switch  (value.target.name) {
    //   case "indoorChk":
    //     setIndoors(1)
    //     isIndoors


  }


  const handleSearch = (value) => {
    onSearch(value)
    navigate('/search-results')
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
          value: sunlightOption[0],
          label: 'Full Sun',
        },
        {
          value: sunlightOption[1],
          label: 'Sun/Part Shade',
        },
        {
          value: sunlightOption[2],
          label: 'Part Shade',
        },
        {
          value: sunlightOption[3],
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
      label: 'More Filters',
      children:
        <Space direction="vertical">
          <Checkbox name='indoorChk' onChange={onChange}>Indoor</Checkbox>
          <Checkbox name='outdoorChk' onChange={onChange}>Outdoor</Checkbox>
          <Space direction="horizontal">
            <p>Watering</p>
            {selectWatering}
          </Space>
          <Space direction="horizontal">
            <p>Sunlight</p>
            {selectSunlight}
          </Space>
          <Button type="primary" onClick={onSearch} >Advanced Search</Button>
        </Space>,
    }
  ];


  return (
    <Space direction="vertical">
  return (
    <Space direction="vertical">

      <Search placeholder="Search for Plant" onSearch={handleSearch} />

      <Collapse items={filterItems} onChange={onChange} />


    </Space>
  )
};

export default SearchBar;