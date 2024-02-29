import React, { useState } from 'react';
import { Button, Input, Divider, List, Checkbox, DatePicker, Space, Flex } from 'antd';
import { Typography } from 'antd';

// set initial task list array with blank values for task & date
const TaskList = ({ toDos, setToDos }) => {

    // set state for user input value and date selected value
    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // take the user input, trim it, and if it's not blank, add the value as a task and the date as a date (if one has been selected) to the toDos array (add to state). Then reset the user input value and date back to nothing.
    const handleSave = () => {
        if (inputValue.trim() !== '') {
            setToDos([...toDos, { task: inputValue, date: selectedDate }]);
            setInputValue('');
            setSelectedDate(null);
        }
    };

    // Take the index of the item that had the corresponding checkbox checked, and remove that item from state therefore removing it from the list
    const handleRemove = (index) => {
        const updatedToDos = [...toDos];
        updatedToDos.splice(index, 1);
        setToDos(updatedToDos);
    };

    return (
        <>
            <Divider orientation="left">Plants to Water</Divider>
            <Space.Compact style={{ width: '40%' }}>
                <Input
                    addonAfter={<DatePicker placeholder="When?" onChange={handleDateChange} style={{width: 150}}/>}
                    placeholder="Which plant?"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button type="primary" onClick={handleSave}>
                    Save
                </Button>
            </Space.Compact>
            <List
                style={{ width: '40%' }}
                bordered
                dataSource={toDos}
                renderItem={(item, index) => (
                    <List.Item>
                        <span>
                            {/* Ternary operator so it only displays 'date:' 'task:' and 'checkbox:' if there is a task submitted */}
                            {item.task ? (
                                <>
                                    <Typography.Text strong>Plant to water: </Typography.Text>
                                    {item.task}
                                </>
                            ) : null}
                            <br></br>
                            {item.date ? (
                                <>
                                    <Typography.Text strong>Date to water: </Typography.Text>
                                    {item.date.format('DD-MM-YYYY')} 
                                    <br />
                                </>
                            ) : null}
                        </span>
                        {item.task ? (
                            <>
                                <Flex align="flex-end" justify="center">
                                    <Checkbox onChange={() => handleRemove(index)}>Watered?</Checkbox>
                                </Flex>
                            </>
                        ) : null}
                    </List.Item>
                )}
            />
        </>
    );
};

export default TaskList;