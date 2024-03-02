import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import Navbar from '../../components/Navbar';

// test that checks to see if our Navbar component renders without throwing an error.
it('Navbar Component Renders Without Error', () => {
  render(<Navbar />);
});