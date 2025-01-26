import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about me text', () => {
  render(<App />);
  const linkElement = screen.getByText(/about me/i);
  expect(linkElement).toBeInTheDocument();
});
