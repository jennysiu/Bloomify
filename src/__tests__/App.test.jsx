import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

import { MemoryRouter } from 'react-router-dom';


// test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
  render(<App />);
});

// ROUTING TESTING
// need to remove router from app.jsx and wrap BrowserRouter around the app
// component in main.jsx to do routing testing here
// it("renders the dashboard component for the root path", () => {
//   render(
//     <MemoryRouter initialEntries={["/"]}>
//       <App router={MemoryRouter}/>
//     </MemoryRouter>
//   );

//   expect(screen.getByText("Dashboard Content")).toBeInTheDocument();
// })

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