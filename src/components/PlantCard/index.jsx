function PlantCard(myPlants) {

    return (
        <>
            <Card bordered={false} style={{ width: 300 }}>
                <img src={plant.image} alt={plant.name} style={{ width: 200, height: 200 }} />
                <div key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.name}</div>
            </Card>            
        </>
    )
}

export default PlantCard