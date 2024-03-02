import React, { useContext } from 'react';
import { usePlants } from '../contexts/PlantContext.jsx';
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos';
import DashWaterLog from '../components/DashWaterLog';
import SearchBar from '../components/SearchBar';
import PlantOfTheDay from '../components/PlantOfTheDay';
import DashPlantCard from '../components/DashPlantCard'

const Dashboard = () => {
  const { toDos, setToDos } = useContext(ToDoContext); 

  const { plants } = usePlants();

  return (
    <div>
      <h1>Welcome back, Joan!</h1>

      {/* Pass plants data to DashPlantCard */}
      {plants.map((plant) => (
        <DashPlantCard key={plant.id} plant={plant} />
      ))}

      <ToDoProvider>
        <TaskList toDos={toDos} setToDos={setToDos} />
      </ToDoProvider>

      <DashWaterLog />

      <SearchBar /> 

      <PlantOfTheDay />
      
    </div>
  );
};

export default Dashboard;