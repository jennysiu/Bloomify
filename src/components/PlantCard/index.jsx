function PlantCard( {plant, index} ) {
    console.log(plant)
    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null; 
    }

    return (
        <>
            <img src={plant.default_image.regular_url} alt={plant.common_name} style={{ width: 200, height: 200 }} />
            <div key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.common_name}</div>
        </>
    )
}

export default PlantCard