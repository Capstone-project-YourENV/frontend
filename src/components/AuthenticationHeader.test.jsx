import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import AuthenticationHeader from './AuthenticationHeader';

/**
 * skenario testing
 *
 * - AuthenticationHeader component
 *   - renders AuthenticationHeader Component correctly
 */
expect.extend(matchers);
describe('AuthenticationHeader', () => {
  it('renders AuthenticationHeader Component correctly', async () => {
    // arrange
    render(
      <AuthenticationHeader
        title="Authentication"
        subtitle="Login to join our community."
      />,
    );

    const title = await screen.getByText('Authentication');
    const subtitle = await screen.getByText('Login to join our community.');
    // assert
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
