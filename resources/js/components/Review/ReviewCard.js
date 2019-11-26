import React from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const ReviewCard = props => {
    return (
        <Card className="reviewCard shadow-sm p-3 mb-5 bg-white rounded">
            <Row key={ props.key } >
                <Col sm="12" lg="6" className="colReviewPic"><img src={ props.review.image.path } alt="meal" className="dishPic"/> </Col>
                <Col sm="12" lg="6">
                    Rating: { props.review.ratings }  <br/>
                    Review: { props.review.text }
                </Col>
            </Row>
        </Card>
    )
}

export default ReviewCard;