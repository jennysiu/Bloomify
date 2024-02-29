import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './style.css';

const DashPlantCard = ({ images }) => {
return (
    <div className="dash-plant-scroll-container">
        {images.map((image, index) => (
        <Card
            title=" My Plant"
            key={index}
            hoverable
            style={{ width: 150, display: 'inline-block', marginRight: 12 }}
            cover={<img alt={`Plant ${index}`} src={image} />}
        >
            {/*TODO: Additional content for each card if any*/}
        </Card>
        ))}
    </div>
    );
};

DashPlantCard.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DashPlantCard;