import React from 'react';
import Sidebar from './Sidebar/Sidebar';
<<<<<<< HEAD
import MapContainer from './MapContainer';
import RestaurantForm from './Restaurant/RestaurantForm';
import DishForm from "./Dish/DishForm.js";
import ReviewForm from "./Review/ReviewForm.js";
import NewMap from "./NewMap.js"
import Register from "./Register.js"
=======
// import MapContainer from './MapContainer';
// import RestaurantForm from './Restaurant/RestaurantForm';
// import DishForm from "./Dish/DishForm.js";
// import ReviewForm from "./Review/ReviewForm.js";
import NewMap from "./NewMap.js";
import Profile from "./Profile/Profile";
import { Row, Col } from 'reactstrap';
>>>>>>> hel


const Home = props => {
    return (
<<<<<<< HEAD
        <div style={homeStyle}>
            <div>
                <DishForm />
            </div>
            <div>
                <NewMap />
            </div>
        </div>
=======
        
            <Row className="home">
                <Col sm="12" md="6">
                    
                    <Profile />
                    <Sidebar />
                </Col>
                <Col >
                    <NewMap />
                </Col>
            </Row>
        
>>>>>>> hel
    )
}

export default Home;