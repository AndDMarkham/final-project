import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Dishes from '../Dish/Dishes';
import {Link} from "react-router-dom";


const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();
    useEffect(()=> {
        const token = window.localStorage.getItem('token');
        const user = JSON.parse(window.localStorage.getItem('user'));
        async function fetchRestaurants(){
            const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    diets: user.diets.map(d => d.id)
                })
            })
            const data = await response.json();
            setRestaurants(data);
            console.log('data', data);
        }
            fetchRestaurants();
    },[]);



    return (
        <div className="restaurantCardsScroll">
            {
                restaurants && 
                restaurants.map((restaurant, key) => (
                    
                    <Card key={key} body outline color="secondary" className="shadow p-3 mb-5 bg-white rounded">
                        <CardTitle className="restaurantName">{restaurant.name}</CardTitle>
                        <div className="restaurantInfo">
                            <Row>
                                <Col sm="12" md="4"> {restaurant.address} </Col>
                                <Col sm="12" md="4">{restaurant.phone} </Col>
                                <Col sm="12" md="4">{restaurant.website_url} </Col>
                            </Row>
                            <Button className="btnShowOnMap" onClick={() => {
                                console.log(restaurant);
                                props.handleRestCoords({
                                    lat: restaurant.latitude,
                                    lon: restaurant.longitude
                                })
                            }}>Show on the map</Button>
                        </div>
                        <Dishes 
                            dishes={restaurant.dishes} 
                        />
                    </Card>
                ))
            }
            <Card body outline color="secondary" className="shadow p-3 mb-5 bg-white rounded">
                <CardTitle className="restaurantName">Add New Restaurant</CardTitle>
                <div className="restaurantInfo">
                    <Button tag={Link} to="/restaurant/new" >+</Button>
                </div>
            </Card>
        </div>
    )
}

export default RestaurantCard;