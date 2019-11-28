import React, { useState } from "react"
import ImageUploader from 'react-images-upload';
import { Button } from 'reactstrap';

const ReviewForm = props => {
    const [formInputValues, setFormInputValues] = useState({text: '', rating: ''});
    const [formSubmitSuccess, setFormSubmitSuccess] = useState();
    const [ picture, setPicture ] = useState([]);

    const handleNameInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    };
    
    const onDrop = (picture) => {

    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()

        console.log("clicked", formInputValues)
        // fetch('http://www.eatanywhere.test:8080/dishes')
        // .then (() => {
        //     setFormSubmitSuccess(true)
        // })
        // .catch((e) => {
        //     setFormSubmitSuccess(false)
        // })
    } 

   return (
       <form style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}>
           <label htmlFor="rating">Rate the dish out of 5!</label>
           <input
            id="rating"
            name="rating"
            type="number"
            placeholder = "Rating"
            value={formInputValues.rating}
            style={{width: '250px', marginBottom: '1rem'}}
            onChange = {handleNameInputChange}
           />
           <label htmlFor="review">Tell us your thoughts:</label>
           <input
            id="review"
            type="textarea"
            name="review"
            value = {formInputValues.text}
            placeholder = "Review"
            style={{width: '250px', height: '100px', marginBottom: '1rem'}}
            onChange = {handleNameInputChange}
           />
           <p style={{marginBottom: '0'}}>Upload an image of your meal:</p>
           <ImageUploader
                withIcon={true}
                buttonText='Choose an image!'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
               <Button onClick={handleSubmitButtonClick} style={{ width: '250px'}}>
                   Submit
                </Button>
           </div>
       </form>
   )
};

export default ReviewForm;
