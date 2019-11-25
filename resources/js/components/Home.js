import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MapContainer from './MapContainer';
// import RestaurantForm from './Restaurant/RestaurantForm';
// import DishForm from "./Dish/DishForm.js";
// import ReviewForm from "./Review/ReviewForm.js";
import NewMap from "./NewMap.js";
import Profile from "./Profile/Profile";
import { Row, Col } from 'reactstrap';
import Register from './Register.js';

const homeStyle = {
    display: 'flex',
}

const Home = props => {
    return (
        <Row className="home">
            <Col sm="12" md="6">
                
                <Profile />
                <Sidebar />
            </Col>
            <Col >
                <NewMap />
            </Col>
        </Row>
    )
}
export default Home;