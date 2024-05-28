import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { MemoryRouter as Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import theme from '../../styles/ConfigurationMUI';
import RegisterForm from './RegisterForm';

/**
 * skenario testing
 *
 * - RegisterForm component
 *   - renders RegisterForm Component correctly
 *   - should handle username typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

expect.extend(matchers);
describe('RegisterForm', () => {
  it('renders RegisterForm Component correctly', async () => {
    // arrange
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RegisterForm register={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const usernameInput = await screen.getByPlaceholderText(
      'Enter your username',
    );
    const emailInput = await screen.getByPlaceholderText('Enter your email');
    const passwordInput = await screen.getByPlaceholderText(
      'Enter your password',
    );
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('should handle username typing correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RegisterForm register={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const usernameInput = await screen.getByPlaceholderText(
      'Enter your username',
    );
    // action
    await userEvent.type(usernameInput, 'test');
    // assert
    expect(usernameInput).toHaveValue('test');
  });

  it('should handle email typing correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RegisterForm register={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const emailInput = await screen.getByPlaceholderText('Enter your email');
    // action
    await userEvent.type(emailInput, 'test@gmail.com');
    // assert
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RegisterForm register={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const passwordInput = await screen.getByPlaceholderText(
      'Enter your password',
    );
    // action
    await userEvent.type(passwordInput, 'test');
    // assert
    expect(passwordInput).toHaveValue('test');
  });

  it('should call register function when register button is clicked', async () => {
    const mockRegister = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RegisterForm register={mockRegister} />
        </Router>
      </ThemeProvider>,
    );
    const usernameInput = await screen.getByPlaceholderText(
      'Enter your username',
    );
    const emailInput = await screen.getByPlaceholderText('Enter your email');
    const passwordInput = await screen.getByPlaceholderText(
      'Enter your password',
    );
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });
    // action
    await userEvent.type(usernameInput, 'test');
    await userEvent.type(emailInput, 'test@gmail.com');
    await userEvent.type(passwordInput, 'test');
    await userEvent.click(registerButton);
    // assert
    expect(mockRegister).toBeCalledWith({
      username: 'test',
      email: 'test@gmail.com',
      password: 'test',
    });
  });
});
