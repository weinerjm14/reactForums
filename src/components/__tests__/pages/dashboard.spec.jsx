import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../../pages/dashboard';

test('renders deploy link', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/User Dashboard/);
  expect(linkElement).toBeInTheDocument();
});
