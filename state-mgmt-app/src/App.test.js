import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import UserProfileWithImmer from './UserProfileWithImmer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal test cases
test('should handle empty name and email', () => {
  render(<UserProfileWithImmer />);
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: '' } });
  expect(screen.getByLabelText(/name/i).value).toBe('');
  expect(screen.getByLabelText(/email/i).value).toBe('');
});

test('should update phone and address', () => {
  render(<UserProfileWithImmer />);
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '123-456-7890' } });
  fireEvent.change(screen.getByLabelText(/address/i), { target: { value: '123 Main St' } });
  expect(screen.getByLabelText(/phone/i).value).toBe('123-456-7890');
  expect(screen.getByLabelText(/address/i).value).toBe('123 Main St');
});

test('should toggle newsletter subscription', () => {
  render(<UserProfileWithImmer />);
  const checkbox = screen.getByLabelText(/subscribe to newsletter/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
});

// Edge test cases
test('should handle empty name and email fields', () => {
  render(<UserProfileWithImmer />);
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: '' } });
  expect(screen.getByLabelText(/name/i).value).toBe('');
  expect(screen.getByLabelText(/email/i).value).toBe('');
});

test('should handle invalid email format', () => {
  render(<UserProfileWithImmer />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
  expect(screen.getByLabelText(/email/i).value).toBe('invalid-email');
  // Additional validation logic can be added to check for error messages
});

test('should handle long phone number', () => {
  render(<UserProfileWithImmer />);
  const longPhoneNumber = '12345678901234567890';
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: longPhoneNumber } });
  expect(screen.getByLabelText(/phone/i).value).toBe(longPhoneNumber);
});