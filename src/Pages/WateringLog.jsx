import React, { useState } from 'react';
import { Badge, Calendar, Input } from 'antd';
import TaskList from '../components/TaskList';

function WateringLog() {
return (
    <TaskList />
)
}

export default WateringLog

// CALENDAR CODE FROM ANTDESIGN (commented out until I can get the logic behind it working)
// const getListData = (value, userInput) => {
    
//     let listData;
    
//     switch (value.date()) {
//         case 8:
//             listData = [
//                 { type: 'warning', content: 'This is warning event.' },
//                 { type: 'success', content: 'This is usual event.' },
//             ];
//             break;
//         case 10:
//             listData = [
//                 { type: 'warning', content: 'This is warning event.' },
//                 { type: 'success', content: 'This is usual event.' },
//                 { type: 'error', content: 'This is error event.' },
//             ];
//             break;
//         case 15:
//             listData = [
//                 { type: 'warning', content: 'This is warning event' },
//                 { type: 'success', content: 'This is very long usual event......' },
//                 { type: 'error', content: 'This is error event 1.' },
//             ];
//             break;
//         default:
//     }
//     return listData || [];
// };

// const getMonthData = value => {
//     if (value.month() === 8) {
//         return 1394;
//     }
// };

// const App = () => {
//     const [userInput, setUserInput] = useState('');

//     const handleInputChange = e => {
//         setUserInput(e.target.value);
//     };

//     const monthCellRender = value => {
//         const num = getMonthData(value);
//         return num ? (
//             <div className="notes-month">
//                 <section>{num}</section>
//             </div>
//         ) : null;
//     };

//     const dateCellRender = value => {
//         const listData = getListData(value, userInput);
//         return (
//             <ul className="events">
//                 {listData.map(item => (
//                     <li key={item.content}>
//                         <Badge status={item.type} text={item.content} />
//                     </li>
//                 ))}
//             </ul>
//         );
//     };

//     const cellRender = (current, info) => {
//         if (info.type === 'date') return dateCellRender(current);
//         if (info.type === 'month') return monthCellRender(current);
//         return info.originNode;
//     };

//     return (
//         <div>
//             <Input placeholder="Enter something..." value={userInput} onChange={handleInputChange} />
//             <Calendar cellRender={cellRender} />
//         </div>
//     );
// };

// export default App;
