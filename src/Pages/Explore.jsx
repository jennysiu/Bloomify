
import react from 'react'
import SearchBar from "../components/SearchBar"
import { useNavigate } from 'react-router-dom'
import perenualFetch from '../utils/perenualFetch';


function Explore() {


    return (
        <>
            <h1>Explore Page</h1>
            <SearchBar/>
        </>
    )
}

export default Explore