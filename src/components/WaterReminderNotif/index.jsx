import React, { useMemo, useContext } from 'react';
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
  console.log(toDos)

  // Get today's date
  console.log(dayjs().format('YYYY-MM-DD'));

  // iterate over toDos object to find the plant that needs to be watered today
  toDos.forEach(toDo => {
    console.log(toDo.date, toDo.task)
    if (toDo.date === new Date().toLocaleDateString({ year: 'numeric', month: 'long', day: 'numeric'})) {
      console.log(date, task)
      console.log("water me")
      // plantToWaterToday = toDo.task
    }
  })

  let plantToWaterToday = "lily"

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