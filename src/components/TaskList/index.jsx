import { React, useState } from 'react';
import { Button, Input, Select, Space } from 'antd';
import { Divider, List, Typography } from 'antd';

const TaskList = () => {

    const [toDos, setToDos] = useState([
        'Re-pot pothos',
        'Clean dust off leaves of weeping fig tree',
        'Give peace lily fertilizer'
    ]);

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
    setInputValue(e.target.value);
}

    const handleSave = () => {
        if (inputValue.trim() !== '') {
            setToDos([...toDos, inputValue]);
            setInputValue('')
        }
    }

return (
<>
        <Divider orientation="left">Plant Tasks</Divider>
        <Space.Compact style={{ width: '100%' }}>

            <Input 
            placeholder="Add a task here..." 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}/>

            <Button type="primary" onClick={handleSave}>Save task</Button>
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