import { Card } from 'antd';


function PlantCard( {plant, index} ) {
    // console.log(plant)
    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null;
    }

    return (
        <>
            <Card className="plant-card">
                <img src={plant.default_image.regular_url} alt={plant.common_name} style={{ width: '80%', height: 'auto', maxHeight: '200px', objectFit: 'cover'}} />
                <div key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.common_name}</div>
            </Card>
        </>
    )
}

export default PlantCard;
