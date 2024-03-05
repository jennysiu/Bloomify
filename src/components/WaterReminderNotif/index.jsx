import React, { useMemo, useContext, useState, useEffect } from 'react';
import { Button, Divider, InputNumber, notification, Space, Switch } from 'antd';
import dayjs from 'dayjs';

// internal imports
import { ToDoContext, ToDoProvider } from '../../contexts/ContextsToDos';

const Context = React.createContext({
  name: 'Default',
});

const WaterReminderNotif = () => {
  // a part of Ant Design's notification system
  const [enabled, setEnabled] = React.useState(true);
  const [api, contextHolder] = notification.useNotification({
    stack: enabled
      ? {
          threshold: 5,
        }
      : false,
  });

  // uceContext to get toDos list from ContextToDos
  const { toDos, setToDos } = useContext(ToDoContext); 
  // useState to store plants to be watered
  const [plantsToWaterTodayState, setPlantsToWaterTodayState] = useState([]);

  // logic to filter the plant(s) that needs to be watered today
  useEffect(() => {
    // Get today's date
    let todaysDate = dayjs().format('YYYY-MM-DD');
    
    let plantToWaterToday = toDos.filter(toDo => {
    // convert task date into format we want
    let taskDateOnly = dayjs(toDo.date).format('YYYY-MM-DD');
    // return tasks only when date matches today's date
    return todaysDate === taskDateOnly;})
    // console.log(plantToWaterToday);

    // now iterate over these tasks to just extract the task
    .map(toDo => toDo.task)

    // set to state
    setPlantsToWaterTodayState(plantToWaterToday);
  }, [toDos])


  const openNotification = () => {
    api.open({
      message: 'Watering Reminder 💧',
      description: `Your ${plantToWaterToday} is due to be watered today!`,
      duration: null,
    });

  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div>
        <Button type="primary" onClick={openNotification}>
          Open the notification box
        </Button>
      </div>
    </Context.Provider>
  );
};
export default WaterReminderNotif;