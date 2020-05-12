import React from 'react';
import { render } from '@testing-library/react';
import Moderation from '../../../pages/moderation';

test('renders deploy link', () => {
  const { getByText } = render(<Moderation />);
  const linkElement = getByText(/Moderation/);
  expect(linkElement).toBeInTheDocument();
});
