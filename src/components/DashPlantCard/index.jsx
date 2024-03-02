import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const DashPlantCard = ({ plant }) => {
    // Display logic using plant data
    return <Card title={plant.common_name}> {/* Display plant details here */} </Card>;
};

DashPlantCard.propTypes = {
    plant: PropTypes.object.isRequired,
};  

export default DashPlantCard;