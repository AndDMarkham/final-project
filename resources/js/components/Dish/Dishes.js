import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCard from "./DishCard";

const Dishes = props => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '10px',
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}>
        { 
          props.dishes &&
          props.dishes.map((dish, key) => (
            <DishCard 
              key={key}
              dish={dish}
            />
          ))
        }
      </Slider>
    </>
  );

}

export default Dishes;