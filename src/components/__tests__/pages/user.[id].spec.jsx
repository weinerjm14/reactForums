import React from 'react';
import { render } from '@testing-library/react';
import User from '../../../pages/user/[id]';

test('renders deploy link', () => {
  const { getByText } = render(<User />);
  const linkElement = getByText(/User/);
  expect(linkElement).toBeInTheDocument();
});
