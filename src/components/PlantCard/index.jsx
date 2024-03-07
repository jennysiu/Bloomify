import { Card } from 'antd';

// internal imports
import "./style.css";


function PlantCard( {plant, index, style} ) {
    // console.log(plant)
    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null;
    }

    return (
        <>
        <div className='plant-car-container'>
            <Card className="plant-card" style={style}>
                <img 
                className='plant-card-img'
                src={plant.default_image.regular_url} alt={plant.common_name} style={{ width: '80%', height: 'auto', maxHeight: '200px', objectFit: 'cover'}} />
                <h4 key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.common_name.charAt(0).toUpperCase() + plant.common_name.slice(1)}</h4>
            </Card>
        </div>
        </>
    )
}


export default PlantCard;
