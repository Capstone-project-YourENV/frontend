import matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Copyright from './Copyright';

/**
 * skenario testing
 *
 * - Copyright component
 *   - renders Copyright Component correctly
 */

expect.extend(matchers);
describe('Copyright component', () => {
  it('should render Copyright Component correctly', async () => {
    // arrange
    render(<Copyright />);

    const app = await screen.getByText('Comment');
    // assert
    expect(app).toBeInTheDocument();
  });
});
