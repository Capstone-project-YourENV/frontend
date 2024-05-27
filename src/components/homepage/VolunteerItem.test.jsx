import React from 'react';
import {
  afterEach,
  describe,
  expect,
  it,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import VolunteerItem from './VolunteerItem';

expect.extend(matchers);
describe('VolunteerItem Component', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders without crashing', () => {
    render(
      <VolunteerItem
        image="path/to/image.jpg"
        title="Volunteer Title"
        organization="Organization Name"
        distance="900m"
        time="14 / 30 hari"
      />,
    );
  });

  it('renders all required props correctly', async () => {
    render(
      <VolunteerItem
        image="path/to/image.jpg"
        title="Volunteer Title"
        organization="Organization Name"
        distance="900m"
        time="14 / 30 hari"
      />,
    );

    const title = await screen.getByText('Volunteer Title');
    const organization = await screen.getByText('Organization Name');
    const distance = await screen.getByText('900m');
    const time = await screen.getByText('14 / 30 hari');

    expect(title).toBeInTheDocument();
    expect(organization).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
});
