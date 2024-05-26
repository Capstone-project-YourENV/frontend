import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import {
  afterEach,
  describe,
  expect,
  it,
} from 'vitest';
import NewsItem from './NewsItem';

expect.extend(matchers);
describe('NewsItem Component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render NewsItem Component correctly', async () => {
    // arrange
    render(
      <NewsItem
        image="path/to/image.jpg"
        title="News Title"
        date="2022-01-01"
      />,
    );
  });

  it('renders all required props correctly', async () => {
    render(
      <NewsItem
        image="path/to/image.jpg"
        title="News Title"
        date="2022-01-01"
      />,
    );

    const image = await screen.getByRole('img');
    const title = await screen.getByText('News Title');
    const date = await screen.getByText('2022-01-01');
    // assert
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
