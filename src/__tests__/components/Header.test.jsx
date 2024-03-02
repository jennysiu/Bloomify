import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import Header from '../../components/Header';

// test that checks to see if our Header component renders without throwing an error.
it('Header Component Renders Without Error', () => {
  render(<Header />);
});