import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, React! heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, React!/i);
  expect(headingElement).toBeInTheDocument();
});
