import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCard from "./DishCard";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import {Link} from "react-router-dom";

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
        <Card className="dishCard shadow-sm p-3 mb-5 bg-white rounded">
            <div>
                <CardTitle>Add New Dish</CardTitle>
            </div>
            <div style={{textAlign: 'center' ,fontSize:'5em'}}>
                <Button onClick={() => props.setRestaurantId(props.restaurantId)}
                tag={Link} to="/dish/new" >+</Button>
            </div>
      </Card>
      </Slider>
    </>
  );

}

export default Dishes;

