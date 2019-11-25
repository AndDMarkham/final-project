import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Dishes from '../Dish/Dishes';

const restaurants1 = [
    {
        id: 1,
        name: 'Burger Queen',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.com',
        dishes: [
            {
                name: 'abc',
                description: '12dr',
                diet_id: '4',
                reviews: [
                    {
                        image_path: '/images/fois_gras.jpg',
                        ratings: 4,
                        text: 'blah'
                    },
                    {
                        image_path: '/images/fois_gras.jpg',
                        ratings: 3,
                        text: 'blahhhh'
                    },
                    {
                        image_path: '/images/pickled_camembert.jpg',
                        ratings: 1,
                        text: 'blakhkhgh'
                    },
                ]
            }, 
            {
                name: 'abc',
                description: '12dr',
                diet_id: '4',
                reviews: [
                    {
                        image: '/images/salmon_fillet.jpg',
                        ratings: 4,
                        text: 'blah'
                    },
                    {
                        image: '/images/shio_ramen_no_noodles.jpg',
                        ratings: 3,
                        text: 'blahhhh'
                    },
                    {
                        image: '/images/veal_and_ribs.jpg',
                        ratings: 1,
                        text: 'blakhkhgh'
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Burger man',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.cz',
        dishes: [
            {
                name: 'aytc',
                description: '124dr',
                diet_id: '5'
            }
        ]
    },
    {
        id: 3,
        name: 'Salad man',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.cz',
        dishes: [
            {
                name: 'abwedc',
                description: '12aswdr',
                diet_id: '23'
            }
        ]
    },
]

const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();

    // useEffect(()=> {
    //     async function fetchRestaurants(){
    //         const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants', {
    //             headers: {
    //                 'Authorization': 'Bearer ' + this.props.token,
    //                 'X-Requested-With': 'XMLHttpRequest',
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data = await response.json();
    //         setRestaurants (data);
    //     }
    //         fetchRestaurants();
    // },[]);


    return (
        <div className="restaurantCardsScroll">
            {
                //restaurants && 
                restaurants1.map((restaurant, key) => (
                    
                        <Card key={key} body outline color="secondary" className="shadow p-3 mb-5 bg-white rounded">
                            <CardTitle>{restaurant.name}</CardTitle>
                            <CardText>
                                <Row>
                                    <Col sm="12" md="4">{restaurant.address} </Col>
                                    <Col sm="12" md="4">{restaurant.phone} </Col>
                                    <Col sm="12" md="4">{restaurant.website_url}</Col>
                                </Row>
                            </CardText>
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