import React from 'react';

const reviewsStyle = {
    // border: '1px solid black',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    width: '85%',
    height: '65%',
    padding: '1rem',
    margin: '0 auto 1rem'

}

const ReviewCard = props => {
    return (
        <>
            <div style={reviewsStyle} key={ props.key } >
                <img src={ props.review.image.path } alt="" style={{width: '150px'}}/> 
                Rating: { props.review.rating } <br/>
                Review: <br/>
                { props.review.text }
            </div>
        </>
    )
}

export default ReviewCard;