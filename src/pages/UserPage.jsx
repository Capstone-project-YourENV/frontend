import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import Header from '../components/Company/Header';
import Event from '../components/Company/Event';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const company = {
  name: 'Biffco Enterprises Ltd.',
  title: 'Energizer',
  email: 'officialprashanttt@gmail.com',
  phone: '(219) 555-0114',
  location: 'Indonesia',
  events: 7,
  logo: './src/assets/logo.png',
};

const currentEvent = {
  title: 'Algae Bloom in a Lake',
  date: '18 August 2024 - 20 August 2024',
  description:
    'The objective of this paper is to determine the likelihood of an algae bloom in a particular lake located in upstate New York.....',
  image: './src/assets/post.jpg',
};

const pastEvents = [
  {
    title: 'Algae Bloom in a Lake',
    date: '18 August 2024 - 20 August 2024',
    description:
      'The objective of this paper is to determine the likelihood of an algae bloom in a particular lake located in upstate New York.....',
    image: './src/assets/post.jpg',
  },
  {
    title: 'Algae Bloom in a Lake',
    date: '18 August 2024 - 20 August 2024',
    description:
      'The objective of this paper is to determine the likelihood of an algae bloom in a particular lake located in upstate New York.....',
    image: './src/assets/post.jpg',
  },
  {
    title: 'Algae Bloom in a Lake',
    date: '18 August 2024 - 20 August 2024',
    description:
      'The objective of this paper is to determine the likelihood of an algae bloom in a particular lake located in upstate New York.....',
    image: './src/assets/post.jpg',
  },
  {
    title: 'Algae Bloom in a Lake',
    date: '18 August 2024 - 20 August 2024',
    description:
      'The objective of this paper is to determine the likelihood of an algae bloom in a particular lake located in upstate New York.....',
    image: './src/assets/post.jpg',
  },
];

function BookmarkPage() {
  const authUser = useSelector((state) => state.authUser);
  return (
    <LayoutForumApp>
      <Grid container spacing={2}>
        <SidebarContent user={authUser} />
        <Grid item xs={12} md={9}>
          <Container sx={{ mt: 4 }}>
            <Header company={company} />
            <Box>
              <Typography variant="h6">Current Event</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Event event={currentEvent} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Event event={currentEvent} />
                </Grid>
              </Grid>
            </Box>
            <Box mt={4}>
              <Typography variant="h6">Past Events</Typography>
              <Grid container spacing={2}>
                {pastEvents.map((event, index) => (
                  <Grid item xs={12} md={3} key={index}>
                    <Event event={event} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </LayoutForumApp>
  );
}

export default BookmarkPage;
