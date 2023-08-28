import { render, screen } from '@testing-library/react';
import index from './index';

test('renders learn react link', () => {
  render(<index />);
  const linkElement = screen.getByText(/INICIO/i);
  expect(linkElement).toBeInTheDocument();
});