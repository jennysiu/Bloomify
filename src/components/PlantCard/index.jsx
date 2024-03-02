function PlantCard({ plant, index }) {
    console.log(plant);

    if (!plant) {
        console.error('Plant data is undefined.', { index });
        return null;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
                src={plant.default_image.regular_url}
                alt={plant.common_name}
                style={{ width: '100%', maxWidth: '200px', maxHeight: '200px' }}
            />
            <div key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {plant.common_name}
            </div>
        </div>
    );
}

export default PlantCard;
