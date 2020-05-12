import React from 'react';
import { render } from '@testing-library/react';
import Message from '../../../pages/message';

test('renders deploy link', () => {
  const { getByText } = render(<Message />);
  const linkElement = getByText(/Message/);
  expect(linkElement).toBeInTheDocument();
});
