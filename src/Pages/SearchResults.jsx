
import React, { useState, useEffect } from 'react';
import SearchResultsPage from "../components/Results/Results"
import { useLocation } from 'react-router-dom'
import PlantCard from '../components/PlantCard';
import { Row, Col } from 'antd';


function SearchResults() {
  const location = useLocation()
  const [searchResults, setSearchResults] = useState([]);
  const searchTerm = location.state?.searchTerm || 'N/A'

  useEffect(() => {

    console.log('SearchResults component - location.state:', location.state);
    const results = location.state && location.state.searchResults ? location.state.searchResults : [];
    console.log('SearchResults component - Search results:', results); // Add this log statement

    setSearchResults(results);
  }, [location.state]);

  return (
    <div>
      <h1>Search Page</h1>
      <h2>Search Results For:</h2>
      <ul>
        <li>
          Search = {searchTerm}
        </li>
        <li>
          Hardiness = N/A
        </li>
        <li>
          Indoor or Outdoor/N/A
        </li>
      </ul>

      {Array.isArray(searchResults) && searchResults.length > 0 ? (
        <Row gutter={[16, 16]}>
          {searchResults.filter((result) => result.default_image && result.default_image.regular_url && result.common_name)
            .map((result, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <PlantCard plant={result} />
              </Col>
            ))}
        </Row>
      ) : (
        <p>No search results available.</p>
      )}

    </div>
  );
}

export default SearchResults;
