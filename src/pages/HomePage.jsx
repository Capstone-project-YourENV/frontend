import React from "react";
import homeImage from "../assets/home.png";
import card from "../assets/card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Mengimpor gaya Swiper yang diperlukan
function HomePage() {
  const slides = [
    {
      id: 1,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Lazizmu Tlogomas",
      distance: "900m",
      time: "14 / 30 hari",
    },
    {
      id: 2,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 2,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 3,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 4,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 6,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 6,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 6,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 6,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 7,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 8,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
    {
      id: 9,
      image: "./src/assets/card.png",
      title: "Bersih Bersih Bersama Dishub Malang",
      organization: "Yayasan Abi Berkah",
      distance: "1.5 km",
      time: "24 / 30 hari",
    },
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
              color: "white",
              fontSize: 48,
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Program Volunteer
          </div>
          <div
            style={{
              color: "white",
              fontSize: 36,
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur
            <p>adipiscing elit, sed do eiusmod tempor</p>
            <p>incididunt ut labore et dol</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6" style={{ borderRadius: "20px" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            color: "#4D869C",
            fontSize: 32,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: "700",
            wordWrap: "break-word",
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
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="shadow-lg rounded-lg">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.organization}</p>
                  <p className="text-sm text-gray-600">{slide.distance}</p>
                  <p className="text-sm text-gray-600">{slide.time}</p>
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
