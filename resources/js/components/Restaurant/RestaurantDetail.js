import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishForm from '../Dish/DishForm';

const RestaurantDetail = props => {

    const restaurantDetailStyle = { padding:'2rem'}
    return (
        <div>
            <p style={{display:'flex', flexDirection:'row'}}>
                <div style={restaurantDetailStyle}>Some restaurant</div>
                <div style={restaurantDetailStyle}>Some address</div>
                <div style={restaurantDetailStyle}>Some phone</div>
                <div style={restaurantDetailStyle}>Some website_url</div>
            </p>
            
            <DishForm
            />
        </div>
    )
}
export default RestaurantDetail;