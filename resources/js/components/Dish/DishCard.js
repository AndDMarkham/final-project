import React from 'react';
import Reviews from '../Review/Reviews';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../../sass/index.scss';
import {Link} from "react-router-dom";

const DishCard = props => {
    return (
        <Card key={props.key} className="dishCard shadow-sm p-3 mb-5 bg-white rounded">
            
                <div>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <div>{props.dish.description}
                        <p>{props.dish.diet_id}</p>
                    </div>
                </div>
                <Reviews 
                    reviews={props.dish.reviews} 
                />
        </Card>
        
    )
}

export default DishCard;