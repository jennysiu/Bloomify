import { render, screen, userEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MyPlants from '../../pages/MyPlants'
import {MyPlantsProvider} from "../../contexts/ContextMyPlants"


// COMPONENTS RENDERING
describe('MyPlants page', () => {
  it('my plants page renders correctly', () => {
    const { getByText } = render(
    <BrowserRouter>
      <MyPlants />;
    </BrowserRouter>
    );
    expect(getByText('My Plant Sanctuary')).toBeTruthy();
    // Add more assertions here to check for the presence of initial plants
  });

  it("does not render PlantCard component when myPlantsArray is empty", () => {
    render(
      <MyPlantsProvider value={ {myPlantsArray: []} }>
        <MyPlants />
      </MyPlantsProvider>
    );

    const PlantCard = screen.queryAllByTestId('plant-card');
    expect(PlantCard).toHaveLength(0);
  });

  // TODO: i think this one is not yet passing because context not fully setup for myPlants
  // it("PlantCard component renders when plants are added to myPlantsArray", () => {
  //   // create mock plants
  //   const mockPlants = [
  //     {id: 1, commonName: "Rose", scientificName: "Rosa", imageUrl: "https://www.google.com"},
  //     {id: 2, commonName: "Lily", scientificName: "Lilium", imageUrl: "https://www.google.com"},
  //     {id: 3, commonName: "Sunflower", scientificName: "Helianthus", imageUrl: "https://www.google.com"}
  //   ]
    
  //   render(
  //     <MyPlantsProvider value={ {myPlantsArray: mockPlants} }>
  //       <MyPlants />
  //     </MyPlantsProvider>
  //   );

  //   const PlantCard = screen.queryAllByTestId('plant-card');
  //   expect(PlantCard).toHaveLength(mockPlants.length);
    
  // });

  // USER INTERACTION
  // todo: i think this will only test once context is set up
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



