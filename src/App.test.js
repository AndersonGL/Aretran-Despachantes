import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main banner heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/INTERMEDIAÇÕES & ASSESSORIA DOCUMENTAL/i);
  expect(headingElement).toBeInTheDocument();
});
