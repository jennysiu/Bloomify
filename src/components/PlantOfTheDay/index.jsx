import React from 'react';
import { Card } from 'antd';
import placeholderPlantImage from '../../assets/images/placeholder-img.png';
import './style.css'
import perenualFetch from '../../utils/perenualFetch'



const PlantOfTheDay = () => {

    const

    // Static placeholder data for now
    const plant = {
        name: "Placeholder Plant",
        imageUrl: placeholderPlantImage
    };

    function hasOneDayPassed(){
    var date = new Date().toLocaleDateString();
    
    if (localStorage.yourapp_date == date)
        return false;

    localStorage.yourapp_date = date;
    return true;
    }



function runOncePerDay() {
    if (!hasOneDayPassed()) return false;

    
    alert('Good morning!');
}


    return (
        <Card
            title="Plant of the Day"
            cover={<img alt={plant.name} src={plant.imageUrl} className="plant-image-cover" />}
            
        >
            <Card.Meta title={plant.name} description={plant.description} />
        </Card>
    );
};

export default PlantOfTheDay;