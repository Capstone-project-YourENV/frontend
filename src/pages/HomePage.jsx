import React from 'react';
import homeImage from '../assets/home.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

function HomePage() {
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
    <div className="relative flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full h-full relative">
        <img
          src={homeImage}
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute top-0 left-20 w-full h-full flex flex-col justify-center text-white px-10">
          <div
            style={{
              color: 'white',
              fontSize: 48,
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            Program Volunteer
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 36,
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '600',
              wordWrap: 'break-word',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur
            <p>adipiscing elit, sed do eiusmod tempor</p>
            <p>incididunt ut labore et dol</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6" style={{ borderRadius: '20px' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            color: '#4D869C',
            fontSize: 32,
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: '700',
            wordWrap: 'break-word',
          }}
        >
          Program Volunteer
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {volunteerSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="shadow-lg rounded-lg border border-gray-200">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    {slide.organization}
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-blue-500 ml-1"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-gray-500"
                      />
                      <p className="ml-1">{slide.distance}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="text-gray-500"
                      />
                      <p className="ml-1">{slide.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="w-full bg-white p-6 mt-10"
        style={{ borderRadius: '20px' }}
      >
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Event Pilihan</h2>
          <a href="#" className="text-sm text-blue-500">
            Lihat Semua
          </a>
        </div>
        <div className="flex space-x-4 mb-6">
          <button
            className="px-4 py-2 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            style={{ background: '#7AB2B2' }}
          >
            Donasi
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">
            Volunteer
          </button>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {donationSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="shadow-lg rounded-lg border border-gray-200">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    {slide.organization}
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-blue-500 ml-1"
                    />
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-green-500"
                      style={{ width: slide.percentage }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Target: {slide.target}
                  </div>
                  <div className="text-sm text-gray-600 mb-1 text-right">
                    {slide.percentage}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="w-full bg-white p-6 mt-10"
        style={{ borderRadius: '20px' }}
      >
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Berita Terkini</h2>
          <a href="#" className="text-sm text-blue-500">
            Lihat Semua
          </a>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {newsSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="shadow-lg rounded-lg border border-gray-200">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomePage;
