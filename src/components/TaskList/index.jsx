import React from 'react';
import { Button, Input, Select, Space } from 'antd';
import { Divider, List, Typography } from 'antd';

const TaskList = () => {

        const toDos = [
        'Re-pot pothos',
        'Clean dust off leaves of weeping fig tree',
        'Give peace lily fertilizer'
        ];

return (
<>
        <Divider orientation="left">Plant Tasks</Divider>
        <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="Add a task here..." />
            <Button type="primary">Save task</Button>
        </Space.Compact>
        <List style={{width: '100%'}}
            bordered
            dataSource={toDos}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text mark>- </Typography.Text> {item}
                </List.Item>
            )}
        />
</>
)
}

export default TaskList