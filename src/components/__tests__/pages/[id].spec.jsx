import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../../pages/[id]';

test('renders deploy link', () => {
  const { getByText } = render(<Page />);
  const linkElement = getByText(/Admin Created Page/);
  expect(linkElement).toBeInTheDocument();
});
