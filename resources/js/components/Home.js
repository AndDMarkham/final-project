import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MapContainer from './MapContainer';
import RestaurantForm from './Restaurant/RestaurantForm';
import DishForm from "./Dish/DishForm.js";
import ReviewForm from "./Review/ReviewForm.js";
import NewMap from "./NewMap.js"
import Register from "./Register.js"

const homeStyle = {
    display: 'flex',

}

const Home = props => {
    return (
        <div style={homeStyle}>
            <div>
                <Register/>
            </div>
            <div>
                <NewMap />
            </div>
        </div>
    )
}

export default Home;