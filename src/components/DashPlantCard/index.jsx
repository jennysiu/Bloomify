import PropTypes from 'prop-types';
import { Card } from 'antd';
import './style.css'
import placeholderImg from '/src/assets/images/placeholder-img.png';

const DashPlantCard = ({ myPlants, setMyPlants }) => {
    
    const plants = [];
    

    const map = () => {
        for (const index in myPlants) {
            console.log(myPlants.index)
            plants.push(<img key={index} 
                src={myPlants[index].default_image.original_url} 
                alt={myPlants[index].common_name} 
                />)
        }
    }

   map()

    return (
        <div className="dashPlantCardContainer">
            <h2>My Plants</h2>
            <Card>
                <div className="dashPlantCardContent" >
                {plants} 
                </div>
            </Card>
        </div>
    );
};


export default DashPlantCard;