import React, { useState } from 'react'
import NewMap from "./NewMap.js";
import RestaurantForm from './Restaurant/RestaurantForm';
import RestaurantDetail from './Restaurant/RestaurantDetail';
import DishForm from './Dish/DishForm';
import ReviewForm from './Review/ReviewForm';
import Sidebar from './Sidebar/Sidebar'
import { Row, Col } from 'reactstrap';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";

const Home = props => {
    const [restCoords, setRestCoords] = useState(null);

    console.log(restCoords);
    return (
        <Row className="home">
            <HashRouter>
                <Col sm="12" md="6">
                    <Sidebar 
                        setRestCoords={setRestCoords}
                        user={props.user}
                        setUser={props.setUser} 
                    />
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
                            path = '/restaurant'
                            render = {()=>    
                                <RestaurantDetail />                           
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
                            component ={DishForm}
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