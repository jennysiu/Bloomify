import React, { useContext, useState, useEffect } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import { Button, Space, Select, Input, Collapse, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SearchResultsContext } from '../../contexts/ContextSearchRes.jsx';
import perenualFetch from '../../utils/perenualFetch.js'

import './style.css'

function AdvancedSearch({ name}) {
    const { searchResults, setSearchResults } = useContext(SearchResultsContext);
    
    const [watering, setWatering] = useState('');
    const [sunlight, setSunlight] = useState('');
    const [isIndoors, setIndoors] = useState('');
    const { Search } = Input;
    let navigate = useNavigate();

    const wateringOption = ['frequent', 'average', 'minimum', 'none', '']
    const sunlightOption = ['full_shade', 'part_shade', 'sun-part_shade', 'full_sun', '']


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
   * Passes user search and filters into getPerenualNameResults() function
   * and returns results as an object
   */
    const onClick = (value, _e, info) => {

        perenualFetch.getPerenualNameResults(name, watering, sunlight, isIndoors)
            .then((res) => {
                setSearchResults(res.data)
                navigate('/search-results')

            })
            .catch((err) => console.log(err));
    }


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
                {
                    value: sunlightOption[4],
                    label: 'Any',
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
                {
                    value: wateringOption[4],
                    label: 'Any',
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


    return (
        
            <Collapse items={filterItems} />

    )
};



export default AdvancedSearch