import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Avatar, Space } from 'antd';
import { Card } from 'antd';

// internal component imports
import AddPlantModal from '../components/AddPlantModal';
import PlantCard from '../components/PlantCard';

function MyPlants() {
    // plants array for development testing:
    const initialPlants = [
        { id: 1, name: 'Fern', type: 'Indoor', wateringFrequency: 'Weekly', image: 'https://hortology.co.uk/cdn/shop/files/Nephrolepis-exaltata-Bostoniensis-Boston-Fern-12x30cm-2_5000x.jpg?v=1706017928'},
        { id: 2, name: 'Cactus', type: 'Indoor', wateringFrequency: 'Monthly', image: 'https://www.beardsanddaisies.co.uk/cdn/shop/products/B_D_Dried2_057.jpg?v=1676904285'},
        { id: 3, name: 'Monstera', type: 'Indoor', wateringFrequency: 'Weekly', image: 'https://pcfb.gumlet.io/images/articles/small-monstera-in-pot.png?w=640&h=426&mode=crop&crop=smart&s=362b2438ad2bd22d5826fe12b96adf88' }
    ];
    
    // use state for plants collection array of Objects
    const [myPlants, setMyPlants] = useState(initialPlants);
    const [isModalOpen, setIsModalOpen] = useState(false);


    // todo: function to add new plant to collection

    // todo: function to dynamically render plant cards here
    // map() to go through array of plant objects
    // return a card for each plant object
    // card will have image, name
    // card will have button to view plant profile
    function renderPlantCards() {
        
        return (
            <>
            {myPlants.map((plant, index) => {
                return (
                <PlantCard plant={plant} key={index}/>
                );
            })}

            
            </>
        )
    }

    function toggleModal(newState) {
        setIsModalOpen(newState);
    }

    return (
        <>
        <h1>My Plant Sanctuary</h1>

        {/* new plant button */}
        <Flex gap="small" wrap="wrap">
            <Button onClick={() => toggleModal(true)} >Add New Plant</Button>
        </Flex>

        {/* add new plant modal */}
        <AddPlantModal isModalOpen={isModalOpen} toggleModal={toggleModal}/>

        
        {/* dynamically render plant cards here */}
        <Space direction="vertical" size={16}>
            <Space wrap size={16}>
                {renderPlantCards()}
            </Space>
        </Space>

        {/* plant profile hidden - can be modal or separate page */}

        {/* side widget - todays weather , humidity , sunlight? */}
        
        </>
    )
}

export default MyPlants

