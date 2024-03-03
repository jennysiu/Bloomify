import PropTypes from 'prop-types';
import { Card } from 'antd';
import './style.css'
import placeholderImg from '/src/assets/images/placeholder-img.png';

const DashPlantCard = ({ plant , index}) => {
    return (
        <div className="dashPlantCardContainer">
            <Card title="My Plants">
                <div className="dashPlantCardContent">
                    <img src={placeholderImg} alt={plant.common_name} />
                    <img src={placeholderImg} alt={plant.common_name} />
                    <img src={placeholderImg} alt={plant.common_name} />
                    <img src={placeholderImg} alt={plant.common_name} />
                    <img src={placeholderImg} alt={plant.common_name} />
                    <img src={placeholderImg} alt={plant.common_name} />
                </div>    
            </Card>
        </div>
    );
};

// DashPlantCard.propTypes = {
//     plant: PropTypes.object.isRequired,
// };  

export default DashPlantCard;