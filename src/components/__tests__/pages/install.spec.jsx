import React from 'react';
import { render } from '@testing-library/react';
import Install from '../../../pages/install';

test('renders deploy link', () => {
  const { getByText } = render(<Install />);
  const linkElement = getByText(/Install/);
  expect(linkElement).toBeInTheDocument();
});
