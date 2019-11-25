import React from 'react';
import Reviews from '../Review/Reviews';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const DishCard = props => {
    return (
        <Card key={props.key} className="dishCard shadow-sm p-3 mb-5 bg-white rounded">
            
                <div>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}
                    <p>{props.dish.diet_id}</p>
                    </CardText>
                </div>
                <Reviews 
                    reviews={props.dish.reviews} 
                />
        </Card>
        
    )
}

export default DishCard;