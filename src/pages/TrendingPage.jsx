import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Box, Button, Container } from '@mui/material';
import TrendItem from '../components/Trending/TrendItem';
import { asyncHomePostsAndUsers } from '../states/shared/thunk';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventItem from '../components/homepage/EventItem';
import VolunteerItem from '../components/homepage/VolunteerItem';
import NewsItem from '../components/homepage/NewsItem';

function FilterButtons({ activeFilter, setActiveFilter }) {
  return (
    <Box sx={{ display: 'flex', mb: 3, gap: 2 }}>
      <Button
        variant={activeFilter === 'Event' ? 'contained' : 'outlined'}
        onClick={() => setActiveFilter('Event')}
        sx={{ borderRadius: '20px', padding: '5px 20px' }}>
        Event
      </Button>
      <Button
        variant={activeFilter === 'Volunteer' ? 'contained' : 'outlined'}
        onClick={() => setActiveFilter('Volunteer')}
        sx={{ borderRadius: '20px', padding: '5px 20px' }}>
        Volunteer
      </Button>
      <Button
        variant={activeFilter === 'News' ? 'contained' : 'outlined'}
        onClick={() => setActiveFilter('News')}
        sx={{ borderRadius: '20px', padding: '5px 20px' }}>
        News
      </Button>
    </Box>
  );
}

function TrendPage() {
  const [activeFilter, setActiveFilter] = useState('Event'); // Menggunakan string tunggal untuk filter
  const dispatch = useDispatch();
  const trendsPosts = useSelector((state) => state.posts.data);
  const trendsUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(asyncHomePostsAndUsers());
  }, [dispatch]);

  const trendsEvent = trendsPosts.filter((post) => post.category === 'Event');
  const trendsNews = trendsPosts.filter((post) => post.category === 'News');

  let trends;
  switch (activeFilter) {
    case 'Event':
      trends = trendsEvent;
      break;
    case 'Volunteer':
      trends = trendsUsers;
      break;
    case 'News':
      trends = trendsNews;
      break;
    case 'Users':
      trends = trendsUsers;
      break;
    default:
      trends = trendsEvent;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 4,
          }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Trends
          </Typography>
        </Box>
        <FilterButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <Grid container spacing={3}>
          {trends?.map((trend) => (
            <Grid item xs={12} sm={6} md={4} key={trend.id}>
              {activeFilter === 'Event' && <EventItem />}
              {activeFilter === 'Volunteer' && <VolunteerItem />}
              {activeFilter === 'News' && <NewsItem />}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default TrendPage;
