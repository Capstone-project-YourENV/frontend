import React from 'react';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import homeImage from '../assets/home.png';
import LayoutHomepage from '../layouts/LayoutHomepage';
import ListHomepage from '../components/ListHomepage';
import VolunteerItem from '../components/VolunteerItem';
import EventItem from '../components/EventItem';
import NewsItem from '../components/NewsItem';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  let slidesPerView = 1;
  if (isMobile) {
    slidesPerView = 1;
  } else if (isTablet) {
    slidesPerView = 3;
  } else if (isDesktop) {
    slidesPerView = 5;
  }
  const volunteerSlides = [
    {
      id: 1,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      distance: '900m',
      time: '14 / 30 hari',
    },
    {
      id: 2,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      distance: '1.5 km',
      time: '24 / 30 hari',
    },
    {
      id: 3,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      distance: '900m',
      time: '14 / 30 hari',
    },
    {
      id: 4,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      distance: '1.5 km',
      time: '24 / 30 hari',
    },
    {
      id: 5,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      distance: '900m',
      time: '14 / 30 hari',
    },
    {
      id: 6,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      distance: '1.5 km',
      time: '24 / 30 hari',
    },
    {
      id: 7,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      distance: '900m',
      time: '14 / 30 hari',
    },
    {
      id: 8,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      distance: '1.5 km',
      time: '24 / 30 hari',
    },
    {
      id: 9,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      distance: '900m',
      time: '14 / 30 hari',
    },
    {
      id: 10,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      distance: '1.5 km',
      time: '24 / 30 hari',
    },
    {
      id: 11,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      distance: '900m',
      time: '14 / 30 hari',
    },
    {
      id: 12,
      image: './src/assets/card.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      distance: '1.5 km',
      time: '24 / 30 hari',
    },
  ];

  const donationSlides = [
    {
      id: 1,
      image: './src/assets/card2.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      target: 'Rp 5.000.000',
      percentage: '50%',
    },
    {
      id: 2,
      image: './src/assets/card2.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      target: 'Rp 10.000.000',
      percentage: '25%',
    },
    {
      id: 3,
      image: './src/assets/card2.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      target: 'Rp 7.000.000',
      percentage: '75%',
    },
    {
      id: 4,
      image: './src/assets/card2.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      target: 'Rp 3.000.000',
      percentage: '100%',
    },
    {
      id: 5,
      image: './src/assets/card2.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Lazizmu Tlogomas',
      target: 'Rp 6.000.000',
      percentage: '40%',
    },
    {
      id: 6,
      image: './src/assets/card2.png',
      title: 'Bersih Bersih Bersama Dishub Malang',
      organization: 'Yayasan Abi Berkah',
      target: 'Rp 8.000.000',
      percentage: '80%',
    },
  ];

  const newsSlides = [
    {
      id: 1,
      image: './src/assets/news.png',
      title: 'Pembagian Sedekah Jumat untuk Ojek Online di Dau',
    },
    {
      id: 2,
      image: './src/assets/news.png',
      title: 'Sembako Barokah untuk Program Bakti Guru',
    },
    {
      id: 3,
      image: './src/assets/news.png',
      title: 'Penyerahan Donasi untuk Korban Gempa',
    },
    // Add more news slides as needed
  ];

  return (
    <LayoutHomepage>
      <Grid
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          component="img"
          src={homeImage}
          alt="Background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Grid
          sx={{
            position: 'absolute',
            top: 0,
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            px: 2, // Responsive padding
            gap: '5px',
            [theme.breakpoints.up('sm')]: {
              px: 10, // Padding for larger screens
              gap: '20px',
            },
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: {
                xs: 20, // font size for extra small screens
                sm: 32, // font size for extra small screens
                lg: 48, // font size for larg screens and up
              },
              fontWeight: 700,
              wordWrap: 'break-word',
            }}
          >
            Program Volunteer
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: {
                xs: 16, // font size for extra small screens
                sm: 20, // font size for small screens and up
                lg: 36, // font size for large screens and up
              },
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              wordWrap: 'break-word',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dol
          </Typography>
        </Grid>
      </Grid>
      <ListHomepage title="Volunteer">
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {volunteerSlides.map((volunteer) => (
            <SwiperSlide key={volunteer.id}>
              <VolunteerItem {...volunteer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListHomepage>
      <ListHomepage title="Event">
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {donationSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <EventItem {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListHomepage>
      <ListHomepage title="News">
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {newsSlides.map((slide) => (
            <SwiperSlide className="w-full" key={slide.id}>
              <NewsItem {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListHomepage>
    </LayoutHomepage>
  );
}

export default HomePage;
