import React from 'react';
import { render } from '@testing-library/react';
import Forum from '../../../pages/forum/[id]';

test('renders deploy link', () => {
  const { getByText } = render(<Forum />);
  const linkElement = getByText(/Forum/);
  expect(linkElement).toBeInTheDocument();
});
