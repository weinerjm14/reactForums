import React from 'react';
import { render } from '@testing-library/react';
import Timeline from '../../../pages/timeline';

test('renders deploy link', () => {
  const { getByText } = render(<Timeline />);
  const linkElement = getByText(/Timeline/);
  expect(linkElement).toBeInTheDocument();
});
