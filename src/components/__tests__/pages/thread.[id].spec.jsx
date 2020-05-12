import React from 'react';
import { render } from '@testing-library/react';
import Thread from '../../../pages/thread/[id]';

test('renders deploy link', () => {
  const { getByText } = render(<Thread />);
  const linkElement = getByText(/Thread/);
  expect(linkElement).toBeInTheDocument();
});
