import { render, screen, userEvent, waitFor} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MyPlants from '../../pages/MyPlants'
import {MyPlantsProvider} from "../../contexts/ContextMyPlants"
import { ToDoProvider } from '../../contexts/ContextsToDos'
import { LocationProvider } from '../../contexts/ContextLocation'


// COMPONENTS RENDERING
describe('MyPlants page', () => {
  it('my plants page renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LocationProvider>
          <ToDoProvider>
            <MyPlantsProvider>
              <MyPlants />
            </MyPlantsProvider>
          </ToDoProvider>
        </LocationProvider>
      </BrowserRouter>
    );
    expect(getByText('My Plant Sanctuary')).toBeTruthy();
    // Add more assertions here to check for the presence of initial plants
  });

  it("does not render PlantCard component when myPlantsArray is empty", () => {
    render(
      <BrowserRouter>
        <LocationProvider>
          <ToDoProvider>
            <MyPlantsProvider value={{ myPlants: [] }}>
              <MyPlants />
            </MyPlantsProvider>
          </ToDoProvider>
        </LocationProvider>
      </BrowserRouter>
    );

    const PlantCard = screen.queryAllByTestId('plant-card');
    expect(PlantCard).toHaveLength(0);
  });
})

  // TODO: not passing yet
  // it("PlantCard component renders when plants are added to myPlantsArray", async () => {
  //   // create mock plants
  //   const mockPlants = [
  //     {id: 1, commonName: "Rose", scientificName: "Rosa", imageUrl: "https://www.google.com"},
  //     {id: 2, commonName: "Lily", scientificName: "Lilium", imageUrl: "https://www.google.com"},
  //     {id: 3, commonName: "Sunflower", scientificName: "Helianthus", imageUrl: "https://www.google.com"}
  //   ]
    
  //   render(
  //     <BrowserRouter>
  //       <LocationProvider>
  //         <ToDoProvider>
  //           <MyPlantsProvider value={ {myPlants: mockPlants}}>
  //             <MyPlants />
  //           </MyPlantsProvider>
  //         </ToDoProvider>
  //       </LocationProvider>
  //     </BrowserRouter>
  //   );

  //   const plantCard =  await screen.findAllByTestId('plant-card');
  //   expect(plantCard).toHaveLength(mockPlants.length);
  // });

  // USER INTERACTION
  // todo: not passing yet
//   it("clicking on a PlantCard opens the PlantProfileModal", async () => {
 
//     // create mock plants
//     const mockPLants = [
//       {id: 1, commonName: "Rose", scientificName: "Rosa", imageUrl: "https://www.google.com"},
//     ]
  
//     render(
//     <MyPlantsProvider value={ {myPlantsArray: mockPLants}}>
//       <MyPlants />
//     </MyPlantsProvider>
//   )
//   const plantCard = screen.queryAllByTestId('plant-card');
//   await userEvent.click(plantCard);

//   expect(screen.queryAllByTestId('plant-profile-modal')).toBeTruthy();
//   });
// });



