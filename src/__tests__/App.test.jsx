import { render, screen, fireEvent} from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

import { BrowserRouter } from 'react-router-dom';

import { ToDoProvider } from '../contexts/ContextsToDos.jsx';
import { LocationProvider } from '../contexts/ContextLocation'
import { MyPlantsProvider } from '../contexts/ContextMyPlants';
import { PlantProvider } from '../contexts/PlantContext.jsx';
import Navbar from '../components/CustomNavbar';
import Header from '../components/CustomHeader';
import Footer from '../components/CustomFooter';

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
// test that checks to see if our Navbar component renders without throwing an error.
it('Navbar Component Renders Without Error', () => {
  render(
    <BrowserRouter>
      <Navbar />;
    </BrowserRouter>
  )
});

// header
it('Header Component Renders Without Error', () => {
  render(
    <BrowserRouter>
      <Header />;
    </BrowserRouter>
  )
});

// footer
it('Footer Component Renders Without Error', () => {
  render(
    <BrowserRouter>
      <Footer />;
    </BrowserRouter>
  )
});

// STYLE AND APPEARANCE