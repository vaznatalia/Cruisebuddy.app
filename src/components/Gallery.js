import React from 'react';
import Swiper from 'react-id-swiper';

  const Gallery = () => {
    const params = {
      slidesPerView: 5,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        220: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        120: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }
    return (
      <Swiper {...params}>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
        <div><img src="https://loremflickr.com/700/400" alt="ship"></img></div>
      </Swiper>
    )
  };
  export default Gallery;