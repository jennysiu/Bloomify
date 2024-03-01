import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

import { MemoryRouter } from 'react-router-dom';


// test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
  render(<App />);
});

// routing testing
it("renders the dashboard component for the root path", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Dashboard Content")).toBeInTheDocument();
})