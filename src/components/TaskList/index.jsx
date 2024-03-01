import React, { useState, useEffect } from 'react';
import { Button, Input, Divider, List, Checkbox, DatePicker, Space, Flex } from 'antd';
import { Typography } from 'antd';

const TaskList = ({ toDos, setToDos}) => {

    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    // handle user's inputs
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // save user inputs to toDos array in local storage & state, then empty out the input & date fields
    const handleSave = () => {
        if (inputValue.trim() !== '') {
            const newToDos = [...toDos, { task: inputValue, date: selectedDate }];
            setToDos(newToDos);
            localStorage.setItem('toDos', JSON.stringify(newToDos));
            setInputValue('');
            setSelectedDate(null);
        }
    };

    // when box is checked, remove the relevant task from the toDos array (local storage & state) 
    // TO DO: fix bug that is checking the next list item automatically
    const handleRemove = (index) => {
        const updatedToDos = [...toDos];
        updatedToDos.splice(index, 1);
        setToDos(updatedToDos);
        localStorage.setItem('toDos', JSON.stringify(updatedToDos));
    };

    // ant design code to render to page - NEEDS STYLING
    return (
        <>
            <Divider orientation="left">Plants to Water</Divider>
            <Space.Compact style={{ width: '100%' }}>
                <Input
                    addonAfter={<DatePicker placeholder="When?" onChange={handleDateChange} style={{ width: 150 }} />}
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
                style={{ width: '100%' }}
                bordered
                dataSource={toDos}
                renderItem={(item, index) => (
                    <List.Item>
                        <span>
                            {/* Uses ternary operator to check if there is a task and/or date before rendering */}
                            {item.task ? (
                                <>
                                    <Typography.Text strong>Plant to water: </Typography.Text>
                                    {item.task}
                                </>
                            ) : null}
                            <br />
                            {item.date ? (
                                <>
                                    <Typography.Text strong>Date to water: </Typography.Text>
                                    {new Date(item.date).toLocaleDateString()}
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
