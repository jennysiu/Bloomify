import React from 'react';
import { Card } from 'antd';
import placeholderPlantImage from '../../assets/images/placeholder-img.png';
import './style.css'

const PlantOfTheDay = () => {
    // Static placeholder data for now
    const plant = {
        name: "Placeholder Plant",
        imageUrl: placeholderPlantImage
    };

    // Commented out - to be used to fetch plant data from an API later
    // useEffect(() => {
    //     fetch('https://api.example.com/plantoftheday')
    //         .then(response => response.json())
    //         .then(data => {
    //             setPlant({
    //                 name: data.name,
    //                 imageUrl: data.imageUrl
    //             });
    //         })
    //         .catch(error => console.error("Failed to fetch plant of the day:", error));
    // }, []);

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