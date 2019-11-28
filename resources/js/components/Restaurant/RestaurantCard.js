import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Dishes from '../Dish/Dishes';
import {Link} from "react-router-dom";


const RestaurantCard = props => {
    const { executeScroll } = props
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
                    <Card key={key} body  className="shadow p-1 mb-5 bg-white rounded">
                        <div className="restaurantCardMobile">
                            <CardTitle className="restaurantName">
                                <Link to="/restaurant/" onClick={() => 
                                    props.setRestaurantId(restaurant.id)}>
                                        {restaurant.name}
                                </Link>
                            </CardTitle>
                            <div className="restaurantInfo">
                                <Row>
                                    <Col xs="12" md="6" lg="4"> {restaurant.address} </Col>
                                    <Col xs="12" md="6" lg="4">{restaurant.phone} </Col>
                                    <Col xs="12" md="12" lg="4">{restaurant.website_url} </Col>
                                </Row>
                            </div>    
                                <Button className="btnShowOnMap" onClick={() => {
                                    console.log(restaurant);
                                    if (window.innerWidth < 767) {
                                        const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
                                        console.log(scrolltop)
                                        console.log(document.querySelector('.mapRow').getBoundingClientRect().top)
                                        console.log(document.querySelector('.mapRow').getBoundingClientRect().top + scrolltop)
                                        window.scrollTo({
                                            top: document.querySelector('.mapRow').getBoundingClientRect().top + scrolltop + 200, 
                                            left: 0, 
                                            behavior: 'smooth'
                                        });
                                    }
                                    props.handleRestCoords({
                                        lat: restaurant.latitude,
                                        lon: restaurant.longitude
                                    })
                                    //executeScroll();
                                }}>Show on the map</Button>
                        </div>
                        
                        <Dishes
                            dishes={restaurant.dishes}
                            restaurantId={restaurant.id}
                            setRestaurantId={props.setRestaurantId}
                        />
                    </Card>
                ))
            }
            <Card body className="shadow bg-white rounded newRestaurant">
                <CardTitle className="restaurantName">Add New Restaurant</CardTitle>
                <div style={{textAlign: 'center' ,fontSize:'2em'}}>
                    <Button tag={Link} to="/restaurant/new" 
                    onClick={()=> {
                        if (window.innerWidth < 767) {
                            setTimeout(() => {
                              const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
                              console.log(scrolltop)
                              console.log(document.querySelector('.restaurantForm').getBoundingClientRect().top)
                              console.log(document.querySelector('.restaurantForm').getBoundingClientRect().top + scrolltop)
                              window.scrollTo({
                                  top: document.querySelector('.restaurantForm').getBoundingClientRect().top + scrolltop, 
                                  left: 0, 
                                  behavior: 'smooth'
                              });
                            }, 50)
                          }
                    }}
                    >+</Button>
                </div>
            </Card>
        </div>
    )
}

export default RestaurantCard;