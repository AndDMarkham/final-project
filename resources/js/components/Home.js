import React, { useState } from 'react'
import Map from "./Map";
import RestaurantForm from './Restaurant/RestaurantForm';
import RestaurantDetail from './Restaurant/RestaurantDetail';
import DishForm from './Dish/DishForm';
import ReviewForm from './Review/ReviewForm';
import Sidebar from './Sidebar/Sidebar'
import { Row, Col } from 'reactstrap';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";

const Home = props => {
    const [restCoords, setRestCoords] = useState(null);
    const [ restaurantId, setRestaurantId ] = useState(null)

    console.log(restCoords);
    return (
        <Row className="home">
            <HashRouter>
                <Col sm="12" md="6" className="pad pad-left">
                    <Sidebar 
                        setRestaurantId={setRestaurantId}
                        setRestCoords={setRestCoords}
                        user={props.user}
                        setUser={props.setUser} 
                    />
                </Col>
                <Col sm="12" md="6" className="pad pad-right">
                    <Switch>
                        <Route 
                            exact={true}
                            path = '/'
                            render = {()=>    
                                <Map 
                                    restCoords={restCoords}
                            />
                            }
                        />
                        <Route
                            path = '/restaurant'
                            render = {()=>    
                                <RestaurantDetail
                                restaurantId={restaurantId}
                            />                           
                            } 
                        />
                        <Route
                            exact={true}
                            path = '/restaurant/new'
                            component ={RestaurantForm}
                        />
                        <Route
                            exact={true}
                            path = '/dish/new'
                            render = {()=>    
                                <DishForm 
                                    restaurantId={restaurantId}
                            />
                            }
                        />
                        <Route
                            path = '/review/new'
                            component ={ReviewForm}
                        />
                    </Switch>
                </Col>
            </HashRouter>
        </Row>
    )
}
export default Home;