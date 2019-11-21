import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MapContainer from './MapContainer';
import RestaurantForm from './Restaurant/RestaurantForm';
import DishForm from "./Dish/DishForm.js";
import ReviewForm from "./Review/ReviewForm.js";

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
                <RestaurantForm />
            </div>
        </div>
    )
}

export default Home;