import { render, screen } from '@testing-library/react';
import index from './index.js';

test('Verificar link de inicio', () => {
  render(<index />);
  const linkElement = screen.getByText(/INICIO/i);
  expect(linkElement).toBeInTheDocument();
});
test('Verificar link de productos', () => {
    render(<index />);
    const linkElement = screen.getByText(/PRODUCTOS/i);
    expect(linkElement).toBeInTheDocument();
  });