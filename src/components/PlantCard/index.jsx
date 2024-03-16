import { Card } from 'antd';

// internal imports
import "./style.css";


function PlantCard( {plant, index} ) {
    // console.log(plant)
    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null;
    }

    return (
        <>
        <div 
        data-testid="plant-card" 
        className='plant-card-container'>
            {/* <Card className="plant-card"> */}
                <img 
                className='plant-card-img'
                src={plant.default_image.regular_url} 
                alt={plant.common_name} 
                />
                {/* <h4 key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.common_name.charAt(0).toUpperCase() + plant.common_name.slice(1)}</h4> */}
            {/* </Card> */}
        </div>
        </>
    )
}

export default PlantCard;
