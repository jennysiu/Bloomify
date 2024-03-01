
import React, { useState, useEffect } from 'react';
import SearchResultsPage from "../components/Results/Results"

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const dummyData = [
      { id: 1, name: 'Fern', type: 'Indoor', wateringFrequency: 'Weekly', image: 'https://hortology.co.uk/cdn/shop/files/Nephrolepis-exaltata-Bostoniensis-Boston-Fern-12x30cm-2_5000x.jpg?v=1706017928'},
      { id: 2, name: 'Cactus', type: 'Indoor', wateringFrequency: 'Monthly', image: 'https://www.beardsanddaisies.co.uk/cdn/shop/products/B_D_Dried2_057.jpg?v=1676904285'},
      { id: 3, name: 'Monstera', type: 'Indoor', wateringFrequency: 'Weekly', image: 'https://pcfb.gumlet.io/images/articles/small-monstera-in-pot.png?w=640&h=426&mode=crop&crop=smart&s=362b2438ad2bd22d5826fe12b96adf88' }
     
    ];

    setSearchResults(dummyData);
  }, []);

  return (
    <div>
      <h1>Search Page</h1>
      <SearchResultsPage searchResults={searchResults} />
    </div>
  );
}

export default SearchResults;
