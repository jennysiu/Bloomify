function PlantCard( {plant, index} ) {
    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null; // Or render some placeholder
    }

    return (
        <>
            <img src={plant.image} alt={plant.name} style={{ width: 200, height: 200 }} />
            <div key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.name}</div>
        </>
    )
}

export default PlantCard