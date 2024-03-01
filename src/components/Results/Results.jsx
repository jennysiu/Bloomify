import React from 'react';
import { Row, Col } from 'antd';
import PlantCard from '../PlantCard/index';

function Results({ searchResults }) {
  const renderPlantCards = () => {
    return searchResults.map((plant, index) => (
      <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
        <PlantCard plant={plant} />
      </Col>
    ));
  };

  return (
    <Row gutter={[16, 16]}>
      {renderPlantCards()}
    </Row>
  );
}

export default Results;

