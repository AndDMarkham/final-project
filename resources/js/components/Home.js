import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MapContainer from './MapContainer';
import RestaurantForm from './Restaurant/RestaurantForm';
import DishForm from "./Dish/DishForm.js";
import ReviewForm from "./Review/ReviewForm.js";
<<<<<<< HEAD
import RestaurantDetail from "./Restaurant/RestaurantDetail";
=======
import NewMap from "./NewMap.js"
>>>>>>> geolocation

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
<<<<<<< HEAD
                {/* <MapContainer /> */}
                {/* <RestaurantForm /> */}
                <RestaurantDetail/>
=======
                <NewMap />
>>>>>>> geolocation
            </div>
        </div>
    )
}

export default Home;