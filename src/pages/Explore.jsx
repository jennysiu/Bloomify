import react from 'react'
import { Row, Col, Layout } from 'antd';
import SearchBar from "../components/SearchBar"
import AdvancedSearch from '../components/AdvancedSearch/advanced.jsx';
import { useNavigate } from 'react-router-dom'
import perenualFetch from '../utils/perenualFetch';
import React, { createContext, useContext, useState, useEffect } from 'react';
import '../../src/index.css'

const layoutStyle = {
    backgroundColor: 'var(--background-color)',
    padding: 15,
    borderRadius: '1%'
}

function Explore() {
    const [name, setName] = useState('');

    return (
        <>

    <Layout style={layoutStyle}>
        <div className='content-container' id="explore-section">

                <Row className="exploreContainer">
                    <Col span={24} id="explore-text">
                        <h1>Bloom Explorer</h1>
                        <p id='search-message'>Embark on a journey through the world of flora and find new additions to your plant sanctuary</p>
                    </Col>
                </Row>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} id="explore-search">
                        <SearchBar name={name} setName={setName} className="exploreSearchBar" />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} id="explore-search">
                        <AdvancedSearch name={name} />
                    </Col>
        </div>
        </Layout>
        </>
    )
}

export default Explore