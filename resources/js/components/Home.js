import React, { useState } from 'react'
import MapContainer from './MapContainer';
import NewMap from "./NewMap.js";
//import Profile from "./Profile/Profile";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { Row, Col } from 'reactstrap';
//import Register from './Auth/Register.js';
import RestaurantCard from './Restaurant/RestaurantCard';
import Profile from './Profile/Profile';
import DishForm from './Dish/DishForm';



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
                    render={() => 
                        <RestaurantCard
                            user={props.user}
                            handleRestCoords={setRestCoords}
                        />
                    }
                />
                <Route 
                    exact={true}
                    path='/newdish'
                    render={() => 
                        <RestaurantCard
                            user={props.user}
                            handleRestCoords={setRestCoords}
                        />
                    }
                />
                <Route path = '/profile' component={Profile} />
            </Switch>
            </Col>
            <Col sm="12" md="6">
            <Switch>
                <Route 
                    exact={true}
                    path = '/'
                    render = {()=>    
                        <NewMap 
                            restCoords={restCoords}
                    />
                    }
                />
                <Route 
                    exact={true}
                    path = '/profile'
                    render = {()=>    
                        <NewMap 
                            restCoords={restCoords}
                    />
                    }
                />
                 <Route path = '/newdish' component={DishForm}/>
            </Switch> 
            </Col>
        </Row>
    )
}
export default Home;