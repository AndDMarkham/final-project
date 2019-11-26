import React, { useState } from 'react'
import MapContainer from './MapContainer';
import NewMap from "./NewMap.js";
//import Profile from "./Profile/Profile";
import { Row, Col } from 'reactstrap';
//import Register from './Auth/Register.js';
import RestaurantCard from './Restaurant/RestaurantCard';


const Home = props => {
    const [restCoords, setRestCoords] = useState(null);

    console.log(restCoords);
    return (
        <Row className="home">
            <Col sm="12" md="6">
                <RestaurantCard
                    user={props.user}
                
                    handleRestCoords={setRestCoords}
                />
                {/* <Profile /> */}
                {/* <Register /> */}
            </Col>
            <Col >
                <NewMap 
                    restCoords={restCoords}
                />
            </Col>
        </Row>
    )
}
export default Home;