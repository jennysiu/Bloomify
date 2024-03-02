import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import Footer from '../../components/Footer';

// test that checks to see if our Footer component renders without throwing an error.
it('Footer Component Renders Without Error', () => {
  render(<Footer />);
});

