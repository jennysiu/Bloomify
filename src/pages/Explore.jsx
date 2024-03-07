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
        <div className='content-container'>

                <Row className="exploreContainer">
                    <Col span={16} className="exploreTitles">
                        <h1>Bloom Explorer</h1>
                        <h3 id='search-message'>Embark on a journey through the world of flora and find new additions to your plant sanctuary</h3>
                    </Col>
                    <Col span={16} className="exploreSearch">
                        <SearchBar name={name} setName={setName} className="exploreSearchBar" />
                        <AdvancedSearch name={name} />
                    </Col>
                </Row>
        </div>
        </Layout>
        </>
    )
}

export default Explore