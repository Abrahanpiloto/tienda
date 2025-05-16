import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Asegura que las flechas estén habilitadas
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 5000, // Velocidad del autoplay en milisegundos
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };
  // Estilos personalizados
  const sliderStyles = `
    .slick-prev,
    .slick-next {
      z-index: 10;
      width: 40px;
      height: 40px;
    }
    .slick-prev {
      left: 25px;
    }
    .slick-next {
      right: 25px;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 40px;
      color: white;
      opacity: 0.75;
    }
  `;
  return (
    <>
      <style>{sliderStyles}</style>
      <Slider {...settings}>
        <div>
          <img
            src="./chicas.jpg"
            alt="Hero image"
            className="w-full h-112 object-cover"
          />
        </div>
        <div>
          <img
            src="./shoe.jpg"
            alt="Hero image"
            className="w-full h-112 object-cover"
          />
        </div>
        <div>
          <img
            src="./francesca.jpg"
            alt="Hero image"
            className="w-full h-112 object-cover"
          />
        </div>
      </Slider>
    </>
  );
}
