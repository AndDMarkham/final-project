import React from 'react';
import Reviews from '../Review/Reviews';

const dishesStyle = {
    // border: '1px solid black',
    backgroundColor: 'lightblue',
    padding: '1rem 2rem 1rem 2rem',
    height: '70%',
    width: '79%',
    margin: '0 auto 1rem',
    borderRadius: '10px',
}

const dishInfoStyle = {
    marginBottom: '2rem',
}

const DishCard = props => {
    return (
        <>
            <div key={props.key} style={dishesStyle}>
                <div style={dishInfoStyle}>
                    <h3 style={{margin: '0'}}>{props.dish.name}</h3>
                    {/* {props.dish.description} */}
                </div>
                <Reviews 
                    reviews={props.dish.reviews} 
                />
            </div>
        </>
    )
}

export default DishCard;