import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Avatar, Space } from 'antd';

function MyPlants() {
    // use state for plants collection 
    const [myPlants, setMyPlants] = useState([]);

    // dynamically render plant cards here

    return (
        <>
        <h1>My Plants Page!</h1>
        {/* BUTTON HERE - add new plant*/}

        <Flex gap="small" wrap="wrap">
            <Button>Default Button</Button>
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

