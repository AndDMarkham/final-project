import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MapContainer from './MapContainer';
import RestaurantForm from './Restaurant/RestaurantForm';
import DishForm from "./Dish/DishForm.js";
import ReviewForm from "./Review/ReviewForm.js";
import RestaurantDetail from "./Restaurant/RestaurantDetail";

const homeStyle = {
    display: 'flex',

}

const Home = props => {
    return (
        <div style={homeStyle}>
            <div>
                <Sidebar />
            </div>
            <div>
                {/* <MapContainer /> */}
                {/* <RestaurantForm /> */}
                <RestaurantDetail/>
            </div>
        </div>
    )
}

export default Home;