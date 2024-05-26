import React from 'react';
import {
  afterEach,
  describe,
  expect,
  it,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import EventItem from './EventItem';

expect.extend(matchers);
describe('EventItem component', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders without crashing', () => {
    render(
      <EventItem
        image="path/to/image.jpg"
        title="Event Title"
        organization="Organization Name"
        target="Event Target"
        percentage="50%"
      />,
    );
  });

  it('renders all required props correctly', async () => {
    render(
      <EventItem
        image="path/to/image.jpg"
        title="Event Title"
        organization="Organization Name"
        target="20"
        percentage="50%"
      />,
    );

    const title = await screen.getByText('Event Title');
    const organization = await screen.getByText('Organization Name');
    const target = await screen.getByText('Target:20');
    const percentage = await screen.getByText('50%');

    expect(title).toBeInTheDocument();
    expect(organization).toBeInTheDocument();
    expect(target).toBeInTheDocument();
    expect(percentage).toBeInTheDocument();
  });
});
