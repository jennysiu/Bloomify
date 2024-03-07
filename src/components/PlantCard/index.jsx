import { Card } from 'antd';


function PlantCard( {plant, index, style} ) {
    // console.log(plant)
    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null;
    }

    return (
        <>
            <Card className="plant-card" style={style}>
                <img src={plant.default_image.regular_url} alt={plant.common_name} style={{ width: '80%', height: 'auto', maxHeight: '200px', objectFit: 'cover'}} />
                <h4 key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.common_name.charAt(0).toUpperCase() + plant.common_name.slice(1)}</h4>
            </Card>
        </>
    )
}


export default PlantCard;
