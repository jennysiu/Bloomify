import react from 'react'
import { Row, Col } from 'antd';
import SearchBar from "../components/SearchBar"
import AdvancedSearch from '../components/AdvancedSearch/advanced.jsx';
import { useNavigate } from 'react-router-dom'
import perenualFetch from '../utils/perenualFetch';
import React, { createContext, useContext, useState, useEffect } from 'react';
import '../../src/index.css'

function Explore() {
    const [name, setName] = useState('');

    return (
        <>
            <Row className="exploreContainer">
                <Col span={16} className="exploreTitles">
                    <h1>Bloom Explorer</h1>
                    <h2>Embark on a journey through the world of flora and find new additions to your plant sanctuary</h2>
                </Col>
                <Col span={16} className="exploreSearch">
                    <SearchBar name={name} setName={setName} className="exploreSearchBar" />
                    <AdvancedSearch name={name} />
                </Col>
            </Row>
        </>
    )
}

export default Explore