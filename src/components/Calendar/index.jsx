import React from 'react';
import { Calendar } from 'antd';

const getListData = ({ toDos }) => {
    return toDos.map(item => ({
        date: item.date,
        content: item.task
    }));
};

const MyCalendar = ({ toDos }) => {

    const dateCellRender = (value) => {
        
        const listData = getListData({ toDos });

        const tasksForDate = listData.filter(item => {
            return value.isSame(item.date, 'day'); 
        });

        return (
            <ul className="events">
                {tasksForDate.map((item, index) => (
                    <li key={index}>
                        {item.content}
                        {/* Add in waterdrop icon here? */}
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        return info.originNode;
    };

    return (
    <Calendar cellRender={cellRender} />
    )
};

export default MyCalendar;
