
import react from 'react'
import SearchBar from "../components/SearchBar"
import { useNavigate } from 'react-router-dom'
import perenualFetch from '../utils/perenualFetch';


function Explore() {

    const navigate = useNavigate();

    const handleSearch = async (value) => {
        try {
            const results = await perenualFetch.getPerenualResults(value);
            console.log('Search results:', results.data);

            const resultsArray = Array.isArray(results.data) ? results.data : []
            navigate('/search-results', { state: { searchResults: resultsArray ,  searchTerm: value} })
            // Handle the results as needed
        } catch (error) {
            console.error('Error fetching search results:', error);
            // Handle errors as needed
        }
        // perenualFetch.getPerenualResults(value)
        // .then((res) => {
        //   console.log(res.data)
        //     .catch(err => {
        //       console.log(err);
        //     });
        // });

        console.log('searching for:', value)


    }

    return (
        <>
            <h1>Explore Page</h1>
            <SearchBar onSearch={handleSearch} />
        </>
    )
}

export default Explore