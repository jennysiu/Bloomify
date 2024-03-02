import React from 'react';
import { Calendar } from 'antd';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <ul className="events" style={{ listStyleType: 'none' }}>
                {tasksForDate.map((item, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={faDroplet} />
                        {item.content}
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
