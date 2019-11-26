import React, { useState } from 'react'
import MapContainer from './MapContainer';
import NewMap from "./NewMap.js";
//import Profile from "./Profile/Profile";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { Row, Col } from 'reactstrap';
//import Register from './Auth/Register.js';
import RestaurantCard from './Restaurant/RestaurantCard';
import Profile from './Profile/Profile';



const Home = props => {
    const [restCoords, setRestCoords] = useState(null);

    console.log(restCoords);
    return (
        <Row className="home">
            <Col sm="12" md="6">
            <Switch>
                <Route 
                    exact={true}
                    path = '/' 
                    render={
                                        (props) => 
                                        <RestaurantCard
                    user={props.user}
                
                    handleRestCoords={setRestCoords}
                />
                                        
                                        
                                    }
                                />
                                <Route path = '/profile' component={Profile} />
                        </Switch>
                
                
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