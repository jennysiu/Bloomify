

import React, { useState, useEffect, useContext} from 'react';
import SearchResultsPage from "../components/Results/Results"
import { SearchResultsContext } from '../contexts/ContextSearchRes.jsx';
import { Row, Col} from 'antd';
import PlantCard from '../components/PlantCard';

function SearchResults() {
  const {searchResults, setSearchResults} = useContext(SearchResultsContext);

  console.log(searchResults)


  return (
    <div>
      <h1>Search Page</h1>
      <h2>Search Results For:</h2>
      <ul>
        <li>
          Search = N/A
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