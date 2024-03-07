import React, { useMemo, useContext, useState, useEffect, useRef } from 'react';
import { Button, Divider, InputNumber, notification, Space, Switch } from 'antd';
import dayjs from 'dayjs';

// internal imports
import { ToDoContext, ToDoProvider } from '../../contexts/ContextsToDos';
import "./style.css"

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
  // useRef to keep track of notifs to be displayed
  const displayedNotifsRef = useRef(new Map());


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
    plantsToWaterTodayState.forEach(plant => {
      if (!displayedNotifsRef.current.has(plant.id)) {
        const key = `plant_${plant.id}`;
        api.open({
          message: 'Watering Reminder 💧',
          description: `Your ${plant.plant} is due to be watered today!`,
          duration: null,
          key: key,
        });
        displayedNotifsRef.current.set(plant.id, key);
      }
    });
    }, [plantsToWaterTodayState, api]);

  useEffect(() => {
  // Create a new Set from the current plant IDs for easier comparison
  const currentPlantIds = new Set(plantsToWaterTodayState.map(plant => plant.id));

  // Iterate over the keys (plant IDs) in displayedNotifsRef
  for (let [plantId, notifKey] of displayedNotifsRef.current.entries()) {
    // If the currentPlantIds does not have a plantId, it means the plant has been watered and removed
    if (!currentPlantIds.has(plantId)) {
      api.destroy(notifKey); // Close the notification using Ant Design's API
      displayedNotifsRef.current.delete(plantId); 
    }
  }
}, [plantsToWaterTodayState, api]); // Depend on plantsToWaterTodayState to trigger this effect

  return (
    <>
    {contextHolder}
    </>
  );
};
export default WaterReminderNotif;