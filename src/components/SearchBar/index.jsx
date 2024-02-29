import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
/**
 * DAVOU
 * import_perenualFetch: Imports the js file for fetching data from the perenual API 
 * import_{_useState,_useEffect_}: Allows us to manage state
 */  
import perenualFetch from '../../utils/perenualFetch'
import { useState, useEffect } from 'react';


const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


function SearchBar(){
  const { Search } = Input;

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return(
  <Space direction="vertical">

    <Search placeholder="input search text" onSearch={onSearch} enterButton />

  </Space>
  )
};

export default SearchBar;