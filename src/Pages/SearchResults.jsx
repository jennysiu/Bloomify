

import React, { useState, useEffect, useContext} from 'react';
import SearchResultsPage from "../components/Results/Results"
import { SearchResultsContext } from '../contexts/ContextSearchRes.jsx';
import { Row, Col} from 'antd';

// internal imports
import PlantCard from '../components/PlantCard';
import NewPlantProfile from '../components/NewPlantProfile/index.jsx';

import plantDetailsFetch from '../utils/plantDetailsFetch.js';

function SearchResults() {
  const {searchResults, setSearchResults} = useContext(SearchResultsContext);

  // console.log(searchResults)

  // State to hold the currently selected plant for display in the modal
  const [selectedPlantModal, setSelectedPlantModal] = useState(
    {isVisible: false, plant: null});

  const handlePlantClick = (plant) => {
    plantDetailsFetch.getPlantDetails(plant.id)
    .then((res) => {
      console.log(res.data);
      let plantData = res.data;
    setSelectedPlantModal({isVisible: true, plant: plantData});      
    })
    .catch((err) => console.log(err))
};

const toggleNewPlantProfVisi = (isvisible) => {
  setSelectedPlantModal({...selectedPlantModal, isVisible: isvisible});
}

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
              <Col xs={24} sm={12} md={8} key={index}>
                <a type="link" onClick={() => handlePlantClick(result)} style={{ cursor: 'pointer' }}>
                  <PlantCard plant={result} />
                </a>
              </Col>
            ))}
        </Row>
      ) : (
        <p>No search results available.</p>
      )}

      {/* plant profile modal (hidden at first) */}
      {selectedPlantModal.isVisible && selectedPlantModal.plant && (
        <NewPlantProfile 
        selectedPlantModalVisible={selectedPlantModal.isVisible}
        toggleNewPlantProfVisi={toggleNewPlantProfVisi}
        selectedPlantModalPlant={selectedPlantModal.plant}
        onClose={() => setSelectedPlantModal({...selectedPlantModal, isVisible: false})}
        />
      )}

    </div>
  );
}

export default SearchResults;