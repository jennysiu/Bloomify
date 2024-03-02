import PropTypes from 'prop-types';
import { Card } from 'antd';

const DashPlantCard = ({ plant , index}) => {
    // Display logic using plant data
    return (
    <>
        <Card title={plant.common_name}> {/* Display plant details here */} 
            <img src={plant.default_image.regular_url} alt={plant.common_name} style={{ width: 200, height: 200 }} />
            <div key={index} style={{ marginTop: '20px', fontWeight: 'bold' }}>{plant.common_name}</div>
        </Card>
    </>
    )
};

// DashPlantCard.propTypes = {
//     plant: PropTypes.object.isRequired,
// };  

export default DashPlantCard;