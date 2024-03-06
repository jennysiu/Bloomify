import React, { useState, useEffect } from 'react';
import { Button, Input, List, Checkbox, DatePicker, Space, Card} from 'antd';
import { Typography } from 'antd';
import './style.css';

const TaskList = ({ toDos, setToDos }) => {

    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    
    const { Title } = Typography;

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

    return (
        <Card 
        title="Plants to Water"
        className="taskListContainer"
        >
            <div className="inputSection">
                <Input
                    placeholder="Which plant?"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <DatePicker
                    placeholder="When?"
                    onChange={handleDateChange}
                    value={selectedDate}
                />
                <Button
                    type="primary"
                    onClick={handleSave}>
                    Save
                </Button>
            </div>
            <List
                className="todoList"
                bordered
                dataSource={toDos}
                renderItem={(item, index) => (
                    <List.Item>
                        <div className="listItemContent">
                            {item.task && (
                                <>
                                    <Typography.Text strong>Plant to water: </Typography.Text>
                                    {item.task}
                                    <br />
                                </>
                            )}
                            {item.date && (
                                <>
                                    <Typography.Text strong>Date to water: </Typography.Text>
                                    {new Date(item.date).toLocaleDateString()}
                                </>
                            )}
                        </div>
                        <Button onClick={() => handleRemove(index)}>
                            Remove - watered!
                        </Button>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default TaskList;

