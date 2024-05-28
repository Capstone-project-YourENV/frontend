import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter as Router } from 'react-router';
import { ThemeProvider } from '@mui/material';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';
import theme from '../../styles/ConfigurationMUI';

/**
 * skenario testing
 *
 * - LoginForm component
 *   - renders LoginForm Component correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

expect.extend(matchers);
describe('LoginForm', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders LoginForm Component correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <LoginForm login={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const emailInput = await screen.getByPlaceholderText('Email Address');
    const passwordInput = await screen.getByPlaceholderText('Password');
    const loginButton = await screen.getByRole('button', {
      name: 'Login',
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  it('should handle email typing correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <LoginForm login={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const emailInput = await screen.getByPlaceholderText('Email Address');
    // action
    await userEvent.type(emailInput, 'test@gmail.com');
    // assert
    expect(emailInput).toHaveValue('test@gmail.com');
  });
  it('should handle password typing correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <LoginForm login={() => {}} />
        </Router>
      </ThemeProvider>,
    );
    const passwordInput = await screen.getByPlaceholderText('Password');
    // action
    await userEvent.type(passwordInput, 'test');
    // assert
    expect(passwordInput).toHaveValue('test');
  });
  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <LoginForm login={mockLogin} />
        </Router>
      </ThemeProvider>,
    );
    const emailInput = await screen.getByPlaceholderText('Email Address');
    const passwordInput = await screen.getByPlaceholderText('Password');
    const loginButton = await screen.getByRole('button', {
      name: 'Login',
    });
    // action
    await userEvent.type(emailInput, 'test@gmail.com');
    await userEvent.type(passwordInput, 'test');
    await userEvent.click(loginButton);
    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'test@gmail.com',
      password: 'test',
    });
  });
});
