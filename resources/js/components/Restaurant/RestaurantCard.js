import React, { useState, useEffect } from 'react';

import DishCard from '../Dish/DishCard';
import Dishes from '../Dish/Dishes';

// import { windowWhen } from 'rxjs/operator/windowWhen';

const restaurantStyle = {
    // border: '1px solid black',
    backgroundColor: 'lightgrey',
    margin: '0 auto 1rem',
    width: '88%',
    height: '85%',
    paddingTop: '1rem',
    paddingBottom: '2rem',
    fontSize: '12px',
}

const restaurantContainerStyle = {
    marginBottom: '1rem',
}

const infoStyle = {
    fontSize: '16px',
    margin: 0
}

const restaurants1 = [
    {
        id: 1,
        name: 'Burger Queen',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.com/'
    }
]

const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();

    useEffect(()=> {
        async function fetchRestaurants(){
            const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants', {
                headers: {
                    'Accept': 'application/json'
                }
            })
            const data = await response.json();
            setRestaurants (data);
        }
            fetchRestaurants();
    },[]);

    
    return (
        <div style={{width: '44vw', overflow: 'scroll'}}>
           {
               restaurants && 
               restaurants.map((restaurant, key) => (
                   <div key={key} style={restaurantStyle}>
                       <div style={restaurantContainerStyle}>
                           <p style={infoStyle}>
                               <strong>{restaurant.name}</strong>
                           </p>
                           {/* <p>
                               {restaurant.address} <br/>
                               {restaurant.phone} <br/>
                               {restaurant.website_url}
                           </p> */}
                       </div>
                       <div>
                           <Dishes dishes={restaurant.dishes}/>
                       </div>
                   </div>
               ))
           
            }
            
        </div>
    )
}

export default RestaurantCard;