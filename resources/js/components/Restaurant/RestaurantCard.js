import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

import DishCard from '../Dish/DishCard';
import Dishes from '../Dish/Dishes';

// import { windowWhen } from 'rxjs/operator/windowWhen';

// const restaurantStyle = {
//     // border: '1px solid black',
//     backgroundColor: 'lightgrey',
//     margin: '0 auto 1rem',
//     width: '88%',
//     height: '85%',
//     paddingTop: '1rem',
//     paddingBottom: '2rem',
//     fontSize: '12px',
// }

const restaurants1 = [
    {
        id: 1,
        name: 'Burger Queen',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.com/'
    },
    {
        id: 2,
        name: 'Burger man',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.cz/'
    },
    {
        id: 3,
        name: 'Salad man',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.cz/'
    },
]

const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();

    // useEffect(()=> {
    //     async function fetchRestaurants(){
    //         const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants', {
    //             headers: {
    //                 'Accept': 'application/json'
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
                            <Button>Button</Button>
                            <Dishes dishes={restaurant.dishes} />
                        </Card>
                    
                ))

            }

        </div>
    )
}

export default RestaurantCard;