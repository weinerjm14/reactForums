import React from 'react';
import { render } from '@testing-library/react';
import Admin from '../../../pages/admin';

test('renders deploy link', () => {
  const { getByText } = render(<Admin />);
  const linkElement = getByText(/Admin Dashboard/);
  expect(linkElement).toBeInTheDocument();
});
