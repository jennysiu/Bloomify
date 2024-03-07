import React, { useState, useEffect, useContext} from 'react';
import SearchResultsPage from "../components/Results/Results"
import { SearchResultsContext } from '../contexts/ContextSearchRes.jsx';
import { Row, Col, Layout, Flex } from 'antd';

// internal imports 
import PlantCard from '../components/PlantCard';
import NewPlantProfile from '../components/NewPlantProfile/index.jsx';
import perenualFetch from '../utils/perenualFetch'

import plantDetailsFetch from '../utils/plantDetailsFetch.js';
import SearchBar from '../components/SearchBar/index.jsx';

// Basic page CSS
const layoutStyle = {
  backgroundColor: 'var(--background-color)',
  padding: 15,
  borderRadius: '1%'
}

function SearchResults() {
  const {searchResults, setSearchResults} = useContext(SearchResultsContext);
  const [name, setName] = useState('');
  let resultsString
  useEffect(() => {
    if (!name) {
      return; }
  });

  perenualFetch.getPerenualNameResults('resultsString')
  .then((res) => {
    resultsString = res;}
  )
  

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
    <>
      <Layout style={layoutStyle}>
        <div className='content-container'>
          <SearchBar name={name} setName={setName}/>
          <h1>Search Page</h1>
          <h2>Search Results For:{resultsString}</h2>


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
            <h2>No search results found!</h2>
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
      </Layout>
    </>
    
  );
}

export default SearchResults;