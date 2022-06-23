import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataNft } from "../../data";
export default function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {dataNft.map((item) => (
          <div className="card">
            <div className="carTop">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
            <div className="card-bottom">
              <h5>{item.priceBN}</h5>
              <h6>{item.priceCash}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
