import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Avatar, Space } from 'antd';

function MyPlants() {
    // plants array for development testing:
    const initialPlants = [
        { id: 1, name: 'Fern', type: 'Indoor', wateringFrequency: 'Weekly' },
        { id: 2, name: 'Cactus', type: 'Indoor', wateringFrequency: 'Monthly' },
        { id: 3, name: 'Monstera', type: 'Indoor', wateringFrequency: 'Weekly' }
    ];
    
    // use state for plants collection array of Objects
    const [myPlants, setMyPlants] = useState([initialPlants]);

    // todo: function to dynamically render plant cards here
    // for loop to go through array of plant objects

    return (
        <>
        <h1>My Plants Page!</h1>
        {/* BUTTON HERE - add new plant*/}

        <Flex gap="small" wrap="wrap">
            <Button>Add New Plant</Button>
        </Flex>

        {/* ADD MODAL */}

        

        {/* plant crads - col of three */}
        {/* dynamically render? */}

        <Space direction="vertical" size={16}>
            <Space wrap size={16}>
            <Avatar shape="square" size={200} icon={<UserOutlined />} />
            <Avatar shape="square" size={200} icon={<UserOutlined />} />
            <Avatar shape="square" size={200} icon={<UserOutlined />} />

            </Space>
        </Space>

        {/* side widget - todays weather , himidity , sunlight? */}
        

        {/* plant profile hidden - can be modal or separate page */}


        </>
    )
}

export default MyPlants

