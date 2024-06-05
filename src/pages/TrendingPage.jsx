import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import TrendItem from '../components/Trending/TrendItem';

const eventTrends = [
  { id: 1, title: "Sedekah Untuk Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Sedekah", target: "250/280", percentage: "85%", image: './src/assets/post.jpg' },
  { id: 2, title: "Sedekah Untuk Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Sedekah", target: "100/180", percentage: "74%", image: './src/assets/post.jpg' },
  { id: 3, title: "Sedekah Untuk Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Sedekah", target: "250/280", percentage: "85%", image: './src/assets/post.jpg' },
  { id: 4, title: "Sedekah Untuk Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Sedekah", target: "100/180", percentage: "74%", image: './src/assets/post.jpg' },
  { id: 5, title: "Sedekah Untuk Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Sedekah", target: "250/280", percentage: "85%", image: './src/assets/post.jpg' },
  { id: 6, title: "Sedekah Untuk Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Sedekah", target: "100/180", percentage: "74%", image: './src/assets/post.jpg' },
];

const volunteerTrends = [
  { id: 3, title: "Bantu Saudara Kita Terdampak Krisis Pangan", organization: "Dompet Peduli", target: '300/350', percentage: '86%', image: './src/assets/post.jpg'},
  { id: 4, title: "Bantu Kegiatan Sosial Untuk Pendidikan", organization: "Dompet Peduli", target: '150/200', percentage: '75%', image: './src/assets/post.jpg'},
];

const FilterButtons = ({ activeFilter, setActiveFilter }) => (
  <Box sx={{ display: 'flex', mb: 3, gap: 2 }}>
    <Button
      variant={activeFilter === 'event' ? 'contained' : 'outlined'}
      onClick={() => setActiveFilter('event')}
      sx={{ borderRadius: '20px', padding: '5px 20px' }}
    >
      Event
    </Button>
    <Button
      variant={activeFilter === 'volunteer' ? 'contained' : 'outlined'}
      onClick={() => setActiveFilter('volunteer')}
      sx={{ borderRadius: '20px', padding: '5px 20px' }}
    >
      Volunteer
    </Button>
  </Box>
);

const TrendPage = () => {
  const [activeFilter, setActiveFilter] = useState('event');
  const trends = activeFilter === 'event' ? eventTrends : volunteerTrends;

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold">Trends</Typography>
        <Typography variant="body2" component="a" href="#">Lihat Semua</Typography>
      </Box>
      <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Grid container spacing={3}>
        {trends.map((trend) => (
          <Grid item xs={12} sm={6} md={4} key={trend.id}>
            <TrendItem trend={trend} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendPage;
