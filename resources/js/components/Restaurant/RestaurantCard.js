import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Dishes from '../Dish/Dishes';


const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();

    useEffect(()=> {
        const token = window.localStorage.getItem('token');
        async function fetchRestaurants(){
            const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
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
                            <div>
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
        </div>
    )
}

export default RestaurantCard;