import React, { useState, useContext } from 'react';
// import { usePlants } from '../contexts/PlantContext.jsx';
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos';
import { MyPlantsContext, MyPlantsProvider } from '../contexts/ContextMyPlants';

import DashWaterLog from '../components/DashWaterLog';
import SearchBar from '../components/SearchBar';
import PlantOfTheDay from '../components/PlantOfTheDay';
import WeatherWidget from '../components/WeatherWidget';
import DashPlantCard from '../components/DashPlantCard'
import { LocationProvider, LocationContext } from '../contexts/ContextLocation';

const Dashboard = () => {
  const { toDos, setToDos } = useContext(ToDoContext); 
  const { location, setLocation } = useContext(LocationContext)

  // commented this state out untiol context is ready (after search results)
  // const { myPlantsArray, setMyPlantsArray } = useContext(MyPlantsContext); 

  // using dummy plant data for now until search results is ready
 
  const initialPlants = [
    {   id: 1530,
      common_name: 'camellia',
          scientific_name: [ "Camellia japonica 'April Rose'" ],
          other_name: [],
          family: 'Theaceae',
          origin: [ 'Japan' ],
          type: 'Broadleaf evergreen',
          dimension: '5.00 to 8.00 feet',
          dimensions: { type: null, min_value: 5, max_value: 8, unit: 'feet' },
          cycle: 'Perennial',
          attracts: [],
          propagation: [
            'Layering Propagation',
            'Grafting Propagation',
            'Cutting',
            'Division',
            'Seed Propagation'
          ],
          hardiness: { min: '6', max: '9' },
          hardiness_location: {
            full_url: 'https://perenual.com/api/hardiness-map?species_id=1530&size=og&key=sk-0TuC65e08d8f166774406',
            full_iframe: "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=1530&size=og&key=sk-0TuC65e08d8f166774406'></iframe>"
          },
          watering: 'Average',
          depth_water_requirement: [],
          volume_water_requirement: { unit: 'gallon', value: '4' },
          watering_period: null,
          watering_general_benchmark: { value: '7-10', unit: 'days' },
          plant_anatomy: [
            { part: 'flower', color: [Array] },
            { part: 'petals', color: [Array] },
            { part: 'stamens', color: [Array] },
            { part: 'leaves', color: [Array] },
            { part: 'branch', color: [Array] },
            { part: 'trunk', color: [Array] }
          ],
          sunlight: [ 'Part shade' ],
          pruning_month: [ 'April', 'February', 'March', 'April' ],
          pruning_count: [],
          seeds: 0,
          maintenance: 'Moderate',
          'care-guides': 'http://perenual.com/api/species-care-guide-list?species_id=1530&key=sk-0TuC65e08d8f166774406',
          soil: [],
          growth_rate: 'High',
          drought_tolerant: false,
          salt_tolerant: false,
          thorny: false,
          invasive: false,
          tropical: false,
          indoor: false,
          care_level: 'Medium',
          pest_susceptibility: [],
          pest_susceptibility_api: 'Coming Soon',
          flowers: true,
          flowering_season: 'Spring',
          flower_color: 'Rose red',
          cones: false,
          fruits: false,
          edible_fruit: false,
          edible_fruit_taste_profile: 'Coming Soon',
          fruit_nutritional_value: 'Coming Soon',
          fruit_color: [],
          harvest_season: null,
          leaf: true,
          leaf_color: [ 'green' ],
          edible_leaf: false,
          cuisine: false,
          medicinal: false,
          poisonous_to_humans: 0,
          poisonous_to_pets: 0,
          description: "Camellia japonica 'April Rose' is an amazing plant species for many reasons. This gorgeous shrub has large, full, slightly-fragrant, white flowers with a pink blush that blossom in early spring, making a stunning addition to any garden. It is evergreen, making it a great choice for many climates and is a low maintenance plant. Not only that, but it is also known for its medicinal properties. Its leaves are used in tea and can be used to promote healthy skin, hair, and nails. Its flowers are also said to have detoxifying and mood-lifting qualities.",
          default_image: {
            license: 5,
            license_name: 'Attribution-ShareAlike License',
            license_url: 'https://creativecommons.org/licenses/by-sa/2.0/',
            original_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/og/52456500562_32f0b718f8_b.jpg',
            regular_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/regular/52456500562_32f0b718f8_b.jpg',
            medium_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/medium/52456500562_32f0b718f8_b.jpg',
            small_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/small/52456500562_32f0b718f8_b.jpg',
            thumbnail: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/thumbnail/52456500562_32f0b718f8_b.jpg'
          },
          other_images: 'Upgrade Plan To Supreme For Access https://perenual.com/subscription-api-pricing. Im sorry'},
    ];

  const [myPlants, setMyPlants] = useState(initialPlants);


  return (
    <>
      <h1>Welcome back, Joan!</h1>

      {/* need to pass plant data from ContextPlantData but we can only set this up once searchResults is ready */}
      {/* Pass plants data to DashPlantCard */}
      {myPlants.map((plant, index) => (
        <DashPlantCard key={index} plant={plant} />
      ))}

      <ToDoProvider>
        <TaskList toDos={toDos} setToDos={setToDos} />
      </ToDoProvider>

      <LocationProvider>
        <WeatherWidget location={location} setLocation={setLocation} />
      </LocationProvider>

      <DashWaterLog />

      <SearchBar /> 

      <PlantOfTheDay />
    </>
  );
};

export default Dashboard;