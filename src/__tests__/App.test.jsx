import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

import { BrowserRouter } from 'react-router-dom';

import { ToDoProvider } from '../contexts/ContextsToDos.jsx';
import { LocationProvider } from '../contexts/ContextLocation'
import { MyPlantsProvider } from '../contexts/ContextMyPlants';
import { PlantProvider } from '../contexts/PlantContext.jsx';

// test that checks to see if our `App` component renders without throwing an error.
// NOTE: this will need updfating when we add new context files
it('App Component Renders Without Error', () => {
  render(
    <BrowserRouter>
      <ToDoProvider>
        <MyPlantsProvider>
          <LocationProvider>
            <App />
          </LocationProvider>
        </MyPlantsProvider>
      </ToDoProvider>
    </BrowserRouter>
  )
});

// ROUTING TESTING
// add settings if we end up having a setting page
it("renders the dashboard page for the root path", () => {
  render(
    <BrowserRouter initialEntries={["/"]}>
      <App router={BrowserRouter}/>
    </BrowserRouter>
  );

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
})

it("renders the My Plants page for the root path", async () => {
  render(
    <BrowserRouter initialEntries={["/my-plants"]}>
      <App router={BrowserRouter}/>
    </BrowserRouter>
  );

  expect(await screen.findByText("My Plants")).toBeInTheDocument();
})

it("renders the Explore page for the root path", async () => {
  render(
    <BrowserRouter initialEntries={["/explore"]}>
      <App router={BrowserRouter}/>
    </BrowserRouter>
  );

  expect(await screen.findByText("Explore")).toBeInTheDocument();
})

it("renders the Waterin Log page for the root path", async () => {
  render(
    <BrowserRouter initialEntries={["/watering-log"]}>
      <App router={BrowserRouter}/>
    </BrowserRouter>
  );

  expect(await screen.findByText("Watering Log")).toBeInTheDocument();
})

it("renders the Watering Log page for the root path", async () => {
  render(
    <BrowserRouter initialEntries={["/search-results"]}>
      <App router={BrowserRouter}/>
    </BrowserRouter>
  );

  expect(await screen.findByText("Results")).toBeInTheDocument();
})

// COMPONENT RENDERING

// STATE MANAGEMENT
// test to see if sidebar collapses and expands correctly
// describe('App component state management', () => {
//   it('toggles the collapsed state of the Sider when the collapse button is clicked', () => {
//     // option: Render the App component within the MemoryRouter to avoid router-related errors
//       render(<App />);


//     // Assuming the collapse/expand button has a test ID or role, we can target it
//     const collapseButton = screen.querySelector('.ant-layout-sider-trigger');
//     // check for something that's only visible when the Sider is not collapsed
//     expect(screen.getByText('Dashboard')).toBeInTheDocument();

//     // Simulate clicking the collapse button
//     fireEvent.click(collapseButton);

//     // You could alternatively check for a class or style change
//     expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();

//     // stimulate the expand button again to test expanding the Sider
//     fireEvent.click(collapseButton);

//     // And perform the checks again for the expanded state
//     expect(screen.getByText('Dashboard')).toBeInTheDocument();
//   });
// });


// STYLE AND APPEARANCE