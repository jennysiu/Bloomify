
import react from 'react'
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
            <div className="flexContainerExplore">
                <h1>Explore Page</h1>
                <SearchBar name={name} setName={setName}/>
                
                <AdvancedSearch name={name} />
            </div>
        </>
    )
}

export default Explore