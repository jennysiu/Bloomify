import React, { useMemo, useContext, useState, useEffect, useRef } from 'react';
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

  // This useRef hook initializes displayedNotifications with an empty Set
  // const displayedNotifications = useRef(new Set());

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
    .map((toDo, index) => {
      return {id: index, plant: toDo.task}
    });

    console.log(plantToWaterToday);
    // set to state
    setPlantsToWaterTodayState(plantToWaterToday);
  }, [toDos])

  // trigger notification for wach plant that needs to be watered today
  useEffect(() => {
  // tracker for notifs
  const currentNotifKey = new Set();

    plantsToWaterTodayState.forEach(plant => {
      const key = plant.id;

      api.open({
        message: 'Watering Reminder 💧',
        description: `Your ${plant.plant} is due to be watered today!`,
        duration: null
      });
    });

    // close notification once plant is marked as watered (and removed from list)
    // todo: look into useRef() to keep track of notifs you have displayed, determine which to close and and prevent re-rendering 
    // Close notifications for plants no longer in the list

  }, [plantsToWaterTodayState]);

  return (
    <>
    {contextHolder}
    </>
  );
};
export default WaterReminderNotif;