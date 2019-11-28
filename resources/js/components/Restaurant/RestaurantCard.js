import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Dishes from '../Dish/Dishes';
import {Link} from "react-router-dom";


const RestaurantCard = (
    props
 ) => {
    console.log(props)
    const [ loading, setLoading ] = useState();
    const [ restaurants, setRestaurants ] = useState([]);
console.log('RestaurantCard', props.user)
useEffect(()=> {
    console.log('RestaurantCard useeffect 2')
});
    useEffect(()=> {
        console.log('RestaurantCard useeffect 1');
        async function fetchRestaurants(){
            console.log(props.user)
            setLoading(true);
            const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    diets: props.user.user.diets.map(d => d.id)
                })
            })
            const data = await response.json();
            setRestaurants(data);
            setLoading(false);
            console.log('data', data);
        }

            fetchRestaurants();
    }, []);

    console.log('restaurants', restaurants)

if (loading === true) {
    return (
        <div style={{textAlign: 'center', padding: '2rem 1rem'}}>
            Loading...
        </div>
    )
} return (
        <div className="restaurantCardsScroll">
            {
                restaurants && 
                restaurants.map((restaurant, key) => (
                    <Card key={key} body  className="shadow p-1 mb-4 restaurantCard rounded">
                        <div className="restaurantCardMobile">
                            <h4 >
                                <Link className="restaurantName" to="/restaurant/" onClick={() => 
                                    props.setRestaurantId(restaurant.id)}>
                                        {restaurant.name}
                                </Link>
                            </h4>
                            <p className="clickRestName">Click me <img src="/images/icons8-up-100.png" alt="arrow" width="30px"/>
                            
                            </p>
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
                                }}
                                tag={Link} to="/" >Show on the map</Button>
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
                <h4 className="restaurantName">Add New Restaurant</h4>
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