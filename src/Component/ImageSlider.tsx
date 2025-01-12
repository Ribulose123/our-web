import React from "react";
import Slider from "react-slick";
import "../App.css"; // Ensure this file includes necessary Tailwind and custom CSS configurations.

const ImageSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    arrows: false,
    slidesToShow: 3, // Display multiple slides
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "/image/img1.jpg",
    "/image/img10.jpg",
    "/image/img11.jpg",
    "/image/img3.jpg",
    "/image/img6.jpg",
    "/image/img5.jpg",
    "/image/img7.jpg",
    "/image/img8.jpg",
    "/image/img9.jpg",
    "/image/img12.jpg",
    "/image/img16.jpg",
    "/image/img14.jpg",
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4 overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
